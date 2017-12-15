console.log('lol');

function createHeader(){
    const hd = document.createElement('div');
    hd.classList += 'mainHead';
    site.appendChild(hd);
    const hdTitle = document.createElement('h1');
    hdTitle.classList += 'mainHeadTitle';
    hdTitle.innerHTML="theDullahan";
    hd.appendChild(hdTitle);
}

(function initHead(){
    createHeader();
})()