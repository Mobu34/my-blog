import React from "react";
import ItemTitle from "./ItemTitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <ItemTitle className="itemTitle" title="ABOUT ME" />
      <ItemPicture className="aboutMe-itemPicture" picture="" />
      <ItemDescription
        className="itemDescription"
        description="Cras interdum pharetra felis eu faucibus."
      />
    </div>
  );
};

export default AboutMe;
