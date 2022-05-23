function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    var email = document.forms['myForm']["femail"].value;
    var phone = document.forms['myForm']["fphone"].value;
    var password = document.forms['myForm']["fpass"].value;

    var namecheck =/^[A-Za-z ]{3,30}$/;
    var emailcheck = /^[A-Za-z0-9_]{3,}@[A-Za-z_]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var phonecheck = /^[789]{1}[0-9]{9}$/;
    var passcheck=/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[A-Za-z0-9!@#$%^&*]{8,16}$/;


    if (namecheck.test(name)===false){
        seterror("name", "*username is invalid");
        returnval = false;
    }
    
    
    if (emailcheck.test(email)===false){
        seterror("email", "*Email is invalid");
        returnval = false;
    }

    
    if (phonecheck.test(phone)===false){
        seterror("phone", "*Phone number is invalid!");
        returnval = false;
    }

    
    if (passcheck.test(password)===false){
         seterror("pass", "*Password is invalid");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}

