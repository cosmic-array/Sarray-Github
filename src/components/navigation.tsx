import "../styles/main.css";
import "../styles/bar.css";
import { Link } from "react-router-dom";

function Navigation() {
  function dashboard() {
    window.location.href = "/dashboard";
  }
  const icon = document.querySelector('.icon');
  const nav = document.querySelector('.links');
  icon?.addEventListener('click', function() {
    nav?.classList.toggle('visible');
  });


  return (
    <div className="bar">
      <input type="checkbox"  id='hamb'/>
      <label htmlFor="hamb" className="hambu">
        <i className="fa-solid fa-bars"></i>
      </label>

      <div className="links" id="nav-link">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/discover">
          Discover
        </Link>
        <Link className="nav-link" to="/data">
          NASA's Data
        </Link>
        <Link className="nav-link" to="/dashboard">
          3D Representation
        </Link>
        <Link className="nav-link" to="/faq">
          FAQ
        </Link>
      </div>

      <div id="brand">
        <img id="brand-logo" src="https://media.discordapp.net/attachments/1155245008841097296/1160698712926986270/sarray.png?ex=65359be9&is=652326e9&hm=a56eeb82e8c3fbf417a31f272b95308294334ea0d96b247c5a881094330bca7d&=" />
        <h1 id="brand-name">SARRAY</h1>
      </div>

      <button id="dashboard">
        <div id="wrapper" onClick={() => dashboard()}>
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/sf-regular-filled/48/planet.png"
            alt="planet"
          />{" "}
          Sarray Live
        </div>
      </button>
    </div>
  );
}

export default Navigation;
