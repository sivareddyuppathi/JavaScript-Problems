var jsonObj = [];
function validateAll() {
    var obj = {};
    if (fNameValidation() && lNameValidation() && validateDob() && validEmpId() && validatePhone() && validateGmail() && validateAddress()) {
        obj.fnmae = document.getElementById("fname").value;
        obj.lnmae = document.getElementById("lname").value;
        obj.dob = document.getElementById("dob1").value;
        obj.empid = document.getElementById("empid").value;
        obj.phone = document.getElementById("phone1").value;
        obj.gmail = document.getElementById("gmail1").value;
        obj.address = document.getElementById("address1").value;

        alert("Form Validation Success !!!!!!!");
        if (jsonObj.length == 0) {
            jsonObj.push(obj);
        } else {
            if (duplicatevalidation(obj))
                alert("duplicae data not allowed");
            else {
                jsonObj.push(obj);
                alert("Data Inserted Successfully")
            }
        }
        return false;
    }
}
function  duplicatevalidation(obj) {
    var empid = obj.empid;
    ;
    for (var i = 0; i < jsonObj.length; i++) {
        if (empid == jsonObj[i].empid)
            return true;
    }
    return false;
}
function fNameValidation() {
    var fName = document.forms["uesrLogin"]["fName"].value;
    var fNameRegEx = new RegExp("^([a-zA-Z]{3,15})$");
    if (fName == "" || !fNameRegEx.test(fName)) {
        document.getElementById("fNameErroCheck").innerHTML = "** Fille The fName it allows Only alphabets 3 to 5 **";
        return false;
    } else {
        document.getElementById("fNameErroCheck").innerHTML = "";
        return true;
    }
}
function lNameValidation() {
    var lName = document.forms["uesrLogin"]["lName"].value;
    var lNameRegEx = new RegExp("^([a-zA-Z]{3,15})$");
    if (lName == "" || !lNameRegEx.test(lName)) {
        document.getElementById("lNameErroCheck").innerHTML = "** ** Fille The lName it allows Only alphabets 3 to 5 **";
        return false;
    } else {
        document.getElementById("lNameErroCheck").innerHTML = "";
        return true;
    }
}
function validateDob() {
    var dob = document.forms["uesrLogin"]["dob"].value;
    var dobRegEx = new RegExp("^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$");
    if (dob == "" || !dobRegEx.test(dob)) {
        document.getElementById("dobErroCheck").innerHTML = "** ** Please fill DOB In given Format Only **";
        return false;
    } else {
        document.getElementById("dobErroCheck").innerHTML = "";
        return true;
    }
}
function validEmpId() {
    var empId = document.forms["uesrLogin"]["empId"].value;
    var empIdRegEx = new RegExp("^[0-9]{3,10}$");
    if (empId == "" || !empIdRegEx.test(empId)) {
        document.getElementById("empIdErroCheck").innerHTML = "** ** EmpId  allows Only Numbers 3 to 10 **";
        return false;
    } else {
        document.getElementById("empIdErroCheck").innerHTML = "";
        return true;
    }
}
function validatePhone() {
    var phone = document.forms["uesrLogin"]["phone"].value;
    var phoneRegEx = new RegExp("^[7-9][0-9]{9}$");
    if (phone == "" || !phoneRegEx.test(phone)) {
        document.getElementById("phNoErroCheck").innerHTML = "** ** phone Must Starts with [7-9], must be 10 numbers **";
        return false;
    } else {
        document.getElementById("phNoErroCheck").innerHTML = "";
        return true;
    }
}
function validateGmail() {
    var gmail = document.forms["uesrLogin"]["gmail"].value;
    var gmailRegEx = /^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-z]){2,5}$/;
    if (gmail == "" || !gmailRegEx.test(gmail)) {
        document.getElementById("emailErroCheck").innerHTML = "** ** Gmail in Given Format **";
        return false;
    } else {
        document.getElementById("emailErroCheck").innerHTML = "";
        return true;
    }
}
function validateAddress() {
    var address = document.forms["uesrLogin"]["address"].value;
    var addressRegEx = new RegExp("^([a-zA-Z0-9]{3,})$");
    if (address == "" || !addressRegEx.test(address)) {
        document.getElementById("addressErroCheck").innerHTML = "** address must be 3 Charecters **";
        return false;
    } else {
        document.getElementById("addressErroCheck").innerHTML = "";
        return true;
    }
}
var right1 = parent.document.getElementById("rframe").contentWindow.document;
function tableCreation() {

    var str = "<table><tr><th>fNmae</th><th>lName</th><th>Dob</th><th>EmpId</th><th>phone</th><th>Gmail</th><th>Address</th></tr></table>";
    for (var i = 0; i < jsonObj.length; i++) {
        str += "<table><tr><td>" + jsonObj[i].fnmae + "</td><td>" + jsonObj[i].lnmae + "</td><td>" + jsonObj[i].dob + "</td><td>" + jsonObj[i].empid + "</td><td>" + jsonObj[i].phone + "</td><td>" + jsonObj[i].gmail + "</td><td>" + jsonObj[i].address + "</td></tr></table>";
    }
    right1.getElementById("tabidgiven").innerHTML = str;
}

