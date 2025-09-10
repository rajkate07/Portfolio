import "./Footer.css";

const Footer = () => {
        return(
            <div className='footer'>
                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Vivekanand College. All rights reserved.</p>
                </footer>
            </div>
        )
}

export default Footer;