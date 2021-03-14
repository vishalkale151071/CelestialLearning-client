import axios from "axios";
import { useEffect, useState } from "react";
import Question from './questions';
const CreateTest = () =>{
    
    const [questions, setQuestions] = useState(5);
    const numbers = [];
    const enumeOptions = {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D",
        "5": "E",
        "6": "F",
    }

    for(let i=1;i<=questions;i++){
        numbers.push(i)
    }
    useEffect( () => {

    }, [questions]);
    
    function updateQuestions(){
        const q = document.getElementById('questions').value;
        setQuestions(q)
    }

    async function sendQuestions(){
        var ques = []
        const courseName = document.getElementById('courseName').value;
        const sectionName = document.getElementById('sectionName').value;
        for(let i=1;i<=questions;i++){
            var num = i.toString();
            var q = document.getElementById("question"+num).value;
            var type = document.getElementById("questionType"+num).value;
            var numOpt = document.getElementById("options"+num).value;
            var options = [];
            for(let x=1;x<=numOpt;x++){
                options.push(document.getElementById("option"+num+enumeOptions[x.toString()]).value);
            }
            var answer = document.getElementById("answer"+num).value;
            var obj = {
                question: q,
                questionType: type,
                numOpt: numOpt,
                options: options,
                answer: answer
            }
            ques.push(obj);
        }
        const reqBody = {
            courseName: courseName,
            sectionName: sectionName,
            questions: ques
        }

        await axios.post(
            "/assessment/createQuiz",
            reqBody
        ).then(res => {
            console.log("Result : ", res);
        }).catch(err => {
            console.log("Error : ", err);
        });
    }

    return(
        <div key="test-form">
            <label>Questions : </label>
            <select id="questions" onChange={updateQuestions}>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
            </select>
            <form id="questionForm">
                <label htmlFor='courseName'>Course Name : </label>
                <input type='text' id='courseName'/> <br></br>
                <label htmlFor='sectionName'>Section Name : </label>
                <input type='text' id='sectionName'/>
                {numbers.map((number) => (<Question key={'q'+number.toString()} number={number}></Question>))}
                <button type="button" onClick={ sendQuestions }>Submit</button>
            </form>
        </div>
    );
}

export default CreateTest