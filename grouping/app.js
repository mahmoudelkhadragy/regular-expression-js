const text = "Today's date is 03/06/2023";
const datePattern = /(\d{2})\/(\d{2})\/(\d{4})/;
const match = text.match(datePattern);

if (match !== null) {
  const day = match[1];
  const month = match[2];
  const year = match[3];
  console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
} else {
  console.log("No match found");
}
