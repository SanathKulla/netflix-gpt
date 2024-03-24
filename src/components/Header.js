import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black w-[100%] z-10">
      <img className="w-64 mx-12" src={LOGO} alt="logo" />
    </div>
  );
};

export default Header;
