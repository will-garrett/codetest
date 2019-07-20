import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";
import 'flickity-imagesloaded';
import "./styles.css";
import "./flickity.css";

class Carousel extends React.Component {
  componentDidMount() {
    console.log(this.flkty);
    this.flkty.on("settle", () => {
      console.log(this.flkty);
      // update description
      // update factoid
    });
  }
  images(data) {
    return data.map(entity => {
      return (
        <img key={entity.id} src={entity.image_loc} alt={entity.description} />
      );
    });
  }
  render() {
    return (
      <Flickity
        flickityRef={c => (this.flkty = c)}
        className={"carousel"} // default ''
        elementType={"div"} // default 'div'
        options={{ wrapAround: true, groupCells: true, pageDots: false , imagesLoaded: true}} // takes flickity options {}
        disableImagesLoaded={false} // default false
        
      >
        {this.images(this.props.muh_interests)}
      </Flickity>
    );
  }
}
class FactForm extends React.Component {
  render() {
    return (
      <div style={{ padding: "10px" }}>
        <form>
          <p>
            <label htmlFor="factoid">Add Your Factoid: </label>
            <textarea
              placeholder='Example: People would generally describe me as no nonsense, brief, and "to the point", but bad at writing titles.'
              name="factoid"
            />
          </p>
          <button>Create New Interest</button>
        </form>
      </div>
    );
  }
}
function DescriptionComponent(props) {
  return (
    <div>
      <p>{props.description}</p>
    </div>
  );
}
function App() {
  let things = [
    {
      id: 1,
      description: "Yvette",
      image_loc: "/img/yvette.jpg"
    },
    {
      id: 2,
      description: "Suzy at the Beach",
      image_loc: "/img/suzy.jpg"
    },
    {
      id: 3,
      description: "Corner",
      image_loc: "/img/cornering.jpg"
    }
  ];
  function hiddenMsg(source, message, forget = true) {
    let src = source.toLowerCase().split("");
    let msg = message.toLowerCase().split("");
    let current = msg.shift();
    for (let i in source) {
      if (src[i] === current) {
        src[i] = src[i].toUpperCase();
        current = null;
        if (msg.length !== 0) {
          current = msg.shift();
        }
      }
    }
    let msg_received = msg.length === 0 && current === null;
    msg_received &&
      console.log(message + " for considering me for this opportunity -Will");
    msg_received && console.log("a", msg_received, "statement...");
    if (!msg_received && forget) {
      return source;
    }
    return msg_received ? src.join("") : false;
  }
  let title = hiddenMsg(
    'a singular taxonomy of "things" which i am interested in and keep in high regard that could conceptually be visually appealing or considered aesthetically pleasing when presented in a responsive web medium that others may interact & engage with as a means to appraise and assess my abilities whereby i may communicate my readiness and drive towards exsistential fullfilment...',
    "thank you open drives",
    true
  );

  return (
    <div className="App">
      <h1 style={{ fontWeight: "100", fontVariant: "small-caps" }}>
        {title}
      </h1>
      <h3 style={{ fontWeight: "100", fontStyle: "italic" }}>
        and{" "}
        <a href="https://github.com/will-garrett">other ergregious titles</a> by{" "}
        <a href="mailto:the+spam+folder@willgarrett.io?Subject=Your%20Super%20Long%20Title%20Gave%20Me%20a%20Headache%2C%20And%20I%27ve%20Come%20to%20Return%20The%20Favor">
          Will Garrett
        </a>
      </h3>
      <h5>
        Source on <a href="https://github.com/will-garrett/codetest">github</a>
      </h5>
      <Carousel muh_interests={things} />
      <DescriptionComponent description="A Description of A Thing" />
      <FactForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
