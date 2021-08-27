function n(){let t=["Hello","Bonjour","\u3053\u3093\u306B\u3061\u308F","Hej"],e=t.length,o=Math.floor(Math.random()*e);return t[o]};
window.onload = (() => {document.getElementsByClassName("title")[0].innerHTML=n()+", I'm Matt Ronchetto.";});
