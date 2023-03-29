import { useState } from "react";
import React from "react";

function Frame13(props) {
    const all = parseInt(props.foods) + parseInt(props.drinks);
    const drinks = props.drinks
    const foods = props.foods

    const [selected, setSelected] = useState(null);

    const handleClick = (title) => {
        setSelected(title);

    };

    const renderRow = (title, quantity) => {
        const backgroundColor = selected === title ? 'aliceblue' : 'transparent';
        const fontWeight = selected === title ? 700 : 300;

        return (
            <div
                className="Frame13-Content-Row"
                style={{ backgroundColor, fontWeight }}
                onClick={() => {
                    handleClick(title)
                    props.handleChangeTitle(title)
                }
                }

            >
                <p>{title}</p>
                <p>{quantity}</p>
            </div>
        );
    };
    return (
        <div className="Frame13">
            <div className="Frame13-Title">
                <p>Categories</p>
            </div>
            <div className="Frame13-Content">
                {renderRow('All', all)}
                {renderRow('Drinks', drinks)}
                {renderRow('Foods', foods)}
                <div className="Frame13-Content-Quantity"></div>
            </div>
        </div>
    );
}

export default Frame13;

/* <div className="Frame13">
            <div className="Frame13-Title">
                <p>Categories</p>
            </div>
            <div className="Frame13-Content">
                <div
                    key='All'
                    // style={{ backgroundColor: BG }}
                    className="Frame13-Content-Row"
                    onClick={(e) => {
                        props.title("All");

                    }}
                >
                    <p>All</p>
                    <p>{all}</p>
                </div>
                <div
                    key='Drinks'

                    className="Frame13-Content-Row"
                    onClick={(e) => {
                        props.title("Drinks");


                    }}
                >
                    <p>Drinks</p>
                    <p>{props.drinks}</p>
                </div>
                <div
                    key='Foods'

                    className="Frame13-Content-Row"
                    onClick={(e) => {
                        props.title("Foods");

                    }}
                >
                    <p>Foods</p>
                    <p>{props.foods}</p>
                </div>
                <div className="Frame13-Content-Quantity"></div>
            </div>
        </div >
    ); */