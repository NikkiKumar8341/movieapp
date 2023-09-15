import React, { useState } from 'react'

const FormData = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [checkboxes, setCheckboxes] = useState([]);
  
    // Function to toggle the "Select All" checkbox
    const handleSelectAll = () => {
      setSelectAll(!selectAll);
      setCheckboxes((prevCheckboxes) =>
        selectAll ? [] : ['item1', 'item2', 'item3'] // Replace with your list of items
      );
    };
  
    // Function to handle individual checkbox changes
    const handleCheckboxChange = (item) => {

      console.log(item,"ihihih");

      setCheckboxes((prevCheckboxes) =>
        prevCheckboxes.includes(item)
          ? prevCheckboxes.filter((cb) => cb !== item)
          : [...prevCheckboxes, item]
      );
      setSelectAll(false);
    };
  
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAll}
        />
        Select All
      </label>
      <ul>
        {['item1', 'item2', 'item3'].map((item) => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                checked={checkboxes.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FormData