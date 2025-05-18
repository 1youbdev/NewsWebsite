<?php

namespace App\Services;

use Google\Cloud\Translate\V2\TranslateClient;

class TranslationService
{
    protected $translator;

    public function __construct()
    {
        $this->translator = new TranslateClient([
            'key' => env('GOOGLE_TRANSLATE_API_KEY')
        ]);
    }

    public function translate(string $text, string $targetLanguage): string
    {
        $result = $this->translator->translate($text, [
            'target' => $targetLanguage
        ]);
        
        return $result['text'];
    }
    
    public function getLayoutConfig(string $language): array
    {
        // Return layout configurations based on language
        $layouts = [
            'ar' => ['direction' => 'rtl', 'font' => 'Tahoma'],
            'ja' => ['direction' => 'ltr', 'font' => 'Meiryo'],
            // Add other language configurations
        ];
        
        return $layouts[$language] ?? ['direction' => 'ltr', 'font' => 'Arial'];
    }
}