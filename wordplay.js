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


//입력버튼용
function addEntryOrAlert() {
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    let answerLangTest = korean.test(typingBox.value);
    if (answerLangTest) {
        insert();
    }

    if (typingBox.value.length == 3) {
        insert();
    }

    let wordBoxArray = wordListBox.getElementsByTagName("p");
    if (wordBoxArray.length <= 0) {
        insert();
    }


    // warnKoreanLang();
    // warnWordLength();
    // warnMatchEnds();
    // warnOverlap();
    // warnTenWordsFull();
}


//한국어경고
function warnKoreanLang() {
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    let answerLangTest = korean.test(typingBox.value);

    if (!answerLangTest) {
        alert("한글만 입력 가능합니다. Korean words only.");
        typingBox.value = "";
    } else {
        insert();
    }
}


// 3글자 길이 경고
function warnWordLength() {
    if (typingBox.value.length == 3) {
        insert();
    } else {
        alert("3글자만 입력하십시오.");
        typingBox.value = "";
    }
}


// 끝말 경고
function warnMatchEnds() {
    let wordBoxArray = wordListBox.getElementsByTagName("p");

    if (wordBoxArray.length <= 0) {
        insert();
    } else {
        let lastSingleBox = wordBoxArray[wordBoxArray.length - 1];
        let contentOfSingleBox = lastSingleBox.innerText;
        if (contentOfSingleBox.charAt(2) == typingBox.value.charAt(0)) {
            insert();
        } else {
            alert("앞 단어의 마지막 소리로 시작하는 단어를 입력합니다.");
        }
    }
}


// 단어 중복 경고
function warnOverlap() {
    let boxArray = wordListBox.getElementsByTagName("p");

    if (boxArray.length >= 1) {
        let tempArray = [];
        for (let i = 0; i < j; i++) {
            tempArray.push(boxArray[i].innerText);
        }
        let overlapTest;
        if (tempArray.includes(typingBox.value)) {
            overlapTest = true;
        }

        if (!overlapTest) {
            insert();
        } else {
            alert("이미 입력된 단어입니다.");
        }

    } else {
        insert();
    }
}


// 10단어 완료 경고 _ok
function warnTenWordsFull() {
    let smallBoxOfWord = wordListBox.getElementsByTagName("p");

    if (smallBoxOfWord.length >= 10) {
        confirm("단어를 모두 지웁니다.");

        if (confirm("단어를 모두 지웁니다.")) {
            wordListBox.remove(smallBoxOfWord);
        } else {
            alert("게임이 끝났습니다.");
        }

    } else {
        insert();
    }
}