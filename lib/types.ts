export interface Campaign {
  id: string;
  name: string;
  status: "active" | "paused" | "completed";
}

export interface ApiError {
  message: string;
  statusCode?: number;
}
