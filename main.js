   const buyBtns = document.querySelectorAll('.js-buy-ticket');
    const closeBtns = document.querySelectorAll('.modal-close')    
        function showBuyTickets () {
            // body... 
           document.querySelector('.modal').classList.add('open');
        }
        function removeBuyTickets () {
            // body... 
             document.querySelector('.modal').classList.remove('open');
        }

        for (const buyBtn of buyBtns) {
            // statement
            buyBtn.addEventListener('click', showBuyTickets)
            
        }
        for (const closeBtn of closeBtns) {
            // statement
            closeBtn.addEventListener('click', removeBuyTickets)
            
        }
         document.querySelector('.modal-container').addEventListener('click', function(event){
            return event.stopPropagation();
         })
       document.querySelector('.modal').addEventListener('click', removeBuyTickets)