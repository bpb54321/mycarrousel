<script>
    let images = [
        {
            altText: "Deux femmes qui dansent",
            url: "https://images.ctfassets.net/tacg73mas1jx/1J4L9xGRfwEB7wIU53jI8r/86349fc8428647621275241e817e3849/SLIDER_-_FESTIVAL_FR.jpg",
        },
    ]
</script>

<div data-testid="my-carrousel">
    <h2>Nos recommandations</h2>
    {#each images as image}
    <div>
        <img src="https://images.ctfassets.net/tacg73mas1jx/1J4L9xGRfwEB7wIU53jI8r/86349fc8428647621275241e817e3849/SLIDER_-_FESTIVAL_FR.jpg" alt="Deux femmes qui dansent">
    </div>
    {/each}
</div>

<style>
</style>
