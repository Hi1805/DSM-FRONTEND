import styled from "styled-components";
export default styled.div`
  .popup-content {
    border-radius: 15px;
  }
  .td-listing {
    &__functions {
      padding: 28px 122px;

      &__add:hover {
        background-color: rgb(54, 55, 64) !important;
        font-weight: bold;
      }

      &__add {
        font-weight: 600;
        font-size: 18px;
        line-height: 20px;
        outline: none;
        padding: 9px 20px;
        background: #3751ff;
        border: none;
        box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 30px;
        color: #fff;
        margin-right: 52px;
      }

      &__sort {
        cursor: pointer;

        svg {
          margin-right: 9px;
        }

        :hover {
          color: green;
        }
      }
    }

    &__container {
      padding: 0 14px 10rem 0;
      min-height: 550px;

      tbody {
        position: relative;
      }

      table {
        thead th {
          color: #9fa2b4;
          text-align: center;
          font-weight: bold;
          font-size: 14px;
          line-height: 18px;
          letter-spacing: 0.2px;
        }

        tbody tr {
          text-align: center;
          z-index: 1;

          td {
            padding: 25px 0px;
            vertical-align: middle;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.2px;
            color: #252733;
            z-index: 1;
          }

          .gender--female span,
          .gender--male span {
            font-size: 12px;
            font-weight: bold;
            color: #fff;
            text-transform: uppercase;
            border-radius: 100px;
            padding: 10px;
          }

          .gender--male {
            span {
              background: #56ccf2;
            }
          }

          .gender--female {
            span {
              background: #f5bcdb;
            }
          }
        }

        tbody tr:hover {
          background-color: #2cb4a529 !important;
          position: relative;
          z-index: 1;

          td {
            position: relative;
            cursor: pointer;
            color: #000;
            z-index: 1;
          }
        }

        tbody th {
          vertical-align: middle;
        }
      }

      .table > :not(:last-child) > :last-child > * {
        border-bottom-color: inherit;
      }
    }
  }

  .td-listing-disabled {
    opacity: 0.2;
  }
  .item-listing {
    position: relative;
    &__functions:hover {
      z-index: 5;
    }
    &__functions {
      z-index: 7;
      position: absolute;
      right: 50px;
      background: #ffffff;
      border: 1px solid #cbcbcb;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      &__cancel {
        cursor: pointer;
        svg {
          height: 25px;
          width: 25px;
          float: right;
        }
      }
      &__btn {
        outline: none;
        border: none;
        background: rgb(47, 182, 126);
        border-radius: 8px;
        color: #fff;
        width: 150px;
        height: 35px;
        margin-right: 10px;
        font-size: 18px;
        font-weight: 400;
      }
      .btn--delete {
        margin-top: 10px;
        background: #dc3545;
      }
    }
  }
`;
