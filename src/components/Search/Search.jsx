import './search.scss'

import search from '../../images/icons/search.png'
import notification from '../../images/icons/notification.png'
import user1 from '../../images/img/user-1.png'

function Search() {
  return (
    <div className="search">
      <div className="search__left" >
        <div className="search__box">
          <img src={search} alt="" />
        <input type="search" placeholder='Search'/>
        </div>
      </div>
      <div className="search__right">
        <img src={notification} alt="" />
        <img src={user1} alt="" />
      </div>
    </div>
  )
}

export default Search