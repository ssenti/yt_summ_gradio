export interface SummaryRequest {
  youtube_url: string;
  api_key: string;
  output_language: string;
  summary_type: 'short' | 'detailed' | 'custom';
  custom_prompt?: string;
}

export interface TokenInfo {
  total: number;
  prompt: number;
  completion: number;
}

export interface SummaryResponse {
  success: boolean;
  summary: string;
  additional_info?: string;
  model: string;
  tokens: TokenInfo;
}

export interface ErrorResponse {
  detail: string;
}

export interface LanguageMapping {
  [key: string]: string;
} 