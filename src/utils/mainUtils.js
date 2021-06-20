import DATA from "../DATA";

export function getDataForGridView() {
    const uniqueItems = {};
    DATA.data.forEach(item => {
        let titleSymbol = item.title_symbol.replace(".png", "");
        if(!uniqueItems[titleSymbol]) {
            uniqueItems[titleSymbol] = item.actual_count;
        } else uniqueItems[titleSymbol] += item.actual_count;
    });
    return uniqueItems;
}

export function getDataForListView() {
    const uniqueFiles = [];
    const itemData = {};
    DATA.data.forEach(item => {
        if (!uniqueFiles.includes(item.file_name)) uniqueFiles.push(item.file_name);
        const symbolName = item.title_symbol.replace('.png', '');
        if (!itemData[symbolName]) itemData[symbolName] = {};
        if(!itemData[symbolName][item.file_name]) {
            itemData[symbolName][item.file_name] = item.actual_count;
        } else itemData[symbolName][item.file_name] += item.actual_count;
    });
    return {
			itemData,
			uniqueFiles
		};
}