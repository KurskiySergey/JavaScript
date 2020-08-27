window.addEventListener('load', ()=> {
    
    
    document.querySelector('.products').addEventListener('click', (event) => {
        if (event.target.classList.contains('by-btn')) {
            basket.addToBasket(event.target.id);
        }
        if (event.target.classList.contains('main-btn')) {
            items.fetchGoods();
        }
        if (event.target.classList.contains('del-btn')) {
            basket.removeFromBasket(event.target.id);
        }
        if (event.target.classList.contains('basket_by')) {
            basket.buyItem(event.target.id);
        }
    });
    
    document.querySelector('.btn-cart').addEventListener('click', () => {
            basket.getBasketList();
    })
    
})