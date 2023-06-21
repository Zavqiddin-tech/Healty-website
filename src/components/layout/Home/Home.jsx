import HomeBox from "./HomeBox";
import Bemorlar from "../Bemorlar/Bemorlar";
import Shifokorlar from "../Shifokorlar/Shifokorlar";

import "./home.scss";

import navhodim from "../../../images/icons/nav-hodim.png";
import navbemor from "../../../images/icons/nav-bemor.png";
import navxona from "../../../images/icons/nav-xonalar.png";
import navbyujet from "../../../images/icons/nav-byudjet.png";

function Home() {
  return (
    <div className="home">
      <div className="home__boxes">
        <HomeBox img={navhodim} text={"Hodimlat"} number={"213"} />
        <HomeBox img={navbemor} text={"Bemorlar"} number={"104"} />
        <HomeBox img={navxona} text={"Xonalar"} number={"24"} />
        <HomeBox img={navbyujet} text={"Byudjet"} number={"$12.174"} />
      </div>
      <div className="bemor">
        <Bemorlar />
      </div>
      <div className="shifokor">
        <Shifokorlar />
      </div>
    </div>
  );
}

export default Home;
