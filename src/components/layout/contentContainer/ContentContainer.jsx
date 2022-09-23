import styled from "styled-components";

const StyledContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
`;

export function ContentContainer() {
  return <StyledContentContainer />;
}
