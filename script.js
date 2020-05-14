//Date selector

var d = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];
document.querySelector('.date').innerHTML = d.getDate() + '      ' + months[d.getMonth()] + '     ' + d.getFullYear();

//clock

setInterval(disptime, 1000);

function disptime() {
  var t = new Date();
  var hours = t.getHours();
  var minutes = t.getMinutes();
  var seconds = t.getSeconds();
  var meridian = "AM"
  hours < 12 ? meridian = 'AM' : meridian = 'PM';
  minutes < 10 ? minutes = '0' + minutes : minutes = minutes;
  seconds < 10 ? seconds = '0' + seconds : seconds = seconds;
  document.querySelector('.time').textContent = hours + ':' + minutes + ':' + seconds + ' ' + meridian;
  };

   


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
      e.target.style.backgroundColor= 'rgb(255, 32, 51)';
  }
  
  });

