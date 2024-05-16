function Header(){

    return(
        <header className="header">
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li className="home"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    )
}
export default Header