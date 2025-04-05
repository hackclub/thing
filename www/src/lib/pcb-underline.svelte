<script>
    import { onMount } from "svelte";
    import { animate, svg, stagger } from "animejs";

    onMount(() => {
        animate(svg.createDrawable("svg#pcb-underline>path"), {
            draw: ["0 0", "0 1"],
            ease: "inOutQuad",
            delay: 5_300,
            duration: 1000,
        });
    });
</script>

<svg
    width="196"
    height="64"
    viewBox="0 0 196 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    id="pcb-underline"
>
    <path
        d="M2.89258 45C34.4376 45 79.3619 37.5705 109.893 48.6844C124.546 54.0184 122.21 61 144.893 61C167.576 61 175.299 51.7765 176.714 31.4115C177.913 14.1443 168.331 3 151.185 3C138.147 3 129.136 4.31158 123.38 16.8829C118.984 26.4851 120.717 41.9915 133.893 46.5C147.068 51.0085 155.691 45 165.393 45C175.866 45 183.351 52.6493 192.893 49.4915"
        stroke="#00C177"
        stroke-width="5"
        stroke-linecap="round"
    />
</svg>
