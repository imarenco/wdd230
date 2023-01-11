// last Updated
const catchLastModification = new Date(document.lastModified);
const yearMonthDay = catchLastModification.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
const hourMinutesSecond = catchLastModification.toLocaleString('en-US', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
const dateTime = `Last Updated: ${yearMonthDay} ${hourMinutesSecond}`;
document.getElementById("lastDate").innerHTML = dateTime;

// set current year
document.getElementById("year").innerHTML = `&copy; ${new Date().getFullYear()}`;