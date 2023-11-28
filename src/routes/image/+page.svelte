<script>
    let windowX = 0
    let windowY = 0
    let oldWindowX = 0
    let oldWindowY = 0
    let image
    let imageWidth = 0
    let imageHeight = 0
    let maxWindowWidth = 0
    let maxWindowHeight = 0
    let translateX = 0
    let translateY = 0

    let isLoaded = false
    // let meme = true
	import { onMount } from "svelte";

    onMount(() => {
        // setTimeout(() => meme = false, 2000)
        isLoaded = true
        imageWidth = image.width
        imageHeight = image.height
        maxWindowWidth = window.outerWidth
        maxWindowHeight = window.outerHeight
        loop()
    })
    function keepImageCentered() {
        if (isLoaded) {
            windowX = window.screenX
            windowY = window.screenY

            translateX = maxWindowWidth/2 - windowX - imageWidth/2
            translateY = maxWindowHeight/2 - windowY - imageHeight/2
        }
    }
    function loop() {
        setInterval(() => {
            keepImageCentered()
        }, 100)
    }
</script>


<div class="w-full h-screen">
    <img style={"transform: translate(" + translateX + "px," + translateY + "px)"} bind:this={image} class="max-w-5xl w-[64rem] absolute" src="/imgs/Spring.jpg" alt="">
</div>
