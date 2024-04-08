import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  apiKey: "AIzaSyBm2ONFKe7IncyD51W7Lzvbn0i1Ut7UKeg",
  authDomain: "portfolio-bb897.firebaseapp.com",
  databaseURL:
    "https://portfolio-bb897-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "portfolio-bb897",
  storageBucket: "portfolio-bb897.appspot.com",
  messagingSenderId: "458634796365",
  appId: "1:458634796365:web:b06870d9416d26750e2b04",
};

//initializing firebase

firebase.initializeApp(appSettings);
var database = firebase.database();

function sendMsg() {
  var name = document.getElementById("ip-name").value;
  var email = document.getElementById("ip-mail").value;
  var message = document.getElementById("ip-msg").value;

  if ((name, email, message)) {
    database.ref("contacts").push({
      name: name,
      email: email,
      message: message,
    });

    document.getElementById("ip-name").value = "";
    document.getElementById("ip-mail").value = "";
    document.getElementById("ip-msg").value = "";

    alert("Data sent successfully!");
  } else {
    alert("Please enter some data!");
  }
}

// Set up event listener for button click
var button = document.getElementById("sendButton");
button.addEventListener("click", sendMsg);

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value) {
      input.classList.add("has-value");
    } else {
      input.classList.remove("has-value");
    }
  });
});
