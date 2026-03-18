const https = require('https');

https.get('https://www.kimpexflow.com/product-list.php', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    // We want to find product cards. Typically they look like:
    // <img src="img/product1.jpg"> <h3>Domestic Gas Meters</h3>
    
    // Let's just print all img src logic AND some surrounding text to map them.
    // Actually, just finding all <h3> or <h4> tags and img tags inside the main container.
    // Let's use regex to grab something like <div class="product-item">... <img src="..."> ... <h3>Title</h3> </div>
    // Since we don't know the exact class, let's extract all <img> tags and typical headings.
    
    const blockRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>[\s\S]{0,200}?(<h[2-4][^>]*>([^<]+)<\/h[2-4]>|<a[^>]*>([^<]+)<\/a>)/gi;
    const results = [];
    let match;
    while ((match = blockRegex.exec(data)) !== null) {
      const src = match[1];
      const title = (match[3] || match[4]).trim();
      results.push({src, title});
    }
    
    console.log(JSON.stringify(results, null, 2));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
