import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Sidebar } from './components/Sidebar'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='layout'>
      <Sidebar/>
      <div className="content">
        <RouterProvider router={router} />
        

      </div>
    </div>
  </StrictMode>,
)
