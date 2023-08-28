const loadPhone = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json()
    const aiData = data.data.tools
    showAll(aiData)
    // console.log(data.data.tools)
}

const showAll = (aiTools) =>{
    const aiContainer = document.getElementById('card-container')
    aiTools = aiTools.splice(0,6)

    
    // if(!showAllai){}
    // if(seeAllai(true)){
    //     aiTools = aiTools.splice(0,aiTools.length)
    // }
    
aiTools.forEach(element => {
    console.log(element)
    const newCard = document.createElement('div');
    newCard.innerHTML = `
    <div class="card  bg-base-100 shadow-xl mx-auto md:mx-0">
                    <figure><img class="p-3" src="${element.image}" alt="ai tools" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">Features</h2>
                      <p>${element.features[0]}</p>
                      <p>${element.features[1]}</p>
                      <p>${element.features[2] || " "}</p>
                      <hr class="my-2">
                      <h2 class="card-title">${element.name}</h2>
                      <p><i class="fa-regular fa-calendar-days"></i> ${element.published_in}</p>

                      <div class="card-actions justify-end">
      <button class="btn btn-primary text-2xl rounded-full bg-red-100 text-red-600 border-none"><i class="fa-solid fa-circle-chevron-right"></i></button>
    </div>

                    </div>
                  </div>
    `;

    aiContainer.appendChild(newCard)
});
}





loadPhone() 