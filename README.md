# SIP Consultancy Website

A modern, responsive website for Somali Insight Consultancy (SIP) - a multi-disciplinary consulting firm specializing in environmental management, social development, and sustainable solutions in Somalia.

## 🌟 Features

### Core Functionality
- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Dark Mode Support**: Complete dark mode implementation with smooth theme switching
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **SEO Optimized**: Semantic HTML structure and meta tags for better search engine visibility

### Pages & Sections
- **Home**: Hero section, service previews, team highlights, and call-to-action
- **About**: Company history, mission/vision, core values, capabilities, and approach
- **Services**: Detailed service categories (Environmental, Social & Community, Research & Development)
- **Projects**: Portfolio of completed projects with client information and project values
- **Team**: Professional team member profiles with expertise areas
- **Resources**: Policy documents, research reports, and downloadable tools
- **Contact**: Contact form, company details, and office information

### Technical Features
- **React Router**: Client-side routing for smooth navigation
- **Context API**: Dark mode state management
- **Component Architecture**: Modular, reusable components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Beautiful, customizable icons
- **Form Handling**: Contact form with validation

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sip-consultancy-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Package Manager**: npm
- **Development**: ESLint for code linting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header with dark mode toggle
│   ├── Footer.jsx      # Site footer with links and contact info
│   ├── Hero.jsx        # Hero section component
│   ├── Team.jsx        # Team member display component
│   └── ...
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About us page
│   ├── Services.jsx    # Services overview page
│   ├── Projects.jsx    # Projects portfolio page
│   ├── Teams.jsx       # Team members page
│   ├── Resources.jsx   # Resources and publications page
│   └── Contact.jsx     # Contact form page
├── contexts/           # React contexts
│   └── DarkModeContext.jsx  # Dark mode state management
├── assets/             # Static assets
│   ├── images.js       # Image imports
│   └── ...
├── App.jsx             # Main app component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary**: Sky blue (#0ea5e9) - Used for buttons, links, and accents
- **Secondary**: Slate gray (#64748b) - Used for text and subtle elements
- **Success**: Emerald green - Used for positive indicators
- **Background**: White/Light gray for light mode, Dark slate for dark mode

### Typography
- **Headings**: Bold, clear hierarchy from h1 to h6
- **Body Text**: Readable font sizes with proper line spacing
- **Responsive**: Font sizes adapt to screen size

### Dark Mode
- **Toggle**: Accessible dark mode toggle in the header
- **Persistence**: User preference saved in localStorage
- **Smooth Transitions**: All elements transition smoothly between modes
- **Consistent**: All pages and components support dark mode

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary to Somali Insight Consultancy (SIP).

## 🤝 Contributing

This is a private project. For any updates or modifications, please contact the development team.

## 📞 Contact

**Somali Insight Consultancy (SIP)**
- Email: info@sipconsultancy.so
- Phone: +252 61 000 0000
- Office: Mogadishu, Somalia
- Hours: Sunday–Thursday: 9:00–17:00

---

Built with ❤️ for sustainable development in Somalia