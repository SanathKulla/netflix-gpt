import LOGO from "../utils/LOGO.png";
import userIcon from "../utils/userIcon.jpg";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({ name: user.displayName, email: user.email, uid: user.uid })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black w-screen z-10 flex justify-between items-center">
      <img className="w-52 mx-12 mt-[-4px]" src={LOGO} alt="logo" />
      {user && (
        <div className="flex justify-between mx-10 mt-[-12px]">
          <img className="w-8 h-8 rounded" src={userIcon} alt="userIcon" />
          <button
            onClick={handleSignOut}
            className="text-white ml-6 font-bold rounded-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
