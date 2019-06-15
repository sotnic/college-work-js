//global variables
var firstName = document.getElementById("fName");
var lastName = document.getElementById("lName");
var age = document.getElementById("age");
var address = document.getElementById("address");
var city = document.getElementById("city");
var postalCode = document.getElementById("pCode");
var province = document.getElementById("province");
var pw1Input = document.getElementById("pw1");
var pw2Input = document.getElementById("pw2");
var emailInput = document.getElementById("emailbox");
var submit = document.getElementById("submitBtn");
//If fields are empty
function IsEmpty(x) {
  "use strict";
  if (x === "" || x === undefined) {
    return true;
  } else {
    return false;
  }
}
// validate entered age
function ValidateAge(age) {
  "use strict";
  age = parseInt(age);
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
// validate entered postal code
function ValidatePostalCode(postalCode) {
  "use strict";
  var pattern = /[A-Za-z][0-9][A-Za-z]([\s]?)[0-9][A-Za-z][0-9]/;
  if (pattern.test(postalCode)) {
    return true;
  } else {
    return false;
  }
}
// validate entered province
// function ValidateProvince(province) {
//   "use strict";
//   var provinces = ["NS", "NF", "PE", "NB", "QC", "ON", "MN", "SK", "AB", "BC"]
//   provinces.forEach(function(element)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
function ValidateProvince(province) {
    "use strict";
    var result = false;
    switch (province) {
        case 'NS':
            result = true;
            break;
        case 'NF':
            result = true;
            break;
        case 'PE':
            result = true;
            break;
        case 'NB':
            result = true;
            break;
        case 'QC':
            result = true;
            break;
        case 'ON':
            result = true;
            break;
        case 'MN':
            result = true;
            break;
        case 'SK':
            result = true;
            break;
        case 'AB':
            result = true;
            break;
        case 'BC':
            result = true;
            break;
        default:
            result = false;
    }
    return result;
}
  // validate entered email
  function ValidateEmail(emailInput) {
      var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (pattern.test(emailInput)) {
          return true;
      }
      else {
          return false;
      }
  }
  function ValidatePassword(pw1Input) {
      var pattern = /(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
      if (pattern.test(pw1Input)) {
          return true;
      }
      else {
          return false;
      }
  }

  function ComparePass(pw1Input, pw2Input) {
      if (pw1Input == pw2Input) {
          return true;
      }
      else {
          return false;
      }
  }

function ValidateForm() {
    "use strict";
    if (IsEmpty(firstName.value) || IsEmpty(lastName.value) || IsEmpty(age.value) || IsEmpty(address.value) || IsEmpty(city.value) || IsEmpty(postalCode.value) || IsEmpty(province.value) || IsEmpty(emailInput.value) || IsEmpty(pw1Input.value) || IsEmpty(pw2Input.value)) {
        alert("No blanks!");
    }
    else if (ValidatePostalCode(postalCode.value) === false) {
        alert("You forgot postal code? Come on!");
    }
    else if (ValidateProvince(province.value) === false) {
        alert("Wrong input!");
    }
    else if (ValidateAge(age.value) === false) {
        alert("Sorry, kid! Adults only!");
    }
    else if (ValidateEmail(emailInput.value) === false) {
        alert("Something wrong with your email, bud!");
    }
    else if (ValidatePassword(pw1Input.value) === false) {
        alert("Too easy! Use capital letters and numbers");
    }
    else if (ComparePass(pw1Input.value, pw2Input.value) === false) {
        alert("Seriously? Different passwords?");
    }
    else {
        alert("Finally!!! It took forever!");
    }
}

function AddEventListeners() {
    "use strict";
    submit.addEventListener("click", ValidateForm, false);
}

if (window.addEventListener) {
    window.addEventListener("load", AddEventListeners, false);
}
