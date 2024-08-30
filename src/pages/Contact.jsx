export default function Contact() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="d-flex justify-content-center">Contact Me</h1>
      </div>
      <div className="row pt-3">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label message">
            Name:
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label message">
            Email address:
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlTextarea1"
            className="form-label message"
          >
            Message:
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="col-12">
          <button class="btn btn-outline-light" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
