(function() {
    var button = document.getElementById("btn")
    var output = document.getElementById("output")
    var number
    var counter
    
   
    function init() {
    
     number = parseInt(output.innerText)
     
      counter = number + 1
     
     function increment() {
       
       value = counter++
       output.innerText = value
      }
     
    
       button.onclick = increment
    }
   
    window.onload = init
   })()