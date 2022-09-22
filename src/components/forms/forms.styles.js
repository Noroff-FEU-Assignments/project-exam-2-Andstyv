import styled from "styled-components";

export const StyledLoginFieldset = styled.fieldset`
  border-radius: 10px;
  padding: 25px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);
  border: none;
  display: flex;
  flex-direction: column;

  input {
    border: none;
    border-bottom: 1px solid #000;
    font-size: 16px;
    margin-top: 5px;
    border-radius: 0;
  }

  button {
    margin-top: 30px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #3b5053;
    color: #ffda60;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    cursor: pointer;
  }
  #form-error {
    color: red;
    margin-top: 3px;

    i {
      margin-right: 5px;
    }
  }
`;

export const StyledContactFormInput = styled.input`
  border: none;
  border-bottom: 1px solid #333;
  margin-top: 10px;
  font-size: 16px;
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
