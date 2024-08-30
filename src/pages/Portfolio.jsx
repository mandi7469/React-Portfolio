import blog from "../assets/images/blog.png";
import svg from "../assets/images/svg.png";
import taskBoard from "../assets/images/taskBoard.png";
import weather from "../assets/images/weather.png";
import shelfie from "../assets/images/shelfie.png";
import employee from "../assets/images/employee.png";

export default function Portfolio() {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <h1>Portfolio</h1>
        </div>
        <div className="row pt-3">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={blog}
                className="card-img-top"
                alt="Personal Blog App"
              />
              <div className="card-body">
                <h5 className="card-title project-title">Personal-Blog</h5>
                <p className="card-text">
                  This application is a two-page website where users can input
                  and veiw blog posts. It includes a content form, dynamically
                  rendered blog posts, and a light/dark toggle mode using HTML,
                  CSS and JavaScript.
                </p>
                <a href="https://github.com/mandi7469/Personal-Blog">
                  <i
                    className="bi bi-github pe-5"
                    style={{ color: "#65AFFF" }}
                  ></i>
                </a>

                <a href="https://mandi7469.github.io/Personal-Blog/">
                  <i class="bi bi-link" style={{ color: "#65AFFF" }}></i>
                </a>
              </div>
            </div>
          </div>
          
            <div className="col-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={svg} className="card-img-top" alt="SVG Logo" />
                <div className="card-body">
                  <h5 className="card-title project-title">SVG Logo Maker</h5>
                  <p className="card-text">
                    This is a Node.js command-line application that takes in
                    user input to generate a logo and save it as an SVG file.
                    The application prompts the user to select a color and
                    shape, provide text for the logo, and save the generated SVG
                    to a .svg file.
                  </p>
                  <a href="https://github.com/mandi7469/SVG-Logo-Maker">
                    <i
                      className="bi bi-github pe-5"
                      style={{ color: "#65AFFF" }}
                    ></i>
                  </a>

                  <a href="https://drive.google.com/file/d/1jgl9_uwQXjhocPaFKiaU2EMhKSNe1saS/view?usp=sharing">
                    <i class="bi bi-link" style={{ color: "#65AFFF" }}></i>
                  </a>
                </div>
              </div>
            </div>
        
         
            <div className="col-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={taskBoard}
                  className="card-img-top"
                  alt="Task Board"
                />
                <div className="card-body">
                  <h5 className="card-title project-title">Task Board</h5>
                  <p className="card-text">
                    Task Board is an application that allows users to manage and
                    delete tasks. This application runs in the browser and
                    features dynamically updated HTML and CSS powered by JQuery.
                  </p>
                  <a href="https://github.com/mandi7469/Task-Board">
                    <i
                      className="bi bi-github pe-5"
                      style={{ color: "#65AFFF" }}
                    ></i>
                  </a>

                  <a href="https://mandi7469.github.io/Task-Board/">
                    <i class="bi bi-link" style={{ color: "#65AFFF" }}></i>
                  </a>
                </div>
              </div>
            </div>
          
        </div>
        <div className="row pt-4">
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={weather}
                className="card-img-top"
                alt="Weather Dashboard"
              />
              <div className="card-body">
                <h5 className="card-title project-title">Weather Dashboard</h5>
                <p className="card-text">
                  Weather Dashboard retrieves data from third party APIs and
                  renders it on the page. The application runs in the browser
                  and features dynamically updated HTML and CSS.
                </p>
                <a href="https://github.com/mandi7469/Weather-Dashboard">
                  <i
                    className="bi bi-github pe-5"
                    style={{ color: "#65AFFF" }}
                  ></i>
                </a>

                <a href="https://mandi7469.github.io/Weather-Dashboard/">
                  <i class="bi bi-link" style={{ color: "#65AFFF" }}></i>
                </a>
              </div>
            </div>
          </div>
          
            <div className="col-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={employee}
                  className="card-img-top"
                  alt="Employee Tracker"
                />
                <div className="card-body">
                  <h5 className="card-title project-title">Employee Tracker</h5>
                  <p className="card-text">
                    Employee Tracker is a command-line application to
                    manage a company's employee database, using Node.js,
                    Inquirer, and PostgreSQL.
                  </p>
                  <a href="https://github.com/mandi7469/SQL-Employee-Tracker">
                    <i
                      className="bi bi-github pe-5"
                      style={{ color: "#65AFFF" }}
                    ></i>
                  </a>

                  <a href="https://drive.google.com/file/d/1coPUpQGTgcaYGv6AJaD5MF0DFNtYHn3U/view?usp=sharing">
                    <i class="bi bi-link" style={{ color: "#65AFFF" }}></i>
                  </a>
                </div>
              </div>
            </div>
          
        
            <div className="col-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={shelfie} className="card-img-top" alt="Shelfie" />
                <div className="card-body">
                  <h5 className="card-title project-title">Shelfie</h5>
                  <p className="card-text">
                    Shelfie was a collaborative project. The application allows
                    the user to create and maintain a collection of books that
                    they have read, or wish to read in the future. The
                    application utilizes postgreSQL, Node.js, Express,
                    JavaScript, CSS, and Handlebars.
                  </p>
                  <a href="https://github.com/mandi7469/Shelfie">
                    <i
                      className="bi bi-github pe-5"
                      style={{ color: "#65AFFF" }}
                    ></i>
                  </a>

                  <a href="https://shelfie-53sl.onrender.com/">
                    <i class="bi bi-link" style={{ color: "#65AFFF" }}></i>
                  </a>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}
