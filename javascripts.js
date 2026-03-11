const container = document.querySelector(".playground");



let activeItem = null;
let offsetX = 0;
let offsetY = 0;
// let items = document.querySelectorAll(".content");

function arrageSkills() {
    const items = document.querySelectorAll(".content");
    console.log(items)
    const startX = 20;
    const startY = 20;
    const gap = 14;
    const rowGap = 14;


    let currentX = startX;
    let currentY = startY;
    let rowHeight = 0;

    const containerWidth = container.clientWidth;

    items.forEach((item) => {
        const itemWidth = item.getBoundingClientRect().width;
        const itemHeight = item.getBoundingClientRect().height;

        if (currentX + itemWidth > containerWidth - startX) {
            currentX = startX;
            currentY += rowHeight + rowGap;
            rowHeight = 0
        }

        item.style.left = currentX + 'px';
        item.style.top = currentY + 'px';

        currentX += itemWidth + gap;
        rowHeight = Math.max(rowHeight, itemHeight);

    });




    items.forEach((item) => {
        item.addEventListener("pointerdown", (e) => {
            activeItem = item;

            offsetX = e.clientX - item.offsetLeft;
            offsetY = e.clientY - item.offsetTop;

            item.style.backgroundColor = 'orange';
            item.setPointerCapture(e.pointerId);
            console.log(e.pointerId)
        });

        document.addEventListener('pointermove', (e) => {
            if (!activeItem) return;

            let x = e.clientX - offsetX;
            let y = e.clientY - offsetY;

            const maxX = container.clientWidth - activeItem.offsetWidth;
            const maxY = container.clientHeight - activeItem.offsetHeight;
            console.log(Math.min(x, maxX))
            x = Math.max(0, Math.min(maxX, x));
            y = Math.max(0, Math.min(maxY, y))


            activeItem.style.left = x + "px";
            activeItem.style.top = y + 'px';
        })

        document.addEventListener("pointerup", () => {
            if (activeItem) {
                activeItem.style.backgroundColor = "green";
                activeItem = null;
            }
        })

        item.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            popupRights(e);
        })
    })

};

window.addEventListener('load', arrageSkills)