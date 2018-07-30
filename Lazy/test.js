let foremnode = require('leforem-node');
// Public API

let client = new foremnode();

let q = "developpeur",
 	location="BE-WLG",
 	page=2,
 	resultat= 1;

client.search(resultat,page,q,location,function (error, data, count, page, resultat) {
    if(error) console.log("Error: ",error)
    let jobs = [];
    data.map((i)=> {
        jobs.push(i.title)
    })
    // console.log(jobs)


    // Get job article from data ID
    // https://www.leforem.be/recherche-offres-emploi/jsp/index.jsp#jobDetail?jobId=I30947968

    // Link to the REST API
    // https://www.leforem.be/recherche-offres-emploi/rest/searchJob/fromQuickSearch?query=2446349


    console.log(data[0])
});

// client.stream(q,location,function (data,count,timestamp) {
// 	console.dir(data);
// });