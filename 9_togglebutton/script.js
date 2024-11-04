const button = document.querySelectorAll('.toggle');
const body = document.body;
toggle.addEventListener('input', element => {
    const isChecked = element.target.checked;
    if (isChecked) {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
});
