import styled from "styled-components";
import { blue, red } from "styles/color";
export default styled.form`
  padding: 1rem 0.5rem;
  .title {
    h3 {
      font-size: 2rem;
      font-weight: bold;
    }
  }
  .w-80 {
    width: 80% !important;
  }
  input {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  label {
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 0.45rem;
  }
  .footer-form {
    width: 80%;
  }
  .footer-form-btn {
    outline: none;
    border: none;
    box-sizing: border-box;
    border-radius: 10px;
    color: #fff;
    padding: 0.5rem 1rem;
    &:hover {
      transform: scale(1.15);
      transition: transform 0.25s linear;
    }
  }
  .score {
    font-size: 1rem !important;
    color: #000 !important;
    font-weight: bold !important;
  }
  .footer-form-btn--cancel {
    background: ${red};
  }
  .footer-form-btn--save {
    background: ${blue};
  }
`;
