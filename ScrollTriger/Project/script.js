gsap.to("#page2 h1",{
    transform:"translateX(-250%)",
    scrollTrigger:{
        trigger:"#page2",//jb pin naam ki property use krte hai toh parent ko trigger krte hai
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})