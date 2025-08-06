# Ada Rodriguez - Professional Counselor Website

A responsive, bilingual website for Ada Rodriguez, a licensed professional counselor with 20+ years of experience.

## Features

- **Bilingual Support**: Toggle between English and Spanish
- **Responsive Design**: Optimized for desktop and mobile
- **Interactive Elements**: Accordion sections, smooth animations
- **Professional Portfolio**: Experience showcase with detailed descriptions
- **Contact Integration**: Direct email, phone, and LinkedIn links

## Technology Stack

- Next.js 15 with TypeScript
- Tailwind CSS for styling
- React Context for language management
- Static export for GitHub Pages

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions:

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Set Source to "GitHub Actions"
4. The workflow will automatically deploy on pushes to main branch

### Manual Deployment:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Project Structure

- `/src/components/` - React components (Navigation, Header, About, Experience, Footer)
- `/src/contexts/` - Language context and translations
- `/public/` - Static assets (images, fonts, SVG icons)
- `/.github/workflows/` - GitHub Actions deployment workflow

## Languages Supported

- English (default)
- Spanish (Español)

All content is professionally translated and culturally appropriate for bilingual counseling services.