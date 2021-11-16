import styled from "styled-components";
export default styled.div`
  .pagination {
    justify-content: flex-end;

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
