<script lang="ts">
    import {createGetter, createSetter} from "./createGS";
    let lang: String;
    let type: String;
    let name: String;
    let getter: boolean = true;
    let setter: boolean = true;
</script>

<select bind:value={lang}>
    <option value="cpp">C++</option>
    <option value="java">Java</option>
</select>

<input placeholder="Variable type" bind:value={type}/>

<input placeholder="Variable name" bind:value={name}/>

<label>
    <input type="checkbox" bind:checked={getter}>
    Getter
</label>

<label>
    <input type="checkbox" bind:checked={setter}>
    Setter
</label>

<pre>{#if getter}{createGetter(type, name, lang)}{/if}{#if setter}{createSetter(type, name, lang)}{/if}</pre>