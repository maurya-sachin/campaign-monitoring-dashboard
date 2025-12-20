export interface Campaign {
  id: string;
  name: string;
  status: "active" | "paused" | "completed";
}

export interface ApiError {
  message: string;
  statusCode?: number;
}

export interface CampaignListResponse {
  campaigns: Campaign[];
}

export interface AggregatedInsights {
  total_campaigns: number;
  active_campaigns: number;
  paused_campaigns: number;
  completed_campaigns: number;
  total_impressions: number;
  total_clicks: number;
  total_spend: number;
}
