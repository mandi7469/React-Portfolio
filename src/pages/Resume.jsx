export default function Resume() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="d-flex justify-content-center">Resume</h1>
      </div>
      <div className="row pt-3">
        <p>
          <a href="#" className="link-underline d-flex justify-content-center" style={{ color: "#65AFFF" }}>
            {" "}
            <i class="bi bi-file-earmark-person p-1"></i>Download my resume
          </a>
        </p>
        <div className="d-flex flex-column">
        <h2>Front-End Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>Responsive Design</li>
        </ul>
        <h2>Back-End Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>Rest</li>
          <li>PostgreSQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>GraphQL, Apollo</li>
        </ul>
        </div>
      </div>
    </div>
  );
}
