import React from "react";
import Item from "../../../Item/Item";
import "../../../Item/Item.css";


function SuggestListBox(props) {
    return (
        <div className="SuggestListBox">
            {
                props.API.slice(0, 9).map((item) => (
                    <div className="Suggest_Item" key={item.id}>
                        <Item linkURL={item.url} detail={item.albumId} />
                    </div>

                ))
            }
        </div>
    );
}

export default SuggestListBox;
