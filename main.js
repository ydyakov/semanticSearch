document.addEventListener("DOMContentLoaded", () => {
    const currentSlide = parseInt(document.body.dataset.slide);

    //  + CTRL
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "ArrowRight") {
            window.location.href = `slide${currentSlide + 1}.html`;
        }
        if (e.ctrlKey && e.key === "ArrowLeft" && currentSlide != 1) {
            window.location.href = `slide${currentSlide - 1}.html`;
        }

        // Ctrl + N -> 
        if (e.ctrlKey && e.altKey && /^[0-9]$/.test(e.key)) {
            const target = parseInt(e.key);
            window.location.href = `slide${target}.html`;
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("embedding-input");
    const output = document.getElementById("embedding-output");

    if (input) {
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const text = input.value.trim();
                if (text.length === 0) {
                    output.textContent = "Please enter some text.";
                    return;
                }

                // симулираме embedding с 20 числа [-1, 1]
                let vector = [];
                for (let i = 0; i < 20; i++) {
                    let num = (Math.random() * 2 - 1).toFixed(4);
                    vector.push(num);
                }

                output.textContent = `[ ${vector.join(", ")} ... ]`;
            }
        });
    }
});

function copyCode(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
       
    });
}
