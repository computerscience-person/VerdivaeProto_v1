import home from "../assets/icons/home.png";
import terrarium from "../assets/icons/terrarium.png";
import camera from "../assets/icons/camera_shutter.png";
import leaderboards from "../assets/icons/leaderboards.png";
import profile from "../assets/icons/user_2.png";

const Appbar = () => {
  <div>
    <nav className="w-full h-12 px-12">
      <div className="h-12 w-12">
        <img src={home} />
      </div>
      <div className="h-12 w-12">
        <img src={terrarium} />
      </div>
      <div className="h-12 w-12">
        <img src={camera} />
      </div>
      <div className="h-12 w-12">
        <img src={leaderboards} />
      </div>
      <div className="h-12 w-12">
        <img src={profile} />
      </div>
    </nav>
  </div>;
};
