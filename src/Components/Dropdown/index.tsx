import React, { useState } from 'react';
import * as S from './styled'
import { OptionsProps } from '../../utils/type';

interface DropdownProps {
  options: OptionsProps[];
  text: string;
  onChange: (option: OptionsProps) => void;
}

const Dropdown = ({ options, text, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionsProps>();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: OptionsProps) => {    
    setSelectedOption(option);
    onChange(option)
    toggleDropdown();
  };

  return (
    <S.Container>
      <S.Button onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : text}
      </S.Button>
      {isOpen && (
        <S.Options>
          {options.map((option: OptionsProps) => (
            <S.Severity
              key={option.value}
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </S.Severity>
          ))}
        </S.Options>
      )}
    </S.Container>
  );
};

export default Dropdown;
