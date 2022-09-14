import { useState } from "react";

function Greeter(){

    const [text, setText] = useState('');
    const [showText, setShowText] = useState('');

    const checkText = (e) =>{
        const value = e.target.value;

        const rule = new RegExp('[!@#$%^&*()_+-/.,;:]');

        if((value.trim().length || value.length === 0) && !rule.test(value))
            setText(e.target.value);
    }

    return(
        <div className="greeter">
            <label htmlFor="input_text">Name:</label>
            <input placeholder="Type name" type='text' id='input_text' className="input-text" value={text} 
                onChange={checkText}></input>
            <button className="btn" onClick={() => setShowText(text)}>Show name</button>
            {showText !== '' ? <span>{showText} rytas</span> : null}   
        </div>
    );
}

export default Greeter;