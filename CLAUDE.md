# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Top-Level Rules

- To maximize efficiency, **if you need to execute multiple independent processes, invoke those tools concurrently, not sequentially**.
- **You must think exclusively in English**. However, you are required to **respond in Japanese**.
- To understand how to use a library, **always use the Contex7 MCP** to retrieve the latest information.
- For temporary notes for design, create a markdown in `.tmp` and save it.
- **After using Write or Edit tools, ALWAYS verify the actual file contents using the Read tool**, regardless of what the system-reminder says. The system-reminder may incorrectly show "(no content)" even when the file has been successfully written.
- Please respond critically and without pandering to my opinions, but please don't be forceful in your criticism.

## Project Overview

This is a static website for the "Work Story Award" (働き方ストーリーアワード) by at Will Work, showcasing award stories from 2017-2021. The site is hosted at award.atwill.work and built with HTML and SCSS compiled to CSS, with JavaScript functionality.

## Work History & Session Management
- **IMPORTANT**: At the START of every Claude Code session, read and review the `WORK_HISTORY.md` file to understand the current project state and previous work done.
- **ALWAYS maintain and update the WORK_HISTORY.md file** at the end of significant work sessions or before ending a session.
- Record key decisions, completed tasks, current issues, and next steps in WORK_HISTORY.md to enable seamless work continuation.
- Use the Todo system proactively to track ongoing work and provide clear handoffs between sessions.
- The WORK_HISTORY.md file is local-only (added to .gitignore) to avoid cluttering the repository.

## Project Structure

- **Root directory**: Contains main `index.html` for the 2021 award site
- **Year-based directories**: 
  - `2017/`, `2018/`, `2019/`, `2020/` - Archive pages for each year
  - `stories2017/`, `stories2018/`, `stories2019/`, `stories2020/`, `stories2021/` - Individual story pages for each year
- **Asset directories**:
  - `assets/` - CSS, JavaScript, and image files
  - `assets_c/` - Additional assets (compiled/cached)
  - `uploads/` - User-uploaded content
- **Special pages**:
  - `livevideo/` - Live video related content
  - `lp2018/`, `lp2019/` - Landing pages for specific years
  - `storysearch/` - Story search functionality

## Architecture

### Frontend Framework
- **Build system**: SCSS compilation to CSS using Sass, with npm scripts for automation
- **CSS Framework**: UIKit v3.x for responsive layout and components
- **SCSS Architecture**: Organized in `src/scss/` with modular structure:
  - `award2020.scss` - Main SCSS entry point
  - `foundation/` - Base styles, mixins, and variables
  - `layout/` - Header, footer, and main layout components
  - `object/component/` - Reusable UI components
- **JavaScript**: jQuery-based with custom scripts for:
  - Smooth scrolling navigation (`assets/js/common.js`)
  - Story management and multi-field forms (`stories202*/user.js`)
  - Form validation (`assets/js/exchecker-ja.js`, `assets/js/exvalidation.min.js`)

### Key JavaScript Components
- **Common functionality**: `assets/js/common.js` - anchor link smooth scrolling
- **Story management**: `stories202*/user.js` - MT (Movable Type) multi-field configurations
- **Third-party libraries**:
  - UIKit for UI components
  - Swiper for carousels/sliders  
  - Smooth Scroll polyfills

### Content Management
- Built with **Movable Type** CMS (evidenced by MT multi-field configurations)
- Static site generation - no server-side processing required
- Story content managed through MT's multi-field plugin system

## Development Commands

### Setup
```bash
npm install    # Install dependencies
```

### Development
```bash
npm run dev           # Start development server with auto-recompile (port 3000)
npm run watch:css     # Watch SCSS files and auto-compile
npm run serve         # Start local server at http://localhost:3000
```

### Build
```bash
npm run build         # Build CSS from SCSS (compressed)
npm run build:css     # Same as above - compile SCSS to CSS
```

## Development Workflow

### Local Development
1. **Install dependencies**: `npm install`
2. **Start development**: `npm run dev` (starts both CSS watching and local server)
3. **Edit SCSS files**: Make changes in `src/scss/` directory
4. **Edit HTML/JS**: Direct editing of files in root and asset directories

### File Editing
- **SCSS files**: Edit files in `src/scss/` directory (auto-compiles to `assets/css/award2020.css`)
- **HTML files**: Direct editing of template files
- **JavaScript**: Modify files in `assets/js/` directory  
- **Content**: Story data likely managed through Movable Type admin interface

### Deployment
- GitHub Actions automatically builds CSS and deploys to GitHub Pages
- Push to `main` branch triggers automated deployment
- `CNAME` file configures custom domain at `award.atwill.work`
- Build artifact includes compiled CSS files

## Code Conventions

### SCSS/CSS
- **Source**: Edit SCSS files in `src/scss/` directory only
- **Output**: Compiled to `assets/css/award2020.css` (do not edit directly)
- Uses UIKit v3 as base framework
- Custom styles follow BEM-like methodology
- Responsive design with mobile-first approach
- Modular architecture with organized imports

### JavaScript  
- jQuery-based development
- 2-space indentation for all code
- Japanese comments and variable names common
- Event handling for smooth scroll navigation
- MT multi-field plugin integration for content management
- Follow established project conventions and use meaningful names

### HTML Structure
- Semantic HTML5 markup
- Comprehensive meta tags for SEO and social sharing
- Japanese language content (`lang="ja"`)
- Material Icons and Google Fonts integration

## Important Notes

- **Node.js tooling**: Uses npm for SCSS compilation and development server
- **Static hosting**: Designed for simple web server deployment
- **CMS integration**: Content managed through Movable Type, not direct file editing
- **Multi-year structure**: Each year has its own story collection and styling
- **SEO optimized**: Comprehensive meta tags and sitemap.xml included