import { useEffect, useState } from "react"
import '../styles/tests.css';
const Question = ({ number }) => {
    const [options, setOptions] = useState(4);
    var array = [];
    const enumeOptions = {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D",
        "5": "E",
        "6": "F",
    }
    for(let i=1; i<=options; i++){
        array.push(i);
    }

    useEffect(() => {

    }, [options]);

    function changeOptions(){
        setOptions(document.getElementById("options" + number).value);
    }

    return (
        <div id={number} className='question'>
            <label htmlFor={'question' + number}>{'Question ' + number} : </label>
            <input type='text' id={'question' + number} /><br></br>
            <label htmlFor={"questionType"+number}>Type : </label>
            <select id={"questionType"+number}>
                <option value="single">Single</option>
                <option value="multiple">Multiple</option>
            </select><br></br>
            <label>Options : </label>
            <select id={"options" + number} defaultValue='4' onChange={ changeOptions }>
                <option value='2'>2</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
            </select><br></br>
            <div className="options">
                {array.map((item) => (
                    <div key={"opt"+ number.toString()  +enumeOptions[item.toString()]} className="option">
                        <label htmlFor={"option"+ enumeOptions[item.toString()]}>{enumeOptions[item.toString()] + " : "}</label>
                        <input type='text' id={"option"+ number.toString()+enumeOptions[item.toString()]}/><br></br>
                    </div>
                ))}
            </div>
            <div className="answer">
                <label htmlFor={"answer" + number}>Answer/s : </label>
                <input type='text' id={"answer" + number}/>
            </div>
        </div>
    )
}

export default Question