<script>
    import { onMount } from "svelte";
    import { fly, fade } from "svelte/transition";
    import { elasticOut } from "svelte/easing";

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
        <div id="thing">
            <img
                in:flyScaleOpacity={{
                    y: 50,
                    delay: 1_000,
                    duration: 5_000,
                }}
                src="/hero.svg"
                alt="PCB monster looming over title text"
            />

            <div id="header-text-container">
                <div
                    id="presents"
                    in:flyScaleOpacity={{ y: -25, duration: 800 }}
                >
                    <img src="/flag-standalone.svg" alt="Hack Club Logo" />
                    <p>Presents</p>
                </div>

                <h1
                    in:flyScaleOpacity={{
                        y: -25,
                        delay: 200,
                        duration: 800,
                    }}
                >
                    The Thing
                </h1>
            </div>
        </div>
    </header>
{/if}

<style>
    header {
        margin-top: 10rem;
    }
    header,
    #thing {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    #thing img {
        z-index: 1;
    }

    #header-text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: -150px;
    }

    #presents {
        display: flex;
        gap: 0.5em;
        font-size: 1.5rem;
        z-index: 2;

        & img {
            width: 7rem;
        }
    }

    h1 {
        margin: 0;
        margin-top: -46px;
    }
</style>
