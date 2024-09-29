export function buildTree(items, pick?) {
    const itemMap = new Map();

    // Создаем карту для быстрого доступа к элементам по их id
    items.forEach(item => {
        item.children = [];
        itemMap.set(item.id, item);
    });

    const tree = [];

    items.forEach(item => {
        if (item.parent === 0) {
            // Если нет родителя, добавляем в корень дерева
            tree.push(item);
        } else {
            // Если есть родитель, добавляем в его children
            const parent = itemMap.get(item.parent);
            if (parent) {
                parent.children.push(item);
            }
        }
    });

    // Применяем pick только если он задан
    return pick ? tree.map(item => applyPick(item, pick)) : tree;
}

// Рекурсивная функция для применения pick к каждому узлу и его потомкам
function applyPick(item, fields) {
    const pickedItem = {};

    // Динамически выбираем указанные поля
    fields.forEach(field => {
        if (field in item) {
            pickedItem[field] = item[field];
        }
    });

    // Применяем pick к потомкам
    pickedItem.children = item.children.map(child => applyPick(child, fields));

    return pickedItem;
}
