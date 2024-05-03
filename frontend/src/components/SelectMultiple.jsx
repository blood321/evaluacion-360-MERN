import React from "react";
import Select from "react-select";

const SelectMultiple = ({ preguntas, value, onChange }) => {
  // Mapear las preguntas en el formato adecuado para las opciones de React-Select
  const options = preguntas.map((pregunta) => ({
    value: pregunta._id,
    label: pregunta.pregunta,
  }));

  return (
    <Select
      value={value.map((id) => ({ value: id, label: id }))}
      onChange={(selectedOptions) => {
        const selectedValues = selectedOptions.map((option) => option.value);
        onChange(selectedValues);
      }}
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
