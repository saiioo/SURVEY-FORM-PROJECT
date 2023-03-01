import React from 'react';
import {useEffect,useState} from 'react';
import CreateSurvey from './components/SurveyForm/SurveyForm';
import "./components/ThemesDropDownMenu/switch.scss"

function App() {
    const  [theme,setTheme] = useState('white');
    const currentColor = localStorage.getItem('theme-color');
    
   
    useEffect(()=>{
      setTheme(currentColor)
      
    },[theme])
return (
<div className={`App ${theme}`}>
  <CreateSurvey/>
</div>
);
}

export default App;