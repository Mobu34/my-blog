import React from "react";
import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const Item = (props) => {
  console.log(props);
  return (
    <div className="item">
      <ItemTitle className="itemTitle" title={props.title} />
      <ItemSubtitle className="itemSubtitle" subtitle={props.subtitle} />
      <ItemPicture className="item-itemPicture" picture={props.picture} />
      <ItemDescription
        className="itemDescription"
        description={props.description}
      />
    </div>
  );
};

export default Item;
