// Get job article from data ID
// https://www.leforem.be/recherche-offres-emploi/jsp/index.jsp#jobDetail?jobId=I30947968

// Link to the REST API
// https://www.leforem.be/recherche-offres-emploi/rest/searchJob/fromQuickSearch?query=2446349

let foremnode = require('leforem-node');
// Public API

let client = new foremnode();

let q = "professeur",
 	location="BE-WLG",
 	page=1,
 	resultat= 150;

client.search(resultat,page,q,location,function (error, data, count, page, resultat) {
    if(error) console.log("Error: ",error)
    let jobs = [];
    data.map((i)=> {
        jobs.push(i.title)
    })
    // console.log(data[0])
    // console.log(data)

    for(let item in data){
        console.log(data[item])
        // console.log(data[item].languageCodes[0].trim())
    }
});

// let counter = 0;

// client.stream(q,location, resultat, function (data, count, timestamp) {
//     counter += 1;
//     console.log("Counter: ", counter)
//     console.log('')
//     for(let item in data){
//         console.log(data[item].title.trim());
//     }
//     console.log('###############')
// });