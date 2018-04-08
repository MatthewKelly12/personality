//// <p>Strive to be positive</p> 
//// <p>Easy Going</p>
//// <p>Likes to help</p>
//// <p>Put others first</p>
//// <p>Like to be Alone</p>

function insertJS(x, y, z) {
  var par1 = document.createElement(x);
  var txt = document.createTextNode(y);
  var div1 = document.getElementById(z);
  par1.appendChild(txt);
  div1.appendChild(par1);
}




function insertButt() {
  var butt = document.createElement("input");
  butt.setAttribute("type", "button");
  butt.setAttribute("onClick", "makeHappen();")
  butt.setAttribute("value", "My Traits");
  document.getElementById("traits").appendChild(butt);
}
insertButt();

function makeHappen() {
  insertJS("p", "Strives to be Positve", "traits");
  insertJS("p","Easy Going", "traits");
  insertJS("p","Likes to help", "traits");
  insertJS("p", "Put others first", "traits");
  insertJS("p","Easy Going", "traits");
  insertJS("p","Like to be Alone", "traits");

}








