
$("#inscription").on('submit', function(e){
    e.preventDefault();
    let login = $("#login").val();
    let pass = $('#pass').val();
    let pass2 = $('#pass2').val();
    var error="";
    

    if(!pass){
        error="Entre le mot de passe";
    }
    if(pass!==pass2){
        error='les mots de passe ne sont pas identiques';
    }
    if(!login && !pass){
        error = "remplir le formulaire";
    }

    if(!error){

        let url=  `http://greenvelvet.alwaysdata.net/bugTracker/api/signup/${login}/${pass}`;

        fetch(url)
        .then(
            (res) => res.json()
            .then(
                (data) => {
                                        
                    alert("Bien enregistré avec succès, connectez-vous !");
                }
            )

            
        );

        

    }else{
        let errorObj = document.getElementById('error');

        errorObj.innerHTML=error;
    }



});