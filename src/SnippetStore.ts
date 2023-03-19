//SnippetStore

import { writable, get } from "svelte/store";

export const snippetStore = writable<CodeSnippet[]>([])

//addSnippet
export function addSnippet(input: CodeSnippetInput){
    let snippets = get(snippetStore);                        //$snippetStore listen to changes to the value of snippetStore
    snippetStore.update(() => {
        return [{ ...input, favorite:false }, ...snippets];
    })
}

//deleteSnippet
export function deleteSnippet(index: number){
    let snippets = get(snippetStore);   
    snippets.splice(index, 1)                     
    snippetStore.update(() => {
        return snippets
    })
}

//toggleFavorite
export function toggleFavourite(index: number) {
    let snippets = get(snippetStore); 
    snippetStore.update(() => {
        return snippets.map((snippet, snippetIndex) => {
            if( snippetIndex === index){
                return {...snippet, favorite:!snippet.favorite }
            }
            return snippet;
        })
    })
}

