import { LOGO } from "../utils/constants";
import appStore from "../utils/appStore";
import userIcon from "../utils/userIcon.jpg";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black w-screen z-10 flex justify-between items-center">
      <img className="w-64 mx-12" src={LOGO} alt="logo" />
      {user && (
        <div className="flex justify-between mx-10">
          <img className="w-10 h-10 rounded" src={userIcon} alt="userIcon" />
          <button onClick={handleSignOut} className="text-white ml-6 font-bold">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
