
let countEL    = document.getElementById("count-el")
let saveEl     = document.getElementById("save-el")
let count      = 0


let name       = document.getElementById("Name");

name.textContent = "Ravi" + "Chandra"

console.log(saveEl)


function increment()
{

  count += 1
  countEL.textContent = count

}

function save()
{

  
  let countStr             = count + " - "

  let countStr2            = saveEl.textContent + " - " + count

  //saveEl.textContent      += countStr

  saveEl.textContent      = countStr2.substring(0, countStr2.length - 2);
  
  
  console.log(count)
  count               = 0
  countEL.textContent = count

}

