(function(){
  bootcampAccordion();
  scrollAnimation();
})();

function scrollAnimation() {
    // scroll animation

    const observer = new IntersectionObserver((entries)=> {
      entries.forEach((entry)=> {
        
        if(entry.isIntersecting) {
          entry.target.classList.add('show')
          entry.target.classList.remove('hidden')
        } else {
          entry.target.classList.remove('show')
          entry.target.classList.add('hidden')
        }
      })
    })
    
  
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el)=> observer.observe(el))
  
  
}


function bootcampAccordion(){
  const cardTabsBtn = document.querySelectorAll(".card__tabs--button")

  function toggleTab({target,isOpen}){
    if(isOpen === 'true'){
      target.classList.remove('hidden')
      target.classList.add('show')
    } else {
      target.classList.remove('show')
      target.classList.add('hidden')
    }
  }

  cardTabsBtn.forEach(item=>{
    let targetId = item.dataset.targetId
    let currentItem = document.getElementById(targetId)
    
    item.addEventListener('click',()=>{
      currentItem.dataset.openTab = currentItem.dataset.openTab === 'true'? 'false' : 'true'

      toggleTab({
        target: currentItem,
        isOpen: currentItem.dataset.openTab
      })

    })
  })

}