
//Database
Programate = "Programate"
Programatepass = "abcde"

function loginbut(){
    const username = document.getElementById("logemail").value
    const pass = document.getElementById("logpass").value

    if(username == Programate && pass == Programatepass){
        return console.log("welcome");
    }
}
console.log(Programate)