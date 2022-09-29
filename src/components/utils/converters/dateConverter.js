export function dateConverter(accommodationData) {
  const checkIn = new Date(accommodationData.fromDate);
  const checkOut = new Date(accommodationData.toDate);

  const parsedCheckIn = checkIn.toLocaleDateString();
  const parsedCheckOut = checkOut.toLocaleDateString();

  const rooms = Math.ceil(accommodationData.guests / 2);
  return { parsedCheckIn, parsedCheckOut, rooms };
}
