const firebaseConfig = {
    apiKey: "AIzaSyBBKQvm_xI76jzVFcJJHteGmlsIIlw2Q8g",
    authDomain: "webathon-c9c37.firebaseapp.com",
    databaseURL: "https://webathon-c9c37-default-rtdb.firebaseio.com",
    projectId: "webathon-c9c37",
    storageBucket: "webathon-c9c37.appspot.com",
    messagingSenderId: "448603157508",
    appId: "1:448603157508:web:ae0983bc922963bd37b151"
  };
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var firstName = getElementVal("firstName");
    var lastName = getElementVal("lastName");
    var email = getElementVal("email");
    var residentialAddress = getElementVal("residentialAddress");
    var experience = getElementVal("experience");
  
    saveMessages(firstName ,lastName, email, residentialAddress , experience);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (firstName ,lastName, email, residentialAddress , experience) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      residentialAddress:residentialAddress,
      experience:experience,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };