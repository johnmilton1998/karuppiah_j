# J. Karuppiah — Dynamic Academic Portfolio

A responsive academic/research portfolio built with **HTML, CSS and vanilla JavaScript only**.

## Files
- `index.html` — page structure and sections
- `style.css` — responsive styling, themes, animations and print layout
- `script.js` — portfolio data, publication search/filter, animated counters, navigation and interactions

## Run locally
1. Extract the ZIP file.
2. Open the `karuppiah_dynamic_portfolio` folder.
3. Double-click `index.html` to open it in your browser.

No Node.js, build tools, framework or backend is required. An internet connection is only needed to load the optional Google Fonts. The page still works with fallback fonts offline.

## Update content
Open `script.js` and edit the `portfolioData` object:
- `research`
- `education`
- `experience`
- `publications`
- `conferences`
- `instruments`
- `software`

Set `CONTACT_EMAIL` near the top of `script.js` to the correct verified email address.

## Notes before publishing
- The email field in the supplied CV text was not available, so the site intentionally shows a placeholder until you add the verified address.
- The supplied CV lists 22 numbered journal papers. The site includes those 22 entries. There are also four additional research items described as publications/communicated works in the CV; they are not counted as confirmed published journal papers here.
- Check bibliographic details, journal names, page ranges and DOI data against the original publications before publishing.
- The Print / Save profile as PDF button uses the browser's print dialog.
- This is a static front-end site. If you want a secure admin panel that edits content across devices, it will need a backend or hosted database; browser-only storage would be local to one browser.
