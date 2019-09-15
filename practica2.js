//Dada la cadena “Amigo”, conviértela a la cadena “amigo” de tres formas distintas.

var a = "Amigo";
alert(a.toLowerCase());
alert(a.replace("A","a"));
alert(a.charAt(0).toLowerCase()+a.substr(1,a.length));
alert("a"+a.slice(1));

