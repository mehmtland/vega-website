import React, { Component } from "react";
import styled from "styled-components";
import Headline from "../common/Headline.js";
import Body from "../common/Body.js";
import ContainedButton from "../common/ContainedButton.js";

class Newsletter extends Component {
  render() {
    const Block = styled.div`
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 455px;
      justify-content: center;
      align-items: center;
      row-gap: 15px;
      background-color: white;
    `;

    const FormBlock = styled.div`
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: center;
      align-items: center;
    `;

    const FormElement = styled.form`
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      margin: 10px;
      display: flex;
      flex-direction: column;
      align-self: center;
      align-items: flex-start;
      justify-content: center;
      height: 140px;
    `;
    const InputElement = styled.input`
      width: 570px;
      display: block;
      background-color: #f9f9f9;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      height: 44px;
      outline-style: none;
      border-color: white;
      border: 1px solid #ccc;
      border-radius: 4px;
      justify-self: center;
      height: 44px;
      position: relative;
      top: -8px;
    `;
    const InputLabel = styled.label`
      position: relative;
      top: -10px;
    `;
    return (
      <Block data-scroll data-scroll-speed="1">
        <Headline
          content="Subscribe to Vega Newsletter"
          color="black"
          align="center"
          place="center"
        />
        <Body
          color="black"
          content="By entering your email address you will always be up to date with the latest Vega news and promotions."
          align="center"
        />
        <FormBlock>
          <FormElement action="#">
            <InputLabel>Your email address</InputLabel>
            <InputElement type="email" placeholder="john@email.com" />
          </FormElement>
          <ContainedButton text="white" content="Subscribe" onClick={null} />
        </FormBlock>
      </Block>
    );
  }
}
export default Newsletter;
