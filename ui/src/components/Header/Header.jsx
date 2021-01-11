import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShopify } from '@fortawesome/free-brands-svg-icons'

export default () =>
    (
        <header>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container justify-content-start">
                    <NavLink exact to="/" className="navbar-brand"><FontAwesomeIcon icon={faShopify}/>ePardė</NavLink>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/products" className="nav-link">Produktai</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">Apie</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
