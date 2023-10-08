import "../styles/main.css";
import "../styles/discover.css";
import Stars from "../assets/stars";

function Discover() {
  return (
    <section className="Discover">
      <Stars />

      <div>
        <div className="discover">
          <h1 className="title-text">What about solar winds</h1>
        </div>

        <div className="question">
          <div id="learn1">
            <img
              src="https://cdn.discordapp.com/attachments/1155245008841097296/1160230243341189201/Incoming_CME_On_Its_Way_Toward_Earth.jpg?ex=6533e79e&is=6521729e&hm=efc9d5d84d2b57ce18bd0c141866f1ed5f09d92bf49c4e37a4b78650df7b10aa&width=905&height=680"
              alt=""
            />
            <div>
              <h1>The definition of solar</h1>
              <p>
                The solar wind is a stream of particles consisting mainly of
                ions and electrons that are ejected from the upper atmosphere of
                the Sun. This flow varies in speed and temperature over time
                depending on solar activity. For stars other than the Sun, we
                generally speak of stellar wind.
              </p>
            </div>
          </div>

          <div id="learn2">
            <div>
              <h1>Types of solar winds?</h1>
              <p>
                There are two solar winds: a fast, uniform, and steady wind,
                blowing at 800 km (500 miles) per second, and a slow, gusty, and
                sporadic wind, with about half the speed of the fast one. The
                two winds originate at different places on the Sun and
                accelerate to terminal velocity at different distances from it.
                When the solar wind encounters Earth's magnetic field, a shock
                wave results, the nature of which is not fully understood. As
                the solar wind spreads out into an increasing volume, its
                density and pressure become less. Eventually the pressure of the
                solar wind becomes comparable to that of the interstellar
                medium.
              </p>
            </div>
            <img
              src="https://media.discordapp.net/attachments/1155245008841097296/1160326152397795468/Earths_magnetic_shield_is_much_older_than_previously_thought__An_older_geomagnetic_field_suggests_an_early_start_to_plate_tectonics.jpg?ex=653440f0&is=6521cbf0&hm=ca636b956636e747f80312f2845b09d46bccf9faa126adc8368210560d3f2025&="
              alt=""
            />
          </div>

          <div id="learn3">
            <img src="https://media.discordapp.net/attachments/1155245008841097296/1160621260288577605/Mystery_Of_Ultra-Fast_Solar_Flares_Solved_By_Plasma_Physics.jfif?width=600&height=468" 
            alt="not found" />
            <div>
              <h1>interplanetary medium</h1>
              <p>
                interplanetary medium, thinly scattered matter that exists
                between the planets and other bodies of the solar system, as
                well as the forces (e.g., magnetic and electric) that pervade
                this region of space. The material components of the
                interplanetary medium consist of neutral hydrogen, plasma gas
                comprising electrically charged particles from the Sun, cosmic
                rays, and dust particles.
              </p>
            </div>
           </div> 
          <div id="learn4">
            <img
              src="https://media.discordapp.net/attachments/1155245008841097296/1160643980007055390/71F61730-1AB3-48A3-B473-A5D919C56961.jpg?ex=653568f0&is=6522f3f0&hm=8154f8c20be5bfb02cbb35c4758d9e9a1f6ebe3be6cf3ae2f1e07eac35bb7983&="
              alt=""/>
            <div>
              <h1>How does solar wind affect Earth?</h1>
              <p>
                Solar wind can interact with Earth's magnetic fields and excite
                the electrons in the gases found in the atmosphere. When this
                occurs, polar lights or auroras can be viewed in the sky at the
                north and south poles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discover;
