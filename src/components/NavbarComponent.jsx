import { Link } from "react-router"

const NavbarComponent = () => {

  return (
    <>
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/home" className="navbar-brand" > BlackCode</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{bsScrollHeight: "100px"}}>
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active" > Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link active" > Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/role" className="nav-link active" > Role</Link>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <Link to="/logout" className="btn btn-danger" > Logout</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    </>
  )
}

export default NavbarComponent
