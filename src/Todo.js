import React, { useState, useEffect } from "react";

const lists = [
    {
        id: 1,
        name: "Vi",
    },
    {
        id: 2,
        name: "Vinh",
    },
    {
        id: 3,
        name: "Thục Vi",
    },
];

function Todo(props) {
    const tabs = ["posts", "albums", "comments"];
    const [posts, setPosts] = useState([]);
    const [render, setRender] = useState(false); // duoc goi la mounted
    const [type, setType] = useState("");

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((respose) => {
                return respose.json();
            })
            .then((post) => {
                setPosts(post);
            })
            .catch((error) => {
                console.log(error);
            });

        return () => {
            // remove eventListeners
        };
    }, [type]);
    // get API


    const [goToTop, setGoToTop] = useState(false);
    //create flag to appear or hide button goToTop

    const [img, setImg] = useState('')
    //create url Image

    useEffect(() => {
        const handleScroll = () => {
            setGoToTop(window.scrollY >= 500)
            // set condition to appear button goToTop
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            // remove eventListeners
            window.removeEventListener("scroll", handleScroll);
        };
        // Called Cleanup Function
    }, []);
    //create useEffect to controll scroll action and appear button goToTop

    useEffect(() => {
        return () => {
            img && URL.revokeObjectURL(img)
            console.log(img);
        }
        // clear memory 
    }, [img])

    const handleChooseFile = (e) => {
        const files = e.target.files[0];
        const url = URL.createObjectURL(files);
        //create a URL link for image that be chosen by you
        // console.log(url);

        setImg(url)
        // set URL image
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [Checked, setChecked] = useState([]);
    // create varibles for get information
    var isChecked = (id) => {
        return Checked.includes(id);
    };
    //create varibles for confirm check id
    const handleChecked = (id) => {
        setChecked((prev) => {
            if (!isChecked(id)) {
                return [...prev, id];
            } else {
                return prev.filter((item) => {
                    return item !== id;
                });
            }
        });
    };
    //create a function that store id be chosen by you
    const Submit = (event) => {
        event.preventDefault();
        const listUsers = lists.filter((user) => {
            return Checked.includes(user.id);
        });

        console.log({
            name: name,
            address: { email: email, phoneNumber: phoneNumber },
            checked: Checked,
            listusers: listUsers,
            img: img
        });
    };
    //create a function to submit infor

    return (
        <div>
            <input
                type='file'
                onChange={handleChooseFile}

            />
            {/* create a input type file to choose file  */}
            {
                img && (
                    <div>
                        <img src={img} alt='anh' width='300px' height=' 450px' />
                    </div>
                )
                // create a element to render image
            }
            {goToTop && (
                <button
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}
                    // Scroll to top smooth
                    style={{
                        display: "block",
                        position: "fixed",
                        bottom: 20,
                        right: 10,
                        width: 100,
                        height: 40,
                        background: 'gray'
                    }
                    }
                >
                    Go To Top
                </button>
                // create a element to render button goToTop

            )}


            <form
                onSubmit={Submit}
                style={{
                    display: "flex",
                    width: 400,
                    height: "auto",
                    textAlign: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    border: "1px solid black",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        height: 100,
                        paddingLeft: "16px",
                        paddingRight: "16px",
                    }}
                >
                    <input
                        type="text"
                        placeholder="Enter your name"
                        onChange={(e) => {
                            setName(e.target.value);
                            // get text that you typed into this input
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Enter your email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                            // get text that you typed into this input
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Enter your phone number"
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                            // get text that you typed into this input
                        }}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: 200,
                        textAlign: "start",
                        padding: 16,
                    }}
                >
                    {lists.map((infor) => (
                        <div key={infor.id}>
                            <input
                                type="checkbox"
                                checked={isChecked(infor.id)}
                                // set checked if correct condition
                                onChange={() => handleChecked(infor.id)}
                            />
                            {infor.name}
                        </div>
                        // create a lot of elenments 
                    ))}
                </div>
                <button
                    type="submit"
                    style={{
                        padding: 8,
                        margin: 8,
                    }}
                >
                    Submit
                </button>
            </form>
            <div>
                <button
                    style={{ width: "200px", height: "100px" }}
                    onClick={() => {
                        setRender(!render);
                    }}
                >
                    Load
                </button>
                <input
                    type={"text"}
                    placeholder="abc"
                    onChange={(e) => {
                        document.title = e.target.value;
                    }}
                />
                <div>
                    {render &&
                        tabs.map((tab) => {
                            return (
                                <button
                                    key={tab}
                                    style={
                                        type === tab
                                            ? {
                                                width: "100px",
                                                height: "50px",
                                                backgroundColor: "#abc",
                                            }
                                            : {
                                                width: "100px",
                                                height: "50px",
                                            }
                                    }
                                    onClick={() => {
                                        setType(tab);
                                    }}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                </div>
                <div
                    style={
                        render
                            ? {
                                display: "block",
                            }
                            : { display: "none" }
                    }
                >
                    {posts.map((post) => (
                        <div key={post.id}>
                            <h1>{post.id}</h1>
                            <li style={{ listStyle: "none" }}>
                                {post.title ? post.title : post.body}
                            </li>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Todo;
