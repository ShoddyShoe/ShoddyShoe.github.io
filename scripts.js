function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function discordWidget() {
const widget = document.getElementById("discord")

if (widget.style.display == "block"){
    while (Number(widget.style.opacity) > 0) {
        await delay(5)
        widget.style.opacity = String(Number(widget.style.opacity)-0.035);
    }
    widget.style.display = "none";
}

else {
    widget.style.display = "block";
    while (Number(widget.style.opacity) < 1) {
        await delay(5)
        widget.style.opacity = String(Number(widget.style.opacity)+0.035);
    }
}}
async function fade(id, speed) {
    const element = document.getElementById(id)
    element.style.opacity = "1.0"
    while (Number(element.style.opacity) > 0) {
        await delay(speed)
        element.style.opacity = String(Number(element.style.opacity)-0.05)
    }
    element.style.display = "none";
}