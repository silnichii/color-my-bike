document.addEventListener("DOMContentLoaded", ()=>{


    const buttonType = document.querySelectorAll(".type_row div");
    const buttonColor = document.querySelectorAll(".color_row div");
    const bikeColor = document.querySelectorAll(".box__img svg .main")
    const bikeTypes = document.querySelectorAll(".box__img svg") 

    buttonType.forEach((item) => {
        item.addEventListener("click", (e) => {
            buttonType.forEach((i)=>{
                i.classList.remove("active")
            });
            e.target.classList.add("active");
            ChangeBikeType(e.target.attributes[0].value)
        });
    });
    
    buttonColor.forEach((item) => {
        item.addEventListener("click", (e) => {
            buttonColor.forEach((i)=>{
                i.classList.remove("active");
            });
            e.target.classList.add("active");
            changeColor(e.target.attributes[0].value)
        });
    });

    function ChangeBikeType(svg){
        bikeTypes.forEach((i)=>{
            i.style.display = "none"
        })
        for (var i = 0; i < bikeTypes.length; i++) {
            if (bikeTypes[i].id == svg){
                bikeTypes[i].style.display = "inline"
                break
            } 
        }    
    }

    function changeColor(color){
        bikeColor.forEach((item)=>{
            item.style.fill = color
        })
    }

})