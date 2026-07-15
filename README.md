# Oguzhan Dogru — Digital vCard (Render version)

This version uses a small Express server so it can run on Render's free
Web Service tier.

## Structure
```
oguzhan-vcard-render/
├── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── photo.jpg
├── server.js       <- Express server: serves site + hidden /api/vcard
├── package.json
```

## Before deploying
1. Edit `server.js`: fix the `linkedin` URL (phone/email already filled).
2. Edit `public/index.html`: fix the visible LinkedIn button URL.

## Deploy steps (Render)
1. Push this folder to a new GitHub repository.
2. Go to https://dashboard.render.com → New → Web Service.
3. Connect your GitHub repo.
4. Settings:
   - Environment: Node
   - Build Command: npm install
   - Start Command: npm start
   - Instance Type: Free
5. Click "Create Web Service." Render builds and deploys automatically.
6. You'll get a URL like `https://oguzhan-vcard.onrender.com`.
7. Test on iPhone and Android: open the link (note: if the service was
   asleep, first load may take 30-60 seconds), tap Save Contact, confirm
   the .vcf downloads with all fields populated correctly.
8. Generate a QR code pointing to this URL, and program your NFC card
   with the same URL.

## Cold start note
Render's free tier spins the server down after 15 minutes of no traffic.
The first visitor after that idle period will see a loading delay of
roughly 30-60 seconds before the page appears. This does not affect
saved contacts or already-loaded pages, only the very first request
after inactivity. If this matters for your events, consider:
- A free "keep-alive" ping service that pings your URL every few minutes.
- Or switching to the Cloudflare Workers version instead (instant load,
  no cold starts, same features) — see the other project package.
