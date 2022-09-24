import { PropTypes } from "prop-types";

export function TestAcc({ amenity }) {
  console.log(amenity);
  return (
    <>
      <div>Test Acc</div>
      <div>{amenity.id}</div>
    </>
  );
}

TestAcc.propTypes = {
  amenity: PropTypes.shape({
    id: PropTypes.string,
  }),
};
