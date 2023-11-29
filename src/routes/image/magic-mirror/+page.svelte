<script>
	import { onMount } from "svelte";
    let windowX = 0
    let windowY = 0
    let image
    let imageWidth=0
    let imageHeight=0
    let maxWindowWidth = 0
    let maxWindowHeight = 0
    let translateX = 0
    let translateY = 0
    let gifScale = 0


    function checkReferrer() {
        let ref = document.referrer
        if (ref){
            alert("Hello")
        } else{
            alert("What")
        }
    }
    function keepImageCentered() {
        if (isLoaded) {
            windowX = window.screenX
            windowY = window.screenY

            translateX = maxWindowWidth/2 - windowX - imageWidth/2
            translateY = maxWindowHeight/2 - windowY - imageHeight/1.7
        }
    }
    function loop() {
        setInterval(() => {
            keepImageCentered()
        }, 100)
    }
    function imageMounted() {
        imageWidth = image.width
        imageHeight = image.height
        maxWindowWidth = window.outerWidth
        maxWindowHeight = window.outerHeight
        loop()
    }
    onMount(() => {
        checkReferrer()
    })
</script>

<div class="w-full h-screen">
    <img on:load={imageMounted} style={"transform: translate(" + translateX + "px," + translateY + "px)"} bind:this={image} class="max-w-5xl w-[64rem] absolute" src="/imgs/Spring.jpg" alt="">
</div>
