import { Link } from "react-router-dom"

export default function HeaderComponent(){
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://github.com/Marcin1990x">Github</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                <Link className="nav-link" to="/welcome">Home</Link>
                            </li>
                            <li className="nav-item fs-5">
                                <Link className="nav-link" to="/entries-list">Daily Entries</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                            <Link className="nav-link" to="/login">Login - to be done...</Link>
                        </li>
                        <li className="nav-item fs-5">
                            <Link className="nav-link" to="/logout">Logout - to be done...</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        </header>
    )
}