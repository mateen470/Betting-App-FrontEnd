import React from "react";
import Select from "react-select";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
const customStyles = {
  control: () => ({
    // none of react-select's styles are passed to <Control />
  }),
  menu: () => ({
    // none of react-select's styles are passed to <Control />
    backgroundColor: "#212134",
    borderRadius: "2rem",
    zIndex: "10000000",
    position: "sticky",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? "#11131C" : "#212134",
    borderRadius: "2rem",
    position: "sticky",
    zIndex: "10000000",
  }),
  indicatorSeparator: (provided, state) => null,
  dropdownIndicator: (provided, state) => null,
};

const techCompanies = [
  {
    label: (
      <img
        height="35px"
        width="35px"
        style={{ borderRadius: "50%" }}
        src="https://i.postimg.cc/YS05SdwQ/Ethereum.png"
      />
    ),
    value: 1,
  },
  {
    label: (
      <img
        height="35px"
        width="35px"
        style={{ borderRadius: "50%" }}
        src="https://i.postimg.cc/9XYFrPgz/Bitcoin.png"
        alt="#"
      />
    ),
    value: 2,
  },
  {
    label: (
      <img
        height="35px"
        width="35px"
        style={{ borderRadius: "50%" }}
        src="https://i.postimg.cc/J4TrQrLL/Cent.png"
        alt="#"
      />
    ),
    value: 3,
  },
  {
    label: (
      <img
        height="35px"
        width="35px"
        style={{ borderRadius: "50%" }}
        src="https://i.postimg.cc/fyCwpZSY/Average-Price-1.png"
        alt="#"
      />
    ),
    value: 4,
  },
  {
    label: (
      <img
        height="35px"
        width="35px"
        style={{ borderRadius: "50%" }}
        src="https://i.postimg.cc/YS05SdwQ/Ethereum.png"
        alt="#"
      />
    ),
    value: 5,
  },
  {
    label: (
      <img
        height="35px"
        width="35px"
        style={{ borderRadius: "50%" }}
        src="https://i.postimg.cc/YS05SdwQ/Ethereum.png"
        alt="#"
      />
    ),
    value: 6,
  },
];

const Dropdown = () => {
  return (
    <Select
      styles={customStyles}
      placeholder={
        <img src="https://i.postimg.cc/YS05SdwQ/Ethereum.png" alt="#" />
      }
      clearable={false}
      options={techCompanies}
    />
  );
};

export default Dropdown;
