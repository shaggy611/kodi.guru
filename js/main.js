$(document).ready(function () {
    $(function() {
        $(document).click(function (event) {
          $('.navbar-collapse').collapse('hide');
        });
      });

    let flag = false;
    document.addEventListener ('scroll', function() {
        if (flag) return;
        $('#modal_veepn').modal('show');
        flag = true;
    });   
    
    document.addEventListener ('scroll', function() {
        let menu = $('#navbarNavAltMarkup');
        let check_menu_show = menu.hasClass('collapse navbar-collapse menu__links_margin');
        $('.navbar-collapse').collapse('hide');
        
       
    }); 
});  