const currSection = 'about';


//Strings for paragraphs
const aboutOpenPText = "Hello there world how are you?"


//Opening container Div
const aboutOpenContain = document.createElement('div');
siteMain.appendChild(aboutOpenContain);

//Opening Paragraph
const aboutOpenP = document.createElement('p');
aboutOpenP.innerHTML=aboutOpenPText;
aboutOpenContain.appendChild(aboutOpenP);