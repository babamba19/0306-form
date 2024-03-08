window.onload = function(){
    let price = 24000
    const sideMenu = document.querySelectorAll(".checkbox")
    const total = document.querySelector("#total")
    const selectedItems = document.querySelector("#selectedItem")
    total.value = `합계 : ${price.toLocaleString()}원`
    for(i = 0 ; i < sideMenu.length; i++){
        // 추가 메뉴 체크박스에 클릭했을때 실행 함
        sideMenu[i].onclick = function(){
            let itemName = this.parentNode.textContent.trim()
            let itemPrice = parseInt(this.value)
            if(this.checked == true){
                price += itemPrice
                selectedItems.innerHTML += `<div> ${itemName} : ${itemPrice.toLocaleString()}원 </div>`
            }
            else{
                price -= itemPrice
                let selected = selectedItems.querySelectorAll("div")
                selected.forEach((item) =>{
                    if(item.textContent.includes(itemName)){
                        item.remove()
                    }
                }) 
            }
            total.value = `합계 : ${price.toLocaleString()}원`
        }
    }
}