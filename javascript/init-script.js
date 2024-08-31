const shareBtn =document.querySelector('.adctn-logo')
let socialContainer =document.querySelector('.popup')
const closingPopupBtn =document.querySelector('.popup-closing-btn')
const body =document.querySelector('body')
const main =document.querySelector('main')
const html =document.querySelector('html')

html.addEventListener('click',(event)=>{
  if (event.target ===html) {
    shareBtn.classList.remove('disable')
    socialContainer.classList.remove('dynamique-openning')
  }
})
body.addEventListener('click',(event)=>{
  if (event.target ===body) {
    shareBtn.classList.remove('disable')
    socialContainer.classList.remove('dynamique-openning')
  }
})
main.addEventListener('click',(event)=>{
  if (event.target ===main) {
    shareBtn.classList.remove('disable')
    socialContainer.classList.remove('dynamique-openning')
  }
})
shareBtn.addEventListener('click', () => {
  shareBtn.classList.add('disable')
  socialContainer.classList.add('dynamique-openning')
})

closingPopupBtn.addEventListener('click', () => {
  shareBtn.classList.remove('disable')
  socialContainer.classList.remove('dynamique-openning')
})



const addOne =document.getElementById('addOne')
const addTwo =document.getElementById('addTwo')
const addThree =document.getElementById('addThree')
const resetToZero =document.getElementById('resetToZero')
resetToZero.style.backgroundColor='crimson'

let nbrOfItems =document.getElementById('nbr-of-items')
let orderBtn =document.querySelectorAll('.order-btn button')
let order =0

for (let i = 0; i < orderBtn.length; i++) {
  const element = orderBtn[i]

  let viewOrders =() => {
    switch (orderBtn[i].textContent) {
      case 'Add to cart':
        order++
      break
      case '+2':
        order+=2
      break
      case '+3':
        order+=3
      break
      default:
        console.log('You have not a order !')
        order=0
        break
      // return order
    }

    if (order > 10 && orderBtn[i].textContent === '+3' && orderBtn[i].textContent !== 'Add to cart') {
      alert('Cart is full ! \nYou can add only one ')
      order =9
    }
    else if(order >10 && orderBtn[i].textContent === '+2'){
      alert("Cart is full !\nCan't add more.")
      order =10
    }
    else if(order >10){
      alert('Cart is full !')
      order =10
    }
    else{
      order
    }

    nbrOfItems.innerHTML= order

    let singlePrice =2
    let itemsPrice =order * singlePrice
    let totalBeTax =itemsPrice + 4.66
    let taxAppliedOn =totalBeTax*0.1
    let orderTotal =totalBeTax + taxAppliedOn

    let orderView =document.querySelector('.amazon-features')
    let orderContain = `<p><u>Items( ${order} ) :</u><span>$<b> ${itemsPrice}</b></span></p>
    <p><u>Shipping&Handling :</u><span>$<b> ${4.66}</b></span></p>
    <p><u>Total before tax :</u><span>$<b> ${totalBeTax}</b></span></p>
    <p><u>Estimated tax (10%):</u><span>$<b> ${taxAppliedOn}</b></span></p><br>
    <p><strong>Order Total:</strong><span><i> $${orderTotal}</i></span></p>`
    orderView.innerHTML = orderContain
  }
  viewOrders()
  element.addEventListener('click',viewOrders)
}

