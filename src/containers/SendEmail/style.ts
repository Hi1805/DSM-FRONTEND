import styled from "styled-components";
export default styled.div`
  .layout__content__form {
    box-sizing: border-box;
    border-radius: 8px;

    .form-control {
      opacity: 0.8;
      border: 1px solid #acacac;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
    }
    .form__title {
      margin: 17px 27px;
      font-family: "Mulish", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 25px;
      h2 {
        text-align: center;
      }
      &__select {
        width: 150px;
        opacity: 0.8;
        border: 1px solid #acacac;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
      }
    }
    .form__body {
      margin: 27px 34px;

      label {
      }

      .content {
        margin: 30px auto;
      }

      .upload {
        display: flex;
        &__button {
          background: #3751ff;
          box-shadow: 5px 10px 8px rgb(127 174 236);
          border: #3751ff;
          border-radius: 8px;
          color: #ffffff;
          cursor: pointer;
          padding: 10px;
          margin-left: 2rem;
          transition-duration: 0.4s;
          transition-property: all;
          &:hover {
            background: #131526;
          }
          &:active {
            box-shadow: 1px 8px 4px rgb(127 174 236);
            transform: translateY(4px);
          }

          .fa-upload {
            margin-left: 15px;
          }
        }
      }
      .show-file {
        background: #fcfdfe;
        border: 2px solid #acacac;
        box-sizing: border-box;
        border-radius: 8px;
        height: 150px;
        overflow-y: scroll;
        .item-file {
          padding: 0.25rem;
          &:hover {
            background: #e8ebef;
            box-shadow: 2px 8px 4px rgb(127 174 236);
          }
          &:active {
            transform: translateY(4px);
          }
        }
      }
      &__buttonSend {
        display: flex;
        .send {
          margin-top: 1rem;
          background: #3751ff;
          box-shadow: 6px 12px 12px rgb(127 174 236);
          border-radius: 8px;
          border: #fcfdfe;
          padding: 10px 20px;
          &:hover {
            background: #131526;
          }
          &:active {
            box-shadow: 2px 8px 4px rgb(127 174 236);
            transform: translateY(4px);
          }
        }
      }
    }
  }
`;
