import { useState } from 'react';

function FormWithSelect() {
  
  const [selectedOption, setSelectedOption] = useState('');
  const [showTextBox, setShowTextBox] = useState(false);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setShowTextBox(selectedValue === 'option2');
  };

  return (
    <form>
      <label htmlFor="options">Select an option:</label>
      
      <select id="options" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2 (with text box)</option>
      </select>

      {showTextBox && (
        <div>
          <label htmlFor="textBox">Enter something:</label>
          <input type="text" id="textBox" name="textBox" />
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormWithSelect;