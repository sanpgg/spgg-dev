/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import {
  DropDownBox,
  DropDownIcon,
  InputContainer,
  InputInner,
  Page,
  PageImage,
  PageTitle
} from './styles';
import PropTypes from 'prop-types';
import Input from 'components/UI/Input';
import Icon from 'components/UI/Icon';
import constants from 'utils/constants';
import defaultImage from 'assets/defaultImage.svg';

function DropDownImage({
  options,
  value,
  onChange,
  // eslint-disable-next-line no-unused-vars
  id,
  label,
  labelField
}) {
  const [baseItems, setBaseItems] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState([]);

  const [currentValue, setCurrentValue] = useState(value);
  const [inputLabel, setInputLabel] = useState('');
  const [opened, setOpened] = useState(false);

  function openDropdown() {
    setOpened(!opened);
  }

  function setValue(data) {
    openDropdown();
    setCurrentValue(data.id);
    setInputLabel(data[labelField]);
    onChange(data);
  }

  function clearInput() {
    setCurrentValue();
    setInputLabel('');
    const data = {
      id: ''
    };
    onChange(data);
  }

  function filterPages(keywords) {
    // console.log('test');
    setInputLabel(keywords);
    if (keywords) {
      setItems(
        // eslint-disable-next-line max-len
        baseItems.filter((result) => result[`${labelField}`].toLowerCase().includes(keywords.toLowerCase()))
      );
    } else {
      setItems(items);
    }
  }

  useEffect(() => {
    const { items } = options;
    setBaseItems(items);
    setItems(items);
    const option = items.find((opt) => opt.id === value);

    console.log(option);
    console.log(value);

    if (option) {
      setInputLabel(option[labelField]);
      setCurrentValue(option);
    } else {
      clearInput();
    }
  }, [value]);

  return (
    <InputContainer>
      <InputInner>
        <Input
          label={label}
          value={inputLabel}
          onClick={openDropdown}
          placeHolder="Selecciona una Página"
          onChange={(value) => filterPages(value)}
        />
        <DropDownIcon>
          {currentValue
            ? (
              <Icon
                icon="bx bx-x"
                onClick={clearInput}
              />
            )
            : (
              <Icon
                className={opened ? 'input active' : 'input'}
                icon={opened ? 'bx bx bx-chevron-up' : 'bx bx-chevron-down'}
                onClick={openDropdown}
              />
            )}
        </DropDownIcon>
      </InputInner>
      {opened && (
        <DropDownBox>
          {items.map((option) => (
            <Page onClick={() => { setValue(option); }}>
              <PageImage src={option.image ? `${constants.cdn}${option.image.path}` : `${defaultImage}`} />
              <PageTitle>
                {option[labelField]}
              </PageTitle>
            </Page>
          ))}
        </DropDownBox>
      )}
    </InputContainer>
  );
}

DropDownImage.propTypes = {
  /**
   * Input label
   */
  label: PropTypes.string,
  /**
   * Input label field
   */
  labelField: PropTypes.string,
  /**
   * Input value
   */
  value: PropTypes.string,
  /**
   * Id value
   */
  id: PropTypes.number,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional click handler
   */
  onChange: PropTypes.func,
  /**
   * Optional click handler
   */
  options: PropTypes.arrayOf(PropTypes.object)
};

DropDownImage.defaultProps = {
  value: ''
};

export default DropDownImage;
