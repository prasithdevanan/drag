const btnSkillsAdd = document.getElementById("btn-addSkill");
const popUp = document.getElementById("pop-up");
const skillClose = document.getElementById("skill-close");
const submitBtn = document.getElementById("btn-submit");
const skillInput = document.getElementById("skillInput");
const containers = document.querySelector(".playground");
const popupRight = document.getElementById("popup-right");
const skillError = document.querySelector(".skill-error");


btnSkillsAdd.addEventListener('click', (e) => {
    popUp.style.display = "flex";
    console.log("change")
});

document.addEventListener('keydown', (e) => {
    //ctrl + T
    if (e.ctrlKey && e.shiftKey && e.key === "S") {
        e.preventDefault();
        popUp.style.display = "flex";
        console.log("ctrl + T")
    };
});


skillClose.addEventListener("click", () => {
    popUp.style.display = "none";
    skillError.style.display = 'none';
});

skillInput.addEventListener("keydown", () => {
    skillError.style.display = "none";
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const newText = document.createElement('p');
    if (!skillInput.value == '') {
        newText.textContent = skillInput.value;
        newText.classList.add("content");
        containers.append(newText);
        popUp.style.display = 'none';
        skillInput.value = '';
        arrageSkills();
    } else {
        skillError.style.display = 'block';
    }

});

let itemContent = null;

function popupRights(e) {
    popupRight.style.display = "flex";
    popupRight.style.left = e.clientX + 'px';
    popupRight.style.top = ((e.clientY + 20) + 'px');
    console.log(e);
    itemContent = e.target;
};

popupRight.addEventListener("click", () => {
    console.log(itemContent);
    itemContent.remove();
    arrageSkills();
})


window.addEventListener("click", (e) => {
    popupRight.style.display = "none";
    console.log(e.button);
})

window.addEventListener("pointerdown", (e) => {
    console.log(e.button);
});


