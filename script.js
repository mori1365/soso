let menu = document.getElementById("menu");
let navbar = document.querySelector(".navbar");
let closer = document.querySelector(".close");
menu.onclick = () =>{
    menu.style.display = "none";
    closer.style.display = "block";
    navbar.style.top = "10%";
}
closer.onclick = () =>{
    menu.style.display = "block";
    closer.style.display = "none";
    navbar.style.top = "-100%";
}
window.onscroll = () =>{
    menu.style.display = "block";
    closer.style.display = "none";
    navbar.style.top = "-100%";
}


 // نمایش کلمات به ترتیب
 var texts = ["کاپشن","دستکش","کیف اداری","کیف مجلسی","جاکارتی","کیف جیبی","کفش","صندل","کالج","کیف پاسپورتی","جاکلیدی","کیف کمری","کیف دوشی","ست"];
    var currentIndex = 0;

    function changeText() {
      document.getElementById("displayText").innerHTML = texts[currentIndex];
      currentIndex = (currentIndex + 1) % texts.length;
      setTimeout(changeText, 2000); // تاخیر ۲ ثانیه‌ای بین تغییرات
    }

    document.addEventListener("DOMContentLoaded", function() {
      changeText();
    });

    // کد JavaScript
    var cartItems = {};
    var cartTotal = 0;
    
    function addToCart(productId) {
      if (cartItems[productId]) {
        cartItems[productId]++;
      } else {
        cartItems[productId] = 1;
      }
      
      if (productId === 1) {
        cartTotal += 10;
      } else if (productId === 2) {
        cartTotal += 20;
      } else if (productId === 3) {
        cartTotal += 30;
      }
    }
    
    function showCart() {
      var cartItemsElement = document.getElementById('cart-items');
      cartItemsElement.innerHTML = '';

      for (var productId in cartItems) {
        if (cartItems.hasOwnProperty(productId)) {
          var quantity = cartItems[productId];
          var listItem = document.createElement('li');
          listItem.textContent = 'محصول ' + productId + ' (تعداد: ' + quantity + ')';
          cartItemsElement.appendChild(listItem);
        }
      }
      
      var cartTotalElement = document.getElementById('cart-total');
      cartTotalElement.textContent = 'مجموع: $' + cartTotal;

      var cartContainer = document.getElementById('cart-container');
      cartContainer.style.display = 'block';
    }
    
    function hideCart() {
      var cartContainer = document.getElementById('cart-container');
      cartContainer.style.display = 'none';
    }



    function openLightbox(image) {
      var lightbox = document.getElementById('lightbox');
      var lightboxImage = document.getElementById('lightbox-image');
      
      lightboxImage.src = image.src;
      lightbox.style.display = 'flex';
    }
    
    function closeLightbox() {
      var lightbox = document.getElementById('lightbox');
      lightbox.style.display = 'none';
    }