import "./Footer.css";
import {useTranslation} from "react-i18next";

const year = new Date().getFullYear();

const Footer = () => {

    const {t} = useTranslation();

    return (
        <footer className="footer mt-3 py-3 navbar-light bg-light position-bottom position-sticky">
            <div className="container">
                <span className="text-muted">© {year} Šarūnas Verbus. {t("copyright-text")}</span>
            </div>
        </footer>
    )
}

export default Footer;