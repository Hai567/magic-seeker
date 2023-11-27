let windowX = window.screenX
let windowY = window.screenY
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let oldWindowX = 0
let oldWindowY = 0
let oldWindowWidth = 0
let oldWindowHeight = 0
let imageWidth = 0
let imageHeight = 0

let body = document.querySelector("body")
let currentTabUrl = window.location.href
let isWindowMoving = false
let dataContainer = document.getElementById("data-container")
let img = document.querySelector("img")

let checkUrlNavigatedFrom = () => {
    let referrer = document.referrer
    return referrer
}

if (currentTabUrl.includes("/mirror/seeker")){
    img.src = "https://static.boredpanda.com/blog/wp-content/uploads/2017/12/lane4-5a244395239be__880.jpg"
    // if (!checkUrlNavigatedFrom().includes("index.html")){
    //     body.innerHTML = ""
    //     alert("Please open from the home page")
    // }
}

let printDataToScreen = (data) => {
    dataContainer.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        let newData = document.createElement("p")
        newData.innerText = data[i]
        dataContainer.appendChild(newData)
    }
}
let updateWindowsData = () => {
    windowX = window.screenX
    windowY = window.screenY
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    isWindowMoving = oldWindowX != windowX || oldWindowY != windowY ? true : false
    oldWindowX = windowX
    oldWindowY = windowY
    printDataToScreen([windowX, windowY, windowWidth, windowHeight, isWindowMoving])
}

let keepImageInCenter = () => {
    updateWindowsData()
    imageWidth = img.width
    imageHeight = img.height
    let translateX = (1920/2) - (windowX + 3) - imageWidth/2;
    let translateY = (1040/2) - windowY - imageHeight/1.5;
    img.style.transform = `translate(${translateX}px, ${translateY}px)`
}

setInterval(() => {
    keepImageInCenter()
}, 100);