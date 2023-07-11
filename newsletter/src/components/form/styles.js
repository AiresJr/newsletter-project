import styled from "styled-components";

export const MainDivForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 160px;
  max-width: 400px;
  padding-top: 20px;
  gap: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 15px;

  input {
    border: solid 2px var(--color-grey);
    border-radius: 8px;
    height: 55px;
    width: 350px;
    padding-left: 25px;
    font-size: 15px;
  }
  
  button {
    border: solid 1px var(--color-charcoal-grey);
    border-radius: 8px;
    height: 55px;
    width: 350px;
    font-weight: 500;
    font-size: 16px;
    color: var(--color-white);
    background-color: var(--color-charcoal-grey);

    :hover {
      border: solid 1px var(--color-white);
    }
  }
`;

export const StyledErrorDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 55px;
    
    span{
      font-size:12px;
      color: var(--color-primary);
    }

`
