import styled from "styled-components";

export const StyledMainDiv = styled.main`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 100vh;

  h1,
  span,
  p {
    color: var(--color-slate-grey);
  }
  h1 {
    font-size: 55px;
  }
  span {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 900px;
  padding: 0px 20px 0px 70px;
  border-radius: 35px;
  background-color: var(--color-white);
`;
export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 650px;
  max-width: 400px;
  gap: 30px;
`;

export const StyledUl = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
