import React, { useState } from "react";
import Select from "react-tailwindcss-select";

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

const Option = ({ option, isSelected, onSelect }) => {
  const label = option.label;
  const value = option.value;
  const isMulti = true;

  const classes = `
    flex items-center cursor-pointer py-2 px-4 rounded-md text-sm font-medium
    ${isSelected ? "bg-blue-500 text-white" : "text-gray-700"}
  `;

  if (isSelected && isMulti && selectedOptions.length > 3) {
    return (
      <div className={classes}>
        <span className="text-gray-500 text-xs">+ {selectedOptions.length - 3} more</span>
      </div>
    );
  }

  return (
    <div className={classes} onClick={() => onSelect(value)}>
      <span>{label}</span>
    </div>
  );
};

const SelectMultiple = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (values) => {
    setSelectedOptions(values);
  };

  return (
    <Select
      value={selectedOptions}
      onChange={handleChange}
      options={options}
      isMultiple={true}
      Option={Option}
      // Add custom styles for dropdown (optional)
      dropdownIndicatorStyles={{
        color: "gray-500", // Adjust dropdown indicator color
      }}
      dropdownMenuStyles={{
        // Add custom styles for dropdown menu (optional)
      }}
    />
  );
};

export default SelectMultiple;
