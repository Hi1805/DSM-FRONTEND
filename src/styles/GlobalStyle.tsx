import styled from "styled-components";
import { blue } from "./color";
export const FormAddStyle = styled.div`
  .td-form-add {
    border-radius: 15px;
    &__title {
      font-weight: bold;
      font-size: 48px;
      line-height: 60px;
      letter-spacing: 0.4px;
      color: #000000;
      padding: 32px 136px;
      text-align: center;
      position: relative;
      svg {
        position: absolute;
        right: 23px;
        top: 20px;
        cursor: pointer;
      }
    }
    &__body {
      padding: 0 20px;
      span {
        margin-top: 0.5rem;
        color: #dc3545fc;
      }
      &__form-input {
        width: 50%;
        input,
        select {
          border-radius: 10px;
        }
      }
    }
    &__control {
      padding: 0px 30px;
      &__btn-back {
        background: #f3f2f2;
        border: 1px solid #c8c8c8;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 10px 20px;
        color: ${blue};
        &:hover {
          background-color: #ffff !important;
          color: ${blue};
        }
      }
      &__btn-save {
        background: ${blue};
        box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
        border-radius: 8px;
        color: #ffff;
        padding: 10px 30px;
        &:hover {
          background-color: #ffff;
          color: ${blue};
        }
      }
      padding-bottom: 43px;
    }
  }
`;
