let visitMessage = "This is your first time here";

const visitDate = window.localStorage.getItem("visits");
const currentDate = new Date();

if (visitDate) {
    const compareDate = new Date(visitDate);
    const difTime = currentDate.getTime() - compareDate.getTime();
    const difDays = difTime / (1000 * 3600 * 24);
    visitMessage = `You visited us ${parseInt(difDays, 10)} days ago`;
}
document.querySelector("#visits").textContent = visitMessage;
localStorage.setItem("visits", currentDate.toString());