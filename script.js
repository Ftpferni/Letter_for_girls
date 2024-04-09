$(document).ready(function () {
    /*
     * Main variables
     */
    var content = [{
        title: "Porque Eres El Amor de Mi Vida?",
        desc: ""
    }, {
        title: "Porque No Amarte Despues de Todo?",
        desc: "Sabes, apesar de todas las cosa que hemos vivido, las altas y las bajas, siento que nunca podria de dejarte de amar, no porque tenga algun tipo de obseccion o algo. Si no que, ha tu lado he apredido cosa que en mi vida llegue a pensar que podria vivir, gracias a todo tu apoyo durantes todos los anos que hemos compartidos juntos, siempre he sido un fuerte creyente de que sin ti no podria estar en lugar donde estoy en este moemento, y eso siempre te lo voy agradecer, aunque las cosas esten mal entre nosotros yo siempre sentire algo por ti, por que te amo de una forma que ni las palabras pueden explicar."
    }, {
       title: "Razones Por Las Que Te Amo",
       desc: "Podria hacer una lista infinitas de razones, pero siendo sincero, siento que mis razones o mi razon mas grande, es que nunca me dejas solo, siempre me apoyas y eso es algo que me encanta de ti, porque tu me ensenaste amar y lo que se siente sentir amado, contigo pude concer lo que es que alguien se preocupe por ti y por tu bienestar. Se que aveces somos muy diferentes, en el tema de expresar lo que sentimos, pero quiero que sepas, que yo te amo de una forma tan rara, que talvez mis cara o mis palabras no puedan expresar, pero quiero que sepas que dentro de mi, hay una llama de amor que arde por ti y por estar a tu lado, con la esperanza de que algun dia, pueda sentir tu llama de amor"
    }, {
        title: "Que Nos Depara En Futuro?",
        desc: "Esta es una pregunta que ni yo, ni nadie pude contestar, talvez podriamos predecir el futuro, pero porque no simplemente imainarlo por un momento? Siempre he tenido ese sueno de algun dia ser una gran Padre, hay que protege su familia con espada y escudo, y ami me gustaria crear ese futuro contigo, viajando alrededor del mundo y disfruntado de los placeres de la vida(aunque yo ya estoy difruntando del mas grande xd). Volviendo al tema, quisiera que tu fueras esa companera en mi vida, esa personas que se preocupa por mi, esa persona que mira por mi cuando ni yo quiero hacerlo y tu me has demostrado de que te importo a lo largo de los anos que hemos estados juntos, y no me cabe duda de que me encantaria tener una familia a tu lado en un futuro, tener hijos y poder disfrutar esos momentos que talvez yo no poder disfrutar o que tu no podiste drisfrutar en la ninez. Todas estas cosas que talvez para algunas personas son tonta, para mi son cosas muy importantes y nuevamente sin duda alguna, me encataria y seria un privilegio llamrte mi esposa y vivir toda una vida juntos."
    }, {
        title: "Simplemente Gracias",
        desc: "Para acabar estas pequenas palabras, quiero agradecerte por todo, por siempre apoyarme en las cosas que siento que son correctas, aunque la mayoria de veces terminan mal, eso me desmuestra que estas dispuesta a estar conmigo en cualquien momento o bueno, eso me gusta pensar. Nuevamente te lo repito, amor mio, yo no podria estar escribiento este mensaje para ti sin no fuera por todo lo que has hecho por mi, por eso siempre estare agradecido contigo. Se que somos jovenes y que apenas empezamos a vivir la vida, pero estoy completamente seguro de que si hay otra vida despues de esta, estaria dispuesto a dedicar mi vida a buscarte de nuevo, te amo de la manera mas sincera posible, y quiero que sepas que aunque mis palabras no lo expresen en ocasiones, yo siempre te amre, asi estemos enojados, separados o yo que se, siempre exitira esa flama en mi por ti, Mi Chaparrita Hermosa"
 }];
    var currentPage = 0;
    //generate content
    for (var i = 0; i < content.length; i++) {
        //split content letters to array
        for (var obj in content[i]) {
            //if string
            if (typeof content[i][obj] === "string") {
                content[i][obj] = content[i][obj].split("");
                continue;
            }
            //if array (grouped text)
            else if (typeof content[i][obj] === "object") {
                var toPush = [];
                for (var j = 0; j < content[i][obj].length; j++) {
                    for (var k = 0; k < content[i][obj][j].length; k++) {
                        toPush.push(content[i][obj][j][k]);
                    }
                }
                content[i][obj] = toPush;
            }
        }
        //set text to
        $("#segments").append("<div class=\"letters-wrap mutable\"><div class=\"soup-title\"></div><div class=\"soup-desc\"></div></div>");
        setText();
        //clone to data
        $("#segments").append("<div class=\"letters-wrap position-data\"><div class=\"soup-title\"></div><div class=\"soup-desc\"></div></div>");
        setText();
    }
    //initial arrangement
    arrangeCurrentPage();
    scrambleOthers();
    /*
     * Event handlers
     */
    $(window).resize(function () {
        arrangeCurrentPage();
        scrambleOthers();
    });
    $("#soup-prev").hide();
    $("#soup-prev").click(function () {
        $("#soup-next").show();
        currentPage--;
        if (currentPage === 0) {
            $("#soup-prev").hide();
        }
        arrangeCurrentPage();
        scrambleOthers();
    });
    $("#soup-next").click(function () {
        $("#soup-prev").show();
        currentPage++;
        if (currentPage === content.length - 1) {
            $("#soup-next").hide();
        }
        arrangeCurrentPage();
        scrambleOthers();
    });
    /*
     * Functions
     */
    function arrangeCurrentPage() {
        for (var i = 0; i < content[currentPage].title.length; i++) {
            $(".mutable:eq(" + currentPage + ") > .soup-title > .letter").eq(i).css({
                left: $(".position-data:eq(" + currentPage + ") > .soup-title > .letter").eq(i).offset().left + "px",
                top: $(".position-data:eq(" + currentPage + ") > .soup-title > .letter").eq(i).offset().top + "px",
                color: "#111",
                zIndex: 9001
            });
        }
        for (var i = 0; i < content[currentPage].desc.length; i++) {
            $(".mutable:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).css({
                left: $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).offset().left + "px",
                top: $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).offset().top + "px",
                color: "#111",
                zIndex: 9001
            });
        }
    }

    function setText() {
        var j;
        for (j = 0; j < content[i].title.length; j++) {
            $(".soup-title").last().append("<span class=\"letter\">" + content[i].title[j] + "</span>");
        }
        for (j = 0; j < content[i].desc.length; j++) {
            $(".soup-desc").last().append("<span class=\"letter\">" + content[i].desc[j] + "</span>");
        }
    }

    function scrambleOthers() {
        for (var i = 0; i < content.length; i++) {
            //don't scramble currentPage
            if (currentPage === i)
                continue;
            var parts = [
                ["title", ".soup-title"],
                ["desc", ".soup-desc"]
            ];
            //apply to .title h1s and .desc ps
            for (var j = 0; j < parts.length; j++) {
                for (var k = 0; k < content[i][parts[j][0]].length; k++) {
                    //define random position on screen
                    var randLeft = Math.floor(Math.random() * $(window).width());
                    var randTop = Math.floor(Math.random() * $(window).height());
                    //defining boundaries
                    var offset = $(".position-data").eq(currentPage).offset();
                    var bounds = {
                        left: offset.left,
                        top: offset.top,
                        right: $(window).width() - offset.left,
                        bottom: $(window).height() - offset.top
                    };
                    var middleX = bounds.left + $(".position-data").eq(currentPage).width() / 2;
                    var middleY = bounds.top + $(".position-data").eq(currentPage).height() / 2;
                    //finally, apply all the scrambles
                    $(".mutable:eq(" + i + ") > " + parts[j][1] + " > .letter").eq(k).css({
                        left: randLeft,
                        top: randTop,
                        color: "#DDD",
                        zIndex: "initial"
                    });
                }
            }
        }
    }
});
