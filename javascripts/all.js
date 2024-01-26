const tooggleMenuBtn = document.querySelector('#toggle-btn');
    const body = document.querySelector('body');
    tooggleMenuBtn.addEventListener('click',(evt)=>{
      evt.preventDefault();
      body.classList.toggle('sidebar-toggled');    
    });
