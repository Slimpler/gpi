import React, { useState } from "react";
import Select from "react-select";
import { Container } from "./Select.styled";

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    borderRadius: "20px",
    background: "#F9F9F9;",
    marginTop: "5px",
    padding: "2px 4px"
  }),

  input: (provided, state) => ({
    ...provided,
    height: "100%",
    padding: "0.4rem 0"
  }),

  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none"
  }),

  indicatorsContainer: (provided, state) => ({
    ...provided,
    color: "#131313"
  }),

  option: (provided, state) => ({
    ...provided,
    background: state.isFocused ? "#33BD86 " : "#F9F9F9",
    color: state.isFocused ? "#FFFFFF" : "#131313",
    borderRadius: "20px",
    cursor: "pointer"
  }),

  control: (provided, state) => ({
    ...provided,
    borderRadius: "20px",
    border: "2px solid #f0f0f0 !important",
    boxShadow: "none",
    cursor: "pointer",
    padding: "0",
    margin: "0",
    height: "40px"
  }),

  valueContainer: (provided, state) => ({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    alignContent: "center",
    padding: "0 16px",
    height: "40px"
  })
};

const options = [
  { value: "1", label: "Planta" },
  { value: "2", label: "Contrato" },
  { value: "3", label: "Codigo" }
];

export const getContract = (user) => {
    return options ? options[user.gender - 1] : null;
  };

  const SelectContract = () => {
    const [contract, setContrat] = useState(null);
  
    return (
      <Container>
        <Select
          isSearchable={false}
          noOptionsMessage={() => "No encontrado"}
          value={contract}
          onChange={(e) => setContrat(e)}
          styles={customStyles}
          placeholder="Tipo de contrato"
          options={options}
          required
        />
      </Container>
    );
  };
  
  export default SelectContract;