<script>
    import { onMount } from "svelte";
    import { animate, svg, stagger } from "animejs";

    onMount(() => {
        animate(svg.createDrawable("svg#one-hundred>path"), {
            draw: ["0 0", "0 1"],
            ease: "inOutQuad",
            delay: (el, i) => 5_000 + i * 100,
            duration: 300,
        });
    });
</script>

<svg
    width="72"
    height="28"
    viewBox="0 0 72 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    id="one-hundred"
>
    <path
        d="M3.49219 7.57184C4.56119 6.55628 13.071 -0.668508 13.3115 3.06024C13.7804 10.3269 12.4739 17.806 10.9562 24.8884M2 25.4844H21.1079"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
    />
    <path
        d="M35.1824 4.29323C34.6684 2.24581 26.4669 8.79777 25.9444 9.42001C24.1623 11.5425 23.2581 14.5303 23.4336 17.2832C23.6935 21.3597 26.6021 23.1077 30.4766 23.0705C37.5719 23.0023 45.0317 17.755 45.3678 10.1906C45.6806 3.15117 32.9141 4.77688 28.6448 5.99167"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
    />
    <path
        d="M59.2593 8.23821C56.7435 8.23821 54.8299 8.40861 53.3523 10.832C51.4923 13.8824 50.0511 20.6847 53.9013 22.6839C60.2264 25.9681 66.957 20.6213 68.9907 14.6375C72.1512 5.33812 60.1049 2.83488 53.4659 3.46717"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
    />
</svg>

<style>
    svg {
        margin-right: 0.15em;
    }
</style>
