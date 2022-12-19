async function loadData() {
    const specifiedData = await loadSpecifiedData();
    const otherData = await loadOtherData();

    console.log(specifiedData);
    console.log(otherData);

    return {
        "specified": specifiedData,
        "other": otherData
    };
}

async function loadSpecifiedData() {
    const dateList = await (await fetch('/data/specified/date.json')).json();
    let specifiedData = [];
    for (const date of dateList) {
        const name = date["filename"];
        const data = await (await fetch(`/data/specified/${name}`)).json();
        specifiedData.push({
            "from": date["from"],
            "to": date["to"],
            "series": data
        });
    }

    return specifiedData;
}

async function loadOtherData() {
    const data = await (await fetch('/data/other.json')).json();
    return data;
}