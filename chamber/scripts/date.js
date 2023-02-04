const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.textContent = fulldate;


const catchLastModification = new Date(document.lastModified);
const yearMonthDay = catchLastModification.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
const hourMinutesSecond = catchLastModification.toLocaleString('en-US', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
const dateTime = `Last Updated: ${yearMonthDay} ${hourMinutesSecond}`;
document.getElementById("lastDate").innerHTML = dateTime;

// set current year
document.getElementById("year").innerHTML = `&copy; ${new Date().getFullYear()}`;


// show banner
const day = now.getDay();
// if monday or Tuesdays
if (day === 1 || day === 2)  {
	document.getElementById("banner").style.display = "block";
}