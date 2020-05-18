$(document).ready(function () {
    let flag = false;
    document.addEventListener ('scroll', function() {
        if (flag) return;
        $('#modal_veepn').modal('show');
        flag = true;
    });    
});     