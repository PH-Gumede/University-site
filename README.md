# Eduford University — Multi-Page Website

A five-page responsive university website built with vanilla HTML, CSS, and JavaScript, demonstrating multi-page site architecture, a mobile navigation pattern, and consistent component design across pages.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## Overview

This project is a fictional university website ("Eduford University") built to practice and demonstrate multi-page front-end architecture — the kind of layout and navigation challenge a single-page portfolio site doesn't cover.

- **What it does** — presents a Home, About, Courses, Blog, and Contact page with a shared header, footer, and mobile navigation, showcasing course offerings, global campuses, facilities, and student testimonials.
- **Who it's for** — reviewers assessing multi-page HTML/CSS structure, component reuse across pages, and mobile-responsive navigation patterns.
- **Why it exists** — as a practice project to move beyond single-page layouts and handle the real complications of a multi-page site: consistent navigation state, repeated header/footer markup, and a working (if front-end-only) contact form.
- **The problem it solves** — demonstrates that I can structure and style a full institutional-style website, not just a single landing page.

## Features

- 🧭 **Five-page site** — Home, About, Courses, Blog, and Contact, each sharing a consistent header and footer.
- 📱 **Mobile navigation** — a hamburger menu opens a full navigation overlay on smaller screens, with an overlay backdrop that closes the menu when tapped.
- ♿ **Accessible nav markup** — the navigation uses `aria-expanded`, `aria-hidden`, and `aria-controls` attributes that are correctly toggled by JavaScript as the menu opens and closes.
- 🖼️ **Content sections** — course offerings, a "Global Campus" showcase (London, New York, Washington), a facilities grid, and star-rated student testimonials.
- ⭐ **Rating display** — testimonials use Material Symbols icons (`star` / `star_half`) to render partial-star ratings.
- ✉️ **Contact form** — a structured contact form (name, email, subject, message) with HTML5 `required` attributes on every field.
- 📐 **Responsive layout** — a dedicated tablet/desktop breakpoint adjusts the layout for larger screens.

## Screenshots / Demo

No screenshots are currently included in this repository. See the **Assets Checklist** for what to add — at minimum, a screenshot of the homepage hero, the mobile navigation overlay open, and the testimonials/star-rating section, since ratings and the overlay menu are two of the more visually distinctive features here.

## Live Demo

🔗 **[edu-university.vercel.app](https://edu-university.vercel.app/)**

*(This link is referenced from the developer's own portfolio site as the deployed version of this project. Please verify it is still live before sharing it with recruiters.)*

## Tech Stack

| Category | Technology |
|---|---|
| **Structure** | HTML5 (5 pages: `index`, `about`, `courses`, `blog`, `contact`) |
| **Styling** | CSS3 — custom properties, Flexbox, CSS Grid, one responsive breakpoint |
| **Interactivity** | Vanilla JavaScript — mobile nav toggle |
| **Fonts & Icons** | Google Fonts (Poppins), Google Material Symbols, Font Awesome |
| **Build tooling** | None — plain static files |
| **Hosting** | Vercel |

## Project Structure

```
University-site/
├── index.html      # Homepage — hero, courses preview, campuses, facilities, testimonials
├── about.html       # About Us page
├── courses.html     # Courses Offered page
├── blog.html        # Blog / certificate programs page
├── contact.html      # Contact page with the enquiry form
├── script.js         # Mobile navigation open/close logic (shared across pages)
├── style.css          # All styling for every page
└── images/            # Campus, facility, banner, and testimonial imagery
```

Each HTML page repeats the same `<nav>`, overlay, and `<footer>` markup rather than pulling from a shared template or component system, since this is plain HTML/CSS/JS with no templating engine or build step.

## Installation

No build tools or dependencies are required.

```bash
git clone https://github.com/PH-Gumede/University-site.git
cd University-site

# Open any page directly
open index.html          # macOS
start index.html          # Windows
xdg-open index.html       # Linux
```

Or serve it locally so relative links between pages behave exactly as they would in production:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Usage

Navigate between pages using the top navigation bar (**Home / About / Course / Blog / Contact**). On a narrow viewport, tap the menu icon to open the full-screen navigation overlay; tap the close icon or the dimmed backdrop to dismiss it. The Contact page's form fields are marked as required by the browser, but note the form does not currently submit anywhere (see **Known Limitations** below).

## Key Technical Concepts

**Accessible mobile navigation state.** Rather than only toggling a CSS class, `script.js` keeps ARIA attributes in sync with the actual open/closed state of the menu:

```javascript
function openMenu(){
    nav.classList.add("open");
    overlay.classList.add("active");
    nav.setAttribute("aria-hidden", "false");
    openMenuBtn.setAttribute("aria-expanded", "true");
    closeMenuBtn.setAttribute("aria-expanded", "true");
}
```

This means screen readers and other assistive technology are told the menu is open at the same moment it becomes visually open — a detail that's easy to skip but matters for real accessibility, not just visual polish.

**Repeated-component consistency.** With no templating engine, every page hand-repeats the nav/footer markup. Keeping five separate copies of the same structure visually and functionally identical (same classes, same ARIA wiring, same footer content) is a deliberate discipline exercise, not an accident — and it's also exactly the kind of duplication a templating step would remove (see **Future Improvements**).

**Numeric star ratings from a single icon.** Testimonials render partial ratings by mixing two Material Symbols glyphs — `star` (filled, via a `.full` class) and `star_half` — rather than using an image sprite or icon font built specifically for ratings.

## Challenges & Solutions

- **Challenge:** building a mobile menu that's fully keyboard- and screen-reader-friendly, not just visually collapsible.
  **Solution:** every open/close action updates both the CSS state (`.open` / `.active` classes) and the corresponding ARIA attributes in the same function call, so the two never drift out of sync.

- **Challenge:** keeping five independent HTML pages visually consistent without a shared layout system.
  **Solution:** a single `style.css` file and a strict, repeated markup pattern for the nav/footer act as an informal "template," even without an actual templating tool.

## Known Limitations

In the interest of being upfront about the current state of the project:

- **The contact form doesn't submit anywhere.** The `<form>` element's `action` attribute is empty, so submitting it currently just reloads the page — there's no backend or form service (like Formspree) wired up yet.
- **All body copy is placeholder Lorem Ipsum text.** Every page — including course descriptions, campus blurbs, facility details, and testimonial quotes — uses generated filler text rather than real content. This is the single highest-priority item to fix before sharing this site with recruiters, since Lorem Ipsum left in a "finished" project reads as unfinished.
- **The footer includes an unmodified `Website by Televy©` credit line.** This appears to be carried over from a design reference or tutorial used while building the site. If this project followed a specific tutorial or template, that source should be properly credited in this README's **Credits** section; if not, this line should be replaced with your own name/details.
- **Only one responsive breakpoint** (768px) is defined, so layout behavior between a small phone and a large tablet is not finely tuned.
- All social media icons in the footer link to `href=""` (empty), so they currently do nothing when clicked.

## Future Improvements

- Replace all Lorem Ipsum copy with real, written content for Eduford University (or reframe it clearly as a design template, if that's the intent).
- Wire the contact form up to a real backend or a form service like Formspree, Netlify Forms, or a simple serverless function, and add client-side validation feedback (not just `required` attributes).
- Verify and properly resolve the "Televy" footer attribution — either credit the original source explicitly or remove it.
- Add a second, finer-grained breakpoint (e.g., 480px) for small phones.
- Extract the repeated nav/footer markup into a static-site-generator include (e.g., 11ty, Astro) to remove duplication across the five pages.
- Fill in real social media links in the footer.

## Skills Demonstrated

- Multi-page site architecture & navigation state management
- Responsive Web Design
- Accessible UI patterns (ARIA attributes, keyboard-friendly overlays)
- DOM Manipulation
- CSS Flexbox & Grid layout
- Cross-page component consistency without a build tool
- Git & GitHub-based project delivery

## Credits

- Fonts via [Google Fonts](https://fonts.google.com/) (Poppins) and [Google Material Symbols](https://fonts.google.com/icons).
- Icons via [Font Awesome](https://fontawesome.com/).
- Logo/favicon hosted via [Cloudinary](https://cloudinary.com/).
- The footer's "Website by Televy©" credit suggests this project may be based on, or was built while following, a design reference or tutorial — please confirm the original source and credit it explicitly here.

## License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2026 Philasande Gumede

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
