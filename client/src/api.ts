const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export interface Category {
  id: number;
  name: string;
}

export interface SystemStatus {
  online: boolean;
  categories: Category[];
}


export async function checkSystem(): Promise<SystemStatus> {
  // Issue 2: call the health endpoint
  const healthRes = await fetch(`${API_URL}/api/health`);
  if (!healthRes.ok) throw new Error("Backend is not responding");

  // TODO(Issue 4): fetch `${API_URL}/api/categories`, throw if !ok, 
  // return the real list below instead of the empty placeholder.

  return { online: true, categories: [] };
}
