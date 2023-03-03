window.addEventListener('load', function(e){
    e.preventDefault();
    
    var user = JSON.parse(localStorage.getItem("user"));
    var id = user.id;
    var login = user.login;
    var token = user.token;

    let url = `http://greenvelvet.alwaysdata.net/bugTracker/api/users/${token}`;

    fetch(url)
    .then(res => res.json()
    .then(data => {
        
        console.log(data);



        taille = data.result.user.length;
        console.log(taille);

    
        user=data.result.user;

        for(let item of user){
           
           if(item){
                var card = `
                    <ul>
                    <li>${item}</li>
                    </ul>
                 `;
                document.querySelector("#list").insertAdjacentHTML("beforebegin", card);
           }
        }
    
    }));

});