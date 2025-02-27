import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='layout'>
      <aside className='sidebar'>
        <img src="" alt="" />
        <nav></nav>
        <button>Tweet</button>
      </aside>
      <div className="content">

      </div>
    </div>
  </StrictMode>,
)
