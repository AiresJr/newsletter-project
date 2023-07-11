import { useContext } from "react";
import { Link } from "react-router-dom";
import success from "../../assets/icon-success.svg";
import { HomeContext } from "../../context/homeContext";
import { StyledDiv, StyledImgDiv, StyledMain } from "./styles";

export const SuccessPage = () => {
  const { user } = useContext(HomeContext);
console.log(user)
  return (
    <StyledMain>
      <StyledDiv>
        <StyledImgDiv>
          <img src={success} alt="success icon" />
        </StyledImgDiv>
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>{user.email}</strong>. Please open it and click the button to confirm your subscription.
        </p>
        <Link to="/">Dismiss message</Link>
      </StyledDiv>
    </StyledMain>
  );
};
