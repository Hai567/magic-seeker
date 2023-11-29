<script>
    import { goto } from '$app/navigation';
    let gif
    function navigateToPage() {
        goto("/image")
    }
</script>

<div class="home w-full h-screen text-center">
    <h1 class="font-bold text-6xl mb-2">Magic Mirror</h1>
    <p class="">A place where images can be seen through</p>
    <br>
    <div class="max-w-2xl left-0 right-0 m-auto"> 
        <div class="flex gap-4 justify-center">
            <a href="https://www.facebook.com/hoduchai07/" class="px-4 py-2 bg-blue-400 rounded-md">Contact For Work</a>
            <button on:click={navigateToPage} href="/image" class="px-4 py-2 bg-blue-400 rounded-md">Proceed On Magic Mirror</button>
        </div>
        <br>
        <video autoplay muted loop>
            <source bind:this={gif} src="/gifs/raiseEyeBrows.mp4" type="video/mp4">
        </video>
    </div>
</div>