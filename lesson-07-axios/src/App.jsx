import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';

const BASE_URL = "http://localhost:3000";//we define main adress of API and we created a shortcut so that we dont have to type the same address every time

function App() {

  const getAllUsers = async() => {
    //axios is a tool we use to pull/get data from API
  const response = await axios.get(BASE_URL + "/users");//sends request to /user's endpoint from API
  console.log(response.data)//it prints the data in the returned response to the terminal with console.log
  }

  //in this function, userId comes as a parameter and is added to the URL.
  const getUserById = async(userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`); {/* BASE_URL + "/users" + userId*/}
    console.log(response.data)
  }

  //this code runs only once when the page loads because we added [] (empty dependency)
  useEffect(() => {
    getAllUsers();//retrieves all users
    getUserById(1);//retrieves the user with ID "1" 
  }, [])

  return (
    <>

    </>
  )
}

export default App