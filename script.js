// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select the color box and button
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // Function to generate a random color in hexadecimal format
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Add event listener to the button to change color on click
    changeColorBtn.addEventListener("click", () => {
        colorBox.style.backgroundColor = getRandomColor();
    });
});
