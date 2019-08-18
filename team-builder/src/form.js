
import React, {useState} from 'react';

function form(){
    const[user,setUser] = useState({username:"",email:"",role:""})
    const handleChange = event => {setUser({...user, [event.target.name]: event.target.value})}
    
    const handleSubmit =  event =>{
        event.preventDefault()
        console.log(user.username)
        console.log(user.email)
        console.log(user.role)
      }

return (
    <div className="App">
      {console.log(user)}
      <form onSubmit={event => handleSubmit(event)}>
      <label>
        <input
        type="text"
        name="username"
        value={user.username}
        onChange={event => handleChange(event)}
        />
        <input
        type="text"
        name="email"
        value={user.email}
        onChange={event => handleChange(event)}
        />
        <input
        type="text"
        name="role"
        value={user.role}
        onChange={event => handleChange(event)}
        />
      </label>
      </form>

    </div>
  )
};