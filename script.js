//  TESTIMONIAL
const userContainer=document.querySelector('.tes_content-left')
const testimonialContent=document.querySelectorAll('.tes_review');
userContainer.addEventListener('click',(e)=>{
    if(e.target.closest('.tes_user')){
        const target=e.target.closest('.tes_user');
        
        testimonialContent.forEach(t=>t.classList.add('hide'));

       const tesContent= Array.from(testimonialContent).find(t=>t.classList.contains(`tes_review-${target.dataset.user}`)).classList.remove('hide')
       document.querySelectorAll('.tes_user').forEach(user=>user.classList.remove('active'))
       target.classList.add('active')

    }
})
//  END OF TESTIMONIAL

// toggle close
const closeBtn=document.querySelector('.toggle_nav i');
const menuBtn=document.querySelector('.menu');
const toggleNav=document.querySelector(".toggle_nav");

menuBtn.addEventListener('click',()=>{
    toggleNav.classList.add('active')
})

closeBtn.addEventListener('click',()=>{
    toggleNav.classList.remove('active')
})