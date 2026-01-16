// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue"
// })

// gsap. to initial to final jata hai

// gsap.from me final to initial jata hai

gsap.from("#box",{
    x:1000,
    duration:2,
    delay:1,
    // i can also use css property
    rotate:360,
    //bss css me background-color likhte the bss js me dash use nhi hota toh isley neeche jo way diya hai
    // usme likhte hai ,iss way ko camelcase kehte hai
    backgroundColor:"blue",//ye colour final stage pr hota hai or from me final se initial jaate hai isley ye phele blue hoga fer end me red
    borderRadius:"50%",//final stage me 50% meand from wale case me starting me
    scale:0.5,//final stage me 0.5 times size hoga mtlb from me starting me
    repeat:2,//iska mtlb 1 baar repeat hoga toh mtlb 2 baar chalega
    //repeat:-1//isme ye infinite times chalega
    yoyo:true//isme box sirf ek direction me nhi jayega wapis bhi aayega
})



// gsap.from("h1",{
//     color:"red",
//     opacity:0,//toh opacity 0 se 1 jayegi yha 0 final state hai
//     y:20,
//     duration:2,
//     delay:1
// })//ab isme saare ek saath saare h1 ho rhe hai change

//agr hme alg alg krna ho toh
gsap.from("h1",{
    color:"red",
    opacity:0,
    y:20,
    delay:1,
    stagger:1//toh saari line pr animation ek ek krke lgega
    // stagger:-1//agr negative value dungi toh phele sbse last wala aayega fer usse phele fer usse phele wala
})


// gsap.to("#box1",{
//     x:1500,
//     rotate:360,
//     duration:2,
//     delay:1

// })
// gsap.to("#box2",{
//     x:1500,
//     backgroundColor:"yellow",
//     duration:2,
//     delay:3//toh iska mtlb jb box1 ka animation pura ho jayega tb box2 ka shuru hoga
// })
// gsap.to("#box3",{
//     x:1500,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:5//iska mtlb jb box 2 ka animation complete ho jayega tb box3 chalega
//     //pr aese hme baar baar calculate krna pad rha hai
//     //yha hum introduce krte hai timeline
// })

//timeline
var tl =gsap.timeline()
//ab ye saare boxes apne aap ek ke baad ek chalenge
tl.to("#box1",{
    x:1500,
    duration:2,
    rotate:360,
    delay:1
})
tl.to("#box2",{
    x:1500,
    backgroundColor:"yellow",
    duration:1.5
})
tl.to("#box3",{
    x:1500,
    scale:0.5,
    borderRadius:"50%",
    duration:1.5,
})

var pm = gsap.timeline()

pm.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})
pm.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.5
})
pm.from("#name",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2
})