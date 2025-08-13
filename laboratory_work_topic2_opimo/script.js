// Interactive elements for the Design Thinking & UCD project
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add hover effects for idea cards
    const ideaCards = document.querySelectorAll('.idea-card');
    ideaCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Interactive prototype demonstration
    const arButton = document.querySelector('.ar-button');
    if (arButton) {
        arButton.addEventListener('click', function() {
            alert('AR Navigation would start here! This would use your phone camera to overlay directions on the real world.');
        });
    }

    // Add click tracking for user testing simulation
    const clickableElements = document.querySelectorAll('.mockup-content button, .mockup-content .search-bar');
    clickableElements.forEach(element => {
        element.addEventListener('click', function() {
            console.log('User clicked:', this.textContent || this.className);
            // In a real testing scenario, this would log user interactions
        });
    });

    // Dynamic content loading simulation
    const searchBar = document.querySelector('.search-bar');
    if (searchBar) {
        searchBar.addEventListener('click', function() {
            this.textContent = '🔍 Searching...';
            setTimeout(() => {
                this.textContent = '🔍 Where do you want to go?';
            }, 2000);
        });
    }
});

// Analytics tracking for user behavior (simulation)
function trackUserInteraction(action, element) {
    console.log(`User ${action}: ${element}`);
    // In a real application, this would send data to analytics
}

// Prototype testing feedback collection
function collectFeedback() {
    const feedback = prompt('What did you think of this navigation solution?');
    if (feedback) {
        alert('Thank you for your feedback! This helps improve the design.');
        console.log('User feedback:', feedback);
    }
}

// Export for testing purposes
window.DesignThinkingProject = {
    trackUserInteraction,
    collectFeedback
};
