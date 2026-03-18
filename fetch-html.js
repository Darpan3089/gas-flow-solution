const https = require('https');
const fs = require('fs');

https.get('https://www.kimpexflow.com/product-list.php', (res) => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    fs.writeFileSync('kimpex_products.html', body);
    console.log("Written to kimpex_products.html");
  });
});
