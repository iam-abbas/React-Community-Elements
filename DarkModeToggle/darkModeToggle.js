import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SwitchBox = styled.div`
  padding: 10px;
`;
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;
const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + .slider {
    background-color: #19a2c1;
  }
  &:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
  &:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  &.round {
    border-radius: 34px;
    &:before {
      border-radius: 50%;
    }
  }
`;

function DarkModeToggle(props) {
  // console.log(props.switchPosition);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <MainContainer
      style={{
        backgroundColor: darkMode ? "#333" : "white",
        justifyContent: props.switchPosition,
      }}
    >
      <SwitchContainer style={{ backgroundColor: darkMode ? "#333" : "white" }}>
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <SwitchBox>
          <Switch>
            <SwitchInput
              type="checkbox"
              onChange={() => setDarkMode(!darkMode)}
            />
            <Slider className="slider round"> </Slider>
          </Switch>
        </SwitchBox>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </SwitchContainer>
      {props.children}
    </MainContainer>
  );
}

export default DarkModeToggle;
