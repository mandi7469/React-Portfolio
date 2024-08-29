import blog from "../assets/images/blog.png";

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
                  This application is a two-page website where users can input and veiw
                  blog posts. It includes a content form, dynamically rendered
                  blog posts, and a light/dark toggle mode using HTML, CSS and
                  JavaScript.
                </p>
                <a href="https://github.com/mandi7469">
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
          <div className="col">
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
