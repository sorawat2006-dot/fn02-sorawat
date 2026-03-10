const form = document.getElementById("adoptForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const pets = document.getElementById("pets").value.trim();
    const acknowledge = document.getElementById("acknowledge").checked;

    if (fullname === "") {
        alert("Full name is required.");
        return;
    }

    if (phone === "") {
        alert("Phone number is required.");
        return;
    }

    if (pets === "") {
        alert("Number of pets is required.");
        return;
    }

    const petsNumber = Number(pets);

    if (isNaN(petsNumber)) {
        alert("Number of pets must be a number.");
        return;
    }

    if (petsNumber < 0 || petsNumber > 100) {
        alert("Number of pets must be between 0 and 100.");
        return;
    }

    if (!acknowledge) {
        alert("Please acknowledge the adoption terms.");
        return;
    }

    form.submit();
});