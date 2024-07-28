document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.checkbox');

    // Load the state of the checkboxes from localStorage
    checkboxes.forEach((checkbox, index) => {
        const checked = localStorage.getItem(`checkbox-${index}`);
        if (checked === 'true') {
            checkbox.checked = true;
            checkbox.closest('tr').classList.add('done');
        }
    });

    // Add event listeners to save the state of the checkboxes to localStorage
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            const row = this.closest('tr');
            localStorage.setItem(`checkbox-${index}`, this.checked);
            if (this.checked) {
                row.classList.add('done');
            } else {
                row.classList.remove('done');
            }
        });
    });
});
