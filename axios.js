let myAxios = {
    get: async function(url, callback){
        let myData;
        let option = {
            method: 'GET'
        };

        myData = await fetch(url, option)
        .then(function(Response) {
            return Response.json();
        })
        return myData;
    }
}