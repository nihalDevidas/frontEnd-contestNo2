const form_processing =   ()=>{

    const val = document.getElementById("passWord").value;
    const val2 = document.getElementById("c-passWord").value;
    if(val != val2){
        window.alert("Password doesn't match");
    }
}