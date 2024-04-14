document.addEventListener('DOMContentLoaded', function() {
    const scroller = document.querySelector('#weatherScroller');
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');
    const timeRangeSelector = document.getElementById('timeRange');

    const cardWidth = 250;
    const gapWidth = 20;
    if (!scroller || !leftButton || !rightButton) {
        console.log('One or more essential elements are missing!');
        return;
    }

    function filterCardsByTimeRange() {
        const selectedRange = timeRangeSelector.value;
        const cards = document.querySelectorAll('.weather-card');
        cards.forEach(card => {
            const cardHour = parseInt(card.dataset.hour, 10);
            card.style.display = 'none';

            if (selectedRange === 'all' ||
                (selectedRange === 'morning' && cardHour >= 6 && cardHour < 12) ||
                (selectedRange === 'afternoon' && cardHour >= 12 && cardHour < 18) ||
                (selectedRange === 'evening' && cardHour >= 18 && cardHour < 24) ||
                (selectedRange === 'night' && (cardHour >= 0 && cardHour < 6 || cardHour === 24))) {
                card.style.display = 'flex';
            }
        });
    }

    timeRangeSelector.addEventListener('change', filterCardsByTimeRange); // Listen to changes in the time range selection

    leftButton.addEventListener('click', function() {
        scroller.scrollLeft -= 250;
    });





    document.querySelector('.left-button').addEventListener('click', function() {
        // Scroll left by the width of three cards plus the gap
        scroller.scrollBy({ left: -(cardWidth * 3 + gapWidth * 2), behavior: 'smooth' });
    });

    document.querySelector('.right-button').addEventListener('click', function() {
        // Scroll right by the width of three cards plus the gap
        scroller.scrollBy({ left: cardWidth * 3 + gapWidth * 2, behavior: 'smooth' });
    });
});
