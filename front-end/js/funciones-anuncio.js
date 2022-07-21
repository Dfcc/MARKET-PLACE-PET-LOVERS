function previewFile(){
    const preview = document.querySelector('#img_preview');
    const file = document.querySelector('#image').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function(){
        //convert img file to base 64 string
        preview.src = reader.result;
    }, false);
    if(file){
        reader.readAsDataURL(file);
    }
}

function saveNew(){
    title = document.querySelector('#title').value;
    description = document.querySelector('#description').value;
    place= document.querySelector('#place').value;
    specie= document.querySelector('#specie').value;
    image_prev = document.querySelector('#img_preview').getAttribute('src');

    opt={
        url:'http://localhost:3000/anuncios',
        method:'post',
        data:{
            title:title,
            description:description,
            place:place,
            specie:specie,
            image:image_prev
        }
    }
    axios(opt)
    .then(function(data_res){
        console.log(data_res);
        if(data_res.status== 201)
        aler('El anuncio se ha guardado')
    })
    .catch(function(ex){
        console.log(ex)
    })
}