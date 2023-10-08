import "../styles/main.css";
import "../styles/footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer">
          <hr className="line" />
          <div className="other">
            <img
              src="https://media.discordapp.net/attachments/1155245008841097296/1160623796408041492/981798F3-C8B8-49F6-9DD2-69394BF20D3A-removebg.png?ex=65355624&is=6522e124&hm=eb9c9d3554693734ef6b2acf95541d47d683474cb6628918b5ba45ace088ff9b&=&width=468&height=468"
              alt="logo"
            />
            <div className="line1"></div>
            <div className="contact">
              <h2>Contacts:</h2>
              <div className="brand">
                <a href="" className="ig">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="" className="discord">
                  <i className="fa-brands fa-discord"></i>
                </a>
                <a href="" className="facebook">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="" className="git">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="" className="gmail">
                  <i className="fa-solid fa-envelope-open-text"></i>
                </a>
                <a href="" className="in">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="names">
            <span className="cb">Created by:</span>
            <span className="crator">Ismail Belghit</span>
            <span className="line2"></span>
            <span className="crator">Taha Elmoatamid</span>
            <span className="line2"></span>
            <span className="crator">Mohammed Ouabdrrahmane</span>
            <span className="line2"></span>
            <span className="crator">Mohamed Chelhi</span>
            <span className="line2"></span>
            <span className="crator">Marwa Sebai</span>
            <span className="line2"></span>
            <span className="crator">Badr eddine elkadiri boutchich </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
