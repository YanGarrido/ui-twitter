import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/Separator'

const tweets = [
  'Meu primeiro tweet',
  'Teste',
  'Deu certo tweetar!'
]

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
          <Separator/>

         {tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet}/>
         })}
        </main>

      </div>
    </div>
  </StrictMode>,
)
