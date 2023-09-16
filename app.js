document.addEventListener('DOMContentLoaded', async function() {
    let url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

    let data = await myAxios.get(url);
    
    console.log(data);

})