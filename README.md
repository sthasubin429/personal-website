# Personal Portfolio Website

**Live Site:** [https://www.subinstha.com.np/](https://www.subinstha.com.np/)

## Tech Stack

- **Framework:** [Astro 5](https://astro.build/) - Static site generation
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Language:** TypeScript
- **Icons:** [Lucide Astro](https://lucide.dev/)
- **Deployment:** GitHub Pages

## Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Hero.astro
│   ├── About.astro
│   ├── FeaturedProjects.astro
│   ├── Experiences.astro
│   ├── Navbar/         # Navigation components
│   └── Shared/         # Reusable cards, links, pills
├── pages/              # Route pages
│   ├── index.astro     # Homepage
│   └── archive.astro   # Project archive
├── layouts/
│   └── Layout.astro    # Base layout with meta tags
├── styles/
│   └── global.css      # Global styles, animations, Tailwind config
├── utils/
│   ├── projects.ts     # Project data (featured & archive)
│   └── types.ts        # TypeScript type definitions
└── assets/             # Images and static files
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/sthasubin429/personal-website.git

# Navigate to project directory
cd personal-website

# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start dev server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions CI/CD pipeline.

### Automatic Deployment

The deployment workflow (`.github/workflows/deploy.yml`) is triggered on:
- Every push to the `master` branch
- Manual dispatch from the GitHub Actions tab

The pipeline:
1. Checks out the repository
2. Installs dependencies using pnpm
3. Builds the Astro site using Node.js 20
4. Deploys to GitHub Pages

### Manual Deployment (Alternative)

You can also deploy manually using:

```bash
npm run deploy
```

This uses the `gh-pages` package to build and deploy the `dist/` folder.

## Customization

### Adding Projects

Update project data in `src/utils/projects.ts`:
- `featuredProjects` - Homepage featured projects
- `archiveProjects` - Complete project list for archive page

### Styling

- Global styles and animations: `src/styles/global.css`
- Tailwind theme config defined using `@theme` directive
- Custom colors: teal accent (#0d9488 area), dark navy backgrounds

## Credits

### Design

Original design inspired by [Brittany Chiang](https://brittanychiang.com/)

### Images

Illustration by <a href="https://unsplash.com/@tomsdesign?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Toms Štāls</a> on <a href="https://unsplash.com/illustrations/a-group-of-people-working-on-a-large-screen-mEwYP78-Rfw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@fhavlik?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Filip</a> on <a href="https://unsplash.com/photos/black-and-white-candybar-phone-VHf4jqrUu7g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

## License

ISC
