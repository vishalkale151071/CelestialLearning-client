import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Test = ({course, section}) =>{
    const [testData, setTestData] = useState([])
    useEffect(() => {
        axios.post(
            '/assessment/attemptTest',
            {
                courseName: course,
                sectionName: section
            }
        ).then(res => {
            console.log("Response : ", res.data.testData)
            setTestData(res.data.testData);
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                text: err.response.data.message
            })
        });
    },[]);
    
    return(
        <div>
            Course :{ course }<br></br>
            Section :{ section }
            <br>
            </br>
            {testData.map((question, index) => (
                <div key={question.question} className='question'>
                    {question.question}<br></br>
                    {(question.questionType === "single") ? (
                        <div>
                        {[...Array(question.numOpt).keys()].map((number) => (
                            <div className="options">
                                <input style={{float: 'left'}} type='radio' name={"answer"+index.toString()} value={question.options[number]} /> 
                                {question.options[number]}<br></br>
                            </div>
                        ))}
                        </div>
                    ) : (
                        <div>
                            {[...Array(question.numOpt).keys()].map((number) => (
                            <div className="options">
                                <input style={{width: '5%'}} type='checkbox' name={"answer"+number} value={question.options[number]} /> 
                                {question.options[number]}<br></br>
                            </div>
                             ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Test