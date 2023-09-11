document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("textarea");
    const saveButton = document.getElementById("save-button");
    const clearButton = document.getElementById("clear-button");

    // Check if there is saved text in localStorage
    const savedText = localStorage.getItem("notepadText");
    if (savedText) {
        textarea.value = savedText;
    }

    // Save button click event
    saveButton.addEventListener("click", function () {
        const textToSave = textarea.value;
        localStorage.setItem("notepadText", textToSave);
        alert("Text saved successfully!");
    });

    // Clear button click event
    clearButton.addEventListener("click", function () {
        localStorage.removeItem("notepadText");
        textarea.value = "";
        alert("Text cleared successfully!");
    });
});
