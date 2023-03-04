
import React from 'react';
import { useEffect, useState } from 'react';
import "./components/ThemesDropDownMenu/switch.scss"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import SurveyList from './components/SurveyList/SurveyList';
import SurveyForm from './components/SurveyForm/SurveyForm';
import SurveyQues from './components/SurveyList/SurveyQues';
import Main from './components/Main/Main';

function App() {
    const [theme, setTheme] = useState('white');
  const currentColor = localStorage.getItem('theme-color');


    useEffect(() => {
    setTheme(currentColor)

  }, [theme])
  return (
    <div  className={`App ${theme}`}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='signupPage' element={<SignUp />}/>
        <Route path='/surveys' element={<SurveyList />}/>
        <Route path='/surveyform' element={<SurveyForm />}/>
        <Route path='/surveyform/surveys' element={<SurveyList />}/>
        <Route path='/formques/:id' element={<SurveyQues />}/>
        <Route path='*'>NOT found</Route>
        <Route path='logout' element={<Main/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

