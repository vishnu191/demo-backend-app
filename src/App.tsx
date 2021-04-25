import React,{useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';




function App() {
  const [data,setData] = useState("")

const getData = () => {
 axios.get("http://localhost:8080/hello-world").then((response) => {
  console.log(response);
  setData(response.data.name)
}
)
};
useEffect( ()=>{
  getData();
},[])

  return (
    <div className="App">
     Hello {data} ! Welcome to the first tutorial!!
    </div>
  );
}


export default App;
