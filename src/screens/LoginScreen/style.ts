import styled from "styled-components";
export default styled.div`
  min-height: 100vh;
  min-width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  background-color: #55cbfd;

  form {
    background-color: #fff;
    box-sizing: border-box;
    border: 1px solid #dfe0eb;
    border-radius: 8px;
    padding: 1rem 2rem;
    height: 450px;
    .form-header {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .logo {
        svg {
          margin: auto;
        }
      }
      .title {
        margin: 1rem 0;
        color: #696969;
        font-weight: bold;
        width: 100%;
        text-align: center;
        font-size: 1.5rem;
      }
    }

    .form-body {
      &__title {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        color: #3751ff;
      }
      &__input-group {
        label {
          color: #696969;
          font-weight: bold;
        }
        .input__group {
          border: 1px solid #f0f1f7;
          box-sizing: border-box;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
          svg {
            margin-right: 1rem;
            cursor: pointer;
            font-size: 1.25rem;
          }
        }
        input {
          height: 2.5rem;
          width: 100%;
          outline: none;
          border: none;
        }
      }
    }
    .form-footer {
      button {
        border-radius: 15px;
      }
    }
  }
`;
