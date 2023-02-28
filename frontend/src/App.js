
// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import QuestionForm from './QuestionForm';
// import QuestionList from './QuestionList';

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Create Questions</Link>
//           </li>
//           <li>
//             <Link to="/list">Question List</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<QuestionForm />} />
//         <Route path="/list" element={<QuestionList />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import React from 'react';
import RegisterForm from './RegisterForm';

function App() {
return (
<div className="App">
<RegisterForm />
</div>
);
}

export default App;