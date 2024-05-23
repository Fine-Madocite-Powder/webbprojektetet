const recipes = {
    object: {
        name: "stekta taters"
    },
    object2: {
        name: "stekta människokött"
    }
}

function performSearch() {
    const input = document.getElementById('searchbar').value.toLowerCase().trim()
    let result = [] 

    result.push(...searchNames(input))

    console.log(result)
}

function searchNames(input) { // Adds recipes with identical names to the result, and then recipes with similar names

    let result = []

    for (const recipe in recipes) {
        if (recipes[recipe].name === input) result.push(recipes[recipe])
        
    
        const nameComponents = recipes[recipe].name.split(' ')
        const searchComponents = input.split(' ')

        nameComponents.forEach(nameComponent => {
            searchComponents.forEach(searchComponent => {

                if (nameComponent === searchComponent && (result.some((object) => { return object !== recipes[recipe]}) || result[0] === undefined))
                result.push(recipes[recipe])
                
            })
        });
    
    }

    return result
}
