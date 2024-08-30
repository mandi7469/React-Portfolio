import headshot from "../assets/images/headshot.png";

export default function About() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="d-flex justify-content-center">About Me</h1>
        </div>
        <div className="row pt-3 d-flex justify-content-center">
          <img src={headshot} className="headshot" alt="Headshot" />
          <p className="pt-3">
            Sunshine state native with a BIG personality. Born and raised under
            the Florida sun, I bring a splash of sunshine (and maybe a little
            hurricane force!) wherever I go. My energy is infectious, and I'm
            not afraid to let my voice be heard. On the court, I used to channel
            that energy into digging volleyballs during my Division II college
            days. My bachelor's of art degree, with a focus of biomedical and
            forensic photography, fueled my passion for capturing details that
            helped solve mysteries.
          </p>

          <p>
            I'm a recent graduate of a full stack development bootcamp, eager to
            apply my newfound skills in a dynamic and innovative environment.
            I am confident in my ability to contribute to projects from front-end
            design to back-end development. I am passionate about creating
            user-friendly and efficient web applications. I am a quick learner
            and enjoy collaborating with talented teams to deliver exceptional
            results.
          </p>

          <p>
            But work isn't everything! I'm lucky enough to be married to my best
            friend, and together we're a pawsome team for our two furry
            companions. When we're not cheering each other on, you can find us
            kicking things up a notch at a kickball game or perfecting our
            throws on the disc golf course.
          </p>
        </div>
      </div>
    </div>
  );
}
