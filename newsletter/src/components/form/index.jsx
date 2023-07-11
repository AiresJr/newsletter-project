import { useContext } from "react";
import { HomeContext } from "../../context/homeContext";

import { MainDivForm, StyledErrorDiv, StyledForm } from "./styles";

export const HomeForm = () => {
  const { handleSubmit, submit, register, errors } = useContext(HomeContext);

  return (
    <MainDivForm>
      <span>Email adress</span>
      <StyledErrorDiv>{errors.email && <span>{errors.email.message}</span>}</StyledErrorDiv>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <input {...register("email")} type="email" name="email" placeholder="email@company.com" />

        <button type="submit" to="/success">
          Subscribe to monthly newsletter
        </button>
      </StyledForm>
    </MainDivForm>
  );
};
