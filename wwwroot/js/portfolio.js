$(function(){

    $('a.item').on('click', function(){
      var classToFilter = $(this).attr('data-filter');
      $('a.item').removeClass('active');
      $('a.stitle').removeClass('active');
      $(this).addClass('active');
      
      var hide = $('div.filter').not('.' + classToFilter);
      var show = $('div.filter.' + classToFilter)
      show.show();
      hide.hide();

    })

    $('a.stitle').on('click', function(){
        var classToFilter = $(this).attr('data-filter');
        $('a.item').removeClass('active');
        $('a.stitle').removeClass('active');
        $(this).addClass('active');
        
        var hide = $('div.filter').not('.' + classToFilter);
        var show = $('div.filter.' + classToFilter)
        show.show();
        hide.hide();
  
      })

});
