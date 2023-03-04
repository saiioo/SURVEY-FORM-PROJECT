import React from 'react'

function SurveyQues(){
  // const params = useParams()
  // axios.get(`formquestion/${params}`)
  // .then(function (response) {
  //   console.log(response);
  // })
  // .then(data=>setDet(data))
  // .catch(function (error) {
  //   console.log(error);
  // })
  const questions = [
    {
      question: "What is your favorite color?",
      option1: "Blue",
      option2: "Red",
      option3: "Green"
    },
    {
      question: "What is your favorite food?",
      option1: "Pizza",
      option2: "Sushi",
      option3: "Burgers"
    },
    {
      question: "What is your favorite movie?",
      option1: "The Shawshank Redemption",
      option2: "The Godfather",
      option3: "The Dark Knight"
    }
  ];
  const data = questions.map((item)=>{
    return(
      <div id={item.id}>
        {item.question}
        <ul>
          <li>{item.option1}</li>
          <li>{item.option2}</li>
          <li>{item.option3}</li>
        </ul>
      </div>
    )
  })  

  return(
    <div>
      {data}
    </div>
  )
}
export default SurveyQues;