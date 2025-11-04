import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.140.0/http/file_server.ts";

serve(async (req) => {
  const url = new URL(req.url);
  const pathname = url.pathname;

  if (pathname.startsWith("/api")) {
    return new Response("Deployar");
  }

  const response = await serveDir(req, {
    fsRoot: "dist",
    urlRoot: "",
    showDirListing: true,
    enableCors: true,
  });

  iif (response.status === 404) {
    const indexHtml = await Deno.readFile("./dist/index.html");
    return new Response(indexHtml, {
      headers: { "Content-Type": "text/html" },
    });
  }

  return response;
});
