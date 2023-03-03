$("#connection").on('submit', function(e){
    e.preventDefault();

    let login = $("#login").val();
    let pass = $('#password').val();
    var error="";

    if(!pass){
        error="Entre le mot de passe";
    }
    if(!login && !pass){
        error = "remplir le formulaire";
    }
    
    
    if(!error){
        
        let url=  `http://greenvelvet.alwaysdata.net/bugTracker/api/login/${login}/${pass}`;
        let token="";

        fetch(url)
        .then(
            (res) => res.json()
            .then(
                (data) => {
                    
                    var user = {
                        id:data.result.id,
                        login:login,
                        pass:pass,
                        token : data.result.token

                    }
                    var json = JSON.stringify(user);
                    localStorage.setItem("user",json);
                    window.location.replace("index.html");
                    
                }
            )

            
        );


    }else{
        let errorObj = document.getElementById('error');

        errorObj.innerHTML=error;
    }

});
