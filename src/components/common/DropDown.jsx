import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel ,styled} from '@mui/material';
const Menu=styled(FormControl)`
  background:#ffffff;
  height:24px;
  width:34%;
  border-radius:1px;
  display:flex;
  align-item:center;
  justify-content:space-between;
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
    <Menu  style={{width: '45%'}}>
      <InputLabel sx={{padding: '-0.5px 0px'}} ></InputLabel>


      <OptionSelect  style={{minHeight: '0.5375em'}}
        labelId="simple-dropdown-label"
        id="simple-dropdown"
        value={selectedOption}
        onChange={handleChange}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="option1">Hoolywood</MenuItem>
         <MenuItem value="option2">Boolywood</MenuItem>
        <MenuItem value="option3">South</MenuItem>
      </OptionSelect>
    </Menu>
  );
};

export default DropDown;