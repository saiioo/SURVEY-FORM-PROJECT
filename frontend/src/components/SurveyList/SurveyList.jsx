import React from 'react';
import Navbar from '../Header/navbar';
import SideBar from '../SideBar/SideBar';
import './SurveyList.css'
import {Link} from 'react-router-dom'


function SurveyList() {
if(localStorage.getItem("token")===null){
  alert("Please Login first");
}
  const data =[
    {
    id: 1,
    title: 'Untitled',
    name: 'Product A',
    type: 'Type B',
    description: 'Lorem ipsum dolor',
    start_date: '2022-10-16',
    end_date: '2022-11-08'
    },
    {
      id: 1,
      title: 'Untitled',
      name: 'Product A',
      type: 'Type B',
      description: 'Lorem ipsum dolor',
      start_date: '2022-10-16',
      end_date: '2022-11-08'
      },
      {
        id: 1,
        title: 'Untitled',
        name: 'Product A',
        type: 'Type B',
        description: 'Lorem ipsum dolor',
        start_date: '2022-10-16',
        end_date: '2022-11-08'
        },
        {
          id: 1,
          title: 'Untitled',
          name: 'Product A',
          type: 'Type B',
          description: 'Lorem ipsum dolor',
          start_date: '2022-10-16',
          end_date: '2022-11-08'
          },
          {
            id: 1,
            title: 'Untitled',
            name: 'Product A',
            type: 'Type B',
            description: 'Lorem ipsum dolor',
            start_date: '2022-10-16',
            end_date: '2022-11-08'
            },
            {
              id: 1,
              title: 'Untitled',
              name: 'Product A',
              type: 'Type B',
              description: 'Lorem ipsum dolor',
              start_date: '2022-10-16',
              end_date: '2022-11-08'
              },
              {
                id: 1,
                title: 'Untitled',
                name: 'Product A',
                type: 'Type B',
                description: 'Lorem ipsum dolor',
                start_date: '2022-10-16',
                end_date: '2022-11-08'
                }
                ,    {
                  id: 1,
                  title: 'Untitled',
                  name: 'Product A',
                  type: 'Type B',
                  description: 'Lorem ipsum dolor',
                  start_date: '2022-10-16',
                  end_date: '2022-11-08'
                  }
                  ,    {
                    id: 1,
                    title: 'Untitled',
                    name: 'Product A',
                    type: 'Type B',
                    description: 'Lorem ipsum dolor',
                    start_date: '2022-10-16',
                    end_date: '2022-11-08'
                    },    {
                      id: 1,
                      title: 'Untitled',
                      name: 'Product A',
                      type: 'Type B',
                      description: 'Lorem ipsum dolor',
                      start_date: '2022-10-16',
                      end_date: '2022-11-08'
                      },    {
                        id: 1,
                        title: 'Untitled',
                        name: 'Product A',
                        type: 'Type B',
                        description: 'Lorem ipsum dolor',
                        start_date: '2022-10-16',
                        end_date: '2022-11-08'
                        },
                        {
                          id: 1,
                          title: 'Untitled',
                          name: 'Product A',
                          type: 'Type B',
                          description: 'Lorem ipsum dolor',
                          start_date: '2022-10-16',
                          end_date: '2022-11-08'
                          },    {
                            id: 1,
                            title: 'Untitled',
                            name: 'Product A',
                            type: 'Type B',
                            description: 'Lorem ipsum dolor',
                            start_date: '2022-10-16',
                            end_date: '2022-11-08'
                            },    {
                              id: 1,
                              title: 'Untitled',
                              name: 'Product A',
                              type: 'Type B',
                              description: 'Lorem ipsum dolor',
                              start_date: '2022-10-16',
                              end_date: '2022-11-08'
                              }
  ]


  function handleClick(){
  }
  const ren = data.map((item) => {
    return (
      <tr onClick={handleClick}>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.title}</td>
        <td>{item.start_date}</td>
        <td>{item.end_date}</td>
        <td><img src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png" alt="edit-icon" /> <img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="delete-icon" /> </td>
      </tr>
    )
  })  

  return (
    <>
      <Navbar />
      <div className='xoxo'>
        <SideBar />
        <main>
          <div className='search-bar'>
            <div className='nb-right'>
              <h3>
                Survey List
              </h3>
              <img src="https://cdn-icons-png.flaticon.com/512/2811/2811790.png" alt="search-icon" />
              <input type="text" />
            </div>
            <div className='nb-left'>
              <img src="https://cdn-icons-png.flaticon.com/512/8550/8550935.png" alt="burger-icon" />
              <img src="https://cdn-icons-png.flaticon.com/512/57/57164.png" alt="filter-icon" />
              <Link to='/form' ><button>create</button></Link>
            </div>
          </div>
          <div>
            <table class="my-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Title</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {ren}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  )
}

export default SurveyList