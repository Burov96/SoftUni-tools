function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";
  hh == 0 ? (hh = 12) : (hh = hh);
  if(hh > 12) {(hh -= 12); (session = "PM")};
  hh < 10 ? (hh = `0${hh}`) : (hh = hh);
  mm < 10 ? (mm = `0${mm}`) : (mm = mm);
  ss < 10 ? (ss = `0${ss}`) : (ss = ss);
  let time = `${hh}:${mm}:${ss} ${session}`;
  document.getElementById("clock").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
};
export default currentTime