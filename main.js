
console.log ("hello")



const vacation = [
    {
        title: "South Africa",
        imageURL: "https://pbs.twimg.com/media/DYU3YS8W4AAgqQD.jpg",
        description: "visually and culturally beautiful"
    },
    {
        title: "Egypt",
        imageURL: "https://www.africa.com/wp-content/uploads/2017/10/egypt_shutterstock_3_D9QtI.jpg",
        description: "visually and culturally beautiful"
    },
    {
        title: "Moroco",
        imageURL: "https://www.africa.com/wp-content/uploads/2017/10/moro_shutterstock_40_1aYgN.jpg",
        description: "visually and culturally beautiful"
    },
    {
        title: "Mauritius",
        imageURL: "https://www.africa.com/wp-content/uploads/2017/10/maur_shutterstock_66_gqBbc.jpg",
        description: "visually and culturally beautiful"
    },
    {
        title: "Tunisia",
        imageURL: "https://www.africa.com/wp-content/uploads/2017/10/tuni_shutterstock_68_WFuH8.jpg",
        description: "visually and culturally beautiful"
    },
    {
        title: "Tanzania",
        imageURL: "https://www.africa.com/wp-content/uploads/2017/10/tanzania_shutterstoc_8BtX3.jpg",
        description: "visually and culturally beautiful"
    }
];

// print toDom function
const printToDom = (domString, divId) => {
    const printTo = document.getElementById(divId);
    printTo.innerHTML = domString;
};


// adding to print to Dom 
const buildDomString = (vacationArray) => {
    let domString = '';
    vacationArray.forEach((vacation) => {
        domString += `<div class="card">`;
        domString +=   `<h1>${vacation.title}</h1>`
        domString +=   `<img src="${vacation.imageURL}" alt="">`;
        domString +=   `<p>${vacation.description}</p>`;
        domString +=   `<button class="card-button">Click Me</button>`;
        domString += `</div>`;
    });

    printToDom (domString, 'card-holder');
};

buildDomString(vacation);