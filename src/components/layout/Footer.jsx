import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 150px;
  background: #3b5053;
  flex-shrink: 0;
  margin-top: 100px;
  display: flex;
  flex-direction: row;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledFooterMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  justify-content: space-around;
  max-width: 940px;
  align-self: center;
  color: #fff;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin: 0 20px;
    justify-content: space-between;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterMainDiv>
        <div class="footer__left">
          <div class="footer__contact">hello@holidaze.com</div>
        </div>
        <div class="footer__mid">
          <div class="footer__copyright">Copyright © 2022</div>
        </div>
        <div class="footer__right">
          <div class="footer__address">221B Baker St, Marylebone, London NW1 6XE, UK</div>
        </div>
      </StyledFooterMainDiv>
    </StyledFooter>
  );
}

export default Footer;
