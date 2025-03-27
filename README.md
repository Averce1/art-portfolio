# Art Portfolio Website

A modern portfolio website built with Next.js and Tailwind CSS to showcase art and photography work.

## Features

- Responsive design
- Modern UI with smooth transitions
- Separate galleries for art and photography
- Image optimization with Next.js Image component
- TypeScript support
- Tailwind CSS for styling

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/art-portfolio.git
cd art-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Contains all the pages and components
- `/public` - Static assets like images
- `/app/globals.css` - Global styles
- `/app/layout.tsx` - Root layout component
- `/app/page.tsx` - Home page
- `/app/art/page.tsx` - Art gallery page
- `/app/photography/page.tsx` - Photography gallery page

## Adding Your Content

1. Add your images to the `/public` directory
2. Update the image paths in the respective pages
3. Customize the content in each page component
4. Update the metadata in `layout.tsx`

## Deployment

This project is configured for deployment on Vercel. Simply push your changes to GitHub and connect your repository to Vercel for automatic deployments.

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- ESLint 