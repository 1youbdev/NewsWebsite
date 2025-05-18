<?php

namespace App\Http\Controllers;

use App\Services\TranslationService;
use Illuminate\Http\Request;

class TranslationController extends Controller
{
    protected $translationService;

    public function __construct(TranslationService $translationService)
    {
        $this->translationService = $translationService;
    }

    public function translate(Request $request)
    {
        $text = $request->input('text');
        $targetLanguage = $request->input('targetLanguage');
        
        return response()->json([
            'translation' => $this->translationService->translate($text, $targetLanguage)
        ]);
    }

    public function getLayoutConfig(string $language)
    {
        return response()->json(
            $this->translationService->getLayoutConfig($language)
        );
    }
}