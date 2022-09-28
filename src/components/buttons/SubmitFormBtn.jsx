import styled from "styled-components";

const StyledSubmitFormBtn = styled.button`
  margin-top: 30px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: var(--color-light-black);
  color: var(--color-yellow);
  font-weight: bold;
  text-transform: uppercase;
  font-size: var(--font-size-p);
  cursor: pointer;
  text-transform: uppercase;
`;

export const SubmitFormBtn = ({ children }) => {
  return <StyledSubmitFormBtn>{children}</StyledSubmitFormBtn>;
};
