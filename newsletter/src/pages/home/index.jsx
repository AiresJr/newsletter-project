import Icon from "../../assets/icon-list.svg";
import Illustration from "../../assets/illustration-desktop.svg";
import { HomeForm } from "../../components/form";
import { LeftDiv, StyledDiv, StyledImg, StyledLi, StyledMainDiv, StyledUl } from "./styles";

export const HomePage = () => {
  return (
    <>
      <StyledMainDiv>
        <StyledDiv>
          <LeftDiv>
            <div>
              <h1>Stay updated!</h1>
            </div>
            <span>Join 60,000+ product managers receiving monthly updates on:</span>
            <StyledUl>
              <StyledLi>
                <img src={Icon} alt="Icon" />
                <span>Product discovery and building what matters</span>
              </StyledLi>
              <StyledLi>
                <img src={Icon} alt="Icon" />
                <span>Measuring to ensure updates are a sucess</span>
              </StyledLi>
              <StyledLi>
                <img src={Icon} alt="Icon" />
                <span>and a much more!</span>
              </StyledLi>
            </StyledUl>
            <HomeForm />
          </LeftDiv>
          <StyledImg>
            <img src={Illustration} alt="illustration" />
          </StyledImg>
        </StyledDiv>
      </StyledMainDiv>
    </>
  );
};
