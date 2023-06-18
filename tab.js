// $(".tab-button").click(function () {
//   const clickIndex = $(this).index(); //click된 index위치 찾기
//   $(".tab-button")
//     .eq(clickIndex)
//     .on("click", function () {
//       $(".tab-button").removeClass("orange");
//       $(".tab-button").eq(clickIndex).addClass("orange");
//       $(".tab-content").removeClass("show");
//       $(".tab-content").eq(clickIndex).addClass("show");
//     });
// });
// for (let i = 0; i < $(".tab-button").length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       tabOpen(i);
//     });
// }
$(".list").click(function (e) {
  // if ($(e.target).is($(".tab-button").eq(0))) {
  //   tabOpen(0);
  // }
  // if ($(e.target).is($(".tab-button").eq(1))) {
  //   tabOpen(1);
  // }
  // if ($(e.target).is($(".tab-button").eq(2))) {
  //   tabOpen(2);
  // }
  // if ($(e.target).is($(".tab-button").eq(3))) {
  //   tabOpen(3);
  // }
  // console.log($(e.target).data().id);
  tabOpen($(e.target).data().id);
});
function tabOpen(index) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(index).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(index).addClass("show");
}
// $(".tab-button")
//   .eq(2)
//   .on("click", function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-button").eq(2).addClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(2).addClass("show");
//   });
