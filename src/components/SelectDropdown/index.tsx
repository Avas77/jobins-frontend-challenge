import { Select, SelectProps } from "@chakra-ui/react";
import React from "react";
import { IOptions } from "../../interfaces/IOptions";

interface ISelectDropdownProps extends SelectProps {
  placeholder: string;
  options: IOptions[];
}

const SelectDropdown = ({
  placeholder,
  options,
  ...rest
}: ISelectDropdownProps) => {
  return (
    <Select
      placeholder={placeholder}
      boxShadow=" 0px 4px 16px rgba(0, 0, 0, 0.04);"
      color="#8B909A"
      fontSize="1.5rem"
      fontWeight={500}
      height="4rem"
      borderRadius={6}
      bgColor="#FFFFFF"
      {...rest}
    >
      {options.map((option) => (
        <option value={option.value} key={option.id}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default SelectDropdown;
