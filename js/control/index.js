var user = localStorage.getItem("user");

if(!user){

    window.location.replace("login.html");

}else{

    user = JSON.parse(user);
    alert("welcome back "+ user.login);
    console.log(user);
    let nom = document.getElementById('nomU');

    nom.innerHTML = user.login

}

