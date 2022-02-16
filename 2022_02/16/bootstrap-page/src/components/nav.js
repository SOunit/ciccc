import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Catcademy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Learning Journey
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Instructors
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
