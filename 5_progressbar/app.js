const progress_bar = document.querySelectorAll(".progress");
progress_bar.forEach(bars => {
    const { size } = bars.dataset;
    bars.style.width = `${size}%`;
});