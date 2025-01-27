# Vite + Tailwind CSS 4.0 Setup Guide

This guide walks you through setting up a vanilla JavaScript project with Vite and integrating Tailwind CSS 4.0.

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- Basic knowledge of npm and JavaScript.

---

## Steps to Set Up

### 1. Initialize a New Vite Project
Run the following commands to create a new Vite project:
```bash
npm create vite@latest my-project
cd my-project
```
Replace `my-project` with your desired project name.

---

### 2. Install Tailwind CSS
Run the following command to install Tailwind CSS and its Vite plugin:
```bash
npm install tailwindcss @tailwindcss/vite
```

---

### 3. Create `vite.config.js`
Manually create a `vite.config.js` file in the root of your project and add the following configuration:
```javascript
// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
});
```

---

### 4. Configure Tailwind CSS
In your project, create a CSS file named `styles.css` in the `src` directory. Add the following content:
```css
@import "tailwindcss";
```

---

### 5. Import CSS File
In your main JavaScript file (e.g., `main.js`), import the `styles.css` file:
```javascript
import './styles.css';
```

---

### 6. Start the Development Server
Run the following command to start the development server:
```bash
npm run dev
```
The Vite development server will start, and Tailwind CSS will be ready to use in your project.

---

## Additional Information

### Tailwind CSS v4.0 Features
- No default `tailwind.config.js` is needed for basic setups.
- Customizations can be added using directives like `@theme` and `@plugin` directly in your CSS file.

For more details, visit the [Tailwind CSS Documentation](https://tailwindcss.com/).

---

## Author
Project setup guide by @DevMosaddiq.
