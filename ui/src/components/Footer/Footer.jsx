import "./Footer.css";

const year = new Date().getFullYear();

export default () => (
    <div className="container">
        <footer className="footer text-muted">ePardė &copy; {year} All rights reserved</footer>
    </div>
)