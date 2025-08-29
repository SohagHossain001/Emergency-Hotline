<!--

1. getElementById("id") → Selects one element by  ID.(returns single element)



getElementsByClassName("class") → Selects elements by class  . (returns HTMLCollection = live list)



querySelector("selector") → Selects the first match  CSS selector.



querySelectorAll("selector") → Selects all matches  CSS selector. (returns NodeList)


2 // create


let div = document.createElement("div");  

 // add text
div.textContent = "Hello";  

// insert
document.body.appendChild(div);          
3
Events start from the target element 
bubble up through parent elements until reaching document.
4
adding a single event listener rather than several children to a parent element.


Better performance and compatibility with dynamically inserted elements make it useful.
5
preventDefault() - Stops the default browser action  EXAMPLE stop form submit

stopPropagation()  Stops the event from bubbling up to parent elements.
-->
