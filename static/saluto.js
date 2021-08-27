function n(){let t=["\u4F60\u597D","Hello","Bonjour","\uC5B4\uC774","\u3053\u3093\u306B\u3061\u308F","Hej"],e=t.length,o=Math.floor(Math.random()*e);return t[o]};

window.onload = (() => {document.getElementsByClassName("title")[0].innerHTML=n()+", I'm Matt Ronchetto.";});
