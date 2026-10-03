# Cookie Consent

## Project Overview

This project involves creating a **Cookie Consent Popup** using HTML, CSS, and JavaScript. The primary objective is to provide users with a clear notification about cookie usage and allow them to accept or close the notification.

The project focuses on building a simple, reusable frontend component while applying essential web development practices such as DOM manipulation, event handling, `localStorage`, responsive layout, accessibility attributes, favicon configuration, SEO meta tags, Open Graph integration, and custom asset management.

## Project Requirements

- **Cookie Consent Popup**
  Create a fixed popup that informs users about cookie usage.

- **Accept Cookies Button**
  Provide a button that allows users to accept the cookie notification.

- **Close Button**
  Provide a close button so users can dismiss the popup.

- **Persistent Consent**
  Store the accepted state using `localStorage` so the popup does not appear again after the user accepts cookies.

- **JavaScript Integration**
  Use JavaScript to handle popup interactions and manage the consent state.

- **Responsive Layout**
  Ensure the popup adapts to smaller screen sizes using CSS media queries.

- **Accessibility**
  Use semantic buttons, descriptive `alt` text, and an `aria-label` for the close button.

- **SEO Meta Tags**
  Include basic metadata such as description, keywords, and author.

- **Open Graph (OG) Tags**
  Include Open Graph metadata for optimized previews when sharing the page.

- **Favicon**
  Configure a favicon for browser recognition and branding.

- **Custom Assets**
  Use dedicated icon assets for the cookie and close button.

## Project Structure

- **Main Page (`index.html`)**
  Contains the cookie consent popup, metadata, favicon configuration, and references to the CSS and JavaScript files.

- **Stylesheet (`css/style.css`)**
  Contains the popup layout, colors, typography, responsive styling, hover states, and button interactions.

- **JavaScript (`js/script.js`)**
  Controls the popup visibility, handles Accept and Close actions, and stores the acceptance state using `localStorage`.

- **Icons (`assets/icons/`)**
  Contains the cookie and close-button image assets.

- **Project Preview (`assets/project-preview.png`)**
  Provides a visual preview of the completed project.

## Submission Checklist

- [x] Cookie consent popup implemented.
- [x] Accept Cookies button implemented.
- [x] Close button implemented.
- [x] `localStorage` used for persistent acceptance.
- [x] JavaScript integration implemented.
- [x] Responsive layout implemented.
- [x] Accessibility attributes included.
- [x] SEO meta tags included.
- [x] Open Graph tags included.
- [x] Favicon configured.
- [x] Custom icon assets included.
- [x] CSS hover and active states implemented.
- [x] Google Fonts integration included.

## How to Use

1. Clone or download this repository.

```bash
git clone <repository-url>
```

2. Navigate to the project folder.

```bash
cd cookie-consent
```

3. Open `index.html` in your browser.

4. Click **Accept Cookies** to hide the popup and save the consent state.

5. Click the **close button** to dismiss the popup without saving an accepted consent state.

6. To test the popup again after accepting cookies, clear the stored `cookiesAccepted` value from your browser's `localStorage`.

## Conclusion

This project provides practical experience in developing a cookie consent component with HTML, CSS, and JavaScript.

By completing this project, the developer practices important frontend concepts such as responsive layout, DOM manipulation, event handling, `localStorage`, accessibility attributes, asset management, SEO metadata, Open Graph integration, and interactive UI states.

The component can serve as a foundation for expanding into a more complete cookie-management interface with additional consent categories, privacy settings, and improved accessibility.

## Project Preview

<p align="center">
  <img src="/assets/project-preview.png" alt="Project Preview" width="800">
</p>

This repository contains frontend projects built following the [Roadmap.sh](https://roadmap.sh/projects/cookie-consent) frontend developer path.

---