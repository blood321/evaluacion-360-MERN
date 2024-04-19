import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "fox", label: "Fox" },
  { value: "Butterfly", label: "Butterfly" },
  { value: "Honeybee", label: "Honeybee" },
  { value: "miel", label: "Miel" },
  { value: "yuca", label: "Yuca" },
  { value: "avion", label: "Avión" },
  { value: "xd", label: "Xd" },
  { value: "holaaaaa", label: "Holaaaaa" },
  { value: "mjummmm", label: "Mjummm" },
];

const SelectMultiple = ({ value, onChange }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      // Add custom styles for dropdown (optional)
      styles={{
        dropdownIndicator: (provided) => ({
          ...provided,
          color: "gray",
        }),
        menu: (provided) => ({
          ...provided,
          maxHeight: "400px",
          overflowY: "auto",
        }),
      }}
    />
  );
};

export default SelectMultiple;
