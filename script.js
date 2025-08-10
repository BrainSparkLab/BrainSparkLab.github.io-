document.getElementById("sparkBtn").addEventListener("click", function() {
    const ideas = [
        "Start a podcast about random shower thoughts 🚿",
        "Invent a smart fridge that roasts you for eating junk 🍔",
        "Make an app that reminds you to drink water 💧",
        "Create a chair that massages you during Zoom calls 🪑",
        "Design sneakers that charge your phone while walking 👟"
    ];

    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    document.getElementById("sparkText").textContent = randomIdea;
});
document.getElementById("clickBtn").addEventListener("click", function() {
    document.getElementById("output").textContent = "Hello! Your setup is working perfectly 🎉";
});
