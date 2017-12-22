const currSection = 'about';


//Strings for paragraphs
const aboutOpenText1 = "From a young age I've been fascinated with the paranormal, conspiracy theories and cryptozoology. From tales told to me by my grnadmother to a curious book of conspiracy theories I found in an old dusty book store a few days before it closed these worlds just out of sight have fascinated me."
const aboutOpenText2 = "As I grew into my teens shows started airing on Television about unresolved mysteries and strange serial killers. I was digsuted and frightened by a lot of what I saw but also fascinated at the same time."


const aboutOpenTextArr = [aboutOpenText1, aboutOpenText2]

//Opening container Div
const aboutOpenContain = document.createElement('div');
siteMain.appendChild(aboutOpenContain);

//Opening Paragraph
for(var i = 0; i < aboutOpenTextArr.length; i++){
    const aboutOpenP = document.createElement('p');
    aboutOpenP.innerHTML=aboutOpenTextArr[i];
    aboutOpenContain.appendChild(aboutOpenP);
}