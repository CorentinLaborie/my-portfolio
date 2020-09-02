// MODULES //
import React from 'react';


// COMPONENTS //

  // BACKGROUND WITH REACT-SKY //
  import Sky from 'react-sky';
    // REACT SKY IMAGES //
    import Blue from "./assets/background/blue.png";
    import Green from "./assets/background/green.png";
    import Sakura1 from "./assets/background/sakura1.png";
    import Sakura2 from "./assets/background/sakura2.png";
    import Sacred1 from "./assets/background/sacred1.png";
    import Sacred2 from "./assets/background/sacred2.png";
    import Sacred3 from "./assets/background/sacred3.png";
    import Sacred4 from "./assets/background/sacred4.png";
    import Sacred5 from "./assets/background/sacred5.png";
  
  // HEADER + STICKY NAVBAR //
  import Header from "./components/Header/Header";

  // CENTER //
  import Presentation from "./components/Presentation/Presentation";
  import Skills from "./components/Skills/Skills";
  import Projects from "./components/Projects/Projects";

  // FOOTER //
  import Footer from "./components/Footer/Footer"

// STYLE //
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
    <Sky 
          images={{
            /* FORMAT AS FOLLOWS */
            0: Blue,
            1: Green,
            2: Sakura1,
            3: Sakura2,
            4: Sacred1,
            5: Sacred2,
            6: Sacred3,
            7: Sacred4,
            8: Sacred5, 
          }}
          how={300} /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
          time={300} /* time of the animation. Dfaults at 20s */
          size={'90px'} /* size of the rendered images. Defaults at 150px */
          background={'none'} /* color of background. Defaults to none */
        />
    <Header />
    <Presentation />
    <Skills />
    <Projects />
    <Footer />
    
</>
    )
}

export default App;