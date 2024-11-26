import React from "react";

const Options = ({ handleJavascript, handlePython, handleGolang }) => {
    const options = [
        {
            text: "Javascript",
            handler: handleJavascript, 
            id: 1,
        },
        {
            text: "Python",
            handler: handlePython, 
            id: 2,
        },
        {
            text: "Golang",
            handler: handleGolang, 
            id: 3,
        },
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));
    return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
