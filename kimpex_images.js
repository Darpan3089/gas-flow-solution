const https = require('https');

https.get('https://www.kimpexflow.com/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    const urls = new Set();
    
    // Find img src=
    const imgRegex = /src=["']([^"']+\.(?:png|jpg|jpeg|webp))["']/gi;
    let match;
    while ((match = imgRegex.exec(data)) !== null) {
      urls.add(match[1]);
    }
    
    // Find style background-image
    const bgRegex = /url\(['"]?([^'"\)]+\.(?:png|jpg|jpeg|webp))['"]?\)/gi;
    while ((match = bgRegex.exec(data)) !== null) {
      urls.add(match[1]);
    }

    const unique = Array.from(urls).map(url => {
      if (url.startsWith('http')) return url;
      if (url.startsWith('//')) return 'https:' + url;
      if (url.startsWith('/')) return 'https://www.kimpexflow.com' + url;
      return 'https://www.kimpexflow.com/' + url;
    });
    
    console.log(unique.join('\n'));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
