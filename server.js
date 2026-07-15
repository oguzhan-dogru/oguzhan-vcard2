const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/vcard', (req, res) => {
  const name = "Oguzhan Dogru";
  const tagline = "Turning Process Control into Business Value";
  const phone = process.env.CONTACT_PHONE;
  const email = process.env.CONTACT_EMAIL;
  const linkedin = process.env.CONTACT_LINKEDIN;
  const city = "Calgary";
  const region = "AB";
  const country = "Canada";

  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Dogru;Oguzhan;;;",
    `FN:${name}`,
    `NOTE:${tagline}`,
    `TEL;TYPE=CELL:${phone}`,
    `EMAIL:${email}`,
    `ADR;TYPE=WORK:;;;${city};${region};;${country}`,
    `URL;TYPE=LinkedIn:${linkedin}`,
    "END:VCARD"
  ].join("\r\n");

  res.set({
    "Content-Type": "text/vcard; charset=utf-8",
    "Content-Disposition": 'attachment; filename="Oguzhan_Dogru.vcf"',
    "Cache-Control": "no-store"
  });
  res.send(vcard);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
