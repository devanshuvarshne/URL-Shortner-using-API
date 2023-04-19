const shortURL = document.getElementsByTagName("input")[2];
const copyBtn = document.getElementsByTagName("span")[0]
const btn = document.getElementsByClassName("btnIN");
btn[0].addEventListener('click', short);

async function short() {

    const longUrl = document.getElementsByTagName("input")[0].value;
    console.log("Provided Link : ", longUrl);

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
    const data = await result.json();

    // console.log(data);
    // //console.log(data.result);

    // console.log("Shortened URL as ", data.result.short_link);
    shortURL.value = data.result.short_link;
}

copyBtn.onclick = () => {
    // shortURL.select();
    window.navigator.clipboard.writeText(shortURL.value)
}