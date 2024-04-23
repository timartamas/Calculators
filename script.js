const copyBtn = document.getElementById("button")
const textBox = document.getElementById("textBox")

copyBtn.addEventListener("click", () => {
    const copyText = document.getElementById("content").textContent;

    navigator.clipboard.writeText(copyText);

    textBox.textContent = "Copied to clipboard!"

    setTimeout(() => {
        textBox.textContent=""
    },3000)
})