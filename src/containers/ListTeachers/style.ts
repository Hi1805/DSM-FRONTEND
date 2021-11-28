import styled from "styled-components";
export default styled.div`
  .pagination {
    justify-content: flex-end;
    li {
      margin: 0 0.5rem;
    }
    .active {
      background-color: rgba(255, 255, 255, 0);
    }
    &__select {
      padding: 0 1rem;
    }
    &__prev {
      padding: 0 1.5rem;
    }
    &__prev,
    &__next {
      cursor: pointer;
      svg:hover {
        path {
          stroke: red;
        }
      }
    }
  }
`;
