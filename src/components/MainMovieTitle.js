import React, { useState } from "react";

const MainMovieTitle = ({ title, overview }) => {
  const [moreInfo, setMoreInfo] = useState(null);
  const [buttonInfo, setButtonInfo] = useState("More Info");

  const handleMoreInfoButtonClick = () => {
    if (moreInfo) {
      setMoreInfo(null);
      setButtonInfo("More Info");
    } else {
      setMoreInfo(overview);
      setButtonInfo("Less Info");
    }
  };
  return (
    <div className="pt-64 pl-12 absolute pt-[25%] bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>
      <p className="text-lg w-4/12 text-white">{moreInfo}</p>
      <div className="mt-6 cursor-pointer">
        <button className=" mr-4 p-2 px-6 rounded-lg cursor-pointer bg-gray-600 bg-opacity-50 text-white">
          &#9658; Play
        </button>
        <button
          onClick={handleMoreInfoButtonClick}
          className=" mr-2 p-2 px-6 rounded-lg cursor-pointer bg-gray-600 bg-opacity-50 text-white"
        >
          {buttonInfo}
        </button>
      </div>
    </div>
  );
};

export default MainMovieTitle;
