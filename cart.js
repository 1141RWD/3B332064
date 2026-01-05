/* ===== 漢堡選單 ===== */
const menu=document.getElementById("menu");
document.getElementById("hamburger").onclick=()=>menu.classList.add("active");
document.getElementById("closeMenu").onclick=()=>menu.classList.remove("active");

/* ===== 購物車 ===== */
const cartBox=document.getElementById("cartItems");
let cart=JSON.parse(localStorage.getItem("cart"))||[];

function renderCart(){
  cartBox.innerHTML="";
  let total=0;

  cart.forEach((item,index)=>{
    total+=item.price;

    cartBox.innerHTML+=`
      <div class="cart-item">
        <img src="${item.img}">
        <div class="cart-info">
          <p>${item.name}</p>
          <p>NT$ ${item.price}</p>
        </div>
        <span class="remove" data-index="${index}">✕</span>
      </div>
    `;
  });

  document.getElementById("total").innerText=total;

  document.querySelectorAll(".remove").forEach(btn=>{
    btn.onclick=()=>{
      cart.splice(btn.dataset.index,1);
      localStorage.setItem("cart",JSON.stringify(cart));
      renderCart();
    };
  });
}

renderCart();

/* ===== 送出訂單（假流程）===== */
document.getElementById("submitOrder").onclick=()=>{
  if(!cart.length){
    alert("購物車是空的");
    return;
  }

  document.getElementById("successModal").style.display="flex";
  localStorage.removeItem("cart");
};

document.getElementById("cancelOrder").onclick=()=>{
  location.reload();
};

document.getElementById("backHome").onclick=()=>{
  location.href="index.html";
};

/*const menu=document.getElementById("menu");
document.getElementById("hamburger").onclick=()=>menu.classList.add("active");
document.getElementById("closeMenu").onclick=()=>menu.classList.remove("active");

const cartBox=document.getElementById("cartItems");
let cart=JSON.parse(localStorage.getItem("cart"))||[];

function renderCart(){
  cartBox.innerHTML="";
  let total=0;

  cart.forEach((item,i)=>{
    total+=item.price;
    cartBox.innerHTML+=`
      <div class="cart-item">
        <img src="${item.img}">
        <div>
          <p>${item.name}</p>
          <p>$${item.price}</p>
        </div>
        <span class="remove" data-i="${i}">✕</span>
      </div>`;
  });

  document.getElementById("total").innerText=total;

  document.querySelectorAll(".remove").forEach(btn=>{
    btn.onclick=()=>{
      cart.splice(btn.dataset.i,1);
      localStorage.setItem("cart",JSON.stringify(cart));
      renderCart();
    };
  });
}

renderCart();
const menu = document.getElementById("menu");
document.getElementById("hamburger").onclick = ()=>menu.classList.add("active");
document.getElementById("closeMenu").onclick = ()=>menu.classList.remove("active");

/* 計算總金額 
function calculateTotal(){
  let total = 0;
  document.querySelectorAll(".cart-page .cart-item")
    .forEach(item => total += Number(item.dataset.price));
  document.getElementById("total").innerText = total;
}

/* 刪除商品 
document.querySelectorAll(".cart-page .remove").forEach(btn=>{
  btn.onclick = ()=>{
    btn.parentElement.remove();
    calculateTotal();
  };
});

/* 表單送出（方案 2）
document.getElementById("submitOrder").onclick = ()=>{
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  if(!name || !phone || !email){
    alert("請填寫必填欄位");
    return;
  }
  document.getElementById("successModal").style.display="flex";
};

document.getElementById("backHome").onclick = ()=>{
  location.href="index.html";
};

document.getElementById("cancelOrder").onclick = ()=>{
  location.reload();
};

calculateTotal();*/
