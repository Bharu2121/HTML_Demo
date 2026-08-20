const recipe_list_items=document.getElementById("recipe_list");

fetch("https://dummyjson.com/recipes?limit=9")
.then((response)=>response.json())
.then((data)=>{
    data.recipes.forEach(recipe => {
        const li= document.createElement("li");
        li.classList.add("recipe_item");
        li.innerHTML=`
        <img src="${recipe.image}"/>
        <div class="recipe_info">
            <h2>${recipe.name}</h2>
            <p >
                <strong>Ingredients:</strong>
                ${recipe.ingredients.join(", ")}
            </p>
        </div>
        `
        recipe_list_items.appendChild(li);
    });
})

.catch((error)=>{
    console.log(error);
})