function apicall(numberid){
    var randommoviearray = ['Heather' , 'Europa Report' , 'Fellowship of the Ring' , 'Silver Linings Playbook' , 'The Shawshank Redemption' , 'Fight Club' , 'Forrest Gump','The Godfather','The Godfather: Part II' , 'The Dark Knight', 'Pulp Fiction','Fight Club','Inception','The Lord of the Rings: The Two Towers','Star Wars: Episode V - The Empire Strikes Back','The Matrix','Goodfellas','Seven ','Se7en','The Silence of the Lambs','City of God','Life Is Beautiful','Star Wars: Episode IV - A New Hope','Saving Private Ryan','The Green Mile','Spirited Away','Parasite','Léon: The Professional','Hara-Kiri','Back to the Future','Terminator 2: Judgment Day','The Usual Suspects','The Pianist','Hara-Kiri','City Lights','Gladiator','Grave of the Fireflies']
    var randomnumber = Math.floor((Math.random() * 38) + 1);
    var randommovie = randommoviearray[randomnumber];
    url= "https://www.omdbapi.com/?apikey=a9f427e3&t="+randommovie;
    
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        document.getElementById("poster-4-"+numberid).src = data.Poster;
        document.getElementById("rating-4-"+numberid).innerHTML = data.imdbRating;
        document.getElementById("name-4-"+numberid).innerHTML = data.Title;
        return data;
    })
}

function apicall2(numberid){
    var randommoviearray = ['Heather' , 'Europa Report' , 'Fellowship of the Ring' , 'Silver Linings Playbook' , 'The Shawshank Redemption' , 'Fight Club' , 'Forrest Gump','The Godfather','The Godfather: Part II' , 'The Dark Knight', 'Pulp Fiction','Fight Club','Inception','The Lord of the Rings: The Two Towers','Star Wars: Episode V - The Empire Strikes Back','The Matrix','Goodfellas','Seven ','Se7en','The Silence of the Lambs','City of God','Life Is Beautiful','Star Wars: Episode IV - A New Hope','Saving Private Ryan','The Green Mile','Spirited Away','Parasite','Léon: The Professional','Hara-Kiri','Back to the Future','Terminator 2: Judgment Day','The Usual Suspects','The Pianist','Hara-Kiri','City Lights','Gladiator','Grave of the Fireflies']
    var randomnumber = Math.floor((Math.random() * 38) + 1);
    var randommovie = randommoviearray[randomnumber];
    url= "https://www.omdbapi.com/?apikey=a9f427e3&t="+randommovie;
    
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        document.getElementById("side-"+numberid).src = data.Poster;
        document.getElementById("plot-"+numberid).innerHTML = data.Plot;
        return data;
    })
}

function apicall3(numberid){
    var randommoviearray = ['Heather' , 'Europa Report' , 'Fellowship of the Ring' , 'Silver Linings Playbook' , 'The Shawshank Redemption' , 'Fight Club' , 'Forrest Gump','The Godfather','The Godfather: Part II' , 'The Dark Knight', 'Pulp Fiction','Fight Club','Inception','The Lord of the Rings: The Two Towers','Star Wars: Episode V - The Empire Strikes Back','The Matrix','Goodfellas','Seven ','Se7en','The Silence of the Lambs','City of God','Life Is Beautiful','Star Wars: Episode IV - A New Hope','Saving Private Ryan','The Green Mile','Spirited Away','Parasite','Léon: The Professional','Hara-Kiri','Back to the Future','Terminator 2: Judgment Day','The Usual Suspects','The Pianist','Hara-Kiri','City Lights','Gladiator','Grave of the Fireflies']
    var randomnumber = Math.floor((Math.random() * 38) + 1);
    var randommovie = randommoviearray[randomnumber];
    url= "https://www.omdbapi.com/?apikey=a9f427e3&t="+randommovie;
    
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        document.getElementById("slide-"+numberid).src = data.Poster;
        document.getElementById("title-1-"+numberid).innerHTML = data.Title;
        document.getElementById("plot-1-"+numberid).innerHTML = data.Plot;
        return data;
    })
}


