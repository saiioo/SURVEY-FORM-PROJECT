import "./CreateQuestions.css"
import  {BsArrowLeft} from 'react-icons/bs'
const Questions = ()=>{
    return(
        <div className="questions-container">
            <div className="questions-add">
                <div className="backpageArrow">
                    <BsArrowLeft /><p>Create Questions</p>
                </div>
                <div className="newQuestionContainer">
                    <input type="text" name="question" id="question" placeholder="write Question Here"/>
                    <button>Add Option</button>
                </div>
                <div className="options-add">

                </div>
                
            </div>
            
        </div>
    )
}
export default Questions;