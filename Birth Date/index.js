function AGE() {
  let age = document.getElementById("date").value;

  if (age == "") {
    alert("Enter the date");
  }

  let ageSplit = age.split("");
  let year = ageSplit[0] + ageSplit[1] + ageSplit[2] + ageSplit[3];

  let month = ageSplit[5] + ageSplit[6];

  let day = ageSplit[8] + ageSplit[9];

  let todayDay = new Date();
  let todayYear = todayDay.getFullYear();
  console.log(todayYear);
  let todayMonth = todayDay.getMonth() + 1;
  console.log(todayMonth);
  let todayDate = todayDay.getDate();
  console.log(todayDate);

  if (todayYear - year > 18) {
    window.open("Next.html");
  } else if (todayYear - year < 18) {
    document.write("Sorry you are not eligible");
  } else if (todayYear - year == 18) {
    let diffMonth = todayMonth - month;
    let diffDate = todayDate - day;
    if (diffMonth > 0) {
      window.open("Next.html");
    }
    if (diffMonth < 0) {
      document.write("Sorry you are not eligible");
    }
    if (diffMonth == 0 && diffDate < 0) {
      document.write("Sorry you are not eligible");
    }
    if (diffMonth == 0 && diffDate > 0) {
      window.open("Next.html");
    }
    if (diffMonth == 0 && diffDate == 0) {
      window.open("Next.html");
    }
  }
}
