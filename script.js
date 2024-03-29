let markAllAsRead = document.querySelector(".mark-as-read");
let notificationBox1 = document.querySelector(".notification-box-1");
let notificationBox2 = document.querySelector(".notification-box-2");
let notificationBox3 = document.querySelector(".notification-box-3");

markAllAsRead.addEventListener("click" , () => {
    notificationBox1.style.backgroundColor = "white";
    notificationBox2.style.backgroundColor = "white";
    notificationBox3.style.backgroundColor = "white";
})

notificationBox1.addEventListener("click" , () => {
    notificationBox1.style.backgroundColor = "white";
})

notificationBox2.addEventListener("click" , () => {
    notificationBox2.style.backgroundColor = "white";
})

notificationBox3.addEventListener("click" , () => {
    notificationBox3.style.backgroundColor = "white";
})