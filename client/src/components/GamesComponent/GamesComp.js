import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./GamesComp.css";
import cloudStanding from '../../rpgBattle/Assets/Images/cloudStanding.gif'
const GamesComp = () => {
  return (
    <div>
      <div>
        <a href="/rpgBattle">
          <img src={ cloudStanding } id="cloudStanding"></img>
        </a>
      </div>

      <img
        className="img"
        src={ "./images/arcadewallpaper.png" }
        alt="arcadeWallpaper"
      />

      <div className="container">
        {/* <div className="one">
          <Link to={"/game2"}>
            <img src={"./images/pacman.png"} alt="game1" />
          </Link>
        </div> */}
        <div class="two">
          <Link to={ "/game1" }>
            <img src={ "./images/pacman.png" } alt="game1" />
          </Link>
        </div>

        {/* <div class="three">

        </div> */}

      </div>
    </div >
  );
};

export default GamesComp;
