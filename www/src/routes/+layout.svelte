<script>
    import { onMount } from "svelte";
    import "../lib/global.css";

    import { Gradient } from "$lib/gradient";

    onMount(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");

        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", () =>
                gradient.initGradient("#gradient-canvas"),
            );
    });
</script>

<canvas id="gradient-canvas"></canvas>

<nav>
    <img src="/flag-orpheus-top.svg" width="160" alt="hack club logo" />

    <div id="links">
        <p><a href="https://hackclub.com/slack">Hack Club Slack</a></p>
        <p><a href="https://hackclub.com/onboard">Onboard</a></p>
    </div>
</nav>

<slot />

<style>
    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    nav {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;

        opacity: 0;
        animation: fade-in 1s forwards;
        animation-delay: 6s;

        display: flex;
        justify-content: space-between;

        max-width: 983px;
        margin: auto;

        margin-bottom: 1rem;

        #links {
            display: flex;
            gap: 1em;
            font-size: 1.2em;

            text-align: right;

            a {
                color: white;
            }
        }

        @media (max-width: 660px) {
            #links {
                font-size: 4vw;
            }
        }
    }

    #gradient-canvas {
        width: 100%;
        height: 100%;
        position: fixed;
        inset: 0;
        z-index: -1;
        pointer-events: none;

        --gradient-color-1: #001f13;
        --gradient-color-2: #000000;
        --gradient-color-3: #000000;
        --gradient-color-4: #011911;
    }
</style>
