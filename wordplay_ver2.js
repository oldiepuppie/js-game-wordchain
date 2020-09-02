const typingBox = document.getElementById("typingbox");
const wordListBox = document.getElementById("wordlistbox");

const insertValueBtn = document.getElementById("insertvalue");
const removeBtn = document.getElementById("removeall");
insertValueBtn.addEventListener("click", insert);
removeBtn.addEventListener("click", removeWords);



//입력
function insert() {
    let boxWithoutWord = document.createElement("p");
    let wordForBox = document.createTextNode(typingBox.value);
    
    boxWithoutWord.appendChild(wordForBox);
    wordListBox.appendChild(boxWithoutWord);
    typingBox.focus();
    typingBox.value = "";
}

//지우기
function removeWords() {    
    while (wordListBox.hasChildNodes()) {
        wordListBox.removeChild(wordListBox.firstChild);
    }
}



function addEntryOrAlert() {
    //한국어 테스트
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    let answerLangTest = korean.test(typingBox.value);
    //글자 길이 테스트
    if (typingBox.value.length == 3) {
        insert();
    } else {
        alert("3글자만 입력하십시오.");
        typingBox.value = "";
    }
}