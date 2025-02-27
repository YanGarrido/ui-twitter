import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='layout'>
      <Sidebar/>
      <div className="content">
        <main className='timeline'>
          <Header title="Home"/>

          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/yangarrido.png" alt="Yan Garrido"/>
              <textarea name="" id="tweet" placeholder="What's happening"/>

            </label>
            <button type='submit'>Tweet</button>
          </form>
          <div className="separator"/>

          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
        </main>

      </div>
    </div>
  </StrictMode>,
)
