import React , {useState} from 'react'
import {CheckBoxDiv} from './style.js'

function CheckBox(props) {
    const {label,checked,disabled,alreadyChecked,name , onChangeHandler} = props;
    console.log(props);
    const [checkBoxState , setCheckBoxState] = useState();

  
  return (
    <CheckBoxDiv>
    <input
    type="checkbox"
    name={name}
    checked={alreadyChecked ? alreadyChecked : checked }
    disabled={disabled}
    onChange={onChangeHandler}

    />
    <label htmlFor='name'>{label}</label>
    </CheckBoxDiv>
  )
}

export default CheckBox