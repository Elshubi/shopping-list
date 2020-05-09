//Date selector

var Date = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];
document.querySelector('.date').innerHTML = Date.getDate() + '      ' + months[Date.getMonth()] + '     ' + Date.getFullYear();

// Add new Item 
var newText = document.querySelector('.newItemText');
var btn = document.querySelector('.addItem');
var par = document.getElementById('list');

function addnew() {
    var para = document.createElement("p");
    var node = document.createTextNode(newText.value);
    para.appendChild(node);
    par.appendChild(para);
    newText.value = '';
    newText.focus();
};

    btn.addEventListener("click", addnew);

  newText.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      btn.click();
    }
  });

  // Delete items that are done

  var remove = document.getElementById('remove');
  var highlght = document.getElementById('highlight');
  var strike = document.getElementById('strike');
 

  par.addEventListener("click",function(e) {
  if (e.target && e.target.matches("p") && remove.checked) {
    e.target.innerHTML='';
	} else if 
    (e.target && e.target.matches("p") && highlight.checked) {
      e.target.style.backgroundColor= 'red';
  }
  
  });

