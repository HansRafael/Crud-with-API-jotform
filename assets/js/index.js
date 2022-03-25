const urlLocal = "http://localhost:3000/";
let cont = 0

$(document).on('click', '.addService', function(){
    cont += 1
    var html = `<input id="id_url${cont}" type="text" name="url" value="" required placeholder="youtube.com/url">`;
  $(this).parent().append(html);
});

$(document).on('click', '.removeService', function(){

    var elemt = document.getElementById(`id_url${cont}`)
    elemt.parentNode.removeChild(elemt)
    cont -=1
});


let contUp = 1

$(document).on('click', '.removeServiceUp', function(){
    var elemt = document.getElementById(`id_url${contUp}`)
    elemt.parentNode.removeChild(elemt)
    contUp +=1
});

$(document).on('click', '.delete-btn', function(){
    console.log(list)
    var elemt = document.getElementById(`id_url${contUp}`)
    var elemt_btn = document.getElementById(`id_url${contUp}`)
    elemt.parentNode.removeChild(elemt)
    contUp +=1
});

$(document).on('click', '.addServiceUp', function(){
    contUp -= 1
    console.log(contUp)
    var html = `<input id="id_url${contUp}" type="text" name="url" value="" required placeholder="youtube.com/url">`;
  $(this).parent().append(html);
});

//----------------------------------------------------------//

$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})


function cpfPattern(cpf){
    const targetCPF = cpf
    const currentCPF = cpf.value

    let newCPF;

    newCPF = currentCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
    function( regex, argumento1, argumento2, argumento3, argumento4 ) {
        return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
    })

    targetCPF.value = newCPF;
}

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {url:[]}

    $.map(unindexed_array, function(n, i){
        if(n['name'] === 'url'){
            data.url.push(n['value'])
        }else data[n['name']] = n['value']
        
    });
    

    var request = {
        "url" : `${urlLocal}api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `${urlLocal}api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}

if(window.location.pathname == "/search"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `${urlLocal}api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.href = "/";
            })
        }

    })
}
