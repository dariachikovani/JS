//1.1 Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.


let vacation = "You'r vacation approved";
let denied = "You'r vacation denied";

let response = prompt("Enter a month");

if (response == "July" || response == "August"){
  alert(vacation)
}
else{
  alert(denied)
}

