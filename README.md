# Milena Perez-Gerus: Personal Homepage

A minimalist, book-style personal homepage for Milena Perez-Gerus, a data scientist and remote sensing researcher.

**Live site:** https://mimiperezg.github.io/homepageMilenaPerezGerus/

![Screenshot of the homepage](images/screenshot.png)

## Project Objective

Build a personal homepage with vanilla HTML5, CSS3, and ES6+ JavaScript that introduces who I am, what I have worked on, and what I care about outside of work. The site has three pages:

- **About** (`index.html`): bio, links, experience, and education
- **Projects** (`projects.html`): research and coursework in remote sensing and machine learning (AI-generated page)
- **Personal** (`personal.html`): a photo gallery with field notes

## Creative Addition

**Photo field notes.** On the personal page, clicking a photo reveals a caption over it with the date and my field notes on the setting. Clicking again hides it. Each photo is a `<button>`.

## Original JavaScript Features

All JavaScript lives in `js/main.js`.

- **Live clock:** the header shows the current date and time in Boston (24-hour format), updated every second with `setInterval`.
- **Click-to-reveal captions:** clicking a photo toggles its caption using the `hidden` attribute.

## Tech Requirements

- HTML5, CSS3, and vanilla JavaScript (ES6 modules)
- [Bootstrap 5.3](https://getbootstrap.com/) via CDN (grid, flexbox, and utility classes)
- [Node.js](https://nodejs.org/) and npm (only for development tools)
- ESLint (class config) and Prettier

## How to Install and Use

1. Clone the repository:

```bash
   git clone https://github.com/mimiperezg/homepageMilenaPerezGerus.git
   cd homepageMilenaPerezGerus
```

2. Install the development tools:

```bash
   npm install
```

3. Open `index.html` with a local server, such as the VS Code **Live Server** extension. A server is required because the JavaScript is loaded as an ES6 module.
4. Format and lint the code:

```bash
   npm run format
   npm run lint
```

## Video Demonstration

[Video demo link: coming soon]

## Author

**Milena Perez-Gerus**: [Homepage](https://mimiperezg.github.io/homepageMilenaPerezGerus/) · [GitHub](https://github.com/mimiperezg)

## Class

Created for [CS 5610 Web Development](https://johnguerra.co/classes/webDevelopment_online_fall_2026/) at Northeastern University, taught by John Alexis Guerra Gómez.
