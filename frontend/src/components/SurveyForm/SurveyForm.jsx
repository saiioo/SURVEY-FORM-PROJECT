import Navbar from "../Header/navbar";
import SideBar from "../SideBar/SideBar";


// const CreateSurvey = ()=>{

//     return(
//         <div className="body">
//             <div>
//                 <Navbar/>
//                 <SideBar/>
//             </div>
//         </div>
//     )
// }



// export default CreateSurvey;



import React, { useState } from 'react';
// import Header from '../Header/Header';
// import Sidebar from '../SideBar/Sidebar';
import './SurveyForm.css';

function SurveyForm() {
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    const [otherCriteria, setOtherCriteria] = useState('');
    const [surveyType, setSurveyType] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Handle form submission
    };

    const handleImageDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setImage(file);
    };

    const handleImageCancel = () => {
        setImage(null);
    };

    return (
        <div>
            <Navbar />
            <div className="xoxo">
                <SideBar />
                <div className="survey-form">
                    <div className='head-btn-div'>
                        <h1>Create Survey</h1>
                        <div className='smt-cancel-btn-div'>
                            <button id='submit-btn-cancel' >cancel</button>
                            <button id='submit-btn-div' onSubmit={handleSubmit} type="submit">Submit</button>
                        </div>
                    </div>
                    <form>
                        <div id='name-div' className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div id='start-date-div' className="form-group">
                            <label htmlFor="start-date">Start Date:</label>
                            <input type="date" id="start-date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
                        </div>
                        <div id='end-date-div' className="form-group">
                            <label htmlFor="end-date">End Date:</label>
                            <input type="date" id="end-date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
                        </div>
                        <div id='desc-div' className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
                        </div>
                        <div id='other-criteria-div' className="form-group">
                            <label htmlFor="other-criteria">Other Criteria:</label>
                            <textarea id="other-criteria" value={otherCriteria} onChange={(event) => setOtherCriteria(event.target.value)} />
                        </div>
                        <div id='survey-type-div' className="form-group">
                            <label htmlFor="survey-type">Survey Type:</label>
                            <select id="survey-type" value={surveyType} onChange={(event) => setSurveyType(event.target.value)}>
                                <option value="">Select a type</option>
                                <option value="Type A">Type A</option>
                                <option value="Type B">Type B</option>
                                <option value="Type C">Type C</option>
                            </select>
                        </div>
                        <div id='image-div' className="form-group">
                            <label htmlFor="image">Image:</label>
                            {image ? (
                                <div className="image-preview">
                                    <img src={URL.createObjectURL(image)} alt="Survey" />
                                    <button type="button" onClick={handleImageCancel}>Cancel</button>
                                </div>
                            ) : (
                                <div className="image-input" onDrop={handleImageDrop}>
                                    <input type="file" accept="image/*" onChange={(event) => setImage(event.target.files[0])} />
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SurveyForm;



























