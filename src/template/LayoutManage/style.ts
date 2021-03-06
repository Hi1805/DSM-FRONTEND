import styled from "styled-components";
export default styled.div`
  .layout {
    min-height: 100vh;
    position: relative;
    z-index: 0;

    &__dashboard {
      width: 225px;
      min-height: 100%;
      padding: 32px 0px;
      background: #363740;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      &__title {
        padding-left: 20px;

        &__logo {
          padding-right: 18px;
        }

        &__content {
          color: #a4a6b3;
          font-weight: bold;
          font-size: 19px;
          line-height: 24px;
          letter-spacing: 0.4px;
        }
      }

      &__tabs-control {
        padding-top: 80px;

        &__item {
          padding-left: 20px;
          cursor: pointer;

          &__name {
            color: #a4a6b3;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0.2px;
            padding-left: 22px;
            padding: 18px 20px;
          }

          &:hover {
            background: #9fa2b42e !important;
          }
        }

        &__item--active {
          border-left: 5px solid #fff !important;
          background: #9fa2b47a !important;
          font-weight: bold;
          padding-left: 15px;

          .layout__dashboard__tabs-control__item__name {
            color: #fff !important;
          }
        }
      }
    }

    &__content {
      width: calc(100% - 225px);
      padding: 30px;
      background: #f7f8fc;

      &__navbar {
        display: flex;
        position: relative;

        justify-content: space-between;

        &__title {
          color: #252733;
          font-size: 24px;
          line-height: 30px;
          letter-spacing: 0.3px;
          font-weight: bold;
        }

        &__tools {
          &__search {
            border-right: 2.5px solid #dfe0eb;
            padding-right: 20px;

            &__input {
              outline: none;
              border-radius: 50px;
              border: 1px solid #c5c7cd;
              padding: 10px 20px;
              animation: SlideInLeft ease 0.5s;
            }

            svg:hover {
              background-color: #fff !important;
              cursor: pointer;
            }

            svg {
              margin-left: 5px;
            }
          }

          &__info {
            padding-left: 20px;

            &__name {
              color: #252733;
              font-weight: 600;
              font-size: 14px;
              line-height: 20px;
              letter-spacing: 0.2px;
              padding-right: 10px;
            }

            &__avt {
              cursor: pointer;

              img {
                width: 50px;
                height: 50px;
              }
            }
          }

          @keyframes SlideInLeft {
            from {
              opacity: 0;
              transform: translateX(100px);
            }

            to {
              transform: translateX(0);
            }
          }

          &__menu {
            position: absolute;
            background: #ffffff;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 8px;
            top: 50px;
            right: 0;
            z-index: 999;
            .menu__change-password,
            .menu__logout {
              display: flex;
              cursor: pointer;
              justify-content: flex-start;
              align-items: center;
              width: 100%;
              padding: 0.5rem;
              span {
                margin-left: 10px;
                font-size: 1.15rem;
              }
              &:hover {
                background-color: #3e4ebb24;
              }
            }
            .menu__logout {
              color: var(--bs-red);
            }
          }
        }
      }

      &__listing {
        margin-top: 30px;
        background: #ffffff;
        border: 1px solid #dfe0eb;
        box-sizing: border-box;
        border-radius: 8px;
      }
    }
  }

  .layout--disabled {
    opacity: 0.6;
  }

  .box {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    display: flex;
    justify-content: center;
  }
`;
