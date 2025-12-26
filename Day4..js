
const input  = document.getElementById("input");
const h2 = document.getElementById("h2");

    input.addEventListener("keyup", display);

    
    function display(){
         console.log("heello")
        h2.innerHTML =  input.value;
       
    }
    
    //localstorage
    localStorage.setItem('name','Aniket')
    console.log(localStorage.getItem('name'));
    localStorage.removeItem('name');
    

    //session storage
    sessionStorage.setItem("name","Zoro")
    console.log(sessionStorage.getItem("name"));
    sessionStorage.removeItem("name")
    
    //cookie
    document.cookie = "name=Aniket; expires=" + new Date(2025,12,27).toUTCString();