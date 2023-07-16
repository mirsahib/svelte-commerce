<script>
    import "../app.css";
    import Header from "$components/Header.svelte"
    import Footer from "$components/Footer.svelte"
</script>

<Header/>
<main class="container mx-auto px-10">
<slot/>
</main>
<Footer/>