import Logo from "../../assets/LOGO-4.png";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <img src={Logo} alt="logo" className="logo-footer" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer