<script>
    async function fetchQueue() {
        return fetch("queue").then((res) => res.json());
    }

    const startDate = new Date(Date.UTC(2025, 3, 10)).getTime();
    const twoDays = 1_000 * 60 * 60 * 24 * 2;
    const endDate = startDate + twoDays;
    const endDateFormatted = new Date(endDate).toUTCString();

    const formatter = new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        timeZone: "UTC",
    });
</script>

<div id="queue-heading">
    <h2>Queue</h2>
</div>

<div id="queue-container">
    {#await fetchQueue()}
        <p>loading regs...</p>
    {:then queue}
        {#each queue as q, idx}
            {@const start = formatter.format(
                new Date(startDate + twoDays * idx),
            )}
            {@const end = formatter.format(
                new Date(startDate + twoDays * (idx + 1)),
            )}
            <a href={`slack://channel?team=T0266FRGM&id=${q["Slack ID"]}`}>
                <div class="queue-item">
                    <img
                        src={q["Avatar URL"]}
                        alt={q["Display name"]}
                        width="50"
                        height="50"
                    />
                    <p>
                        <br />
                        {q["Display name"]}
                        is planning on adding {q["Planning on adding..."]}<br
                        /><span class="date-display">{start} - {end}</span>
                    </p>
                </div>
            </a>
        {/each}
    {/await}
</div>

<style>
    #queue-heading {
        text-align: center;
    }

    #queue-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    a:has(.queue-item) {
        display: contents;
        color: white;
    }

    .queue-item {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .date-display {
        opacity: 0.75;
        font-family: "Routed Gothic";
        font-size: 0.8em;
    }
</style>
