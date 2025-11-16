
<script lang="ts">
    import {createGetter, createSetter} from "./createGS";
    let lang: String = "cpp";
    let type: String = "";
    let name: String = "";
    let getter: boolean = true;
    let setter: boolean = true;
    let content: string;
    $: content = `${getter ? createGetter(type, name, lang) : ""}${setter ? createSetter(type, name, lang) : ""}`

    async function setClipboard(text: string) {
        const type = "text/plain";
        const clipboardItemData = {
            [type]: text,
        };
        const clipboardItem = new ClipboardItem(clipboardItemData);
        await navigator.clipboard.write([clipboardItem]);
        }
</script>

<div class="w-[50%] max-w-280 min-w-96 m-auto relative top-[50%] translate-y-[30%]">
<select bind:value={lang} class="select m-2">
    <option disabled selected>Pick your language</option>
    <option value="cpp">C++</option>
    <option value="java">Java</option>
</select>

<br/>
<div class="w-max">
<input class="input m-2 w-max" placeholder="Variable type" bind:value={type}/>

<input class="input m-2 w-max" placeholder="Variable name" bind:value={name}/>
</div>
<br/>

<label class="m-4">
    <input class="checkbox" type="checkbox" bind:checked={getter}>
    Getter
</label>

<label class="m-4">
    <input class="checkbox" type="checkbox" bind:checked={setter}>
    Setter
</label>
<br/>
<button class="btn m-4" on:click={() => {
    setClipboard(content)
}}>Copy text</button>
<pre class="bg-base-200 rounded-2xl p-4 pl-8 m-2 border-none">{content}</pre>
</div>

