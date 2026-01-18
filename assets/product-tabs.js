if(!customElements.get('product-tabs')) {
  customElements.define(
    'product-tabs',
    class ProductTabs extends HTMLElement {
      constructor() {
        super();
        this.tabs = this.querySelectorAll('[data-tab-target]');
        this.contents = this.querySelectorAll('[data-tab-content]');
    
        this.init();
        this.setHeight();
      }
    
      setHeight() {
        const targetElement = Array.from(this.contents).filter(item => item.classList.contains('active'))[0];
        return targetElement.parentElement.style.height = `${targetElement.offsetHeight}px`;
      }
    
      init() {
        this.tabs.forEach(tab => {
          tab.addEventListener('click', (event) => {
            event.preventDefault();
            if(tab.classList.contains('active')) return;
            const target = tab.getAttribute("data-tab-target");
    
            this.resetTabs(this.tabs);
            this.resetTabs(this.contents);
    
            tab.classList.add('active');
            this.querySelector(target).classList.add('active');
            this.querySelector(target).parentElement.style.height = `${this.querySelector(target).offsetHeight}px`;
          });
        });
      }
    
      resetTabs(items) {
        return items.forEach(item => item.classList.remove('active'));
      }
    }
  )
}