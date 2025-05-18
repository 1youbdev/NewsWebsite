<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cache;

class DictionaryController extends Controller
{
    protected $client;

    public function __construct()
    {
        $this->client = new Client([
            'timeout' => 10,
        ]);
    }

    /**
     * Get synonyms for a word
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSynonyms(Request $request)
    {
        try {
            $word = $request->input('word');

            if (empty($word)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No word provided'
                ], 400);
            }

            // Trim and lowercase the word
            $word = trim(strtolower($word));

            // Check cache first
            $cacheKey = "synonyms_{$word}";
            if (Cache::has($cacheKey)) {
                return response()->json([
                    'success' => true,
                    'word' => $word,
                    'synonyms' => Cache::get($cacheKey)
                ]);
            }

            // Using Merriam-Webster's Thesaurus API (you'll need to get an API key)
            // Alternatively, you can use other free APIs like WordsAPI, Datamuse, etc.
            // For this example, I'll use Datamuse which doesn't require authentication

            $response = $this->client->get("https://api.datamuse.com/words", [
                'query' => [
                    'rel_syn' => $word,
                    'max' => 10
                ]
            ]);

            $data = json_decode($response->getBody(), true);

            $synonyms = [];
            foreach ($data as $item) {
                if (isset($item['word'])) {
                    $synonyms[] = $item['word'];
                }
            }

            // Store in cache for 24 hours
            Cache::put($cacheKey, $synonyms, 60 * 60 * 24);

            return response()->json([
                'success' => true,
                'word' => $word,
                'synonyms' => $synonyms
            ]);
        } catch (GuzzleException $e) {
            Log::error("Dictionary API error: {$e->getMessage()}");

            return response()->json([
                'success' => false,
                'message' => 'Error fetching synonyms',
                'error' => $e->getMessage()
            ], 500);
        } catch (\Exception $e) {
            Log::error("Dictionary general error: {$e->getMessage()}");

            return response()->json([
                'success' => false,
                'message' => 'Something went wrong',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
