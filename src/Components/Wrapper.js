import React from "react";
import TextComponent from "./TextComponent";
import '../Assets/Styles/homePage.css'
const Wrapper = (props) => {
  const { label, children,className} = props;
  return (
    <div>
      <TextComponent
        label={label}
        className='wrapper-text'
      />
      <div className = {className}>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
