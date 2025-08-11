import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'

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
      {path: 'services', element: <Services />}
    ]
  }
  
],
{  basename: '/', }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
