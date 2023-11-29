<script>
    let meme = true
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

    let isLoaded = false
	import { onMount } from "svelte";

    onMount(() => {
        setTimeout(() => {
            meme = false
            imageWidth = image.width
            imageHeight = image.height
            maxWindowWidth = window.outerWidth
            maxWindowHeight = window.outerHeight
        }, 2000)
        if (meme){
            setInterval(() => gifScale+=1/3, 100)
        }
        isLoaded = true
        loop()
    })
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
    function openMirror() {
        window.open('/image/magic-mirror', "magic mirror",
        `directories=no,
        titlebar=no,
        toolbar=no,
        location=no,
        status=no,
        menubar=no,
        scrollbars=no,
        resizable=no,
        width=620,
        height=420`)
    }
</script>

{#if meme}
    <div class="w-full h-screen absolute flex justify-center top-0 left-0 items-center">
        <video style="transform: scale({gifScale});" autoplay muted loop class="">
            <source src="/gifs/IKnowSomething.mp4" type="video/mp4">
        </video>
    </div>
{/if}
<div class="w-full h-screen" class:hidden={meme}>
    <div class="w-full flex justify-center mt-2">
        <button on:click={openMirror} class="px-4 py-3 bg-green-400 rounded-xl">Open Magic Mirror</button>
    </div>
    <img style={"transform: translate(" + translateX + "px," + translateY + "px)"} bind:this={image} class="max-w-5xl w-[64rem] absolute" src="/imgs/Spring.jpg" alt="">
</div>
