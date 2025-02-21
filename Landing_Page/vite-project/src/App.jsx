import { useState } from "react";
import Background from "./component/Background/Background";
import Navbar from "./component/NavBar/Navbar";
import Hero from "./component/Hero/Hero";

const App = () => {
  // created the variable for let hero data with 3 objects for we have display for the value
  let heroData = [
    {
      text1: "Dive Into",
      text2: "What You Love",
    },
    {
      text1: "Indulge",
      text2: "your passion",
    },
    {
      text1: "Give into",
      text2: "passion",
    },
  ];
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      {/* here i'm passing the props  */}
      <Hero
        setPlayStatus={setPlayStatus}
        setHeroCount={setHeroCount}
        heroCount={heroCount}
        playStatus={playStatus}
        heroData={heroData[heroCount]}
      />
    </div>
  );
};

export default App;
