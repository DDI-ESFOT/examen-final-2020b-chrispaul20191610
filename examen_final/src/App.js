import React, { useEffect, useState } from "react";
import "./App.css";
import { Select, Row, Col } from "antd";
import 'antd/dist/antd.css';
import axios from "axios";

function App() {
  const [state, setState] = useState({
    joke: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(result.data.value);
    setState({
      ...state,
      joke: result.data.value,
    });
  };

  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }

  function handleMenuClick() {
    
  }

  return (
    <>
      <div class="container">
        <div class="title">
          <h1>Chuck Norris Jokes</h1>
        </div>

        <div class="selec">
          <Row justify="center">
            <Col span={12} >
              <p> Categorias:</p>
            </Col>
            <Col span={12} >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Seleccione una categoria"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value=""></Option>
                <Option value=""></Option>
                <Option value=""></Option>
              </Select>
              ,
            </Col>
          </Row>

          <div class="chiste">
            <p>{state.joke}</p>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
