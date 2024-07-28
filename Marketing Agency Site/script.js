var cursor=document.querySelector(".cursor")
var main = document.querySelector("body")

main.addEventListener("mousemove",function(delts){
    gsap.to(cursor,{
        x:delts.x,
        y:delts.y,
        duration:0.5,
        speed:10,
        ease: "elastic",
    })
})

function page1Animation(){
    var tl=gsap.timeline();
tl.from(".logo h4,.logo i, .links a, nav .links button", {
    y: -50,
    opacity:0,
    delay:1,
    duration:.5,
    stagger:.2,
})

tl.from(".left h1",{
    x:-300,
    opacity:0,
    duration:0.5,
})
tl.from(".left p",{
    x:-100,
    opacity:0,
    duration:0.4,
})
tl.from(".left button",{
    opacity:0,
    duration:0.4,
})
tl.from(".right img",{
    x:200,
    opacity:0,
    duration:0.8,

},"-=1.1")

tl.from(".page1-bottom img",{
  
    y:30,
    opacity:0,
    delay:.2,
    duration:.8,
    stagger:.2,


})



};

function page2Animation(){
    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger:".top",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"top 0%",
            scrub:2,
    
        }
    })
    
    t2.from(".top h2, .top p",{
        y:-30,
        opacity:0,
        duration: .5,
    })
    
    t2.from(".elem",{
        // y:-30,
        opacity:0,
        duration: 1,
        stagger:.5,
    })
    
    

}; 

function page3Animation(){
    var t3 = gsap.timeline({
        scrollTrigger: {
            trigger:"footer .form",
            scroller:"body",
            // markers:true,
            start:"top 100%",
            end:"top 30%",
            scrub:2,
    
        }
    })
    
    
    t3.from(".content h2, .content p , .content button", {
        y:-30,
        opacity:0,
        duration:2,
        stagger:.2,
    })
    t3.from(".form img",{
        x:200,
        opacity:0,
        duration:1,
    })
    
    t3.from(".end",{
        y:200,
        opacity:0,
        duration:2,
    })
    t3.from(".end i, .end h4",{
        opacity:0,
        duration:1,

    },"-=.5")
    

};

    
    
    
    
    
    
    
page2Animation()
page1Animation()
page3Animation()
    


