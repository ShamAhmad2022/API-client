import "./App.scss";
import { useState } from "react";
import axios from "axios";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const [loading, setLoading] = useState(true);

  async function callApi(requestParams) {

    let data = {};
    switch (requestParams.selectValue) {
      case "get":
        try {
          const res = await axios.get(requestParams.inputValue);
          data = res.data;
        } catch (err) {
          console.log(err);
        }
      break;
     
      case "post":
        try {
          const obj=requestParams.bodyValue;
          const res = await axios.post(requestParams.inputValue, JSON.parse(obj));
          data = res.data;
        } catch (err) {
          console.log(err);
        }
      break;
      
      case "put":
        try {
          const obj=requestParams.bodyValue;
          const res = await axios.put(requestParams.inputValue, JSON.parse(obj));
          data = res.data;
        } catch (err) {
          console.log(err);
        }
      break;
      
      case "delete":
        try {
          await axios.delete(requestParams.inputValue);
          data = 'record deleted!!';
        } catch (err) {
          console.log(err);
        }
      break;
    }
    
    setData(data);
    setRequestParams(requestParams);
    setLoading(true);
  }

  return (
    <>
      <Header />
      <h3>Current process: </h3>
      <div>Request Method: {requestParams.selectValue}</div>
      <div>URL: {requestParams.inputValue}</div>
      <Form handleApiCall={callApi} setLoading={setLoading}/>
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
