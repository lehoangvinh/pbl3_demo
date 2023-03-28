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
            <div className="Suggest_Item">
                <Item linkURL={cafe_denUrl} detail="Trà sữa" />
            </div>
            <div className="Suggest_Item">
                <Item linkURL={bacxiuUrl} />
            </div>
            <div className="Suggest_Item">
                <Item linkURL={cafe_suaUrl} />
            </div>
            <div className="Suggest_Item">
                <Item linkURL={kemlyUrl} />
            </div>
            <div className="Suggest_Item">
                <Item linkURL={cafe_denUrl} />
            </div>
            <div className="Suggest_Item">
                <Item linkURL={bacxiuUrl} />
            </div>
            <div className="Suggest_Item">
                <Item linkURL={cafe_suaUrl} />
            </div>
            <div className="Suggest_Item">
                <Item linkURL={kemlyUrl} />
            </div>
            <div className="Suggest_Item">
                <Item linkURL={cafe_suaUrl} />
            </div>
            <div className="Suggest_Item">
                <Item linkURL={kemlyUrl} />
            </div>
            <div className="Suggest_Item">
                <Item linkURL={kemlyUrl} />
            </div>
            <div className="Suggest_Item">
                <Item linkURL={kemlyUrl} />
            </div>
            <div className="Suggest_Item">
                <Item linkURL={kemlyUrl} />
            </div>
            <div className="Suggest_Item">
                <Item linkURL={kemlyUrl} />
            </div>
            <div className="Suggest_Item">
                <Item linkURL={kemlyUrl} />
            </div>
        </div>
    );
}

export default SuggestListBox;
