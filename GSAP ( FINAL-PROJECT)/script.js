
function page1Animation(){


    
var tl = gsap.timeline()

tl.from("#nav1 h1 , #nav2 h4 , #nav2 button" , {

    y:-40,
    opacity: 0,
    duration: 0.6,
    delay:0.5,
    stagger: 0.18
})



tl.from("#section1 h1",{

    x: -100,
    opacity: 0,
    duration: 0.37,
    
})

tl.from("#section1 p",{

    x: -80,
    opacity: 0,
    duration: 0.33,
    
})

tl.from("#section1 button",{

    delay: 0.15,
    opacity: 0,
    
    
})

tl.from("#section2 img",{

    opacity: 0,
    duration: 0.35,
    x: 100

},"-=1")



tl.from("#account img",{

    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration:0.4
})



}


function page2Animation(){

    var tl2 = gsap.timeline({

        scrollTrigger:{
    
            trigger: "#services",
            scroller: "body",
            start: "top 60%",
            end: "top 0",
            scrub: 2
    
        }
    })
    


tl2.from("#services",{

    y: -80,
    opacity: 0,
    duration: 2
})



tl2.from("#box0",{

    x: -100,
    opacity:0,
    duration: 7
},"rdx1",)

tl2.from("#box1",{

    x: 100,
    opacity:0,
    duration: 7
},"rdx1",)




tl2.from("#box2",{

    x: -100,
    opacity:0,
    duration: 7
},"rdx2",)

tl2.from("#box",{

    x: 100,
    opacity:0,
    duration: 7
},"rdx2",)






}


function page3Animation(){

    
var tl3 = gsap.timeline({

    scrollTrigger:{

        trigger: "#box",
        scroller: "body",
        start: "top 60%",
        end: "top 0",
        scrub: 2

    }
})


tl3.from("#proposal1 h3",{

    x: -200,
    opacity: 0,
    duration: 3.5,
    
})

tl3.from("#proposal1 p",{

    x: -150,
    opacity: 0,
    delay:0.1,
    duration: 3
   
    
})

tl3.from("#proposal1 button",{

    opacity: 0,
    duration: 1

},"-=0.15")

tl3.from("#proposal2 img",{

    opacity: 0,
    delay: 0.2,
    duration: 3,
    x: 200

},"-=1.5")

tl3.from("#case",{


    y: -100,
    opacity: 0,
    duration: 1.5
})


}


 function page4Animation(){
    

    var tl4 = gsap.timeline({

        scrollTrigger:{
    
            trigger: "#proposal",
            scroller: "body",
            start: "top 60%",
            end: "top 0",
            scrub: 2
    
        }
    })


    tl4.from("#faq1 , #faq2 , #faq3",{

    y: 300,
    duration:3,
    delay:1,
    opacity: 0,
    stagger: 0.5
})

}

page1Animation();
page2Animation();
page3Animation();
page4Animation();