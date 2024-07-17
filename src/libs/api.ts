import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

export async function getBlogList() {
  const data = await client.get({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "blogs",
  });
  return data;
}
