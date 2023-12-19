import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel ,styled} from '@mui/material';



const Menu=styled(FormControl)`
  background:#ffffff;
  height:25px;
  width:30%;
  border-radius:1px;
  display:flex;
  align-item:center;
  justify-content:space-between;
  padding: 4.5px 14p
  cursor:pointer;
`
const OptionSelect=styled(Select)`
  font-size:10px;
`
const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Menu>
      <InputLabel id="simple-dropdown-label"></InputLabel>
      <OptionSelect
        labelId="simple-dropdown-label"
        id="simple-dropdown"
        value={selectedOption}
        onChange={handleChange}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="option1">Option 1</MenuItem>
         <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </OptionSelect>
    </Menu>
  );
};

export default DropDown;