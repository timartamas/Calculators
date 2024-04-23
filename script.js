const copyBtn = document.getElementById("button")
const textBox = document.getElementById("textBox")
const backBtn = document.getElementById("backBtn")

copyBtn.addEventListener("click", () => {
    const copyText = document.getElementById("content").textContent;

    navigator.clipboard.writeText(copyText);
    textBox.innerHTML = "<div>Copied to clipboard!</div>"
    textBox.style.cssText = "border-radius:8px;padding-left:8px;padding-right:5px;font-size:25px;font-weight:bold;background-color:#FFEB3B;display:flex;justify-content:center;align-items:center;"
    // textBox.style = ""
    // textBox.style = ""
    

    setTimeout(() => {
        textBox.textContent=""
        textBox.style = "background-color:white"
    },3000)
})

backBtn.addEventListener("click", () => {
    window.location.href="index.html";
})