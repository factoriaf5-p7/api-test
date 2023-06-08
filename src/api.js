
export const getApiData = async () =>{
try {

    const result =  await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
    const data = await result.json();
    // console.log(data.text);
    return data.text;
} catch (error) {
    return null;
}
}

getApiData();
// window.onload = getApiData;