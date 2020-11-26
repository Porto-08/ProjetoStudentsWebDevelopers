
function openForm() {
	document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
	document.getElementById("myForm").style.display = "none";
  }



// Logica para descer menu scroll
$(document).ready(function()
{
    $(document.getElementsByClassName('toggle')).click(function()
    {
        $('.toggle').toggleClass('active')
    });
});

$(window).on('scroll',function()
{
    if($(window).scrollTop())
    {
        $('nav').addClass('corNav')
    }
    else
    {
        $('nav').removeClass('corNav')
    }
})
  
// logica para Transicao de Conteudos
const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animacao'

function animeScroll(){

    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    console.log(windowTop)
    target.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass);
        }
        console.log(element.offsetTop)
    })

}

animeScroll();

if(target.length){
    window.addEventListener('scroll', function(){
        animeScroll();
    })
}
