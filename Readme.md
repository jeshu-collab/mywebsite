# jaswanth // stardance portfolio build

A simple, lightweight portfolio website I built for the Stardance tech event.

The main idea was to keep it minimal and fast, with a hacker-document kind of look. I wanted to avoid unnecessary libraries and have more control over the layout and animations.

## the build

I initially tried using a 3D particle setup, but it felt unnecessary for the site. So I removed it and rebuilt the background and animations using pure CSS and vanilla JavaScript.

This made the site much lighter and easier to manage.

## core features

- **pure css dot-grid:** a lightweight warm parchment-style dot-grid with a mouse-following spotlight effect.

- **clean landing page:** used CSS Grid to keep the main text properly centred across different screen sizes.

- **typography:** uses `ibm plex mono` from Google Fonts.

- **scroll animations:** used `IntersectionObserver` to smoothly reveal sections and project cards when they come into view.

## the stack

- **structure:** html5

- **styling:** pure css3, css grid, css variables, masks

- **logic:** vanilla javascript

## running locally

The project is completely self-contained.

No build tools, package managers, or local dependencies are needed. The pages load their font from Google Fonts.

1. Clone the repository.

2. Open `index.html` in any modern browser.

---

*engineered by jaswanth for the 2026 stardance event.*