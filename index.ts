import { serve } from "https://deno.land/std@0.157.0/http/server.ts";

const handler = async (request: Request): Promise<Response> => {
  const url = "https://pokeapi.co/api/v2/pokemon/pikachu/";
  const resp = await fetch(url, {
    headers: {
      accept: "application/json",
    },
  });

  return new Response(resp.body, {
    status: resp.status,
    headers: {
      "content-type": "application/json",
    },
  });
};

serve(handler);