import React, {useEffect, useState} from 'react';
import './App.css';
import { Select,Row, Col } from 'antd';
import axios from 'axios';


function App() {
  const [state, setState] = useState({
    joke:''
  });

  useEffect(() => {
    fetchData();
    
  }, []);

  const fetchData = async () =>{
    const result = await axios.get('https://api.chucknorris.io/jokes/random')
    console.log(result.data.value)
    setState({
      ...state,
      joke:result.data.value
    })
  }
  
  
  return (
    

    <div class="container">
      <div class="title">
        <h1>Chuck Norris Jokes</h1>
      </div>
      <div className="selec" >
        <Row>
          <Col span={12}>
            <a>Categorias</a>
          </Col>
          <Col span ={12}>
            <h1>{state.joke}</h1>

          </Col>
          

        </Row>
             
      </div>

      <div>

      </div>
  


    </div>
  );
}


export default App;
