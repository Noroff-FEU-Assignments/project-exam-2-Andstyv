import { StyledFooter, StyledFooterMainDiv } from "./footer.styles";

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterMainDiv>
        <div className="footer__left">
          <div className="footer__contact">hello@holidaze.com</div>
        </div>
        <div className="footer__mid">
          <div className="footer__copyright">Copyright © 2022</div>
        </div>
        <div className="footer__right">
          <div className="footer__address">221B Baker St, Marylebone, London NW1 6XE, UK</div>
        </div>
      </StyledFooterMainDiv>
    </StyledFooter>
  );
}

export default Footer;
