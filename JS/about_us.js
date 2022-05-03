window.addEventListener("load", function () {
  // Xử lý khi hover vào ảnh bag
  let bagImg = document.querySelector(
    "section.service .image-wrapper .bag img"
  );
  let cartImg1 = document.querySelector(
    "section.service  .image-wrapper img:nth-child(1)"
  );
  let cartImg2 = document.querySelector(
    "section.service  .image-wrapper img:nth-child(3)"
  );
  bagImg.addEventListener("mouseover", function () {
    cartImg1.style.transform = "translateX(2rem)";
    cartImg2.style.transform = "translateX(-2rem)";
  });

  bagImg.addEventListener("mouseout", function () {
    cartImg1.style.transform = "translateX(-2rem)";
    cartImg2.style.transform = "translateX(2rem)";
  });
});
$(".count").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");
  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },
    {
      duration: 5000,
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum + "+");
      },
    }
  );
});

// $(document).ready(function() {
//     $('.slider').slick({
//         infinite: true,
//         // Số slide hiển thị
//         slidesToShow: 1,
//         // Số slide khi scroll
//         slidesToScroll: 1,
//         // Tự động dịch chuyển
//         autoplay: true,
//         dots: true,
//         // Tự động dịch sau n giây
//         // autoplaySpeed: 2000,
//         // Làm mất 2 cái prev và next
//         // arrows: false,
//         prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-caret-square-left'></i></button>",
//         nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-caret-square-right'></i></button>"
//     });
// });
