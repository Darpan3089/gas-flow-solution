const https = require('https');

https.get('https://www.kimpexflow.com/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    const regex = /(?:src|href|url\()[\"'\s]?([^\"'\s)]+\.(?:jpg|jpeg|png|webp|gif|svg))/gi;
    const urls = new Set();
    let match;
    while ((match = regex.exec(data)) !== null) {
      let url = match[1];
      if (!url.startsWith('http')) {
        url = url.startsWith('/') ? `https://www.kimpexflow.com${url}` : `https://www.kimpexflow.com/${url}`;
      }
      urls.add(url);
    }
    console.log("Found images:");
    console.log(Array.from(urls).join('\n'));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
