# Portfolio Website (update in progress)

A modern, minimalist portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Design

**Color Scheme:**
- Primary: Deep Burgundy (`#800020`)
- Secondary: Midnight Black (`#1C1C1C`)
- Background: Dark (`#0a0a0a`)
- Text: White (`#ffffff`) and Gray (`#888888`)

**Fonts:**
- Headings: Montserrat (900 weight for titles)
- Body: Lexend Deca (300-500 weights)

## ✨ Features

- **Custom Animated Cursor** - Interactive cursor effect on desktop
- **Smooth Animations** - Framer Motion powered transitions
- **Project Carousel** - Navigate through projects with arrow controls
- **Responsive Design** - Optimized for all screen sizes
- **Dark Theme** - Burgundy and black color palette
- **Modern Typography** - Clean, professional fonts

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Google Fonts (Montserrat, Lexend Deca)

## 📁 Project Structure
```
Portfolio/
├── app/
│   ├── globals.css          # Global styles with burgundy theme
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Main page with navigation & sections
├── components/
│   ├── AnimatedCursor.tsx    # Custom cursor component
│   ├── Hero.tsx              # Hero section with intro
│   ├── Projects.tsx          # Project carousel component
│   ├── Skills.tsx            # Technical skills grid
│   └── Contact.tsx           # Contact information section
├── public/
│   └── pfp.jpg               # Profile image (optional)
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind with burgundy colors
└── postcss.config.js         # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/Sly-kitsune/Portfolio.git
   cd Portfolio
```

2. **Install dependencies**
```bash
   npm install
```

3. **Run development server**
```bash
   npm run dev
```

4. **Open browser**
```
   http://localhost:3000
```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel

This project is optimized for Vercel deployment:

1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Deploy with default settings
4. Build command: `npm run build`
5. Output directory: `.next`

**Live Site:** [https://portfolio-tawny-omega-xksme0quel.vercel.app](https://portfolio-tawny-omega-xksme0quel.vercel.app)

### Deploy to Netlify

1. Build the project: `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `.next` folder
4. Or connect via GitHub for auto-deployment

## 🎯 Customization

### Update Personal Information

Edit these files to customize content:

**`components/Hero.tsx`**
```typescript
// Line 13-15: Update name and description
<h1>Your Name</h1>
<p>Your bio and description...</p>

// Line 21-28: Update location and status
<div className="meta-value">Your City, Country</div>
<div className="meta-value">Open to Work</div>
```

**`components/Projects.tsx`**
```typescript
// Line 7-48: Update projects array with your projects
const projects = [
  {
    tags: ['Your', 'Tech', 'Stack'],
    title: 'Your Project',
    subtitle: 'Project Subtitle',
    description: 'Project description...',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    link: 'https://github.com/username/project',
    number: '01'
  },
  // Add more projects...
]
```

**`components/Skills.tsx`**
```typescript
// Line 5-22: Update skills categories and items
const skillCategories = [
  {
    title: 'Your Category',
    skills: ['Skill 1', 'Skill 2', 'Skill 3']
  },
  // Add more categories...
]
```

**`components/Contact.tsx`**
```typescript
// Line 16, 24, 32: Update contact information
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="https://github.com/yourusername">yourusername</a>
<a href="https://linkedin.com/in/yourprofile">Your Name</a>
```

**`app/page.tsx`**
```typescript
// Line 17: Update navigation logo
<div className="text-xl font-montserrat font-bold tracking-wider">YM</div>

// Line 35-36: Update footer
<p>© 2026 YOUR NAME</p>
<p>YOUR CITY, COUNTRY</p>
```

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  burgundy: '#800020',        // Change to your primary color
  'midnight-black': '#1C1C1C', // Change to your secondary color
},
```

### Add Profile Image

1. Add your image to `public/` folder (e.g., `public/profile.jpg`)
2. Uncomment in `components/Hero.tsx` (line 49):
```typescript
   <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded" />
```

## 🔧 Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.3.0",
    "typescript": "^5.2.0"
  }
}
```

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

Custom cursor is hidden on mobile devices for better UX.

## 🎨 Key Components

### AnimatedCursor
- Custom cursor with burgundy accent
- Grows on hover over interactive elements
- Hidden on mobile devices

### Hero
- Full-screen introduction section
- Grid layout with text and image
- Animated entrance with Framer Motion
- CTA buttons for navigation

### Projects
- Carousel-based project showcase
- Left/Right arrow navigation
- Animated transitions between projects
- Tag system for technologies
- Project counter (01/04 format)

### Skills
- 4-column grid layout (responsive)
- Categorized skill lists
- Hover effects on skill items

### Contact
- 3-column contact information grid
- Email, GitHub, LinkedIn links
- Hover effects with burgundy accent

## 📝 Recent Changes

**Color Scheme Update:**
- Changed from red/pink to burgundy (#800020) and midnight black (#1C1C1C)
- Updated all component hover states
- Adjusted text colors for better contrast

**Component Cleanup:**
- Removed duplicate files (Contact2.tsx, Hero2.tsx, Projects2.tsx)
- Removed unused Navigation.tsx and Strategy.tsx
- Consolidated all components to single versions

**Styling Improvements:**
- Enhanced cursor animation
- Improved responsive breakpoints
- Better typography scaling
- Smoother transitions

## 📄 License

This project is open source and available for personal use.

## 📧 Contact

- **Email:** [your.email@example.com](lerandomnomad@gmail.com)
- **GitHub:** [Sly-kitsune](https://github.com/Sly-kitsune)
- **LinkedIn:** [Your Profile]([https://linkedin.com/in/yourprofile](https://www.linkedin.com/in/yashitha-m-0320355b/))

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
