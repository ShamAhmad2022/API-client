import "./App.scss";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";
import History from "./Components/History";
import { initialState, reducer } from "./reducers/APIReducer";
import { actionType } from "./reducers/actions";

function App() {
  // const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function inResponse(requestParams) {
      let data;
      let method;

      switch (requestParams.selectValue) {
        case "get":
          try {
            const res = await axios.get(requestParams.inputValue);
            data = res.data;
            method = "get";
          } catch (err) {
            console.log(err);
            throw err;
          }
          break;

        case "post":
          try {
            const obj = JSON.parse(requestParams.bodyValue);
            const res = await axios.post(requestParams.inputValue, obj);
            data = res.data;
            method = "post";
          } catch (err) {
            console.log(err);
            throw err;
          }
          break;

        case "put":
          try {
            const obj = JSON.parse(requestParams.bodyValue);
            const res = await axios.put(requestParams.inputValue, obj);
            data = res.data;
            method = "put";
          } catch (err) {
            console.log(err);
            throw err;
          }
          break;

        case "delete":
          try {
            await axios.delete(requestParams.inputValue);
            data = "record deleted!!";
            method = "delete";
          } catch (err) {
            console.log(err);
            throw err;
          }
          break;
      }

      const historyElement = {
        method: method,
        url: requestParams.inputValue,
        result : data
      }

      dispatch({ type: actionType.CHANGE_DATA, payload: data });
      setLoading(true);
      // setData(data);
      setHistory([...history, historyElement]);
      console.log(historyElement,'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
      console.log(history,'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    }
    inResponse(requestParams);
  }, [requestParams]);

  return (
    <>
      <Header />
      <h3>Current process: </h3>
      <div>Request Method: {requestParams.selectValue}</div>
      <div>URL: {requestParams.inputValue}</div>
      <Form handleApiCall={setRequestParams} setLoading={setLoading} />
      <Results data={state.data} loading={loading} />
      <History history={history} />
      <Footer />
    </>
  );
}

export default App;
