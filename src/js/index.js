import '../css/style.scss';

class AnderSlider {
  constructor(elementClass) {
    this.elementClass = elementClass;
    return this.initControls() 
  };
  // Methods
  initControls() {  
    let controls = document.querySelectorAll(".controls div");
    // set EventListener
    controls.forEach(controlItem => {
      controlItem.addEventListener('click', function () {
        console.log(controlItem.dataset.control);
      });
    });
  };
};
const slider1 = new AnderSlider('.slider-1');
