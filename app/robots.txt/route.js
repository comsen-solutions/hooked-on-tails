export const dynamic = 'force-static';

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://hookedontailsbowfishing.com/sitemap.xml
LLMs: https://hookedontailsbowfishing.com/llms.txt
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
