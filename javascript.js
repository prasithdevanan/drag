const container = document.querySelector(".playground");
const items = document.querySelectorAll(".content");

let activeItem = null;
let offsetX = 0;
let offsetY = 0;

// initial layout
window.addEventListener("load", () => {
    const gap = 20;
    const rowGap = 20;
    const startX = 20;
    const startY = 20;

    let currentX = startX;
    let currentY = startY;
    let rowHeight = 0;

    const containerWidth = container.clientWidth;

    items.forEach((item) => {
        const itemWidth = item.getBoundingClientRect().width;
        const itemHeight = item.getBoundingClientRect().height;
        // console.log(currentX + itemWidth)
        // move to next row if width reached container end
        if (currentX + itemWidth > containerWidth - startX) {
            currentX = startX;
            currentY += rowHeight + rowGap;
            rowHeight = 0;
        }

        item.style.left = currentX + "px";
        item.style.top = currentY + "px";

        currentX += itemWidth + gap;
        rowHeight = Math.max(rowHeight, itemHeight);
    });
});

// drag start
items.forEach((item) => {
    item.addEventListener("mousedown", (e) => {
        activeItem = item;

        offsetX = e.clientX - item.offsetLeft;
        offsetY = e.clientY - item.offsetTop;

        item.style.backgroundColor = "orange";
    });
});

// dragging
document.addEventListener("mousemove", (e) => {
    if (!activeItem) return;

    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;

    const maxX = container.clientWidth - activeItem.offsetWidth;
    const maxY = container.clientHeight - activeItem.offsetHeight;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    activeItem.style.left = x + "px";
    activeItem.style.top = y + "px";
});

// drag end
document.addEventListener("mouseup", () => {
    if (activeItem) {
        activeItem.style.backgroundColor = "royalblue";
        activeItem = null;
    }
});