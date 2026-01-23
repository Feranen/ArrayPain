function tableActions() {
    table = [
        random(),
        random(),
        random(),
        random(),
        random(),
        random(),
        random(),
        random(),
        random(),
        random(),
    ];

    console.log(`Tabela: ${table}`);

    console.log(table[7]);

    sorted = table.sort(function (a, b) {
        return a - b;
    });

    console.log(sorted.reverse());

    console.log(table.slice(0, -1));

    rand = random();

    if (rand > 69) {
        rand = "secretInput"
    };

    table.unshift(rand);
    console.log(table);


    console.log(swapLast(table));
    return table;
}