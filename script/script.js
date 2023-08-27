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
    console.log(phone)

    const phoneDiv = document.createElement('div')
    phoneDiv.classList = `card p-4 bg-base-100 shadow-xl`;
    phoneDiv.innerHTML = `
    <figure><img src="${phone.image}" /></figure>
    <div class="card-body">
      <h2 class="text-center font-bold text-lg">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
    `;
    phoneContainer.appendChild(phoneDiv);
    
});
toggleLoadingSpinner(false)
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