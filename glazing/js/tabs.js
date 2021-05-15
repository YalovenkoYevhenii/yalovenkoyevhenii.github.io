const tabs = (headerSelector, tabSelector, tabContent, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(tabContent);
    
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        })
        tab.forEach(item => {
            item.classList.remove(activeClass);
        })
    }
    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();

    header.addEventListener('click', e => {
         if (e.target && (e.target.classList.contains(tabSelector.replace(/\./,'')) ||
         e.target.parentNode.classList.contains(tabSelector.replace(/\./,'')))) {
             tab.forEach((item, i) => {
                 if (e.target == item || e.target.parentNode == item) {
                     hideTabContent();
                     showTabContent(i);
                 }
             })

         }
    })

}

export default tabs;


