import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DarkModeProvider } from './contexts/DarkModeContext.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Projects from './pages/Projects.jsx'
import Teams from './pages/Teams.jsx'
import Resources from './pages/Resources.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
        <div className="flex items-center justify-center bg-neutral-700 text-white h-screen text-4xl">
          Page not found
        </div>
      ),
    children: [
      {index: true, element: <Home />},
      {path: 'about', element: <About />},
      {path: 'services', element: <Services />},
      {path: 'projects', element: <Projects />},
      {path: 'team', element: <Teams />},
      {path: 'resources', element: <Resources />},
      {path: 'contact', element: <Contact />}
    ]
  }
  
],
{  basename: '/', }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </StrictMode>,
)
