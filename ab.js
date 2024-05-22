<script>
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const slideMenu = document.querySelector('.slide-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        slideMenu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const accordionButton = document.querySelector('.accordion-button');
    const accordionContent = document.querySelector('.accordion-content');

    accordionButton.addEventListener('click', function() {
        const isExpanded = this.classList.toggle('expanded');
        accordionContent.style.maxHeight = isExpanded ? accordionContent.scrollHeight + "px" : "0";
    });
});

</script>