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

<select bind:value={lang} class="select">
    <option disabled selected>Pick your language</option>
    <option value="cpp">C++</option>
    <option value="java">Java</option>
</select>

<input class="input" placeholder="Variable type" bind:value={type}/>

<input class="input" placeholder="Variable name" bind:value={name}/>

<label>
    <input class="checkbox" type="checkbox" bind:checked={getter}>
    Getter
</label>

<label>
    <input class="checkbox" type="checkbox" bind:checked={setter}>
    Setter
</label>
<br/>
<button class="btn" on:click={() => {
    setClipboard(content)
}}>Copy text</button>
<pre>{content}</pre>