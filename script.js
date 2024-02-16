function showDateDetails(idea) {
    document.getElementById('date-ideas').style.display = 'none';
    document.getElementById('date-details').style.display = 'block';
    document.getElementById('date-title').textContent = idea;
    document.getElementById('date-description').textContent = getDescription(idea);
}

function goBack() {
    document.getElementById('date-ideas').style.display = 'block';
    document.getElementById('date-details').style.display = 'none';
}

function getDescription(idea) {
    // Ваши текстови за идеите
    switch (idea) {
        case 'Dinner with a View':
            return 'Enjoy a romantic dinner with a breathtaking view.';
        case 'Stargazing Night':
            return 'Spend the night under the stars, stargazing together.';
        case 'Picnic in the Park':
            return 'Have a cozy picnic in the park with your favorite snacks.';
        case 'Candlelit Movie Night':
            return 'Create a cozy movie night with candlelight and your favorite films.';
        case 'Beach Sunset Walk':
            return 'Take a romantic walk on the beach during the sunset.';
        case 'Cooking Class Together':
            return 'Learn to cook a new dish together in a fun cooking class.';
        case 'Art Gallery Visit':
            return 'Explore art together at a local art gallery.';
        case 'Hot Air Balloon Ride':
            return 'Experience the thrill of a hot air balloon ride.';
        case 'Escape Room Adventure':
            return 'Challenge yourselves with an exciting escape room adventure.';
        case 'Wine Tasting Experience':
            return 'Savor different wines in a delightful wine tasting experience.';
        case 'Couples Massage Day':
            return 'Relax and unwind with a pampering couples massage day.';
        // Додадете текстови за останатите идеи...
        default:
            return '';
    }
}
