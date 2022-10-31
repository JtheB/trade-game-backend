const { readFileSync } = require('fs');

export const main = async (event) => {

  if (event.path === '/openapi.json') {
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json'
      },
      body: readFileSync('./etc/openapi.json')
    }
  }

  const body = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>OpenAPI Spec</title>
            <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@3/swagger-ui.css">
        </head>
        <body>
            <div id="swagger"></div>
            <script src="https://unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js"></script>
            <script>
              SwaggerUIBundle({
                dom_id: '#swagger',
                url: 'https://petstore3.swagger.io/api/v3/openapi.json'
            });
            </script>
        </body>
        </html>`;

  return {
    statusCode: 200,
    headers: {
      ['Content-Type']: 'text/html',
    },
    body
  };
};
