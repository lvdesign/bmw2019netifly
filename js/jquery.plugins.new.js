jQuery(function(){var $title=$('article').attr('id');if($title!=null){console.log('toto :'+$title);var $figureloading=$('#sans-js');$figureloading.hide();$('.maBase').prepend('<figure class=""><img src="fmob/'+$title+'.png" id="picture" class="thumb innerShadow"  alt="Decouvrez le site de Bernhard Winkelmann"   title="Le site de Bernhard Winkelmann, photographe." /></figure>');$(document).ready(function(){$.get('img/'+$title+'/doc_image/bmwVignette.xml',function(data){var nb=$(data).find('nbVignette').text();console.log(nb);var featurePics=new Array;console.log('pics ---- ');console.log(featurePics);var i=0;do{var lien="./img/"+$title+"/slides/"+i+".jpg";featurePics.push(lien);i++;}while(i<nb);var $myWindow=$(window).width();console.log($myWindow);if($myWindow<760){console.log('Version Mobile avec JS');$('.sans-js').hide();for(var z=0;z<featurePics.length;z++){var newThumbnailMobile=jQuery('<p class="mobile"><img src="'+featurePics[z]+'" class="thumb innerShadow" /></p>');console.log(newThumbnailMobile);newThumbnailMobile.insertAfter('figure');}}else{for(var y=0;y<featurePics.length;y++){var newThumb=jQuery('<img src="'+featurePics[y]+'"  >');newThumb.data("toto",featurePics[y]);newThumb.addClass("thumbPetit");newThumb.addClass("innerShadowLight");newThumb.mouseover(firstEvent);newThumb.mouseleave(secondEvent);jQuery("#voirImage").append(newThumb);}function firstEvent(){$(this).css('opacity','0.3');var imgSrc=$(this).attr('src');jQuery("#picture").attr('src',imgSrc);}function secondEvent(){$(this).css('opacity','1');jQuery("#picture").attr('src','fmob/'+$title+'.png');}}});});}});