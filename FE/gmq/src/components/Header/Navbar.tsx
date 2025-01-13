import { Link } from 'react-router-dom';
import './navbar.css';
export const Navbar = (): JSX.Element => {
    return(
        <nav className="nav">
           <Link to='/'>
           <img src="/logoGAMEQUIZ.png" className='logoxD'alt="logo" />
            </Link> 
            <ul>
                <li className='activeNav'>
                    <Link to="leaderboards">LeaderBoards</Link>
                </li>
                <li className='activeNav'>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    )
}