var champ = document.querySelector(".form-control");
// console.log(champ)
var butn = document.querySelector(".btn");
var cnt = document.querySelector(".container")
var div = document.querySelector(".a")
var elementBody = document.querySelector("body")
// console.log(butn)


butn.addEventListener("click", e => {

    var newDiv = document.createElement('div')
    var newDivtext = document.createElement('span')
    var btndelete = document.createElement('button')
    var btnsurligne = document.createElement('button')
    newDivtext.innerHTML = champ.value
    btndelete.innerHTML = 'delete'
    btnsurligne.innerHTML = 'complete'


    newDiv.appendChild(btnsurligne)
    newDiv.appendChild(btndelete)
    newDiv.appendChild(newDivtext)
    // cnt.append(newDiv)
    cnt.insertBefore(newDiv, cnt.firstChild);
    champ.value = ""
    btnsurligne.addEventListener("click", el => {
        newDivtext.style.textDecoration = "line-through"
    })
    btndelete.addEventListener("click", el => {
        newDiv.remove()
    })
    // cnt.append(btndelete)
    // cnt.append(newDivtext)


});
