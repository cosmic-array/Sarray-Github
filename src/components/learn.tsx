import "../styles/main.css";
import "../styles/learn.css";
import Stars from "../assets/stars";

function Learn() {
  return (
    <section className="learn">
      <Stars />

      <div>
        <div className="title">
          <h1 className="title-text">Get to know more</h1>
        </div>

        <div className="question">
          <div id="question1">
            <img
              src="https://cdn.discordapp.com/attachments/1155245008841097296/1160230243341189201/Incoming_CME_On_Its_Way_Toward_Earth.jpg?ex=6533e79e&is=6521729e&hm=efc9d5d84d2b57ce18bd0c141866f1ed5f09d92bf49c4e37a4b78650df7b10aa&width=905&height=680"
              alt=""
            />
            <div>
              <h1>What is Sarray ?</h1>
              <p>
                Sarray is a web site made with a lots of tactics to give you the
                accessibility to know how the solar winds are affecting your
                city at the present moment.
              </p>
            </div>
          </div>

          <div id="question2">
            <div>
              <h1>What is solar winds ?</h1>
              <p>
                Solar winds are charged particles provided by the sun. They are
                released from the upper atmosphere of the Sun, called Corona.
                These particles collide with the geomagnetic field of Earth.
                Without the protective power of our Earth's magnetic field,
                these solar winds can represent a danger for us.
              </p>
            </div>
            <img
              src="https://media.discordapp.net/attachments/1155245008841097296/1160326152397795468/Earths_magnetic_shield_is_much_older_than_previously_thought__An_older_geomagnetic_field_suggests_an_early_start_to_plate_tectonics.jpg?ex=653440f0&is=6521cbf0&hm=ca636b956636e747f80312f2845b09d46bccf9faa126adc8368210560d3f2025&="
              alt=""
            />
          </div>

          <div id="question3">
            <img
              src="https://media.discordapp.net/attachments/1155245008841097296/1160333945586602094/416a3468bc2b0162a03c95b4ecaffd80-01.jpg?ex=65344832&is=6521d332&hm=b060f4eea2307f67ef90fdd6bcd9422b1c70462d823c867f1d63fc4ff29393e7&=&width=312&height=468"
              alt=""
            />
            <div>
              <h1>The power of our earth ?</h1>
              <p>
                The power of our Earth lies in its geomagnetic field. Earth's
                magnetic field, also known as the geomagnetic field, is the
                magnetic shield that extends from Earth's interior out into
                space. This magnetic field plays a crucial role in protecting
                our planet. It shields us from cosmic radiation and from the
                charged particles emitted by our Sun
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Learn;
