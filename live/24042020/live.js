// propriété
console.log('hello', document.querySelector('.container span').textContent);
window.document.querySelector('.container span').textContent = "Salut";

// méthode
// window.alert('coucou')

//évènement
document.querySelector('.container span').addEventListener('click', () => 
{
    document.querySelector('.container span').classList.toggle("checked");
})

// Exemple de ciblage par DOM XML



//     HTMLCollection [body]0: bodylength: 1__proto__: HTMLCollection
// console.log(document.getElementsByTagName('body')[0]
//     )
// VM41:1 <body>​<div class=​"container">​<span>​Salut​</span>​</div>​<script src=​"live.js">​</script>​</body>​
// undefined
// console.log(document.getElementsByTagName('body')[0].firstChild
//     )
// VM221:1 #textassignedSlot: nullbaseURI: "file:///Users/DBG/Documents/Fullstack/JS_fullstack_2020/live/24042020/index.html"childNodes: NodeList []data: "↵    "firstChild: nullisConnected: truelastChild: nulllength: 5nextElementSibling: div.containernextSibling: div.containernodeName: "#text"nodeType: 3nodeValue: "↵    "ownerDocument: documentparentElement: bodyparentNode: bodypreviousElementSibling: nullpreviousSibling: nulltextContent: "↵    "wholeText: "↵    "__proto__: Text
// undefined
// console.log(document.getElementsByTagName('body')[0].firstChild.nextSibling
//     )
// VM319:1 <div class=​"container">​…​</div>​
// undefined
// const div = document.getElementsByTagName('body')[0].firstChild.nextSibling
// undefined
// div.getAttribute('class')
// "container"
// div.setAttribute('class2')
// VM593:1 Uncaught TypeError: Failed to execute 'setAttribute' on 'Element': 2 arguments required, but only 1 present.
//     at <anonymous>:1:5
// (anonymous) @ VM593:1
// div.setAttribute('class', 'class2')
// undefined
// div.getAttribute('class')
// "class2"
// div.classList
// DOMTokenList ["class2", value: "class2"]