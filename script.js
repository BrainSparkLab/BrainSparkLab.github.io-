// Array of 80 fascinating facts
const facts = [
  "The human brain contains about 86 billion neurons.",
  "Honey never spoils; archaeologists found edible honey in ancient tombs.",
  "Octopuses have three hearts and blue blood.",
  "Bananas are berries, but strawberries are not.",
  "Lightning strikes the Earth about 100 times every second worldwide.",
  "Sharks have been around for over 400 million years.",
  "Jellyfish have existed for over 500 million years.",
  "There are more possible iterations of chess than atoms in the known universe.",
  "A day on Venus is longer than its year.",
  "Humans share approximately 60% of their DNA with bananas.",
  "Wombat poop is cube-shaped.",
  "Butterflies taste with their feet.",
  "Some turtles can breathe through their butts.",
  "The Eiffel Tower can be 15 cm taller during the summer.",
  "Sloths can hold their breath longer than dolphins.",
  "The shortest war in history lasted 38 to 45 minutes.",
  "Koalas have fingerprints almost identical to humans.",
  "About 20% of Earth's oxygen is produced by the Amazon rainforest.",
  "Humans glow faintly in the dark, but it’s invisible to the naked eye.",
  "Sea cucumbers can defend themselves by shooting out their internal organs.",
  "The Moon has moonquakes similar to earthquakes.",
  "Water can boil and freeze at the same time under certain conditions.",
  "Sharks are immune to almost all known diseases.",
  "Jupiter's Great Red Spot is a giant storm bigger than Earth.",
  "Some metals can 'remember' their original shape and return to it.",
  "Humans and giraffes have the same number of neck vertebrae.",
  "The world's oldest known living tree is over 5,000 years old.",
  "Birds are the closest living relatives to dinosaurs.",
  "Lightning is five times hotter than the surface of the sun.",
  "A group of flamingos is called a 'flamboyance.'",
  "Some fish can walk on land.",
  "Water makes different pouring sounds depending on its temperature.",
  "There are more stars in the universe than grains of sand on Earth.",
  "Humans shed about 600,000 particles of skin every hour.",
  "The longest time between two twins being born is 87 days.",
  "The heart of a shrimp is located in its head.",
  "Sharks can live up to 500 years.",
  "Some fungi create zombies, then control their minds.",
  "The tongue is the strongest muscle in the human body relative to its size.",
  "Rats laugh when tickled.",
  "Sea otters hold hands while sleeping to keep from drifting apart.",
  "Honeybees can recognize human faces.",
  "A single bolt of lightning contains enough energy to toast 100,000 slices of bread.",
  "Polar bear fur is actually transparent, not white.",
  "Bananas float because they are less dense than water.",
  "Humans are the only animals that blush.",
  "The total weight of all ants on Earth is greater than the weight of all humans.",
  "Some cats are allergic to humans.",
  "An octopus has three hearts and blue blood.",
  "A bolt of lightning is five times hotter than the surface of the sun.",
  "The longest wedding veil was longer than 63 football fields.",
  "Mosquitoes are the deadliest animals on Earth.",
  "The Great Wall of China is not visible from space without aid.",
  "Sharks have lived longer than trees.",
  "The Eiffel Tower can grow more than 6 inches during the summer.",
  "A snail can sleep for three years.",
  "The longest place name is 85 characters long.",
  "The first computer bug was an actual bug.",
  "Bananas are naturally radioactive.",
  "There are more bacteria in your mouth than people on Earth.",
  "The tongue print is unique to each person like fingerprints.",
  "Newborns don’t have kneecaps.",
  "The shortest commercial flight lasts only 57 seconds.",
  "Water makes different sounds depending on temperature.",
  "Some metals can return to their original shape when heated.",
  "The longest time a person has held their breath underwater is over 24 minutes.",
  "Sharks don’t have bones.",
  "The world's smallest reptile is smaller than a paperclip."
];

// Function to render facts
function renderFacts() {
  const factsList = document.getElementById('facts-list');
  facts.forEach((fact, index) => {
    // Create a card div
    const card = document.createElement('div');
    card.className = 'fact-card';

    // Add icon using Unicode light bulb as example
    const icon = document.createElement('div');
    icon.className = 'fact-icon';
    icon.textContent = '💡';

    // Add fact text
    const text = document.createElement('div');
    text.className = 'fact-text';
    text.textContent = fact;

    // Append icon and text to card
    card.appendChild(icon);
    card.appendChild(text);

    // Append card to facts list
    factsList.appendChild(card);
  });
}

// Call render on page load
window.onload = renderFacts;
