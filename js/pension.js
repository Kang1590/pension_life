$(document).ready(function () {
  // 상단메뉴
  $("#choice button").click(function () {
    let i = $(this).parent().index();
    // console.log(i);
    // 해당목록 보이기
    $(".list").eq(i).fadeIn(1500).siblings().hide();
    // 해당메뉴 활성화
    $("#choice button").removeClass("active");
    $(this).addClass("active");
  });
  // 오른쪽 배너이미지가 스크롤할 때 따라다닌다
  $(window).scroll(function () {
    // 현재의 스크롤 상단위치
    const st = $(window).scrollTop();
    // console.log(st);
    // 원래 높이가 top:200이고 스크롤을 300내리면 top:500으로 배너의 위치가 바뀐다
    $("#quick")
      .stop()
      .animate({ top: 200 + st }, 500);
  });
  // 이미지에 마우스를 갖다대면 fadeIn으로 alt속성이 span으로 들어오면서 보여진다
  /* $(".list a").mouseenter(function () {
    // alt값을 가져온다
    const alt = $(this).children("img").attr("alt");
    console.log(alt);
    $(this).parent().find("h4 span").text(alt);
  });*/
  // 클릭이나 마우스이벤트 없이 모든 이미지의 alt값을 가져와서 span에 넣는다
  $(".list li").each(function () {
    const x1 = $(this);
    const x2 = x1.find("img").attr("alt"); //get
    x1.find("h4 span,h5").text(x2);
    // 가격을 가져온다
    const x3 = x1.find("p b").text(); //get
    x1.find("div b").text(x3); //set
  });
}); //끝
