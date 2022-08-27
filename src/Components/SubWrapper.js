import React from "react";
import TextComponent from "./TextComponent";
import '../Assets/Styles/homePage.css'
const SubWrapper = (props) => {
  const { label, children,className, isMandatory} = props;
  return (
    <div>
      <TextComponent
        label={label}
        className='sub-wrapper-text'
        isMandatory = {isMandatory}
      />
      <div className = {className}>
        {children}
      </div>
    </div>
  );
};

export default SubWrapper;
