<script lang="ts">
    import { CodeBlock } from "@skeletonlabs/skeleton";
    import { deleteSnippet, toggleFavourite } from "./SnippetStore"; // Modificarán el estado de snippet[]

    export let snippet:CodeSnippet = {
        title:"",
        language:"",
        code:"",
        favorite:false,
    }

    export let index:number ;
</script>


<div class="card">
    <header class="card-header">
        {snippet.title}
        <div class="float-right">
            <button type="button" class="btn btn-sm variant-filled-secondary" on:click={() => toggleFavourite(index)}>
                {snippet.favorite ? "Unfavourite" : "Favourite"}

            </button>
            <button type="button" class="btn btn-sm variant-filled-secondary" on:click={() => deleteSnippet(index)}>
                X
            </button>
        </div>
    </header>
    <section class="p-4">
        <CodeBlock language={snippet.language}  code={snippet.code}/>
    </section>
</div>