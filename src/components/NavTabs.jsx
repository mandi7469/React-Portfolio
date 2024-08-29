import { Link, useLocation } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <div className="row pb-3">
        <div className="col">
        <h3 className="initials ps-2 pt-1">AC</h3>
        </div>
        <div className="col">
        <ul className="nav d-flex align-items-center justify-content-end">
          <li className="nav-item">
            <Link
              to="/"
              // This is a conditional (ternary) operator that checks to see if the current page is "About"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
            >
              <i class="bi bi-person p-1"></i>About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Portfolio"
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              <i class="bi bi-folder2-open p-1"></i>Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "/Contact" ? "nav-link active" : "nav-link"
              }
            >
              <i class="bi bi-envelope p-1"></i>Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Resume"
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "/Resume" ? "nav-link active" : "nav-link"
              }
            >
              <i class="bi bi-file-earmark-person p-1"></i>Resume
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}

export default NavTabs;
