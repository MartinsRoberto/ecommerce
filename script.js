function primeirosCards(){
  fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1').then(transformarJSON).then(construirCards).catch(erro)
}
primeirosCards()


const btn = document.querySelector('.btn-more')
var btn_page = 2
btn.onclick = ()=>{
  fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page='+btn_page).then(transformarJSON).then(construirCards).catch(erro)
  btn_page += 1
}

function transformarJSON(response){
  return response.json()
}

function construirCards(cards){
  
  cards.products.forEach(element => {
    document.querySelector('.card').innerHTML += `<div class="card-item">
    <img src="${element.image}" alt="" class="card-img">
    <h3 class="card-title">${element.name}</h3>
    <p class="card-description">${element.description}</p>
    <span class="price-total">De: R$${element.oldPrice},00</span>
    <span class="price-off">Por: R$${element.price},00</span>
    <span class="price-installments">ou ${element.installments.count}x de R$${element.installments.value}</span>
    <button class="btn-buy btn-primary">Comprar</button>
  </div>`

  });
}

function erro(){
  console.log('erro')
}