$("form").submit(function( event ) {
    var standing=false;
    var fruit=false;
    $("input[name='fruit']").each(function(){
        if ($(this).is(":checked")) {
            fruit= true;  
         }
    })
    $("input[name='standing']").each(function(){
        if ($(this).is(":checked")) {
            standing = true;
        }
    })
    if (!fruit && !standing){
        event.preventDefault();
        alert("You must pick a class standing and fruit!");
                }
    else if (!fruit){
        event.preventDefault();
        alert("You much pick a fruit!");

    }
    else if (!standing){
        event.preventDefault();
        alert("You much pick a class standing!")
    }
    else{
    event.submit();
    }

    })
