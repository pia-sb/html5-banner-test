var dkz = new TimelineMax;


function init() { 
    main_animation();
}


function main_animation (){
    dkz.progress(0);
//    dkz.set(path, {strokeDasharray:l});
//    add_hover();

    dkz.to (white_plane, .5, {opacity:0, ease:Power2.easeInOut}, "part1");
    
    dkz.from (copy, 1.25, {delay:.25, opacity:0, x:-70, ease:Power1.easeInOut}, "part1");
    dkz.from (circle, 1.5, {delay:.75, scale:0, ease:"elastic.out(1,0.5)", onComplete:add_hover}, "part1");

//    dkz.pause(4);

}

function add_hover() {
    document.getElementById("main_wrapper").onmouseover = function(){
    TweenMax.to(circle, .5, {scale:1.2, ease:Power1.easeInOut, overwrite:"auto"});
};

    document.getElementById("main_wrapper").onmouseout = function(){
    TweenMax.to(circle, .5, {scale:1, ease: "elastic.out(1,0.5)", overwrite:"auto"});

};
}