const root = document.querySelector('#root');

const h1 = React.createElement('h1',null,"Learn Web Development");

let p1 =  React.createElement('p',null,"Welcome to the MDN Learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.");
let div1 = React.createElement('div',null,p1);

let anchor = React.createElement('a',{ href: 'https://example.com' },"the rest of MDN,");
let p2 = React.createElement('p',null,'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from ', anchor ," and other intermediate to advanced resources that assume a lot of previous knowledge.");
let div2 = React.createElement('div',null,p2);

let p3 = React.createElement('p',null,"If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.");
let div3 = React.createElement('div',null,p3);

const innerDiv = React.createElement('div',null,h1,div1,div2,div3);
ReactDOM.render(innerDiv,root);

