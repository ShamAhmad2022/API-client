import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";

function App() {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function inResponse(requestParams) {
      let data;

      switch (requestParams.selectValue) {
       
        case "get":
          try {
            const res = await axios.get(requestParams.inputValue);
            console.log(res.data);
            data = res.data;
          } catch (err) {
            console.log(err);
            throw err;
          }
        break;
       
        case "post":
          try {
            const obj=JSON.parse(requestParams.bodyValue);
            const res = await axios.post(requestParams.inputValue, obj);
            data = res.data;
          } catch (err) {
            console.log(err);
            throw err;
          }
        break;
        
        case "put":
          try {
            const obj=JSON.parse(requestParams.bodyValue);
            const res = await axios.put(requestParams.inputValue, obj);
            data = res.data;
          } catch (err) {
            console.log(err);
            throw err;
          }
        break;
        
        case "delete":
          try {
            await axios.delete(requestParams.inputValue);
            data = 'record deleted!!';
          } catch (err) {
            console.log(err);
            throw err;
          }
        break;
      }
      
      setData(data);
      setLoading(true);
    }
    inResponse(requestParams);
  },[requestParams]);

  return (
    <>
      <Header />
      <h3>Current process: </h3>
      <div>Request Method: {requestParams.selectValue}</div>
      <div>URL: {requestParams.inputValue}</div>
      <Form handleApiCall={setRequestParams} setLoading={setLoading}/>
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
