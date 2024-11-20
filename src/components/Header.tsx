import userIcon from "../assets/icons/user.png";
import menu from "../assets/icons/menu.png";

const Header = () => {
  <div>
    <nav className="w-full h-12 px-12">
      <div className="h-12 w-12">
        <img src={userIcon} />
      </div>
      <div className="w-12 h-10">
        <input type="text" placeholder="Search" />
      </div>
      <div className="h-12 w-12">
        <img src={menu} />
      </div>
    </nav>
  </div>;
};
