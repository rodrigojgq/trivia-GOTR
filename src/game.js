let category = ""

function setCategory(){
    category = localStorage.getItem("category");
    console.log(category);
}

setCategory()