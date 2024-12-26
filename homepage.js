document.addEventListener('DOMContentLoaded', function () {
    const profiles = document.querySelectorAll('.profile');
    const overlay = document.getElementById('overlay');

    profiles.forEach(profile => {
        profile.addEventListener('click', function () {
            overlay.classList.remove('hidden');
            const link = this.getAttribute('data-link');
            setTimeout(() => {
                window.location.href = link;
            }, 500);
        });
    });
});
