import React from 'react';
import './navbar.css';

export default function Navbar(){
    return(
        <nav className="nav">
            <img src="/logoGAMEQUIZ.png" className='logoxD'alt="logo" />
            <ul>
                <li className='activeNav'>
                    <a href="/leaderboards">LeaderBoards</a>
                </li>

                <li className='activeNav'>
                    <a href='/login'>Login</a>
                </li>
            </ul>
        </nav>
    )
}