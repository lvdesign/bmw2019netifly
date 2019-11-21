// calls to all of the above plugins
jQuery(function () {

    //si js ok
    var $title = $('article').attr('id');

    //si il existe article alors activer le slideshow sinon rien.
    if ($title != null) {
        console.log('toto :' + $title);
        // cache thumb car js activé
        var $figureloading = $('.thumb');
        $figureloading.hide();

        $('.main').prepend('<figure class="thumbnail innerShadow"><img src="fmob/' + $title + '.png" alt="Decouvrez le site de Bernhard Winkelmann a"   title="Le site de Bernhard Winkelmann, photographe." id="picture" class=""  /></figure>');

        //methode jquery action recherche elements
        $(document).ready(function () {

            //nb de photos (vignette)
            $.get('img/' + $title + '/doc_image/bmwVignette.xml', function (data) {

                var nb = $(data).find('nbVignette').text();
                //la chaine qui va recevoir les infos
                console.log(nb);

                var featurePics = new Array;
                console.log('pics ---- ');
                console.log(featurePics);
                //avec cette boucle on assure la length du xml
                var i = 0;
                do {
                    //variable qui structure le lien vers dossier image
                    var lien = "./img/" + $title + "/slides/" + i + ".jpg";
                    //regroupe tous les elements liens
                    featurePics.push(lien);
                    i++;
                    //nb selon le fichier le nb de vignette ds le theme xml charge
                } while (i < nb);



                var $myWindow = $(window).width();
                console.log($myWindow);


                /* VERSION MOBILE avec js*/
                if ($myWindow < 500) {

                    console.log(' my petite window');
                    $('figure').removeClass('thumbnail');
                    $('figure').addClass('thumb innerShadow');
                    $('.sans-js').hide();

                    for (var z = 0; z < featurePics.length; z++) {

                        var newThumbnailMobile = jQuery('<p class="mobile thumb innerShadow"><img src="' + featurePics[z] + '" class=" " /></p>');
                        console.log(newThumbnailMobile);
                        //jQuery('#picture').prepend(newThumbnailMobile);
                        //newThumbnailMobile.insertAfter('figure');
                        //jQuery('#picture').prepend(newThumbnailMobile);
                        
                        newThumbnailMobile.insertAfter('figure');
                        
                    }
                } else {
                    /* VERSION ipad,desktop avec js*/
                    /*petite Images*/
                    for (var y = 0; y < featurePics.length; y++) {

                        var newThumb = jQuery('<img src="' + featurePics[y] + '"  >');

                        newThumb.data("toto", featurePics[y]);
                        newThumb.addClass("thumbPetit");
                        //recupere index, si clic sur y alors grand
                        newThumb.mouseover(firstEvent);
                        newThumb.mouseleave(secondEvent);
                        jQuery("#voirImage").prepend(newThumb);

                    } //endpetite Images

                    function firstEvent() {

                        $(this).css('opacity', '0.3');
                        var imgSrc = $(this).attr('src');
                        jQuery("#picture").attr('src', imgSrc);
                    }

                    function secondEvent() {
                        $(this).css('opacity', '1');
                        jQuery("#picture").attr('src', 'fmob/'+ $title +'.png');
                    }

                } //elseIf dim


            });
            //****fin chargement et boucle presque mais suite 

        }); //fin while

    } //finDeIF

}); //fin jquery
