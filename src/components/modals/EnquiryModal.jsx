import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { EnquiryForm } from "../forms/EnquiryForm";
import { StyledEnquiryBtn, StyledEnquiryModal, StyledEnquiryModalOverlay } from "./enquiryModal.styles";

export function EnquiryModal({ accommodation }) {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    });
  }, []);

  return (
    <>
      <StyledEnquiryBtn onClick={() => setShowModal(true)}>
        <div style={{ color: "var(--color-yellow)", fontWeight: "bold" }}>Enquire about this accommodation</div>
      </StyledEnquiryBtn>
      {showModal && (
        <>
          <StyledEnquiryModalOverlay onClick={() => setShowModal(false)}></StyledEnquiryModalOverlay>
          <StyledEnquiryModal>
            <StyledEnquiryBtn className="modal-close" type="button" onClick={() => setShowModal(false)}>
              Close
            </StyledEnquiryBtn>
            <div className="modal-body">
              <EnquiryForm accommodation={accommodation} />
            </div>
          </StyledEnquiryModal>
        </>
      )}
    </>
  );
}

EnquiryModal.propTypes = {
  accommodation: PropTypes.object,
};
