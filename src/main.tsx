import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/pages/App'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routes from "./Routes"
import "./index.css"

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
