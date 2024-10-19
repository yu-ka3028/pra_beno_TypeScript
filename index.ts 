const server = Deno.listen({ port: 8080 });
console.log("Listening on http://localhost:8080/");

for await (const conn of server) {
  (async () => {
    const body = `
      <!DOCTYPE html>
      <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <title>Hello</title>
      </head>
      <body>
        <h1>HELLO</h1>
      </body>
      </html>
    `;

    await Deno.stdout.write(new TextEncoder().encode("HTTP/1.1 200 OK\r\n"));
    await Deno.stdout.write(new TextEncoder().encode(`Content-Length: ${body.length}\r\n`));
    await Deno.stdout.write(new TextEncoder().encode(`Content-Type: text/html\r\n\r\n`));
    await Deno.stdout.write(new TextEncoder().encode(body));
    
    conn.close();
  })();
}
