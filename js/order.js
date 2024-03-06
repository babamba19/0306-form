window.onload = function(){
    const check = document.querySelector("#shippingInfo")
    // check에 클릭 했을 때 이벤트 발생 할 때 실행 함수
    check.addEventListener("click" , function(){
        // 체크박스에 체크가 되었다면
        if(check.checked == true){
            // 주문 정보를 베송정보에 복사
            document.querySelector("#shippingName").value = document.querySelector("#billingName").value
            document.querySelector("#shippingTel").value = document.querySelector("#billingTel").value
            document.querySelector("#shippingAddr").value = document.querySelector("#billingAddr").value
        }
        else{
            document.querySelector("#shippingName").value = ""
            document.querySelector("#shippingTel").value = ""
            document.querySelector("#shippingAddr").value = ""
        }
    })
}