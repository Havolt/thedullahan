window.onload = function(){
    
const linkNames = ['Home', 'Legends', 'Stories', 'Reviews',  'About', ];


//Make the header html
function createHeader(){
    //The wrapping div for header
    const fullHead = document.createElement('div');
    site.appendChild(fullHead);
    fullHead.id = 'fullHead';
    //Array with links for the the list
    
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

        if($(window).width() < 481){
            const hdMenu = document.createElement('button');
            hdMenu.innerHTML = '&#9776;'
            hdMenu.classList = 'navButton'
            secondHd.appendChild(hdMenu);
            hdMenu.addEventListener('click', navExpand)
        }
    }

    
}

window.addEventListener('resize', function(){console.log($(window).width())});

function navExpand(){
    for(var i = 0; i < linkNames.length; i++){
        let itemMain = false;
        console.log(document.getElementsByClassName('linkItem')[i].classList.length);
        for(var j = 0; j < document.getElementsByClassName('linkItem')[i].classList.length; j++){
            console.log(document.getElementsByClassName('linkItem')[i].classList[j])
            if(document.getElementsByClassName('linkItem')[i].classList[j] == 'linkItemShow'){
                itemMain = true;
            }
        }
        if(itemMain == false){
            document.getElementsByClassName('linkItem')[i].classList += 'dropDownItem ';
        }
    }
}
 

(function initHead(){
    createHeader();
})()

}