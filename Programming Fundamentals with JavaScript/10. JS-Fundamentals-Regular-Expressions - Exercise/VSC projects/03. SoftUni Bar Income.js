function solve(input) {

    let totalPrice = 0;

    for (const eachOrder of input) {
        const regexPattern = /%(?<customer>[A-Z][a-z]+)%(?:[^\|\$%\.]+)?<(?<product>[A-Za-z0-9_]+)>(?:[^\|\$%\.]+)?\|(?<count>[0-9]+)\|(?:[^\|\$%\.[0-9]+)?(?<price>[0-9]+\.?[0-9]+)\$/g;
        let matchExec = regexPattern.exec(eachOrder);

        if (matchExec) {
            let {
                customer,
                product,
                count,
                price,
            } = matchExec.groups;

            let valueOfPurchases = Number(count) * Number(price);
            console.log(`${customer}: ${product} - ${valueOfPurchases.toFixed(2)}`);

            totalPrice += valueOfPurchases;
        }
    }


    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}

solve(["%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift",
]);