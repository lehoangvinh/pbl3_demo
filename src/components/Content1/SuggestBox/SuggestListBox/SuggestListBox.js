import React from "react";
import Item from "../../../Item/Item";
import "../../../Item/Item.css";
const cafe_denUrl = `${process.env.PUBLIC_URL}/img/cafe_den.png`;
const bacxiuUrl = `${process.env.PUBLIC_URL}/img/bac_xiu.png`;
const cafe_suaUrl = `${process.env.PUBLIC_URL}/img/cafe_sua.png`;
const kemlyUrl = `${process.env.PUBLIC_URL}/img/milo.png`;

function SuggestListBox(props) {
    return (
        <div className="SuggestListBox">
            {
                props.API.slice(0, 19).map((item) => (
                    <div className="Suggest_Item" key={item.id}>
                        <Item linkURL={item.url} detail={item.albumId} />
                    </div>

                ))
            }
        </div>
    );
}

export default SuggestListBox;
