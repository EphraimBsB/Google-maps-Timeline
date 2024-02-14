const CATEGORIES = [
    {icon: "restaurant", label: "Restaurants"}, 
    {icon: "hotel", label: "Hotels"}, 
    {icon: "photo_camera", label: "Things to do"}, 
    {icon: "museum", label: "Museums"}, 
    {icon: "directions_bus", label: "Transit"}, 
    {icon: "local_pharmacy", label: "Pharmacies"}
];

const TRIPS = [
    {title: "Mbarara Lyamutundwe Entebbe road", date: "May 17-Apr 28, 2023", imageUrl: "https://lh3.googleusercontent.com/90TpARzCVIuf7v-vY9K2GaFU204Hq0us2sBL4So3ihcWRXYJ7rdx9ggMlI00SgzfUcFR_Ikxa2w-SzGJV6epMyRgn1P6th9oSBdWwv4=s0 "}, 
    {title: "Petion-Ville and Port-au-prince", date: "May 14-25, 2023", imageUrl: "https://developers.google.com/static/maps/images/landing/hero_geocoding_api_480.png "}, 
    {title: "Lausanne and Renens", date: "Jul 1, 2023", imageUrl: "https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg"}, 
    {title: "Panama City", date: "Sept 3-11, 2023", imageUrl: "https://www.africanlibraryproject.org/wp-content/uploads/2023/07/Kampala-and-Zirobwe-Google-Map-300x300-1.png"}, 
]

const TIMELINE_GRAPH = [
    {
        date: "2023/11/02",
        miles: 200,
        frequency: "low"
    },
    {
        date: "2023/11/05",
        miles: 15,
        frequency: "low"
    },
    {
        date: "2023/11/10",
        miles: 540,
        frequency: "low"
    },
    {
        date: "2023/11/12",
        miles: 320,
        frequency: "high"
    },
    {
        date: "2023/11/22",
        miles: 120,
        frequency: "high"
    },
    {
        date: "2023/12/24",
        miles: 200,
        frequency: "high"
    },
    {
        date: "2023/11/05",
        miles: 10,
        frequency: "high"
    },
    {
        date: "2023/11/10",
        miles: 5,
        frequency: "high"
    },
    {
        date: "2023/11/12",
        miles: 30,
        frequency: "high"
    },
    {
        date: "2023/11/22",
        miles:50,
        frequency: "low"
    },
    {
        date: "2023/12/24",
        miles: 5,
        frequency: "high"
    },
    {
        date: "2023/12/24",
        miles: 5,
        frequency: "high"
    },
    {
        date: "2023/12/24",
        miles: 5,
        frequency: "high"
    },
    {
        date: "2023/12/24",
        miles: 2,
        frequency: "high"
    },
    {
        date: "2023/12/24",
        miles: 2,
        frequency: "high"
    },
];

const handleCategories = () => {
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
}

const handleTimelineGraph = () => {
    const graphDiv = document.querySelector("#graphs");

    // Get parent div height
    const height = graphDiv.getBoundingClientRect().height;

    TIMELINE_GRAPH.forEach(timeline => {
        const timelineDiv = document.createElement("div");
        const graphHeight = timeline.miles / height * 100

        timelineDiv.className = "graph"
        timelineDiv.style.height = `${graphHeight > 100 ? 100 : graphHeight}%`;
        timelineDiv.classList.toggle("graph-frequency-high", timeline.frequency === "high")

        graphDiv.append(timelineDiv);
    });
}

const handleTrips = () => {
    const tripsDiv = document.querySelector("#trips");

    TRIPS.forEach((trip) => {
        const wrapperDiv = document.createElement("div");
        const textDivWrapper = document.createElement("div");
        const image = document.createElement("img");
        const titleParagraph = document.createElement("p");
        const dateParagraph = document.createElement("p");

        // Add style to title paragraph and text content
        titleParagraph.className = "text-[16px] font-bold";
        titleParagraph.textContent = trip.title;

        // Add style to date paragraph and text content
        dateParagraph.className = "text-[10px] font-bold";
        dateParagraph.textContent = trip.date;

        // Add style to the text div wrappet
        textDivWrapper.className = "flex flex-col space-y-1 flex-1 py-3 px-3 relative";
        textDivWrapper.append(titleParagraph);
        textDivWrapper.append(dateParagraph);

        // Add style to image
        image.src = trip.imageUrl;
        image.width = "100"

        // Add style to the wrapper div
        wrapperDiv.className = "flex bg-white h-28 w-60 shadow-2xl";
        wrapperDiv.append(textDivWrapper);
        wrapperDiv.append(image);

        // Append category to categories div
        tripsDiv.append(wrapperDiv);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Graphs
    handleTimelineGraph();

    //Trips
    handleTrips();

    //Categories
    handleCategories();
    
});
