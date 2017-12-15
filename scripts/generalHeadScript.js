console.log('lol');

function createHeader(){
    const linkNames = ['Home', 'About', 'Contact'];
    const hd = document.createElement('div');
    hd.classList += 'mainHead';
    site.appendChild(hd);
    const hdTitle = document.createElement('h1');
    hdTitle.classList += 'mainHeadTitle';
    hdTitle.innerHTML="theDullahan";
    hdTitle.addEventListener('click', () => window.open('index.html', "_self"));
    hd.appendChild(hdTitle);
    const hdLinks = document.createElement('ul');
    hdLinks.classList += 'headerLinks'
    for(let i = 0; i < linkNames.length; i++){
        const hdLinkItem = document.createElement('li');
        hdLinkItem.innerHTML = linkNames[i];
        hdLinks.appendChild(hdLinkItem);
    }
    hd.appendChild(hdLinks);
}

(function initHead(){
    createHeader();
})()