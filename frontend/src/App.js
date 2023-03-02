// import React from 'react';
// // import { useEffect, useState } from 'react';
// // import SurveyForm from './components/SurveyForm/SurveyForm';
// // import SurveyList from './components/SurveyList/SurveyList';
// // import CreateSurvey from './components/SurveyForm/SurveyForm';
// // import SurveyList from './components/SurveyList/SurveyList';
// // import "./components/ThemesDropDownMenu/switch.scss"

// function App() {
// //   const [theme, setTheme] = useState('white');
// //   const currentColor = localStorage.getItem('theme-color');

// {/* < SurveyList/> */}

// //   useEffect(() => {
// //     setTheme(currentColor)

// //   }, [theme])
//   return (
//           <div className={`App ${theme}`}>
//   <SurveyForm/>
// </div>
//   );
// }
// export default App;







import React from 'react';

import { useEffect, useState } from 'react';
import SurveyForm from './components/SurveyForm/SurveyForm';
import SurveyList from './components/SurveyList/SurveyList';
import CreateSurvey from './components/SurveyForm/SurveyForm';

import "./components/ThemesDropDownMenu/switch.scss"
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import SurveyForm from './components/SurveyForm/SurveyForm';
import Login from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
// import SurveyList from './components/SurveyList/SurveyList';

function App() {
    const [theme, setTheme] = useState('white');
  const currentColor = localStorage.getItem('theme-color');
  

    useEffect(() => {
    setTheme(currentColor)

  }, [theme])
  return (
    <div  className='App'>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LandingPage/>}/> */}
        <Route path="/" element={<Login/>}/>
        {/* <Route path='/SurveyList' element={<SurveyList />}/> */}

        <Route path="/Reg" element={<SignUp/>}/>
        {/* <Route path='/' element={<SurveyList/>} /> */}
        {/* <Route path='form' element={<SurveyForm/>} /> */}
        <Route/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './components/LogIn/LogIn';
// import SurveyList from './components/SurveyList/SurveyList';



// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Login} />
//         <Route path="/SurveyList" component={SurveyList} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;

