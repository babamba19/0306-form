window.onload = function () {
    let userId = document.querySelector("#user-id");
    let pw1 = document.querySelector("#user-pw1");
    let pw2 = document.querySelector("#user-pw2");
    userId.onchange = checkId;
    pw1.onchange = checkPw;
    pw2.onchange = comparePw;
    //   userId.addEventListener("change" ,function(){})
    function checkId() {
      // 조건이 사용자가 입력한 값이 4보다 작거나 15보다 크면
      if (userId.value.length < 4 || userId.value.length > 15) {
        alert("4~15자리의 영문과 숫자를 사용하세요."); //오류 메시지 출력 (유효성검사)
        //   userId.value = ""
        userId.select(); //다시 입력할수 있도록 userId필드 선택
      }
    }
    //   비밀번호
    function checkPw() {
      if (pw1.value.length < 8) {
        alert("비밀번호는 8자리 이상이어야 합니다."); //오류 메시지 출력 (유효성검사)
        pw1.value = "";
        pw1.focus();
      }
    }
    // 비밀번호 확인
    function comparePw() {
      if (pw1.value != pw2.value) {
        alert("비밀번호가 다릅니다. 다시 입력하세요."); //오류 메시지 출력 (유효성검사)
        pw2.value = "";
        pw2.focus();
      }
    }
  };