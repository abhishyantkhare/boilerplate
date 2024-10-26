import { useAuth } from '@clerk/nextjs';

export async function authenticatedFetch(url: string, options: RequestInit = {}) {
  const { getToken } = useAuth();
  const token = await getToken();

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
