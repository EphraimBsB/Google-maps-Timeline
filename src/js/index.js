const CATEGORIES = [
    {icon: "restaurant", label: "Restaurants"}, 
    {icon: "hotel", label: "Hotels"}, 
    {icon: "photo_camera", label: "Things to do"}, 
    {icon: "museum", label: "Museums"}, 
    {icon: "directions_bus", label: "Transit"}, 
    {icon: "local_pharmacy", label: "Pharmacies"}
]

document.addEventListener("DOMContentLoaded", () => {
    const categoriesDiv = document.querySelector("#categories");

    CATEGORIES.forEach((category) => {
        const wrapperDiv = document.createElement("div");
        const iconSpan = document.createElement("span");
        const labelParagraph = document.createElement("p");

        // Add style to label paragraph and text content
        labelParagraph.className = "font-medium";
        labelParagraph.textContent = category.label;

        // Add style to icon
        iconSpan.className = "material-symbols-outlined flex-shrink-0 text-xl mr-2";
        iconSpan.textContent = ` ${category.icon} `;

        // Add style to the wrapper div
        wrapperDiv.className = "category";
        wrapperDiv.append(iconSpan);
        wrapperDiv.append(labelParagraph);

        // Append category to categories div
        categoriesDiv.append(wrapperDiv);
    });
});