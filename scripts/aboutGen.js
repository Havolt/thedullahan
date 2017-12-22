const currSection = 'about';


//Strings for paragraphs
const aboutOpenText1 = "From a young age I've been fascinated with the paranormal, conspiracy theories and cryptozoology. From tales told to me by my grnadmother to a curious book of conspiracy theories I found in an old dusty book store a few days before it closed these worlds just out of sight have fascinated me."
const aboutOpenText2 = "As I grew into my teens shows started airing on Television about unresolved mysteries and strange serial killers. I was digsuted and frightened by a lot of what I saw but also fascinated at the same time."
const aboutOpenImg1 = new Image(); aboutOpenImg1.src="images/abt_tree.jpg"; aboutOpenImg1.classList += 'abtMainImg';
const aboutOpenText3 = "This is a test string to see how the webpage handles paragraph after image";
console.log(typeof(aboutOpenImg1))
console.log(typeof(aboutOpenText1))


const aboutOpenArr = [aboutOpenText1, aboutOpenText2, aboutOpenImg1, aboutOpenText3]

//Opening container Div
const aboutOpenContain = document.createElement('div');
siteMain.appendChild(aboutOpenContain);

//Opening Section
function createOpSec(){
    for(var i = 0; i < aboutOpenArr.length; i++){
        if(typeof(aboutOpenArr[i]) == 'string'){
            const aboutOpenP = document.createElement('p');
            aboutOpenP.innerHTML=aboutOpenArr[i];
            aboutOpenContain.appendChild(aboutOpenP);
        }
        else{
            
            aboutOpenContain.appendChild(aboutOpenArr[i]);
        }
    }
}

(function initPage(){
    createOpSec();
})();