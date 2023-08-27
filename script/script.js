const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)

}

const displayPhones = phones => {
    
    const phoneContainer = document.getElementById('phone-container')

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
}

loadPhone()