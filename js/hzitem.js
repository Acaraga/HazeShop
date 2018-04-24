function incQnt() {
    //increase item qnt
    var id = $(this).attr('data-id');
     
    var qnt = $('.qnt_input#'+id).text();
    
    qnt++;
    $('.qnt_input#'+id).text(qnt);
    
};

function decQnt() {
 
    //increase item qnt
    var id = $(this).attr('data-id');
      //console.log(id);
    var qnt = $('.qnt_input#'+id).text();
    //console.log(qnt);
    if (qnt>1) {
            qnt--;
            $('.qnt_input#'+id).text(qnt);
        }
    };
    


