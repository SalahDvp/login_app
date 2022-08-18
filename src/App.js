import React,{ useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser ={
    email: "salah@salah.com",
    password : "amel2020"

  }

  const [user, setUser]= useState({name:"", email:""});
  const [error , setError]= useState("");

  const Login = details =>{
    console.log(details);
  

      if(details.email == adminUser.email && details.password == adminUser.password){
          console.log("logged in");
          setUser({
            name: details.name,
            email: details.email
          });
  }  else{
    console.log("wrong password or email please check");
    setError("wrong password or email please check") ;
  }
}
  const Logout = () => {
    setUser({name:'' , email:''});
  }

  return (
    <div className="App">
      
      {(user.email != '') ? ( 

        <div className= "welcome">

          <h2>welcome, <span>{user.name}</span></h2>  
          <button onClick={Logout}>Logout</button>

        </div>

      ):(
      <LoginForm Login={Login} error={error}  />
      )}

    </div>
  );
}

export default App;
