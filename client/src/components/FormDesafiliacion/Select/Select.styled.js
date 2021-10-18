import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

  background: #fff;
  color: #131313;
  font-family: "Lato", sans-serif;
  line-height: 24px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;

  margin-bottom: 1.5rem;
  height: 40px;
  width: 216px;

  @media only screen and (max-width: 100px) {
    margin: 0 0 1.5rem 0;
    width: 100%;
  }

  // container
  div {
    // control

    div {
      // valueContainer
      div {
        color: #131313;
        font-family: "Lato", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
      }
    }
  }
`;