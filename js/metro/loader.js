async function loadData() {

    if (DATA_SOURCE === "LOCAL") {
        return loadLocalData();
    }

    const data = await fetch("remote/train_series/metro.json");
    return await data.json();
}

async function loadLocalData() {
    return await (await fetch(`data/metro/special.json`)).json();
}