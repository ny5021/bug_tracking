$("#formBug").on('submit', function(e){

    e.preventDefault();
   
    var title = $("#title").val();
    var description = $("#description").val();

    
    var user = JSON.parse(localStorage.getItem("user"));
    var id = user.id;
   // var login = user.login;
    var token  = user.token;

    console.log(token);
    
    var er ="";
    var error = document.getElementById("error");        
   
    if(!title){
        er = "Entrer le titre";
    }
    if(!description){
        er="Entre la description";
    }

    if(!er){
       
        let url = `http://greenvelvet.alwaysdata.net/bugTracker/api/add/${token}/${id}`;

        fetch(url, {
            method:'post',
            body: JSON.stringify({
                title: title,
                description: description})
                

        }).then( res => res.json() .then(data => {
            
            alert('Nouveau bug ajouté avec succès');     
    
    }));
    }else{
        error.innerHTML=er
    }



    

    
});