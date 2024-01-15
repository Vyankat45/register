const photo = document.querySelector("#photo")
    console.log(photo)
     document.querySelector("#Course").addEventListener('change',(e)=>{
    //     photo.src=e.target.value + ".png";
    // console.log(photo)
if(e.target.value === "valo"){
        photo.src=e.target.value;
    }
    if(e.target.value === "digister"){
        photo.src=e.target.value;
    }
    else if(e.target.value === "logo")
    {
        photo.src= e.target.value;
        

    }
    else{
        photo.src= "../cat4.jpg";
    }

     })