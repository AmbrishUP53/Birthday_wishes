# Birthday Surprise Website 💗

A romantic, responsive, static birthday website made with HTML, CSS, and vanilla JavaScript. No backend or database required.

## Features
- Dark purple, pink, and red romantic theme
- Continuous falling heart emojis
- Moving Hindi shayari panel (vertical on desktop, horizontal on mobile)
- Welcome surprise and birthday scene
- Animated cake and candle-blowing interaction
- English quote API with offline fallback and curated Hindi shayari
- Large “HAPPY BIRTHDAY KNIKAA” popup when the birthday-wish button is clicked
- Openable secret love letter
- Optional background music toggle
- Responsive layout and reduced-motion accessibility support

## Run locally
1. Extract the ZIP.
2. Open the `birthday-surprise` folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension for a local preview.

This project uses no build tools and no server-side code.

## Personalize before sharing
- **Name:** the birthday name is set to `Knikaa` in `index.html`; update it there if needed.
- **Quotes:** English quotes are fetched from the free DummyJSON quotes API when online; curated English/Hindi fallbacks are in `js/quotes.js`. Hindi shayari is stored locally in `index.html` because there is no dependable free no-key Hindi shayari API. Edit those paragraphs to personalize them.
- **Shayari:** edit the paragraphs inside `.shayari-track` in `index.html`.
- **Love letter:** edit the text inside `#letterPaper` in `index.html`.
- **Music:** place a music file you have permission to use at `assets/music/romantic.mp3`. If you use another filename, update the path in `js/music.js`.
- **Date/name:** update any wording in `index.html` to suit the recipient.

## Deploy free with GitHub Pages
1. Create a GitHub repository, for example `birthday-surprise`.
2. Upload the contents of this folder to the repository root (so `index.html` is at the root).
3. Open repository **Settings → Pages**.
4. Under build/deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for the published URL shown in Settings → Pages. Test the URL on a phone before sharing.

## Notes
- Background music is optional and intentionally does not autoplay. The visitor must tap the music button.
- Google Fonts require internet access; fallback fonts are included.
- The letter is a warm sample message. Personalize it so it reflects the sender's own words.
- No photos are included by default.
