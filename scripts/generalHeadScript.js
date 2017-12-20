window.onload = function(){
    console.log('lol');


//Make the header html
function createHeader(){
    //The wrapping div for header
    const fullHead = document.createElement('div');
    site.appendChild(fullHead);
    fullHead.id = 'fullHead';
    //Array with links for the the list
    const linkNames = ['Home', 'Legends', 'Stories', 'Reviews',  'About', ];
    //Main div of header
    const hd = document.createElement('div');
    hd.classList += 'mainHead';
    fullHead.appendChild(hd);
    //Title of the website
    const hdTitle = document.createElement('h1');
    hdTitle.classList += 'mainHeadTitle';
    hdTitle.innerHTML="theDullahan";
    hdTitle.addEventListener('click', () => window.open('index.html', "_self"));
    hd.appendChild(hdTitle);
    //Creates the links in the header by looping through linkNames array
    const hdLinks = document.createElement('ul');
    hdLinks.classList += 'headerLinks'
    for(let i = 0; i < linkNames.length; i++){
        const hdLinkItem = document.createElement('li');
        hdLinkItem.classList += 'linkItem ';
        hdLinkItem.innerHTML = linkNames[i];
        hdLinks.appendChild(hdLinkItem);
        if(linkNames[i].toLowerCase() == 'home'){
            hdLinkItem.addEventListener('click', () => window.open('index.html', "_self"));
        }
        else{
            hdLinkItem.addEventListener('click', () => window.open(linkNames[i].toLocaleLowerCase() + '.html', "_self"));
        }
        if(currSection == linkNames[i].toLowerCase()){
            hdLinkItem.classList += 'linkItemShow'
        }
    }

    
    
    if($(window).width() > 800){
        hd.appendChild(hdLinks);
    }
    else{
        const secondHd = document.createElement('div');
        secondHd.classList += 'secondHd';
        fullHead.appendChild(secondHd);
        secondHd.appendChild(hdLinks);

        const hdMenu = document.createElement('button');
        hdMenu.innerHTML = '&#9776;'
        hdMenu.classList = 'navButton'
        secondHd.appendChild(hdMenu);
    }
}

window.addEventListener('resize', function(){console.log($(window).width())});


 

(function initHead(){
    createHeader();
})()

}