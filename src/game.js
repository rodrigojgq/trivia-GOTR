let category = ""

function setCategory(){
    category = localStorage.getItem("category");
    if (category === "GOT"){
        document.getElementById("header-img").src = "../assets/GOT.jpg";
    }else if( category === "TLOTR") {
        document.getElementById("header-img").src = "../assets/TLOTR.jpg";
    }
}


setCategory()