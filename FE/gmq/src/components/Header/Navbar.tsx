import './navbar.css';

const Redirect = (page : string) => {
    window.location.href = page;
};

const RedirectHome = () => {
    Redirect("/");
};
const RedirectLogin = () => {
    Redirect("/Login");
};
const RedirectLeaderBoards = () => {
    Redirect("/LeaderBoards");
};

export const Navbar = (): JSX.Element => {
    return(
        <nav className="nav">
           <button className='logo button' onClick={RedirectHome}>
                <img src="/logoGAMEQUIZ.png" className='logoxD' alt="logo" />
            </button> 
            <ul className="navLinks">
                <button className='activeNavButton button' onClick={RedirectLeaderBoards}>
                    Leader Boards
                </button>

                <button className='activeNavButton button' onClick={RedirectLogin}>
                    Login
                </button>
            </ul>
        </nav>
    )
}