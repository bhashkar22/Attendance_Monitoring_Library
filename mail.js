const firebaseConfig = {
  apiKey: "AIzaSyCjw_lTYsBJ5zTlB9k_0YYS70rNd1KSdfM",
  authDomain: "attendance-monitoring-st-42cfa.firebaseapp.com",
  databaseURL: "https://attendance-monitoring-st-42cfa-default-rtdb.firebaseio.com",
  projectId: "attendance-monitoring-st-42cfa",
  storageBucket: "attendance-monitoring-st-42cfa.appspot.com",
  messagingSenderId: "813507887953",
  appId: "1:813507887953:web:7b0fac2456725bc5134970"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);
var count = 0;

// reference your database
//var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);


function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var department = getElementVal("department");
  var regno = getElementVal("registration number");
  var year = getElementVal("year");
  count++;
  saveMessages(name, department, regno, year,count);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, department, regno, year,count) => {
  
  
  firebase.database().ref("contactForm/Student"+count).set({
    name: name,
    department: department,
    regno: regno,
    year: year,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
