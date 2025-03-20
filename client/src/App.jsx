import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [count, setCount] = useState(0)

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response);
  }

  useEffect(() => {
    fetchAPI();
  });

  return (
    <>
      <div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
