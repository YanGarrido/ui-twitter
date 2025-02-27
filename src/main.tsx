import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import twitterlogo from './assets/twitter-logo.svg'
import { Bell, BookmarkSimple,  DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User} from '@phosphor-icons/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='layout'>
      <aside className='sidebar'>
        <img className='logo' src={twitterlogo} alt="logo do twitter" />
        <nav className='main-navigation'>
          <a href="" className='active'>
            <House weight='fill'/>
            Home
          </a>
          <a href="">
            <Hash/>
            Explore
          </a>
          <a href="">
            <Bell/>
            Notifications
          </a>
          <a href="">
            <Envelope/>
            Menssages
          </a>
          <a href="">
            <BookmarkSimple/>
            Bookmarks
          </a>
          <a href="">
            <FileText/>
            Lists
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle/>
            More
          </a> 
        </nav>
        <button className='new-tweet' type='button'>
          Tweet
        </button>
      </aside>
      <div className="content">
        <main className='timeline'>
          <div className='timeline-header'>
            Home
            <Sparkle/>
          </div>

          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/yangarrido.png" alt="Yan Garrido"/>
              <textarea name="" id="tweet" placeholder="What's happening"/>

            </label>
            <button type='submit'>Tweet</button>
          </form>
          <div className="separator"/>
        </main>

      </div>
    </div>
  </StrictMode>,
)
