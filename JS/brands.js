import { AdidasData } from "./nikeData.js";
const endpoint = "https://6210bfd64cd3049e1783e6c5.mockapi.io/api/cart";
let productImgList = document.querySelectorAll(
  ".content-right .box .card-image img"
);

let addCartButtonList = document.querySelectorAll(".details-hidden .addcart");
// ============================================ POST Product lên API Cart
async function addProductToCart({
  mainImg,
  brandName,
  name,
  price,
  code,
  quantity,
}) {
  await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({ mainImg, brandName, name, price, code, quantity }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

// let removeProducts = document.querySelectorAll(".product-cancel");
// let cartButton = document.querySelector(".sidebar-cart");

// async function getProducts() {
//   const response = await fetch(endpoint);
//   const data = await response.json();
//   // Cho cái list chứa khoá học rỗng trước
//   document.querySelector(".cart-product").innerHTML = "";
//   if (data.length > 0 && Array.isArray(data) && data.length < 4) {
//     for (let item of data) {
//       let template = `
//                         <div class="product">
//                             <div class="product-image"><img src="${item.srcImg}" alt=""></div>
//                             <div class="product-details">
//                                 <h2>${item.h2Text}</h2>
//                                 <span>${item.priceText}</span>
//                             </div>
//                             <div class="icon-wrapper"><ion-icon name="close-circle" class="product-cancel" data-id="${item.id}"></ion-icon></div>
//                     </div>`;
//       document
//         .querySelector(".cart-product")
//         .insertAdjacentHTML("beforeend", template);
//     }
//   }
// }

// async function deleteProduct(id) {
//   await fetch(`${endpoint}/${id}`, {
//     method: "DELETE",
//   });
// }

// addCarts.forEach((item) =>
//   item.addEventListener("click", async function (event) {
//     const response = await fetch(endpoint);
//     const data = await response.json();
//     if (data.length > 2) {
//       document.querySelector(".alert-fully").classList.add("show");
//       setTimeout(function () {
//         document.querySelector(".alert-fully").classList.remove("show");
//       }, 1000);
//       document.querySelector(".sidebar-cart .count").textContent = 3;
//     } else {
//       document.querySelector(".alert").classList.add("show");
//       setTimeout(function () {
//         document.querySelector(".alert").classList.remove("show");
//       }, 1000);
//       productImgList.forEach((item) => {
//         if (item.dataset.num == event.target.dataset.num) {
//           srcImg = item.getAttribute("src");
//         }
//       });
//       h2.forEach((item) => {
//         if (item.dataset.num == event.target.dataset.num) {
//           h2Text = item.textContent;
//         }
//       });
//       prices.forEach((item) => {
//         if (item.dataset.num == event.target.dataset.num) {
//           priceText = item.textContent;
//         }
//       });

//       const product = { srcImg, h2Text, priceText };
//       await addProduct(product);
//       document.querySelector(".sidebar-cart .count").textContent =
//         data.length + 1;
//     }
//   })
// );

// cartButton.addEventListener("click", async function (event) {
//   await getProducts();
//   document.querySelector(".wrapper").classList.toggle("show");
// });
// backButton.addEventListener("click", function (event) {
//   document.querySelector(".wrapper").classList.toggle("show");
// });

// document.addEventListener("click", async function (event) {
//   if (event.target.matches(".product-cancel")) {
//     const id = +event.target.dataset.id;
//     await deleteProduct(id);
//     await getProducts();
//     const response = await fetch(endpoint);
//     const data = await response.json();
//     document.querySelector(".sidebar-cart .count").textContent = data.length;
//   }
// });

// ==================================================Xử lý cho phần Product Detail
// Xử lý khi nhấn vào ảnh
productImgList.forEach((item) =>
  item.addEventListener("click", function (event) {
    AdidasData.forEach((it) => {
      if (event.target.dataset.num == it.id) {
        let productDetail = `<div class="product-detail"> 
    <div class="product-detail_modal">
      <div class="left-container">
        <div class="main-image">
          <img src=${it.mainImg} alt="" />
        </div>
        <div class="extra-image_container">
          <div class="extra-image">
            <img src=${it.extraImgList[0]} alt="" />
          </div>
          <div class="extra-image">
            <img src=${it.extraImgList[1]} alt="" />
          </div>
          <div class="extra-image">
            <img src=${it.extraImgList[2]} alt="" />
          </div>
        </div>
      </div>

      <div class="right-container">
        <div class="close">
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <h1>${it.name}</h1>
        <h2 class="brand-name">${it.brandName}</h2>
        <span class="price">${it.price}</span>
        <div class="line"></div>
        <h2>Mã sản phẩm:  <span>${it.code}</span></h2>
        <h2>Kích thước: </span>
        <ul class="sizes">
          <li>36</li>
          <li>37</li>
          <li>38</li>
          <li>39</li>
          <li>40</li>
        </ul>
        <h2>Số lượng: </span>
        <div class="quantity">
          <button class="minus">-</button>
          <span>1</span>
          <button class="plus">+</button>
        </div>
        <div class="line"></div>
        <div class="add-to-cart">
          <span>Thêm vào giỏ hàng</span>
        </div>
      </div>
    </div>
  </div> `;

        document.body.insertAdjacentHTML("beforeend", productDetail);

        // 2. Xử lý khi nhấn vào extra image
        let mainImg = document.querySelector(
          ".product-detail .product-detail_modal .left-container .main-image img"
        );
        let extraImgList = document.querySelectorAll(
          ".product-detail .product-detail_modal .left-container .extra-image_container img"
        );
        extraImgList.forEach((item) =>
          item.addEventListener("click", function (event) {
            mainImg.src = event.target.src;
          })
        );

        // 3. Xử lý khi nhấn vào nút close
        let closeButton = document.querySelector(
          ".product-detail .product-detail_modal .right-container .close"
        );

        closeButton.addEventListener("click", function (event) {
          let productDetail = document.querySelector(".product-detail");
          document.body.removeChild(productDetail);
        });

        // 4. Xử lý khi nhấn vào nút tăng giảm số lượng
        let minusButton = document.querySelector("button.minus");
        let plusButton = document.querySelector("button.plus");
        let quantity = +document.querySelector(".quantity span").textContent;
        minusButton.addEventListener("click", function (event) {
          if (quantity > 0) quantity = quantity - 1;
          document.querySelector(".quantity span").textContent = quantity;
        });
        plusButton.addEventListener("click", function (event) {
          quantity = quantity + 1;
          document.querySelector(".quantity span").textContent = quantity;
        });

        // 5. Xử lý khi nhấn vào nút thêm vào giỏ hàng
        let addCartButton = document.querySelector(
          ".product-detail .product-detail_modal .right-container .add-to-cart"
        );
        addCartButton.addEventListener("click", function (event) {
          console.log(quantity);
          let mainImg = it.mainImg;
          let brandName = it.brandName;
          let name = it.name;
          let price = it.price;
          let code = it.code;
          let product = { mainImg, brandName, name, price, code, quantity };
          addProductToCart(product);

          // 6. Thông báo đã thêm thành công
          let alertModal = ` <div class="alert">
        <div class="icon">
          <i class="fas fa-check"></i>
        </div>
        <h2>Đã thêm thành công!</h2>
        <div class="button-wrapper">
          <button class="ok">OK</button>
          <button><i class="fas fa-shopping-cart"></i></button>
        </div>
      </div>`;
          document.body.insertAdjacentHTML("beforeend", alertModal);

          // 7. Xử lý khi nhấn vào vùng khác alert và nhấn vào OK
          let alert = document.querySelector(".alert");
          document.body.addEventListener("click", function (event) {
            if (event.target.matches(".alert .ok")) {
              document.body.removeChild(alert);
            }
          });
        });
      }
    });
  })
);
// Xử lý khi nhấn vào Button "Thêm vào giỏ hàng"
addCartButtonList.forEach((item) =>
  item.addEventListener("click", function (event) {
    AdidasData.forEach((it) => {
      if (event.target.dataset.num == it.id) {
        let quantity = 1;
        let mainImg = it.mainImg;
        let brandName = it.brandName;
        let name = it.name;
        let price = it.price;
        let code = it.code;
        let product = { mainImg, brandName, name, price, code, quantity };
        addProductToCart(product);

        // 6. Thông báo đã thêm thành công
        let alertModal = ` <div class="alert">
      <div class="icon">
        <i class="fas fa-check"></i>
      </div>
      <h2>Đã thêm thành công!</h2>
      <div class="button-wrapper">
        <button class="ok">OK</button>
        <button><i class="fas fa-shopping-cart"></i></button>
      </div>
    </div>`;

        document.body.insertAdjacentHTML("beforeend", alertModal);

        // 7. Xử lý khi nhấn vào vùng khác alert và nhấn vào OK
        let alert = document.querySelector(".alert");
        document.body.addEventListener("click", function (event) {
          if (event.target.matches(".alert .ok")) {
            document.body.removeChild(alert);
          }
        });
      }
    });
  })
);
