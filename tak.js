var d = document.getElementById('tak');
function Dawid(imie, lata){
  this.hobby = ["programming", "Python", "JavaScript", "League of Legends"];
  this.name = imie;
  this.old = lata;
  this.nerd = "Tak";
}
var dawid = new Dawid("Dawid", 18);
a = document.getElementById('d');
a.textContent = Math.floor((Math.random() * 150) + 1)
//var t = ((dawid.old)>=(16));
var i = 0;
while(i<dawid.hobby.length){
  document.write(dawid.hobby[i] + "<br>");
  i++;
}
