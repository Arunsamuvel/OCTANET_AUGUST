import { useState } from "react";
import Background from "./component/Background/Background";

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
      <h1>hello world</h1>
      <Background playStatus={playStatus} heroCount={heroCount} />
    </div>
  );
};

export default App;
