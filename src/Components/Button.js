import React from "react";
import TextComponent from "./TextComponent";
import '../Layouts/index.css'
const Button = (props) => {
  const { type, isCreate = false, className, label } = props;
  return (
    <div>
      <button type={type} className= 'create-button'>
        <TextComponent className='buttoncomp' label="+   Create New" />
      </button>
    </div>
  );
};

export default Button;