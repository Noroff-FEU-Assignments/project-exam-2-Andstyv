export function dateFormatter(date) {
  const newDate = new Date(date);
  return (date = newDate.toLocaleDateString());
}
