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

  const createUser = async (newUser) => {//we wait with await because it works async
    const response = await axios.post(`${BASE_URL}/users`, newUser);//we use the "post" to add data
    console.log("response", response.data)
  }

  const updateUser = async (userId, updatedUser) => {
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);//we use "put" to update a data
  }

  //this code runs only once when the page loads because we added "[]" (empty dependency)
  useEffect(() => {
    // getAllUsers();//retrieves all users
    // getUserById(1);//retrieves the user with ID "1" 

    // const newUser = {
    //   "username" : "Fatma",
    //   "password" : "8798"
    // }//we created a new user, but we did not add id because local server will assign automatically

    createUser(newUser);

    //we defined new values by assigning parameters
    updateUser("2", {
      "username" : "cenk",
      "password" : "7890"
    })
  }, [])

  return (
    <>

    </>
  )
}

export default App