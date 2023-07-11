import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  min-height: 100vh;
  justify-content: center;
`;

export const StyledImgDiv = styled.div`
  position: relative;
  right: 130px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white);
  max-width: 420px;
  height: 450px;
  width: 100%;
  border-radius: 28px;
  padding: 35px 50px 50px 50px;
  gap: 25px;
  h1 {
    font-size: 44px;
    color: var(--color-slate-grey);
  }
  p {
    text-align: justify;
    font-size: 16px;
    color: var(--color-slate-grey);
  }
  a {
    border: solid 1px var(--color-slate-grey);
    border-radius: 8px;
    height: 55px;
    width: 315px;
    font-weight: 500;
    font-size: 14px;
    color: var(--color-white);
    background-color: var(--color-slate-grey);
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      border: solid 1px var(--color-white);
    }
  }
`;
