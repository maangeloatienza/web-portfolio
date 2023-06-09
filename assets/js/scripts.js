(function(){
  // bootcampAccordion();
  scrollAnimation();
})();

function scrollAnimation() {
    // scroll animation

    const observer = new IntersectionObserver((entries)=> {
      entries.forEach((entry)=> {
        console.log(entry.isIntersecting)
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
  let feDescriptionFlag = true;
  let feCurriculumFlag = false;
  let beDescriptionFlag = true;
  let beCurriculumFlag = false;

  let descriptionTabFE = document.getElementById("frontend-description-tab").addEventListener("click",function(){
    feDescriptionFlag = !feDescriptionFlag;
    descriptionItemsFE.classList.add("animate-transition");
    descriptionItemsFE.style.display = feDescriptionFlag?"block":"none";
  });
  let curriculumTabFE = document.getElementById("frontend-curriculum-tab").addEventListener("click",function(){
    feCurriculumFlag = !feCurriculumFlag;
    curriculumItemsFE.classList.add("animate-transition");
    curriculumItemsFE.style.display = feCurriculumFlag?"block":"none";
  });
  let descriptionTabBE = document.getElementById("backend-description-tab").addEventListener("click",function(){
    beDescriptionFlag = !beDescriptionFlag;
    descriptionItemsBE.classList.add("animate-transition");
    descriptionItemsBE.style.display = beDescriptionFlag?"block":"none"
  });
  let curriculumTabBE = document.getElementById("backend-curriculum-tab").addEventListener("click",function(){
    beCurriculumFlag = !beCurriculumFlag;
    curriculumItemsBE.classList.add("animate-transition");
    curriculumItemsBE.style.display = beCurriculumFlag?"block":"none"
  });


  let descriptionItemsFE = document.getElementById("frontend-description-items");
  let curriculumItemsFE = document.getElementById("frontend-curriculum-items");


  let descriptionItemsBE = document.getElementById("backend-description-items");
  let curriculumItemsBE = document.getElementById("backend-curriculum-items");

}