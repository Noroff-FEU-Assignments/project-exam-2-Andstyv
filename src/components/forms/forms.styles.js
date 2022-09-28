import styled from "styled-components";

export const StyledLoginFieldset = styled.fieldset`
  border-radius: 10px;
  padding: 25px;
  box-shadow: var(--default-box-shadow);
  border: none;
  display: flex;
  flex-direction: column;

  input {
    border: none;
    border-bottom: 1px solid #000;
    margin-top: 5px;
    border-radius: 0;
  }

  #form-error {
    color: red;
    margin-top: 3px;

    i {
      margin-right: 5px;
    }
  }
`;

export const StyledLoginFieldsetContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.marginTop || ""};
`;

export const StyledContactFormInput = styled.input`
  border: none;
  border-bottom: 1px solid #333;
  margin-top: 10px;
  border-radius: 0;
`;

export const StyledContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media (min-width: 768px) {
    min-width: 300px;
  }
`;

export const StyledLoginFormWrapper = styled.div`
  margin: 50px 20px 0 20px;
  max-width: 900px;
`;

export const StyledEnquiryFormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
