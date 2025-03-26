<script lang="ts">
    const currentTime = new Date()
    const CurrentHour = currentTime.getHours()

    let greeting = ""
    if (CurrentHour < 12) {
        greeting = "Good Morning"
    } else if (CurrentHour < 18) {
        greeting = "Good Afternoon"
    } else {
        greeting = "Good Evening"
    }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1>