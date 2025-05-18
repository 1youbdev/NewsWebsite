<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Smalot\PdfParser\Parser;

class ArticleController extends Controller
{
    /**
     * Display a listing of the articles.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $articles = Article::with(['user', 'category'])->get();

        return response()->json([
            'success' => true,
            'data' => $articles
        ]);
    }

    /**
     * Store a newly created article in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'idUser' => 'required',
            'idCategory' => 'required|exists:categories,id',
            'title' => 'required|string|max:255',
            'content' => 'nullable|string', // Made content nullable as we'll extract from PDF if available
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'file' => 'nullable|file|mimes:pdf|max:10240', // Increased max size to 10MB
            'priority' => 'nullable|integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $data = $request->only(['idUser', 'idCategory', 'title', 'priority']);

        // Set content from request or leave empty if we'll extract from PDF
        $data['content'] = $request->input('content', '');

        // Handle image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('articles', 'public');
            $data['image'] = $imagePath;
        }

        // Handle PDF upload and content extraction
        if ($request->hasFile('file')) {
            $pdfFile = $request->file('file');
            $filePath = $pdfFile->store('files', 'public');
            $data['file'] = $filePath;

            // Extract text from PDF if content is empty
            if (empty($data['content'])) {
                try {
                    $pdfParser = new Parser();
                    $pdf = $pdfParser->parseFile(storage_path('app/public/' . $filePath));
                    $data['content'] = $pdf->getText();

                    // Trim and clean up the extracted text
                    $data['content'] = trim($data['content']);

                    // If content is still empty, add a placeholder
                    if (empty($data['content'])) {
                        $data['content'] = 'PDF content could not be extracted. Please view the attached PDF file.';
                    }
                } catch (\Exception $e) {
                    // Log error but continue
                    \Log::error('PDF parsing error: ' . $e->getMessage());
                    $data['content'] = 'PDF content could not be extracted. Please view the attached PDF file.';
                }
            }
        }

        $article = Article::create($data);

        return response()->json([
            'success' => true,
            'data' => $article,
            'message' => 'Article created successfully'
        ], 201);
    }

    /**
     * Display the specified article.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $article = Article::with(['user', 'category'])->find($id);

        if (!$article) {
            return response()->json([
                'success' => false,
                'message' => 'Article not found'
            ], 404);
        }

        // Format file and image URLs
        if ($article->file) {
            $article->file_url = Storage::url($article->file);
        }

        if ($article->image) {
            $article->image_url = Storage::url($article->image);
        }

        return response()->json([
            'success' => true,
            'data' => $article
        ]);
    }

    /**
     * Update the specified article in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $article = Article::find($id);

        if (!$article) {
            return response()->json([
                'success' => false,
                'message' => 'Article not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'idUser' => 'sometimes|exists:users,id',
            'idCategory' => 'sometimes|exists:categories,id',
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'file' => 'nullable|file|mimes:pdf|max:10240', // Increased max size to 10MB
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $data = $request->only(['idUser', 'idCategory', 'title', 'content']);

        // Handle image upload
        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($article->image) {
                Storage::disk('public')->delete($article->image);
            }

            $imagePath = $request->file('image')->store('articles', 'public');
            $data['image'] = $imagePath;
        }

        // Handle file upload
        if ($request->hasFile('file')) {
            // Delete old file if exists
            if ($article->file) {
                Storage::disk('public')->delete($article->file);
            }

            $pdfFile = $request->file('file');
            $filePath = $pdfFile->store('files', 'public');
            $data['file'] = $filePath;

            // Extract text from PDF if requested
            if ($request->input('extract_pdf_content', false)) {
                try {
                    $pdfParser = new Parser();
                    $pdf = $pdfParser->parseFile(storage_path('app/public/' . $filePath));
                    $data['content'] = $pdf->getText();

                    // Trim and clean up the extracted text
                    $data['content'] = trim($data['content']);

                    // If content is still empty, add a placeholder
                    if (empty($data['content'])) {
                        $data['content'] = 'PDF content could not be extracted. Please view the attached PDF file.';
                    }
                } catch (\Exception $e) {
                    // Log error but continue
                    \Log::error('PDF parsing error: ' . $e->getMessage());
                    $data['content'] = 'PDF content could not be extracted. Please view the attached PDF file.';
                }
            }
        }

        $article->update($data);

        return response()->json([
            'success' => true,
            'data' => $article,
            'message' => 'Article updated successfully'
        ]);
    }

    /**
     * Remove the specified article from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $article = Article::find($id);

        if (!$article) {
            return response()->json([
                'success' => false,
                'message' => 'Article not found'
            ], 404);
        }

        // Delete associated image if exists
        if ($article->image) {
            Storage::disk('public')->delete($article->image);
        }

        // Delete associated file if exists
        if ($article->file) {
            Storage::disk('public')->delete($article->file);
        }

        $article->delete();

        return response()->json([
            'success' => true,
            'message' => 'Article deleted successfully'
        ]);
    }
}
