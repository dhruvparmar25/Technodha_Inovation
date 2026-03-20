// API base URL – set NEXT_PUBLIC_API_URL in .env.local
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

function errorMessage(res, data) {
  if (data?.error) return data.error;
  if (data?.message) return data.message;
  if (data?.detail) return typeof data.detail === "string" ? data.detail : JSON.stringify(data.detail);
  return `Request failed (${res.status})`;
}

async function request(endpoint, { method = "GET", body, headers = {} } = {}) {
  const res = await fetch(BASE_URL + endpoint, {
    method,
    headers: { "Content-Type": "application/json", ...headers },
    ...(body != null && { body: JSON.stringify(body) }),
  });

  const isJson = res.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await res.json().catch(() => ({})) : {};

  if (!res.ok) throw new Error(errorMessage(res, data));
  return data;
}

export function get(endpoint, options) {
  return request(endpoint, { ...options, method: "GET" });
}

export function post(endpoint, body, options) {
  return request(endpoint, { ...options, method: "POST", body });
}

export function put(endpoint, body, options) {
  return request(endpoint, { ...options, method: "PUT", body });
}

export function patch(endpoint, body, options) {
  return request(endpoint, { ...options, method: "PATCH", body });
}

export function del(endpoint, options) {
  return request(endpoint, { ...options, method: "DELETE" });
}

// Multipart form (e.g. file upload). Do not set Content-Type – browser sets boundary.
export async function postForm(endpoint, formData) {
  const url = BASE_URL + endpoint;
  const res = await fetch(url, { method: "POST", body: formData });
  const isJson = res.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await res.json().catch(() => ({})) : {};
  if (!res.ok) {
    const msg = data?.error ?? data?.message ?? (typeof data?.detail === "string" ? data.detail : data?.detail ? JSON.stringify(data.detail) : null) ?? `Request failed (${res.status})`;
    throw new Error(msg);
  }
  return data;
}
