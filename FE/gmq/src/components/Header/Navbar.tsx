import './navbar.css';
export const Navbar = (): JSX.Element => {
    return(
        <nav className="nav">
           <a href='/HomePage'>
           <img src="/logoGAMEQUIZ.png" className='logoxD'alt="logo" />
            </a> 
            <ul>
                <li className='activeNav'>
                    <a href="/LeaderBoards">LeaderBoards</a>
                </li>

                <li className='activeNav'>
                    <a href='/Login'>Login</a>
                </li>
            </ul>
        </nav>
    )
}