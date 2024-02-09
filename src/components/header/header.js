
import './header.css';

function Header() {
    return (
    <>
    <header>
        <div className="header">
            <buttton className="icon" id="toogle">
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </buttton>

            <li><a href="#">Home</a></li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="logo_facebook"></img>
            <li><a href="#">About</a></li>
            <li><a href="#">Celebrate</a></li>
        </div>
    </header>
    </>
    );
}

export default Header;