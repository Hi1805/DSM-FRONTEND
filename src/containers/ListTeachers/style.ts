import styled from "styled-components";
export default styled.div`
  .pagination {
    display: flex;
    justify-content: end;
    li {
      margin: 0 0.5rem;
    }
    .active {
      background-color: rgba(255, 255, 255, 0);
    }
  }
`;
