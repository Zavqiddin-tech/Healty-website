import { NavLink } from 'react-router-dom'



import './sidebar.scss'

// icons
import logo from '../../images/icons/logo.png'
import boshSahifa from '../../images/icons/bosh-sahifa.png'
import palata from '../../images/icons/palata.png'
import shifokor from '../../images/icons/shifokor.png'
import bolim from '../../images/icons/bolim.png'
import bemorlar from '../../images/icons/bemorlar.png'
import yordam from '../../images/icons/yordam.png'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__logo">
            <img src={logo} alt="" />
        </div>
        <div className="sidebar__title">MEDICINE</div>
        <ul className="sidebar__lists">
            <li className='sidebar__list'>
                <img src={boshSahifa} alt="" />
                <NavLink to='/'>Bosh sahifa</NavLink>
            </li>
            <li className='sidebar__list'>
            <img src={palata} alt="" />
                <NavLink to='/palatalar'>Palatalar</NavLink>
            </li>
            <li className='sidebar__list'>
            <img src={shifokor} alt="" />
                <NavLink to='/shifokorlar'>Shifokorlar</NavLink>
            </li>
            <li className='sidebar__list'>
            <img src={bolim} alt="" />
                <NavLink to='/bolimlar'>Bo’limlar</NavLink>
            </li>
            <li className='sidebar__list'>
            <img src={bemorlar} alt="" />
                <NavLink to='/bemorlar'>Bemorlar</NavLink>
            </li>
        </ul>

        <div className="sidebar__help">
            <img src={yordam} alt="" />
            Yordam
        </div>
    </div>
  )
}

export default Sidebar