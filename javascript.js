const btnSkillsAdd = document.getElementById("btn-addSkill");
const popUp = document.getElementById("pop-up");
const skillClose = document.getElementById("skill-close");
const submitBtn = document.getElementById("btn-submit");
const skillInput = document.getElementById("skillInput");
const containers = document.querySelector(".playground");


btnSkillsAdd.addEventListener('click', (e) => {
    popUp.style.display = "flex";
    console.log("change")
});


skillClose.addEventListener("click", () => {
    popUp.style.display = "none";
});

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
        alert("enter the skill")
    }

});