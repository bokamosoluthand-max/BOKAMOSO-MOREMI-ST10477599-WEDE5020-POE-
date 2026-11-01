# Fresh Brew Cafe — Part 3: Functionality and SEO

## Student and module information
- **Student name:** Bokamoso Moremi
- **Student number:** ST10477599
- **Module:** WEDE5020 — Website Development (POE)
- **Website/project:** Fresh Brew Cafe
- **Repository:** https://github.com/bokamosoluthand-max/BOKAMOSO-MOREMI-ST10477599-WEDE5020-POE-

## Project overview
Fresh Brew Cafe is a multi-page website concept for a local cafe offering coffee, pastries, muffins, light meals and specials. The site is designed to help visitors explore the cafe, view its menu and gallery, make an enquiry, and contact the organisation.

## Pages and features
- `index.html` — home page and main calls to action.
- `about.html` — cafe mission, vision and target audience.
- `menu.html` — menu cards with live text search and category filtering.
- `specials.html` — current example promotions.
- `gallery.html` — image gallery with keyboard-accessible lightbox.
- `enquiry.html` — service/product/catering/volunteer/sponsorship enquiry form with JavaScript validation and an indicative response.
- `contact.html` — general contact/feedback form with HTML5 and JavaScript validation; prepares an email through the visitor's default mail application.
- `style.css` — shared styling, responsive layouts, interaction states and reduced-motion support.
- `script.js` — mobile navigation, menu filtering, image lightbox, form validation/response, FAQ accordion and reveal transitions.
- `robots.txt` and `sitemap.xml` — basic crawler guidance and sitemap.
- `images/` — local project image assets.

## Part 1 and Part 2
Part 1 established the concept, target audience, goals and planned structure. Part 2 created the individual HTML pages, external stylesheet, image assets, navigation, page layout and responsive styling. The lecturer's Part 2 feedback awarded strong marks for CSS styling, typography, colours and pseudo-classes. Areas identified for improvement included layout spacing, responsive navigation and image handling, number and quality of commits, README detail, changelog completeness and references. Part 3 builds on the existing design rather than replacing it.

## Part 3 functionality
1. Responsive mobile navigation toggle with `aria-expanded` and a navigation landmark.
2. Menu search and category filtering with a live result count.
3. Gallery lightbox with close, previous/next, Escape and arrow-key controls.
4. Enquiry form with required fields, input constraints, quantity and indicative pricing/next-step response.
5. General contact form with required fields, HTML5 validation, phone format validation, helpful feedback and a prepared `mailto:` email.
6. FAQ accordion buttons with expanded/collapsed state.
7. Subtle reveal transitions, keyboard focus styling and reduced-motion preference support.
8. Lazy loading for page images where supported by the browser.

## SEO implementation
- Page-specific title tags and meta descriptions.
- Relevant keywords and Open Graph metadata.
- Semantic page headings and descriptive image alt text.
- Internal links across the main pages, including the new Enquiry page.
- Mobile-responsive layout and image sizing.
- `robots.txt` and `sitemap.xml`.
- Local, descriptive file names and clean `.html` page names.
- Performance measures include native lazy loading, local assets, and no required external JavaScript libraries.

### Keyword research notes
The intended audience is local customers, students, families and working professionals looking for coffee, cafe food, pastries and specials. Target phrases include “fresh coffee Pretoria”, “cafe menu”, “coffee specials”, “cafe pastries”, “catering enquiry” and “Fresh Brew Cafe contact”. These are initial content-planning keywords and should be checked with a keyword research tool before a real commercial launch.

### Off-page SEO and local SEO plan
- Share the published website on the cafe's official social profiles.
- Ask relevant local community organisations and legitimate business directories to link to the website where appropriate.
- Add a verified business name, address, opening hours and telephone number only once genuine business details are confirmed.
- Do not purchase spam backlinks. The site currently uses sample contact details and should not be represented as a verified real business until these details are checked.

## Form and privacy limitations
This is a static website. The enquiry form calculates a local estimate in the browser and does not transmit or store the submission. The contact form validates and opens an email draft using `mailto:`; the visitor must send it manually, and behaviour depends on their device/email configuration. True AJAX form submission requires a backend or a form service (for example Netlify Forms or Formspree) and deployment configuration. Do not collect sensitive personal information in these forms.

## Deployment
The project can be deployed using GitHub Pages or Netlify. For GitHub Pages, push the project files to the repository, open **Settings → Pages**, select the branch and root folder, and save. After deployment, verify the published address, all navigation links, form behaviour and responsive layouts. Update the sitemap host URL if the actual deployed URL differs from the GitHub Pages address in `robots.txt` and `sitemap.xml`.

## Testing checklist
- [ ] Open every page and test every internal navigation/footer link.
- [ ] Test the menu search with matching and non-matching terms.
- [ ] Test category filters.
- [ ] Open gallery images; test close button, background click, Escape and arrow keys.
- [ ] Submit both forms empty and with invalid email/phone values.
- [ ] Test enquiry pricing for the three sample-priced options and next-step messages for catering/volunteer/sponsor.
- [ ] Test mobile navigation on narrow screens.
- [ ] Check at desktop, tablet and mobile widths.
- [ ] Check browser console for errors and check all images load.
- [ ] Confirm deployment URL before submitting.
- [ ] Add screenshots of desktop, tablet, mobile, menu search, lightbox and form validation.
- [ ] Commit and push changes with descriptive commit messages.

## Changelog

### Part 3 — 28 October 2026
- **SEO metadata:** Replaced the generic repeated page description with unique titles and meta descriptions for Home, About, Menu, Specials, Gallery, Contact and Enquiry pages. Added keyword, author, robots, theme-colour and Open Graph metadata.
- **Navigation and responsive usability:** Added an Enquiry link to the primary navigation and footer links. Added a JavaScript mobile menu toggle with accessible expanded state, and improved small-screen navigation layout to directly address Part 2 feedback that the responsive navigation was incomplete.
- **Menu interaction:** Added a search field, category dropdown and live result count to `menu.html`. Added category data attributes to menu cards and JavaScript filtering so visitors can search and filter items without reloading.
- **Gallery interaction:** Added a lightbox for gallery images. Visitors can enlarge images, move to previous/next images, close with a button or Escape, and navigate using arrow keys. Added keyboard activation and descriptive accessible labels.
- **Enquiry page:** Created `enquiry.html` to distinguish product/service enquiries from general contact. The form includes required name/email/enquiry fields, quantity/date inputs, length constraints, JavaScript validation and a response containing indicative prices or relevant next steps.
- **Contact form:** Updated `contact.html` for general questions, feedback and complaints. Added input constraints, required message type, phone validation, accessible status feedback and a prepared email using the existing contact email. The visitor must manually send the email in their email application.
- **Interactive FAQ and motion:** Added an accordion to the Enquiry page and subtle reveal transitions. Included keyboard focus styling and reduced-motion support for accessibility.
- **Image and speed improvements:** Added native lazy-loading attributes to page images and retained local image assets to reduce external dependencies. Added responsive image sizing.
- **Technical SEO:** Added `robots.txt` and `sitemap.xml` listing the website pages. The sitemap URL is based on the repository's likely GitHub Pages address and must be verified after publishing.
- **Documentation:** Rewrote this README to document the project, features, SEO, forms, limitations, testing, deployment and references.
- **Part 2 feedback addressed:** Prioritised the navigation responsiveness, layout behaviour, image handling, more detailed changelog and README, references, and a plan for descriptive commits. The CSS and overall visual design from Part 2 were retained and extended.

### Part 2 — summary of earlier work
- Created separate pages for Home, About, Menu, Specials, Gallery and Contact.
- Added a shared external stylesheet for typography, colours, layout, image display, cards, forms and responsive breakpoints.
- Added local image assets and navigation/footer links.
- Added initial contact form and project README.
- Preserved `part1-original.html` as a record of the original planning-stage implementation.

## References
- Google Search Central (n.d.) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 28 October 2026).
- Google Search Central (n.d.) *Build and submit a sitemap*. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (Accessed: 28 October 2026).
- MDN Web Docs (n.d.) *Constraint validation*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation (Accessed: 28 October 2026).
- MDN Web Docs (n.d.) *HTML forms*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms (Accessed: 28 October 2026).
- MDN Web Docs (n.d.) *Intersection Observer API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API (Accessed: 28 October 2026).
- MDN Web Docs (n.d.) *The dialog element* (accessibility and modal design concepts). Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog (Accessed: 28 October 2026).
- GitHub Docs (n.d.) *What is GitHub Pages?* Available at: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (Accessed: 28 October 2026).
- Netlify Docs (n.d.) *Deploy overview*. Available at: https://docs.netlify.com/site-deploys/overview/ (Accessed: 28 October 2026).
