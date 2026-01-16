gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})
// gsap.from("#page2 #box",{
//     scale:0,
//     // delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
    //  trigger:"#page2 #box",
    //  scroller:"body",
    //  markers:true,
    //  start:"top 60%"
    // }
// })
gsap.from("#page2 #box",{
    scale:0,
    opacity:0,
    rotate:720,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        // scrub:true
        scrub:2 ,// ye smotth scroll krdega mtlb start or end ke beeche me jb hoga object toh tb vo move krega
        pin:true//ise vo object vhi pin ho jayega during scrolling

    }
})
gsap.from("#page3 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        markers:true,
       start:"top 60%"
    }
})
gsap.from("#page3 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        markers:true,
       start:"top 60%"
    }
})