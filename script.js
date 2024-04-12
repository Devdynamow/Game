var firstPage = document.querySelector(".screen:nth-child(1)")
var secondPage = document.querySelector(".screen:nth-child(2)")
var thirdPage = document.querySelector(".screen:nth-child(3)")
var button = document.querySelector("button")
var playground = document.querySelector(".playground")
var elems = document.querySelectorAll(".elem")
var selectedImage = ""
var score = 0
var scoreSpan = document.querySelector(".playerScore span")
var screenH5 = document.querySelector(".screen:nth-child(3) h5")
var scoreTime = document.querySelector(".screen:nth-child(3) .time span")
var min = 0
var sec = 0

button.addEventListener("click", function(){
firstPage.style.transform = "translateY(-100%)" 
secondPage.style.opacity = 1 
})
elems.forEach(function(elem){
    elem.addEventListener("click", function(){
        selectedImage = elem.childNodes[3].src
        console.log(selectedImage);
secondPage.style.transform = "translateX(-100%)" 
thirdPage.style.opacity = 1 
createImg()
timeBadhao()


    })
})
function createImg(){
    var newImg = document.createElement("img")
    newImg.setAttribute("src", selectedImage)
    newImg.addEventListener("click", catchImage)
    playground.appendChild(newImg)
    const {w,h,rote} = getRandomLocation()
    newImg.style.left = w + "px"
    newImg.style.top = h + "px"
    newImg.style.rotate = rote + "deg"
    
}
function getRandomLocation(){
    var w = Math.floor(Math.random()*(window.innerWidth - 200) + 100)
    var h = Math.floor(Math.random()*(window.innerHeight - 200) + 100)
    var rote = Math.floor(Math.random() * 360)
    return {w, h, rote}
 
  
}
function catchImage(){
    increaseScore();
    
    this.style.opacity = 0
    addImage()
    setTimeout(function(){
    this.style.opacity = 1

    }, 2000)

}


function addImage(){
    setTimeout(createImg,1000)
    setTimeout(createImg,1500)
}

function increaseScore(){
    score++
    scoreSpan.innerHTML = score
    if(score > 20){
        screenH5.style.display = "block"
    }
}
function timeBadhao(){
    setInterval(function(){
        sec++
        scoreTime.innerHTML = `${sec} : ${sec}`

    },1000)
}