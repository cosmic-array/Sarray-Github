import "../styles/main.css";
import "../styles/hero.css";
import Stars from "../assets/stars.jsx";

function Hero() {
  return (
    <section className="hero">
      <Stars />

      <div className="wrapper">
        <div className="heading">
          <h1>Sarray. Solar winds, Made easy</h1>

          <p>
            Started late 2023, Sarray is a platform aiming on raising community
            awareness about the danger of solar winds and thus by keeping an eye
            on how it evolves, starts, and more...
          </p>

          <button>
            <a href="#learn">Learn More!</a>
          </button>
        </div>

        <div id="representation">
          <iframe
            src="https://drive.google.com/file/d/1EbiEnrv1esx6uABHkri83bs_t4cf-4aE/preview"
            style={{ marginRight: "10vw" }}
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Hero;
