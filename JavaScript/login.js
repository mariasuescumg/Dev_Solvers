
//Database
baseDeDatos={
    Programate:"Programate",
    Programatepass:"abcde",

    Goyn:"Goyn",
    Goynpass: "12345",

    Bit:"Bit",
    Bitpass:"4567",
}



const button = document.querySelector("#login-but")

button.addEventListener("click", (e)=>{
    e.preventDefault()
    loginbut()
  
})
function loginbut(){
    const username = document.getElementById("logemail").value
    const pass = document.getElementById("logpass").value

    if(username == baseDeDatos.Programate && pass == baseDeDatos.Programatepass){
        window.location.href = "../html/keep.html"
    }else if (username == baseDeDatos.Bit && pass == baseDeDatos.Bitpass){
        window.location.href = "../html/keep.html"
    }else if (username == baseDeDatos.Goyn && pass == baseDeDatos.Goyn){
        window.location.href = "../html/keep.html"
    }
    else{
        alert("Clave o usuario incorrecto")
    }

}