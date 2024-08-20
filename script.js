// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function onScroll() {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.style.animationPlayState = 'running';
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', onScroll);

// Trigger the scroll event once to check initial positions
onScroll();

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form
    if (name && email && message) {
        // Simulate form submission
        document.getElementById('formResponse').textContent = 'Thank you for your message. We will get back to you shortly.';
        this.reset();
    } else {
        document.getElementById('formResponse').textContent = 'Please fill out all fields.';
    }
});

// Initialize Google Map
function initMap() {
    const location = { lat: 37.7749, lng: -122.4194 }; // Example location
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Load Google Maps script
function loadGoogleMaps() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
}

// Call function to load Google Maps
loadGoogleMaps();
