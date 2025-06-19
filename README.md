# Nikhil Jain - Portfolio Website

A futuristic, interactive portfolio website showcasing Flutter, ML, and C++ projects with modern animations and GitHub integration.

## Features

- **Animated Hero Section**: Floating elements and gradient backgrounds
- **Interactive Project Cards**: Tech-filtered project showcase
- **Project Lab**: Technology-specific interactive demos
- **Dual Resume System**: Downloadable Core and ML resume versions
- **Contact Form**: Integrated contact system with social links
- **Dark/Light Theme**: Toggle between themes
- **Custom Effects**: Glassmorphism, custom cursor, and smooth animations

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express
- **Build Tool**: Vite
- **UI Components**: Shadcn/ui
- **Styling**: Tailwind CSS with custom animations

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5000`

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── data/           # Static data and configurations
│   │   └── lib/            # Utility functions
│   └── public/             # Static assets
├── server/                 # Backend Express server
├── shared/                 # Shared types and schemas
└── components.json         # Shadcn/ui configuration
```

## Key Components

- **Hero**: Animated landing section with floating elements
- **Navigation**: Sticky navigation with smooth scrolling
- **ProjectCard**: Interactive project showcase cards
- **ProjectLab**: Technology-filtered interactive demos
- **Resume**: Dual resume download system
- **Contact**: Contact form with social media integration
- **ThemeProvider**: Dark/light theme management
- **CustomCursor**: Custom animated cursor

## Customization

### Adding New Projects

Edit `client/src/data/projects.ts` to add new projects:

```typescript
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Project description',
  image: 'image-url',
  technologies: ['Tech1', 'Tech2'],
  techColors: {
    'Tech1': 'bg-blue-500/20 text-blue-300'
  },
  githubUrl: 'github-url',
  type: 'flutter' | 'cpp' | 'web' | 'ml'
}
```

### Styling

The project uses Tailwind CSS with custom utility classes:
- `.glass-effect`: Glassmorphism effect
- `.gradient-bg`: Gradient background
- `.gradient-text`: Gradient text effect

### Theme Colors

Modify theme colors in `client/src/index.css` under the `:root` and `.dark` selectors.

## Deployment

The project is ready for deployment on platforms like Vercel, Netlify, or any Node.js hosting service.

For production build:
```bash
npm run build
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Nikhil Jain - 1008nikhiljain@gmail.com