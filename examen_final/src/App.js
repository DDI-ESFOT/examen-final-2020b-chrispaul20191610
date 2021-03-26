import React, { useEffect, useState } from "react";
import "./App.css";
import { Select, Row, Col, Button,Divider,Input } from "antd";
import "antd/dist/antd.css";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    joke: "",
  });
  const [categories, setCategories] = useState([]);

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

  /*categorias*/

  useEffect(() => {
    fetchandsetjokes();
  }, []);

  const fetchandsetjokes = async () => {
    const data = await axios.get(
      "https://api.chucknorris.io/jokes/random?category={category}"
    );

    const jsonList = await data.json()
    console.log('categories',jsonList)
    setCategories( jsonList );
   
  }; fetchandsetjokes();

  const { Option } = Select;

  const category = (value) => {
    /*const categorias = search.data.value,*/
  };

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  function handleMenuClick() {}

  return (
    <>
      <div class="container">
        <div class="title">
          <h1>Chuck Norris Jokes</h1>
        </div>

        <div class="selec">
          <Row justify="center">
            <Col span={12} className="categories">
              <p> Categorias:</p>
            </Col>
            <Col span={12}>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Seleccione una categoria"
                optionFilterProp="children"
                onChange={category}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="">animal</Option>
                <Option value="">career</Option>
                <Option value="">celebrity</Option>
                <Option value="">dev</Option>
                <Option value="">fashion</Option>
                <Option value="">food</Option>
                <Option value="">money</Option>
                <Option value="">movie</Option>
                <Option value="">music</Option>
                <Option value="">political</Option>
                <Option value="">religion</Option>
                <Option value="">science</Option>
                <Option value="">sport</Option>
                <Option value="">travel</Option>
              </Select>
              ,
            </Col>
          </Row>

          <div>
          <Button type="primary" onClick={fetchData}>buscar otra broma</Button>

          </div>

          <div class="chiste">
            <p>{state.joke}</p>
          </div>
        </div>
        <Divider />

        <div class="segunda seccion">
        <Row justify="center" className="buscador">
            <Col span={12} className="categories">
              <p>Palabra Clave:</p>
            </Col>
            <Col span={12}>
            <Input placeholder="ingrese texto" />
              
            </Col>
          </Row>

        </div>
        
      </div>
      
    </>
  );
}

export default App;
