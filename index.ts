const handler = (req: Request): Response => {
  return new Response("Hello, World!", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
};

const server = Deno.listen({ port: 8080 });
console.log("Listening on http://localhost:8080/");

for await (const conn of server) {
  (async () => {
    const httpConn = Deno.upgradeWebSocket(conn);
    const response = handler(httpConn);
    await Deno.writeAll(conn, new TextEncoder().encode(await response.text()));
    conn.close();
  })();
}
