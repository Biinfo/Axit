function validateForm(){
    let x=document.forms["myform"]["fname"].value;
    if(x==null || x==""){
        alert("First name must be filled out")
        return false
    }
}