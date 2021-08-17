
function noenter() {
  return !(window.event && window.event.keyCode === 13);
}

function addChildren(){
  // Number of inputs to create
  var number = document.getElementById(children.value);
  // Container <div> where dynamic content will be placed
  var container = document.getElementById("children-container");
  // Clear previous contents of the container
  while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
  }
  for (i=0; i<number; i++){
      // Append a node with a random text
      children-container.appendChild(document.createTextNode("Child " + (i+1)));
      // Create an <input> element, set its type and name attributes
      var input = document.createElement("input");
      input.type = "text";
      input.name = "children" + i;
      children-container.appendChild(input);
      // Append a line break 
      children-container.appendChild(document.createElement("br"));
  }
}
