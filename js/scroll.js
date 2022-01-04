function smoothScroll(target,duration){

    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if (startTime === null) startTime = currentTime;
        var timeElp = currentTime - startTime;
        var run = ease(timeElp,startPosition,distance,duration);
        window.scrollTo(0,run);
        if(timeElp < duration ) requestAnimationFrame(animation);
    }


    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2 * t * t + b ; 
        t--;
        return -c / 2 * ( t * (t - 2) - 1) + b;
    }
        

    requestAnimationFrame(animation);
}



var home = document.querySelector('.home-sec');
var skills = document.querySelector('.portfolio-sec');

home.addEventListener('click', function(){
 smoothScroll('.gallery' ,1000);
});


skills.addEventListener('click', function(){
    smoothScroll('.skills' ,1000);
   });