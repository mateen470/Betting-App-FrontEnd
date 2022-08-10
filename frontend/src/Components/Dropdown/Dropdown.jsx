import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
const customStyles = {
    control: () => ({
        // none of react-select's styles are passed to <Control />
        
      }),
      menu: () => ({
        // none of react-select's styles are passed to <Control />
        backgroundColor:'#212134',
      }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected ? '#11131C' : '#212134',
      }),
      indicatorSeparator: (provided, state) => null,
      dropdownIndicator: (provided, state) => null
  }

const techCompanies = [
  { label: <img height="43px" width="37px" src="https://i.postimg.cc/YS05SdwQ/Ethereum.png" />, value: 1 },
  { label: <img height="47px" width="43px" src="https://i.postimg.cc/9XYFrPgz/Bitcoin.png" />, value: 2 },
  { label: <img height="30px" width="30px" src="https://i.postimg.cc/J4TrQrLL/Cent.png" />, value: 3 },
  { label: <img height="41px" width="37px" src="https://i.postimg.cc/fyCwpZSY/Average-Price-1.png" />, value: 4 },
  { label: <img height="30px" width="30px" src="https://i.postimg.cc/YS05SdwQ/Ethereum.png" />, value: 5 },
  { label: <img height="30px" width="30px" src="https://i.postimg.cc/YS05SdwQ/Ethereum.png" />, value: 6 },
];

const Dropdown = () =>{


return (
        <Select
        styles={customStyles}
        placeholder={<img  src="https://i.postimg.cc/YS05SdwQ/Ethereum.png" />}
        clearable={false}
        options={ techCompanies } />


);
} 

export default Dropdown;