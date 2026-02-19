
export type Language = 
  | 'Tamil' 
  | 'Spanish' 
  | 'English' 
  | 'French (Français)' 
  | 'German (Deutsch)' 
  | 'Russian' 
  | 'Mandarin' 
  | 'Japanese';

export const SUPPORTED_LANGUAGES: Language[] = [
  'English',
  'Tamil',
  'Spanish',
  'French (Français)',
  'German (Deutsch)',
  'Russian',
  'Mandarin',
  'Japanese'
];

export interface Suggestion {
  native_script: string;
  anglicised_script: string;
  english_intent: string;
}

export interface PredictionResponse {
  suggestions: Suggestion[];
}

export interface TranslationResult {
  native_script: string;
  anglicised_script: string;
  meaning: string;
  learning_note: string;
}

export interface TranslationResponse {
  translation: TranslationResult;
}
