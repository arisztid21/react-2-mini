import React from 'react';

export default function FamilyChanger(props) {
  return (
    <select className="dropDownContainer" onChange={ e =>{props.newFont(e.target.value)}}>
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  )
}