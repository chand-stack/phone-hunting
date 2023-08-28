const loadPhone = async (searchText,isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll)

}

const displayPhones = (phones, isShowAll) => {
    
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = ''

    const showAllBtn= document.getElementById('show-All')

    if(phones.length > 12 && !isShowAll){
        showAllBtn.classList.remove('hidden')
    }
    else{
      showAllBtn.classList.add('hidden')
    }

    if(!isShowAll){
      phones = phones.slice(0,12)
    }

phones.forEach(phone => {
    // console.log(phone)

    const phoneDiv = document.createElement('div')
    phoneDiv.classList = `card p-4 bg-base-100 shadow-xl`;
    phoneDiv.innerHTML = `
    <figure><img src="${phone.image}" /></figure>
    <div class="card-body">
      <h2 class="text-center font-bold text-lg">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-center">
        <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
      </div>
    </div>
    `;
    phoneContainer.appendChild(phoneDiv);
    
});
toggleLoadingSpinner(false)
}

const handleShowDetail = async (id) => {
  // console.log('show detail',id)
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json();
  const phone = data.data
  showPhoneDetails(phone)
}

const showPhoneDetails = (phone) => {
console.log(phone)
  const phoneContainer = document.getElementById('show-modal-container');

  const detaiModal = document.createElement('div')
  detaiModal.classList.add('class="space-y-1')
  detaiModal.innerHTML =`
  <img class="mx-auto" src="${phone.image
  }" alt="">
  <h1 class="font-bold text-2xl">${phone.name}</h1>
  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
  <p><span class="font-bold">Storage: </span>${phone.mainFeatures.storage
  }</p>
  <p><span class="font-bold">Display Size: </span>${phone.mainFeatures.displaySize
  }</p>
  <p><span class="font-bold">Chipset: </span>${phone.mainFeatures.chipSet
  }</p>
  <p><span class="font-bold">Memory: </span>${phone.mainFeatures.memory
  }</p>
  <p><span class="font-bold">Slug: </span>${phone.slug
  }</p>
  <p><span class="font-bold">Release Date: </span>${phone.releaseDate
  }</p>
  <p><span class="font-bold">Brand: </span>${phone.brand
  }</p>
  `
phoneContainer.appendChild(detaiModal)
  show_details_modal.showModal()
}

const handleSearch = (isShowAll) => {
  toggleLoadingSpinner(true)
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value;
  loadPhone(searchText, isShowAll)
}

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner')
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }else{
    loadingSpinner.classList.add('hidden')
  }
}

const handleShowAll = () => {
  handleSearch(true)
}