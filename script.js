const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

arr=["Really!", "Why Not?", "Pretty Please!", "Its Kinda Infinite!", "Come Onnnn!!", "Lesss Gooo"]
brr=["&#128529;", "&#128532;", "&#128524;", "&#128526;", "&#128517;", "&#128512;"];
var i=0;
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
const de=document.querySelectorAll('span');
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Yayyy!!! Done &#128522;';
    de[0].innerHTML="&#128516;";
    i=6;
    noBtn.disabled = true;
});

noBtn.addEventListener('click', () => {
    // const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    // const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    //
    // noBtn.style.left = i + 'px';
    // noBtn.style.top = j + 'px';
    question.innerHTML = arr[i];
    de[0].innerHTML=brr[i];
    i++;
    if(i==6)
    {
      i=2;
    }
});
