<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
/* jQuery(document).ready(function( $ ){
    $('a[href]').addClass('project fancybox').attr('rel', 'projects-gallery');
});*/

jQuery(document).ready(function( $ ){
  	$("img").each(function(){
	  	var re = /(.+)\-\d+x\d+\.jpg/i;
        var imgSrc = $(this).attr("src");
        var newImgSrc = re.exec(imgSrc);
		$(this).wrap("<a href='" + newImgSrc + "' class='project fancybox' rel='projects-gallery'>/</a>");
    });
});
</script>
<!-- end Simple Custom CSS and JS -->
