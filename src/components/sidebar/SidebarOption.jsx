import React from "react";
import "./css/SidebarOption.css";

function SidebarOption({ text, Icon, active }) {
  console.log(text);
  return (
    <>
      <div className={`sidebarOption ${active && "sidebarOption__active"}`}>
        <Icon />
        <h2>{text}</h2>
      </div>
    </>
  );
}

export default SidebarOption;
