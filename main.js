const button = document.querySelector('button')

const clickButton = (evt) => {
    console.log("button clicked")
}

button.addEventListener('click', clickButton)
    

axios.get("https://swapi.dev/api/planets/?search=Alderaan")
.then(function(res, req) {
    console.log(res.data.results[0].residents)
    const resident = res.data.results[0].residents
    for(let i=0; i<resident.length; i++){
        axios.get(resident[i])
            .then(function(res1, req1){
                const heading = document.createElement("h2")
                heading.textContent = res1.data.name
                document.body.appendChild(heading)
                console.log(res1.data)
            })
    }
})