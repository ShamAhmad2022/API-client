import "./Form.scss";
import { useState } from "react";

function Form({ handleApiCall, setLoading}) {
  const [selectedValue, setSelectedValue] = useState("");
  const [showTextBox, setShowTextBox] = useState(false);

  const handleselectedValue = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    setShowTextBox(value === "post" || value === "put");
  };

  function handleSubmit(e) {
    e.preventDefault();

    let formData = {};

    if(showTextBox){
      formData = {
        selectValue : e.target.elements.methods.value,
        inputValue : e.target.elements.url.value,
        bodyValue : e.target.elements.body.value,
      };
    }else{
      formData = {
        selectValue : e.target.elements.methods.value,
        inputValue : e.target.elements.url.value
      };
    }

    handleApiCall(formData);
    setLoading(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <select id="methods" value={selectedValue} onChange={handleselectedValue}>
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="put">PUT</option>
            <option value="delete">DELETE</option>
          </select>
          <input name="url" type="text" style={{ width: '300px'}}/>
          <button type="submit">GO!</button>
        </label>

        {showTextBox && (
          <>
            <label>Body:</label>
            <textarea id="body" name="body" rows={10} cols={60}/>
          </>
        )}

      </form>
    </>
  );
}

export default Form;
