<script>
    import "../lib/global.css";
</script>

<nav>
    <img src="/flag-orpheus-top.svg" width="160" alt="hack club logo" />

    <div id="links">
        <p><a href="https://hackclub.com/slack">Hack Club Slack</a></p>
        <p><a href="https://onboard.hackclub.com">Onboard</a></p>
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
</style>
