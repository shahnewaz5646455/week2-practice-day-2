// document.getElementById("hand").addEventListener("click",(event)=>{

//     let mealName=document.getElementById("search-box").value;
//     let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
//     const loadmeal=()=>{
//         fetch(url)
//                 .then(res=>res.json())
//                 .then(data=>{
//                     display(data);
//                     console.log(data);
//                 });
    
//     };
//     const display=(data)=>{
    
        
//         const container=document.getElementById("product-container");
//         const div=document.createElement("div");
//             div.classList.add("product-card");
//             div.innerHTML=`
//             <div class="card-img">
//                         <img class="img" src=${data.meals[0].strMealThumb} alt="">
//             </div>
                    
//             <h5 class="text-center mt-3 fw-bold">${data.meals[0].strMeal}</h5>
//             `
    
    
//             container.appendChild(div);
//             document.getElementById("search-box").value="";
//             mealName=document.getElementById("search-box").value
            
    
//     }
    
    

//     loadmeal();



// });



document.getElementById("hand").addEventListener("click",(event)=>{
    var productContainer = document.getElementById('product-container');
    
    while (productContainer.firstChild) {
        

        productContainer.removeChild(productContainer.firstChild);
    }
    

    let mealName=document.getElementById("search-box").value;
    console.log(mealName);
    loadAllProduct(mealName);
    document.getElementById("search-box").value="";
    document.getElementById("product-container");


});



const loadAllProduct=(mealName)=>{
    console.log(mealName);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    fetch(url)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                displayProduct(data);
                
            });

};


const displayProduct=(foods)=>{
    const container=document.getElementById("product-container");
    console.log(foods.meals);
    foods.meals.forEach(p => {
        console.log(p.strMeal);

        const div=document.createElement("div");
        const dynamicVariable = p.idMeal;
            div.classList.add("product-card");
            div.setAttribute("onclick", `kk('${dynamicVariable}');`);
            div.innerHTML=`
            <div class="card-img">
                        <img class="img" src=${p.strMealThumb} alt="">
            </div>
                    
            <h5 class="text-center mt-3 fw-bold">${p.strMeal}</h5>
            `
            container.appendChild(div);

            // const allmeal=document.getElementsByClassName("product-card");
            // for(const element of allmeal){
            //     element.addEventListener("click",(e)=>{
            //         console.log(e.target);
            //         const conn=document.getElementById("details");
            //         conn.innerHTML="";
            //         conn.appendChild(e.target.parentNode);


            //     });
            // }
       
        
    });

}



const kk=(ob)=>{
    
    console.log(ob);
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ob}`;
    fetch(url)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                output(data);
                
            });

    
};
const output=(food)=>{
    const detailscon=document.getElementById("details");
    const item=food.meals[0];
    console.log(item);
    const div=document.createElement("div");
    div.classList.add("s11");
    div.innerHTML=`
    <div class="card-img">
    <img class="img" src=${item.strMealThumb} alt="">
    </div>

    <h5 class="text-center mt-3 fw-bold">${item.strMeal}</h5>
    <h5 class="text-center mt-3 fw-bold">Ingredient :</h5>

            <p class="text-center mt-3 fw-bold">* ${item.strIngredient1}</p>
            <p class="text-center mt-3 fw-bold">* ${item.strIngredient2}</p>
            <p class="text-center mt-3 fw-bold">* ${item.strIngredient3}</p>
            <p class="text-center mt-3 fw-bold">* ${item.strIngredient4}</p>
            <p class="text-center mt-3 fw-bold">* ${item.strIngredient5}</p>
            <p class="text-center mt-3 fw-bold">* ${item.strIngredient6}</p>
            <p class="text-center mt-3 fw-bold">* ${item.strIngredient7}</p> 
    
    
    `
    detailscon.innerHTML="";
    detailscon.appendChild(div);



}












