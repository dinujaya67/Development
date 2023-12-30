function Validation(){
    let phone = document.getElementById("num").value;
    let numLength = phone.length;
    let firstNums = phone.substr(0,2);
    let lastNums = phone.substr(numLength - 9, 9);
    let num;

    if(numLength < 9){
        alert("Numbers Missing!");
        document.getElementById("msg").innerHTML = 'Invalid Number';
    }else if(numLength == 9){
        alert("Number Validated! :)");
        num = "94" + phone;
        document.getElementById("msg").innerHTML = num;
    }else if(numLength == 10){
        alert("Number Validated! :)");
        num = "94" + lastNums;
        document.getElementById("msg").innerHTML = num;
    }else if(numLength > 11){
        alert("Invalid Number!");
        document.getElementById("msg").innerHTML = 'Invalid Number'
    }else if (numLength == 11 && firstNums != 94){
        alert("Invalid Number!");
        document.getElementById("msg").innerHTML = 'Invalid Number'
    }else if (numLength == 11 && firstNums == 94){
        alert("Number Validated! :)");
        num = phone;
        document.getElementById("msg").innerHTML = num;
    }else {
        alert("Invalid Number!");
        document.getElementById("msg").innerHTML = 'Invalid Number'
    }
}