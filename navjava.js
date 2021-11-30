// function NavigateToSelection(selected){
//     let item=document.getElementById("pagemenu");
//     switch(selected.value){
//         case "About":
//             location.href="aboutme.html";
//             break;
//         case "Recipes":
//             location.href="recipes.html";
//             break;
//         case "Favorites":
//             location.href="favorites.html";
//             break;
//         case "Cookbooks":
//             location.href="cookbooks.html";
//             break;
//         case "Form":
//             location.href="form.html";
//             break;
//         default:break;
//     }
// }

// function ShowSelectedRecipeType(selected){
//     switch(selected.value){
//         case "Appetizer":
//             let flips = document.getElementsByClassName("flip-box");

//             break;
//         case "Breakfast":
//             let flips = document.getElementsByClassName("flip-box");            break;
//         case "Dessert":
//             alert(selected.value + " selected")
//             break;
//         case "Main Course":
//             alert(selected.value + " selected")
//             break;
//         case "Side Dish":
//             alert(selected.value + " selected")
//             break;
//         case "Vegetarian":
//             alert(selected.value + " selected")
//             break;
//         default:break;
//     }
// }

$(function(){
    $('.container').mixItUp({
      load: {
        filter: '.vegetarian'
      }
    });
  });