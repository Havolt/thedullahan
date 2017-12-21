window.onload = function(){
    
const linkNames = ['Home', 'Legends', 'Stories', 'Reviews',  'About', ];
let navToggle = false;


//Make the header html
function createHeader(){
    //The wrapping div for header
    const fullHead = document.createElement('div');
    siteHead.appendChild(fullHead);
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
        if(linkNames[i].toLocaleLowerCase() == currSection && $(window).width() < 481){
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
            hdLinkItem.classList += 'linkItemShow'
        }
    }

    
    for(let i = 0; i < linkNames.length; i++){

        if(linkNames[i].toLocaleLowerCase() !== currSection || ( $(window).width() >= 481)){
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


    }

    
    //Media query javascript
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


//Function for navbutton
function navExpand(){
    if(!navToggle){
        for(var i = 0; i < linkNames.length; i++){
            let itemMain = false;
            
            for(var j = 0; j < document.getElementsByClassName('linkItem')[i].classList.length; j++){
                
                if(document.getElementsByClassName('linkItem')[i].classList[j] == 'linkItemShow'){
                    console.log(document.getElementsByClassName('linkItem')[i])
                    itemMain = true;
                }
            }
            if(itemMain == false){
                document.getElementsByClassName('linkItem')[i].classList += ' dropDownItem ';
            }
        }
    }
    else{
        for(var i = 0; i < linkNames.length; i++){
            document.getElementsByClassName('linkItem')[i].classList.remove('dropDownItem');
        }
    }
    navToggle = !navToggle;
}
 

(function initHead(){
    createHeader();
})()

}