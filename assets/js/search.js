document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const projectsContainer = document.getElementById("projects");

    // Create a "No Results Found" message (hidden by default)
    let noResultsMessage = document.createElement("p");
    noResultsMessage.id = "noResults";
    noResultsMessage.innerText = "No results found.";
    noResultsMessage.style.display = "none";
    noResultsMessage.style.textAlign = "center";
    noResultsMessage.style.fontSize = "18px";
    noResultsMessage.style.color = "gray";
    projectsContainer.appendChild(noResultsMessage);

    searchInput.addEventListener("keyup", function () {
        let input = searchInput.value.toLowerCase();
        let projects = document.querySelectorAll(".user-projects");
        let found = false; // Flag to check if any project matches

        projects.forEach(project => {
            let name = project.querySelector("h3").innerText.toLowerCase();
            let category = project.getAttribute("data-category") ? project.getAttribute("data-category").toLowerCase() : "";
            let tools = project.getAttribute("data-tools") ? project.getAttribute("data-tools").toLowerCase() : "";

            // Check if the project matches the search input (by name, category, or tools)
            if (name.includes(input) || category.includes(input) || tools.includes(input)) {
                project.style.display = "block";
                found = true;
            } else {
                project.style.display = "none";
            }
        });

        // Show or hide "No Results Found" message
        noResultsMessage.style.display = found ? "none" : "block";
    });
});
