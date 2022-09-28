import styled from "styled-components";
import contactImage from "../../assets/img/contactimg.webp";

export const StyledContactInfo = styled.div`
  height: 100%;
  border-radius: 0 0 20px 20px;
  background-image: url(${contactImage}), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4));
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: var(--main-bg-color);
  font-size: 20px;

  @media (min-width: 768px) {
    border-radius: 0 20px 20px 0;
    height: auto;
    max-width: 400px;
  }
`;

export const StyledContactInfoMainContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const StyledContactInfoSecondaryContainer = styled.div`
  display: flex;
  align-item: center;
  gap: 10px;
  margin-top: ${(props) => props.marginTop || ""};
`;
