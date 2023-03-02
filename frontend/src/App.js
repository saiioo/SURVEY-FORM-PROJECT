import React from 'react';
import { useEffect, useState } from 'react';
import SurveyForm from './components/SurveyForm/SurveyForm';
// import CreateSurvey from './components/SurveyForm/SurveyForm';
// import SurveyList from './components/SurveyList/SurveyList';
import "./components/ThemesDropDownMenu/switch.scss"

function App() {
  const [theme, setTheme] = useState('white');
  const currentColor = localStorage.getItem('theme-color');


  useEffect(() => {
    setTheme(currentColor)

  }, [theme])
  return (
    <div className={`App ${theme}`}>
      <SurveyForm/>
    </div>
  );
}
export default App;

