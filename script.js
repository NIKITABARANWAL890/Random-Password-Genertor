let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";
let password = "";
const generatePassword = () =>{
    password="";
    for(let i=0; i<12; i++){
        let randomIndex = Math.floor(Math.random()*str.length);
        password+=str[randomIndex];
    }
    console.log(password);
    document.getElementById("password").value=password;
}

const copyPassword = () =>{
    navigator.clipboard.writeText(password)
    .then(() => {
        alert("Password copied: " + password);
    })
    .catch(err => {
        console.error("Failed to copy password: ", err);
    });
}
document.querySelector(".generateBtn").addEventListener('click', generatePassword);
document.querySelector(".img").addEventListener('click', copyPassword);