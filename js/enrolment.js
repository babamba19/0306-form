window.onload = function(){
    // 제출버튼을 눌렀을 때 확인 함수
    const showConfirmation = document.getElementById("showConfirmation")
    showConfirmation.addEventListener("click" , function(){
        const form = document.getElementById("testform")
        // 메시지 확인하는 변수
        const fconfirmation = document.getElementById("confirmation")
        // 입력된 폼 데이터 가져오기
        const userName = form.userName.value
        const major = form.major.value
        const subject = form.subject.value
        const mailing1 = form.mailing1.checked
        const mailing2 = form.mailing2.checked
        const mailing3 = form.mailing3.checked
        // 확인 메시지 생성
        const fconfirmationMessage = `
        <h2>수강신청 내용 확인</h2>
        <p><strong>이름 : </strong>${userName}</p>
        <p><strong>학과 : </strong>${major}</p>
        <p><strong>신청 과목 : </strong>${subject}</p>
        <p><strong>메일링 : </strong>
        <ul>
          <li>${mailing1 ? "해외단신" : ""}</li>
          <li>${mailing2 ? "5분 회화" : ""}</li>
          <li>${mailing3 ? "모닝팝스" : ""}</li>
        </ul>
        </p>
        `
        // 확인메시지 표시 및 폼 숨기기
        fconfirmation.innerHTML = fconfirmationMessage
        form.style.display = "none"
        fconfirmation.style.display = "block"
    })
}