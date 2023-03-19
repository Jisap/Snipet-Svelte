import type { PageLoad } from "./$types"; // carga datos en una página antes de que se renderice y se muestre al usuario. 

export const load = (() => {

    // you can get this data from ANY SOURCE
    // fetch call here
    // graphql client
    // manually change this object here whenever you want

    return{
        snippets: [
            {
                title: "Jisa Codes Snippet",
                language: "html",
                code: `<div>This is a div</div>`,
                favorite: false
            },
            {
                title: "Cool code snippet",
                language: "typescript",
                code: `console.log("Subscribe");`,
                favorite: false
            }
        ]
    }
    
})satisfies PageLoad; // PageLoad -> PageData (in our frontend)