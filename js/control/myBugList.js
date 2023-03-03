window.addEventListener('load', function(e){
    e.preventDefault();

    var user = JSON.parse(localStorage.getItem("user"));
    var id = user.id;
    var login = user.login;
    var token = user.token;

    let url = `http://greenvelvet.alwaysdata.net/bugTracker/api/list/${token}/${id}`;

    fetch(url)
    .then( res => res.json()
    .then( data => {
        
        var compteTraite=0;
        var comptePasTraite=0;
        var compteEncours=0;

        var totalBug = data.result.bug.length;

        for( let item of data.result.bug){

            
            var state = item.state;

            
            if(state==0){
                statement = "Pas traité";
                comptePasTraite = comptePasTraite+1;
            }
            if(state==1){
                statement = "En cours";
                compteEncours = compteEncours+1;
            }
            if(state==2){
                statement = "Traité";
                compteTraite = compteTraite+1;
            }
            

            var ligne = `
            <tbody>
            <tr>
            <th scope="row">${item.id}</th>
            <td>${item.title}</td>
            <td>${item.description}</td>
            <td>${item.timestamp}</td>
            <td>${item.user_id}</td>
            <td id="st">
                <select id="etat" name="etat">
                    <option>${statement}</option>
                    <option>Traité</option>
                    <option>Pas traité</option>
                    <option>En cours</option>
                    
                </select>
            </td>
            <td><button class="btn btn-danger" style="font-size:10px; width: 100px; height:30px; padding:3%">Supprimer</button></td>
            </tr>
            
            </tbody>
            `;
            
           
            document.querySelector("thead").insertAdjacentHTML("afterEnd", ligne);
        }

        var details = document.getElementById("details");
        var content = `${totalBug}  Bugs, ${compteEncours} en cours et ${compteTraite} traités`;
        details.innerHTML=content;
    })
    );
});