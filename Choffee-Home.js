
var signUpBtn = document.getElementById('sign-up-btn');
var loginBtn = document.getElementById('login-btn');
var accountUserBtn = document.getElementById('account-user-btn');

var accountSettingsBtn = document.getElementById('account-settings-btn');
var userNameLoginInput = document.getElementById('login-user-name');
var passwordLoginInput = document.getElementById('login-password');

var currentAccount ;
let accountId = 1;
// JSON ACCOUNTS

// Display Underdevelopment alert
function alertForUnderDevelopment() {
  Swal.fire({
    imageUrl: "./ChoffeeImages/under-development.png",
    imageHeight: 400,
    text: "Sorry this part is still under development!"
  });
  console.log("has")
};

var accounts = [
  {
    Id: accountId,
    userName: "admin",
    password: "admin",
    firstName: "admin",
    lastName: "admin",
    contactNumber: "09503840558",
    emailAddress: "samplegmail@gmail.com",
    streetNumber: 123,
    city: 123,
    region: 123,
    zipCode: 123
  }, 
  {
    Id: 1,
    userName: "cho",
    password: "cho",
    firstName: "firstName2",
    lastName: "lastName2",
    contactNumber: "095038405582",
    emailAddress: "samplegmail@gmail.com2",
    streetNumber: 1232,
    city: 1232,
    region: 1232,
    zipCode: 1232
  },
];
// Function to Toggle NavLinks
let navLinks = document.getElementById('navlinks')
let userSettingCntr = document.getElementById('user-settings-cntr');
function toggleActive(item) {
    item.classList.toggle("active");
}
const menuIcon = document.getElementById('menu-icon')
menuIcon.addEventListener('click', () => {
  toggleActive(navLinks)
});
accountUserBtn.addEventListener('click', () => {
  toggleActive(userSettingCntr)
});

// Function to toggle user settings button
function toggleUserSettings() {
  document.getElementById('login-and-sign-up-section').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// * FUNCTION TO SIGNUP NEW USER
document.getElementById('register-form').addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault(); 
  // REGEX TO VALIDATE THE USERNAME
  const usernameRegex = /^(?!.*\s)(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\w\s]).{10,15}$/gi;
  const userName = document.getElementById('user-name').value;
  if (usernameRegex.test(userName)) {
      document.getElementById('user-name').style.borderColor = 'green';
  } else {
      Swal.fire({
        title: "Invalid Username!",
        text: "Username should have a length of 10-15 characters, It should contain atleast 1 number and 1 special characters with no spacing.",
        icon: "warning"
      });
      document.getElementById('user-name').value = "";
      document.getElementById('user-name').placeholder = "Please input another Username!"
      document.getElementById('user-name').style.borderColor = "red";
      return; 
  }
  // REGEX TO VALIDATE THE PASSWORD
  const passwordRegex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).{10,20}$/g;
  const password = document.getElementById('password').value;
  if (passwordRegex.test(password)) {
    document.getElementById('password').style.borderColor = "green";
  } else {
      Swal.fire({
        title: "Invalid Password!",
        text: "Password should have a length of 10-20 characters, should contain a number, a special character, and an upper and lowercase letter, without spacing",
        icon: "warning"
      });
      document.getElementById('password').value = "";
      document.getElementById('password').placeholder = "Please input another Password!"
      document.getElementById('password').style.borderColor = "red";
      return; 
  }
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  // REGEX TO VALIDATE MOBILENUMBER
  const contactNumberRegex = /^(?!.*\s)\d{11}$/g;
  const contactNumber = document.getElementById('contact-number').value;
  if (contactNumberRegex.test(contactNumber)) {
    document.getElementById('contact-number').style.borderColor = "green";
  } else {
    Swal.fire({
      title: "Invalid Mobile number!",
      text: "Contact number should contain 11 digits of numbers, without spacing (Ex: 09876543210)",
      icon: "warning"
    });
    document.getElementById('contact-number').value = "";
    document.getElementById('contact-number').placeholder = "Please enter again your number!"
    document.getElementById('contact-number').style.borderColor = "red";
    return; 
  }
  const emailAddress = document.getElementById('email-address').value;
  const streetNumber = document.getElementById('street-number').value;
  const city = document.getElementById('city').value;
  const region = document.getElementById('region').value;
  // REGEX TO VALIDATE ZIPCODE
  const zipCodeRegex = /^(?!.*\s)\d{4}$/g;
  const zipCode = document.getElementById('zip-code').value;
  if (zipCodeRegex.test(zipCode)) {
    document.getElementById('zip-code').style.borderColor = "green";
  } else {
    Swal.fire({
      title: "Invalid Zipcode!",
      text: "Zipcode should contain 4 digits of numbers, without spacing (Ex: 1234)",
      icon: "warning"
    });
    document.getElementById('zip-code').value = "";
    document.getElementById('zip-code').placeholder = "Please enter again your number!"
    document.getElementById('zip-code').style.borderColor = "red";
    return; 
  }

  // Check if all fields are filled
  if (firstName !== "" && lastName !== "" && contactNumber !== "" && emailAddress !== "" && streetNumber !== "" && city !== "" && region !== "" && zipCode !== "") {
    // Create account object
    let account = {
      "Id": accountId++,
      "userName": userName,
      "password": password,
      "firstName": firstName,
      "lastName": lastName,
      "contactNumber": contactNumber,
      "emailAddress": emailAddress,
      "streetNumber": streetNumber,
      "city": city,
      "region": region,
      "zipCode": zipCode
    };

    // Clear form fields
    document.getElementById('user-name').value = "";
    document.getElementById('password').value = "";
    document.getElementById('first-name').value = "";
    document.getElementById('last-name').value = "";
    document.getElementById('contact-number').value = "";
    document.getElementById('email-address').value = "";
    document.getElementById('street-number').value = "";
    document.getElementById('city').value = "";
    document.getElementById('region').value = "";
    document.getElementById('zip-code').value = "";

    // Change Back the Properties of the unmatched REGEX
    document.getElementById('user-name').placeholder = "Username";
    document.getElementById('password').placeholder = "Password";
    document.getElementById('contact-number').placeholder = "Input Mobile Number (Ex. 09123456789)";
    document.getElementById('zip-code').placeholder= "Zip code/Postal";
    document.getElementById('user-name').style.borderColor = "black";
    document.getElementById('password').style.borderColor = "black";
    document.getElementById('contact-number').style.borderColor = "black";
    document.getElementById('zip-code').style.borderColor = "black";

    // Display submission alert
    Swal.fire({
      title: "Success!",
      text: "Successfully Created an account!",
      icon: "success",
      timer: 1700,
      showConfirmButton: false
    });

    // Add account to accounts array
    accounts.push(account);
    console.log(accounts)
    // console.log(accounts)
    // console.log(accounts.length)
      showLoginHidesignUpForm();
      
    } else {
      Swal.fire({
        title: "Warning!",
        text: "Please provide all the information needed to sign up!",
        icon: "warning",
      });
    }
});

// Funtion to login an account
// Flag to track if a match is found
let foundMatch = false;
const loginAndSignupCntr = document.getElementById('login-and-sign-up-cntr');
document.getElementById('login-user-btn').addEventListener('click', function() {
  // Check if the username and password input is not empty s  trings
  if(userNameLoginInput.value && passwordLoginInput.value) {
    // Loop to variable accounts to find if there is a username and password that match the users input of username and password.
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].userName === userNameLoginInput.value && accounts[i].password === passwordLoginInput.value) {
        currentAccount = accounts[i];
        userLoggedIn()
        console.log(currentAccount.userName)
        // Display currentAccount data to the change settings input 
        document.getElementById('user-name-change-settings').value = currentAccount.userName;
        document.getElementById('password-change-settings').value = currentAccount.password;
        document.getElementById('first-name-change-settings').value = currentAccount.firstName;
        document.getElementById('last-name-change-settings').value = currentAccount.lastName;
        document.getElementById('contact-number-change-settings').value = currentAccount.contactNumber;
        document.getElementById('email-address-change-settings').value = currentAccount.emailAddress;
        document.getElementById('street-number-change-settings').value = currentAccount.streetNumber;
        document.getElementById('city-change-settings').value = currentAccount.city;
        document.getElementById('region-change-settings').value = currentAccount.region;
        document.getElementById('zip-code-change-settings').value = currentAccount.zipCode;
        
        loginAndSignupCntr.style.display ="none"
        foundMatch = true;
        break; // Exit the loop early if a match is found
      }
    }
    // Alert to inform if the login is a success or not
    if (foundMatch) { 
      Swal.fire({
        title: "Hi! " + currentAccount.firstName,
        icon: "success"
      });
    } else {
      Swal.fire({
        title: "Warning",
        text: "Invalid Username or Password!",
        icon: "warning"
      });
    }
  } else {
    if (userNameLoginInput.value === "" && passwordLoginInput.value) {
      Swal.fire({
        title: "Input Username!",
        icon: "warning"
      });
      userNameLoginInput.placeholder = "Please input your Password!"
      userNameLoginInput.style.borderColor = "red";
      passwordLoginInput.style.borderColor = "black";

    }
    if(passwordLoginInput.value === "" && userNameLoginInput.value) {
      Swal.fire({
        title: "Input Password!",
        icon: "warning"
      });
      passwordLoginInput.placeholder = "Please input your Username!"
      passwordLoginInput.style.borderColor = "red";
      userNameLoginInput.style.borderColor = "black";
    } 
    if(passwordLoginInput.value === "" && userNameLoginInput.value === "") {
      Swal.fire({
        title: "Input Username and Password!",
        icon: "warning"
      });
      passwordLoginInput.placeholder = "Please input Username and Password!"
      passwordLoginInput.style.borderColor = "red";
      userNameLoginInput.style.borderColor = "red";
    } 
  }
})

// Funtion to Show and Hide Login password
var toggleShowHidePasswordButton = document.getElementById('show-hide-password');
toggleShowHidePasswordButton.addEventListener('click', function() {
  // Toggle the type attribute of the password input
  if (passwordLoginInput.type === 'password' && passwordLoginInput.value) {
    passwordLoginInput.type = 'text'; // Change type to text to show the password
    toggleShowHidePasswordButton.style.color = "#d99937"
  } else {
    passwordLoginInput.type = 'password'; // Change type back to password to hide the password
    toggleShowHidePasswordButton.style.color = "black"
  }
});

// Function to show signup and hide login form
const signUpForm = document.getElementById('register-form');
const logInForm = document.getElementById('login-form');
const signOrLogTxt = document.getElementById('sign-or-log-txt');
const upOrInTxt = document.getElementById('up-or-in-txt');
function showSignUpHideLogInForm() {
  toggleUserSettings()
  console.log("signup!")
  signUpForm.style.display = 'flex';
  logInForm.style.display = 'none';
  signOrLogTxt.innerText = "Sign";
  upOrInTxt.innerText =" Up!"
};
signUpBtn.addEventListener('click', showSignUpHideLogInForm);
document.getElementById('click-here-button').addEventListener('click', showSignUpHideLogInForm)
// Function to show login and hide signup form
function showLoginHidesignUpForm() {
  toggleUserSettings();
  console.log("login!");
  logInForm.style.display = 'flex';
  signUpForm.style.display = 'none';
  signOrLogTxt.innerText = "Log";
  upOrInTxt.innerText ="In!";
};
loginBtn.addEventListener('click', showLoginHidesignUpForm);

// Function to display the current user name button
function userLoggedIn() {
  signUpBtn.style.display ="none"
  loginBtn.style.display = "none"
  accountUserBtn.style.display = "flex"
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
  accountUserBtn.innerHTML = capitalizeFirstLetter(currentAccount.firstName) + " " + capitalizeFirstLetter(currentAccount.lastName);
}


// User Settings Container
const myCartBtn = document.getElementById('my-cart-btn');
const changeMyInfoBtn = document.getElementById('change-my-info-btn');
const logOutBtn = document.getElementById('log-out-btn');
// 1. Cart
myCartBtn.addEventListener("click", () => {
  alertForUnderDevelopment()
  console.log("HI!")
})
// 2. Change Info
const userSettingsSection = document.getElementById('user-settings-section');
function changeAccountInfo() {
    userSettingsSection.style.display = "flex"
    toggleActive(userSettingCntr)
}
changeMyInfoBtn.addEventListener('click', changeAccountInfo)

window.addEventListener("click", function(event) {
  if (event.target.id === "user-settings-section") {
    console.log(event.target.id)
    userSettingsSection.style.display = "none"
  }  
});

document.getElementById('save-changes change-btn').addEventListener('click', () => {
  currentAccount.userName = document.getElementById('user-name-change-settings').value;
  currentAccount.password = document.getElementById('password-change-settings').value;
  currentAccount.firstName = document.getElementById('first-name-change-settings').value;
  currentAccount.lastName = document.getElementById('last-name-change-settings').value;
  currentAccount.contactNumber = document.getElementById('contact-number-change-settings').value;
  currentAccount.emailAddress = document.getElementById('email-address-change-settings').value;
  currentAccount.streetNumber = document.getElementById('street-number-change-settings').value;
  currentAccount.city = document.getElementById('city-change-settings').value;
  currentAccount.region = document.getElementById('region-change-settings').value;
  currentAccount.zipCode = document.getElementById('zip-code-change-settings').value;
  
  userLoggedIn();
  userSettingsSection.style.display = "none";
});
document.getElementById('exit-change-btn').addEventListener('click', () => {
  userSettingsSection.style.display = "none";
});

// 3. Logout 
function logOutUser() {
  console.log(currentAccount)
  Swal.fire({
    title: "Are you sure you want to logout?",
    showDenyButton: true,
    confirmButtonText: "Logout",
    denyButtonText: `cancel`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      // Set to empty object
      currentAccount = {}
      toggleActive(userSettingCntr)
      // Change the display of buttons and containers
      signUpBtn.style.display ="flex"
      loginBtn.style.display = "flex"
      accountUserBtn.style.display = "none"
      loginAndSignupCntr.style.display ="flex"
      // Change the flag foundMatch
      foundMatch = false;
    } else if (result.isDenied) {
      toggleActive(userSettingCntr)
    }
  });
}
logOutBtn.addEventListener('click', logOutUser);

