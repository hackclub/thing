<script>
    import { onMount } from "svelte";
    import { fly, fade } from "svelte/transition";
    import { elasticOut } from "svelte/easing";

    import OneHundred from "$lib/100.svelte";
    import PcbUnderline from "$lib/pcb-underline.svelte";
    import Thing from "$lib/thing.svelte";

    let mounted = false;

    onMount(() => {
        mounted = true;
    });

    import { cubicOut } from "svelte/easing";

    export function flyScaleOpacity(
        node,
        {
            delay = 0,
            duration = 400,
            easing = cubicOut,
            x = 0,
            y = 0,
            scale = 0.9,
            opacity = 0,
        },
    ) {
        const style = getComputedStyle(node);
        const target_opacity = +style.opacity;
        const transform = style.transform === "none" ? "" : style.transform;

        return {
            delay,
            duration,
            easing,
            css: (t, u) => `
          transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px) scale(${scale + (1 - scale) * t});
          opacity: ${opacity + (target_opacity - opacity) * t};
        `,
        };
    }
</script>

{#if mounted}
    <header in:fade>
        <div id="hero">
            <div
                id="thing-container"
                in:flyScaleOpacity={{
                    y: 50,
                    scale: 0.8,
                    delay: 4_000,
                    duration: 8_000,
                }}
            >
                <Thing />
            </div>
            <div id="header-text-container">
                <div id="presents">
                    <img
                        in:fade={{ duration: 500 }}
                        src="/flag-standalone.svg"
                        alt="Hack Club Logo"
                    />
                    <p in:fade={{ delay: 1_000, duration: 500 }}>Presents</p>
                </div>

                <h1
                    in:flyScaleOpacity={{
                        y: -30,
                        delay: 3_000,
                        duration: 3_000,
                    }}
                >
                    The Thing
                </h1>

                <p id="subtitle">
                    <OneHundred />

                    <span in:fade={{ delay: 5_200 }}
                        >High Schoolers are hacking on <span
                            style="position: relative;"
                            >the&nbsp;same&nbsp;PCB

                            <span id="pcb-underline">
                                <PcbUnderline />
                            </span></span
                        >
                    </span>

                    <br />
                    <span
                        id="chaos"
                        style:display="inline-block"
                        in:flyScaleOpacity={{
                            y: 25,
                            delay: 6_000,
                            duration: 1_500,
                        }}>Let the chaos ensue.</span
                    >
                </p>

                <a
                    in:fade={{ delay: 6_500 }}
                    href="https://forms.hackclub.com/t/rNHUQ7psByus"
                >
                    <img src="/cta.svg" alt="button reading 'count me in'" />
                </a>
            </div>
        </div>
    </header>
{/if}

<style>
    header {
        height: 100svh;
    }

    header,
    #hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    :global(#thing-container svg) {
        @media (max-width: 660px) {
            width: 120vw;
            height: fit-content;
        }
    }

    #hero img {
        z-index: 1;
    }

    #header-text-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        margin-top: -150px;

        @media (max-width: 660px) {
            margin-top: calc(-28vw + 10px);
        }
    }

    #presents {
        display: flex;
        gap: 0.5em;
        font-size: 1.5rem;
        z-index: 10;

        & img {
            width: 7rem;
        }

        @media (max-width: 660px) {
            font-size: 6vw;

            & img {
                width: 16vw;
            }
        }
    }

    h1 {
        margin: 0;
        margin-top: -46px;
        line-height: 1;
        z-index: -1;

        @media (max-width: 660px) {
            font-size: 10vw;
        }
    }

    #subtitle {
        position: relative;
        font-size: 2rem;
        text-align: center;
        line-height: 1.5;
        margin: 0;
    }

    #pcb-underline {
        position: absolute;
        width: 100%;
        right: -0.15em;
        top: -0.5em;
    }

    #chaos {
        font-size: 1.5em;

        @media (max-width: 660px) {
            font-size: 10vw;
            margin-top: 2vw;
        }
    }
</style>
