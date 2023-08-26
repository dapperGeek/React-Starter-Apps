import logo from './logo.svg';

function Header() {
    return (
        <header className="App-header">
            <nav className='nav'>
            <img src={logo} className="nav-logo" alt="logo" />
                <u className='nav-items'l>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </u>
            </nav>
        </header>

    )
}
export default Header