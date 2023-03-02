import React from 'react';
import Navbar from '../Header/navbar';
import SideBar from '../SideBar/SideBar';
import './SurveyList.css'


function SurveyList() {

const data = [
  {
    title: 'Untitled',
    name: 'Product A',
    type: 'Type B',
    description: 'Lorem ipsum dolor',
    start_date: '2022-10-16',
    end_date: '2022-11-08'
  },
  {
    title: 'Untitled',
    name: 'Product B',
    type: 'Type A',
    description: 'Etiam aliquam mi',
    start_date: '2022-06-09',
    end_date: '2022-06-23'
  },
  {
    title: 'Untitled',
    name: 'Product C',
    type: 'Type C',
    description: 'Pellentesque eu',
    start_date: '2022-08-04',
    end_date: '2022-08-30'
  },
  {
    title: 'Untitled',
    name: 'Product D',
    type: 'Type A',
    description: 'Donec eget massa',
    start_date: '2022-05-17',
    end_date: '2022-06-12'
  },
  {
    title: 'Untitled',
    name: 'Product E',
    type: 'Type B',
    description: 'Vestibulum mattis',
    start_date: '2022-12-01',
    end_date: '2022-12-26'
  },
  {
    title: 'Untitled',
    name: 'Product F',
    type: 'Type C',
    description: 'Phasellus fermentum',
    start_date: '2022-09-07',
    end_date: '2022-10-03'
  },
  {
    title: 'Untitled',
    name: 'Product G',
    type: 'Type B',
    description: 'Curabitur quis',
    start_date: '2022-06-27',
    end_date: '2022-07-21'
  },
  {
    title: 'Untitled',
    name: 'Product H',
    type: 'Type A',
    description: 'Nam vel gravida',
    start_date: '2022-08-12',
    end_date: '2022-09-06'
  },
  {
    title: 'Untitled',
    name: 'Product I',
    type: 'Type B',
    description: 'Vestibulum ante ipsum',
    start_date: '2022-11-12',
    end_date: '2022-12-07'
  }
]
  const ren = data.map((item)=>{
    return (
          <ul>
      <li>{item.name}</li>
      <li>{item.description}</li>
      <li>{item.title}</li>
      <li>{item.start_date}</li>
      <li>{item.end_date}</li>
      <li><img src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png" alt="edit-icon" /> <img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="delete-icon" /> </li>
            </ul>
    )
  })

  return (
    <>
      <Navbar />
      <div className='xoxo'>
        <SideBar />
        <main>
          <div className='search-bar'>
            <div>
              <h3>
              Survey List
              </h3>
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/2811/2811790.png" alt="search-icon" />
                <input type="text" />
              </div>
            </div>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/8550/8550935.png" alt="burger-icon" />
              <img src="https://cdn-icons-png.flaticon.com/512/57/57164.png" alt="filter-icon" />
              <button>create</button>
            </div>
          </div>
          <div>
            <ul>
              <li>Name</li>
              <li>Descripton</li>
              <li>Title</li>
              <li>Start Date</li>
              <li>End Date</li>
              <li>Actions</li>
            </ul>
            <div className='ul-items'>
            <ul>
              {ren}
            </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default SurveyList