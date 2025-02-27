import twitterlogo from '../assets/twitter-logo.svg'
import { Bell, BookmarkSimple,  DotsThreeCircle, Envelope, FileText, Hash, House, User} from '@phosphor-icons/react'

export function Sidebar() {
    return (
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
    )
}