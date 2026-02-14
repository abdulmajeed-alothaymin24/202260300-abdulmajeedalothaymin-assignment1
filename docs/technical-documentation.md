# Technical Documentation

## 1. Project Overview

This project is a responsive personal portfolio web application built using HTML, CSS, and JavaScript.  
It serves as the foundation for a larger professional portfolio that will be expanded in future assignments.

The application focuses on:
- Clean structure
- Responsive layout
- Theme customization
- Organized file architecture

---

## 2. Project Structure

assignment-1/
├── index.html  
├── css/styles.css  
├── js/script.js  
├── assets/images/  
├── docs/  

The structure separates concerns clearly:
- HTML → content & structure
- CSS → styling & layout
- JavaScript → interactivity
- Docs → documentation & AI usage explanation

---

## 3. HTML Architecture

The HTML file is divided into semantic sections:

- Header (Navigation Bar)
- Hero Section
- About Section
- Skills Section
- Projects Section
- Contact Section
- Footer

Each section uses a `.container` class to maintain consistent width and alignment across the layout.

The project cards follow a reusable structure for consistency and readability.

---

## 4. CSS Design & Architecture

The CSS file is organized into logical sections:

1. Theme Tokens  
   CSS variables are used to define colors and reusable design values.
   This allows easy switching between light and dark mode.

2. Base Styles  
   Global resets and typography settings ensure consistent formatting.

3. Layout  
   Flexbox and CSS Grid are used to control alignment and structure.

4. Components  
   Styles for navbar, hero, buttons, project cards, and contact form.

5. Responsive Rules  
   Media queries adjust layout for screens under 900px.

---

## 5. UI Design Principles

### 60 / 30 / 10 Rule

The color system follows the 60/30/10 design principle:

- 60% → Background (main page color)
- 30% → Surface elements (cards, sections)
- 10% → Accent color (buttons, highlights)

This improves visual balance and consistency.

### Transparency & Depth

The navigation bar uses slight transparency and backdrop blur to create depth and modern UI appearance while keeping content readable.

---

## 6. JavaScript Logic

The JavaScript file implements a theme toggle system:

- Detects previously saved theme using `localStorage`
- Applies saved theme on page load
- Toggles `dark` class on the `<body>` element
- Saves updated theme preference

This ensures persistent theme preference across sessions.

Event handling is implemented using `addEventListener`, and the logic is kept minimal for clarity.

---

## 7. Responsive Design

Responsiveness was implemented using CSS Grid and Flexbox.

Adjustments include:
- Project cards switch from two-column layout to single column on smaller screens.
- Hero text size reduces on mobile devices.
- Layout spacing adapts for smaller viewports.

Testing was performed using:
- Chrome DevTools device toolbar
- Manual resizing
- Live Server in VS Code

---

## 8. Performance Considerations

- No external frameworks were used to keep the website lightweight.
- Minimal JavaScript ensures fast load time.
- CSS variables reduce redundancy and improve maintainability.

---

## 9. Known Limitations

- The contact form does not include backend processing.
- No advanced animations or frameworks are used.
- The portfolio content is currently static.

---

## 10. Future Improvements

- Add project filtering functionality.
- Implement simple animations.
- Deploy using GitHub Pages.
- Add backend functionality for the contact form.