export function buildTree(items, pick?) {
    const itemMap = new Map();

    items.forEach(item => {
        item.children = [];
        itemMap.set(item.id, item);
    });

    const tree = [];

    items.forEach(item => {
        if (item.parent === 0) {
            tree.push(item);
        } else {
            const parent = itemMap.get(item.parent);
            if (parent) {
                parent.children.push(item);
            }
        }
    });

    return pick ? tree.map(item => applyPick(item, pick)) : tree;
}

function applyPick(item, fields) {
    const pickedItem = {};

    fields.forEach(field => {
        if (field in item) {
            pickedItem[field] = item[field];
        }
    });

    pickedItem.children = item.children.map(child => applyPick(child, fields));

    return pickedItem;
}
