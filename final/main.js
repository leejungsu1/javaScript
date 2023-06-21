let products = [];
let searchProducts = [];
let search = $(".search");
let row = $(".row");
let url = "../final/data/store.json";

jsonData(url);
$(".list").text("여기로 드래그");

search.keyup(function (e) {
  let str = search.val().replaceAll(" ", "");
  let strList = [...new Set(str.split(""))];
  //   console.log("list : ", strList);
  products.forEach((d) => {
    strList.forEach((s) => {
      //   console.log("s :", s);
      //   console.log("blooen :", d.title.includes(s));
      if (d.title.includes(s) || d.brand.includes(s)) {
        highlight(d, s);
        searchProducts.push(d);
        // console.log("push : ", searchProducts);
      }
      return searchProducts;
    });
    // console.log("products : ", products);
    searchProducts = [...new Set(searchProducts)];
    // return searchProducts;
  });
  //   console.log("search : ", searchProducts);
  row.empty();

  if ((e.keyCode == 8 && str == "") || str == "") {
    // console.log("빈값이다. : ", str);
    // console.log("product. : ", products);
    return jsonData(url);
  }
  if (searchProducts.length == 0) {
    row.removeClass("row-cols-1 row-cols-md-4 g-4");
    var list = `<div class="searchNone">검색된 상품이 없습니다</div>`;
    row.append(list);
  } else {
    row.addClass("row-cols-1 row-cols-md-4 g-4");
    product(searchProducts);

    searchProducts = [];
  }
});

// row.click(function (e) {

// });
let idx = $(document).on("click", ".col", function (e) {
  var index = $(this).index();
  return index;
});
// $(document).on("mousedown", ".col", function (e) {
//   let click = true;
//   let startX = e.clientX;
//   let startY = e.clientY;
//   console.log("start : ", startX, startY);
//   let index = $(this).index();
//   console.log("target : ", e.target);
//   console.log("index : ", index);
//   $(".col").mousemove(function (e) {
//     if (click) {
//       let endX = e.clientX;
//       let endY = e.clientY;
//       let lengthX = endX - startX;
//       let lengthY = endY - startY;
//       console.log("end : ", endX, endY);
//       console.log("length : ", lengthX, lengthY);
//       console.log("col :", $(".col").eq(index));
//       $(".col")
//         .eq(index)
//         .css("transform", `translate(${lengthX}px,${lengthY}px`);
//       $(".col").mouseup(function (e) {
//         console.log("up click: ", click);
//         console.log("up lengthY: ", lengthY);
//         if (lengthY >= 150 && click) {
//           $(".list").text("");
//           let productBox = $(".col").eq(index).clone();
//           $(".drag").addClass("style");
//           console.log("clone : ", productBox);
//           $(".list").addClass("col-sm-4");
//           $(".list").append(productBox);
//           $(".col").eq(index).css("transform", "translate(0,0");
//         } else if (click && 0 < lengthY < 150) {
//           $(".drag").text("여기로 드래그");
//           $(".drag").removeClass("style");
//           $(".col").eq(index).css("transform", "translate(0,0");
//         }
//         if (!click) {
//           return;
//         }
//         click = false;
//       });
//     }
//   });
// });

$(function (e) {
  $(".col").draggable({
    opacity: ".3",
    containment: ".main",
    stack: ".row div",
    helper: function () {
      return $(this).clone();
    },
    revert: true,
  });
  $(".list").droppable({
    accept: ".row div",
    drop: function (event, ui) {
      $(this).append(ui.draggable.clone());
    },
  });
});

function jsonData(url) {
  products = [];
  $.get(url).done(function (data) {
    // console.log("data :", data.products);
    data = data.products;
    product(data);
    data.forEach((d) => {
      products.push(d);
    });
  });
}
function highlight(data, str) {
  let find = str;
  let regex = new RegExp(find, "g");
  //   console.log("ㄴㄴㄴ : ", data.title.includes(str));
  if (data.title.includes(str))
    data.title = data.title.replace(
      regex,
      `<span class = "highlight">${find}</span>`,
    );
  if (data.brand.includes(str))
    data.brand = data.brand.replace(
      regex,
      `<span class = "highlight">${find}</span>`,
    );
  //   console.log("dddd : ", data);
}
function product(data) {
  data.forEach((d) => {
    var list = `
    <div class="col">
        <div class="card">
            <img src=../final/img/${d.photo} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${d.title}</h5>
                <h6 class="brand">${d.brand}</h6>
                <p class="card-text">가격 : ${d.price}</p>
                <button class ="addBtn">담기</button>
            </div>
        </div>
    </div>`;
    row.append(list).draggable({
      containment: ".main",
      stack: ".row div",
      cursor: "move",
      revert: true,
    });
  });
}
