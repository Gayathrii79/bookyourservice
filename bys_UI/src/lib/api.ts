/**
 * Thin API client for BookYourService backend.
 * All requests go through this module so the base URL is set in one place.
 */

const BASE_URL =
  (import.meta.env.VITE_API_URL as string | undefined) ||
  "http://localhost:5000";

export interface EnquiryPayload {
  name: string;
  phone: string;
  category: string;
  service: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: { field: string; message: string }[];
}

/**
 * Submit an enquiry to POST /api/enquiry.
 * Throws an Error with a user-friendly message on failure.
 */
export async function submitEnquiry(
  payload: EnquiryPayload
): Promise<ApiResponse> {
  const res = await fetch(`${BASE_URL}/api/enquiry`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const json: ApiResponse = await res.json();

  if (!res.ok || !json.success) {
    // Surface the first validation message when available
    const detail =
      json.errors?.[0]?.message || json.message || "Something went wrong.";
    throw new Error(detail);
  }

  return json;
}
