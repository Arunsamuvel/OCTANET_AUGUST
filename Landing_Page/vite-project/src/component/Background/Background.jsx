import "./Background.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import video1 from "../../assets/video1.mp4";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    console.log("connected");
    return (
      <video className="background" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    console.log("connected");
    return <img src={image1} className="background" alt="" />;
  } else if (heroCount === 1) {
    console.log("connected");
    return <img src={image2} className="background" alt="" />;
  } else if (heroCount === 2) {
    console.log("connected");
    return <img src={image3} className="background" alt="" />;
  }
};
export default Background;
