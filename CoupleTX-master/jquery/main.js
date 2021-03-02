// Jquery for responsive Header
$(document).ready(function () {
    $("#newback").click(function(){
        $("#newitemback").slideToggle("slow");
    });

    $("#men").click(function(){
        $("#men-item").slideToggle("slow");
    });
});

// Jquery của Footer
$(document).ready(function(){
    $("#company-text").click(function(){
        $("#content1").slideToggle();
        $("#company-text").toggleClass("change1");
    })
    $("#policy-text").click(function(){
        $("#content2").slideToggle();
        $("#policy-text").toggleClass("change2");
    })
    $("#contact-text").click(function(){
        $("#content3").slideToggle();
        $("#contact-text").toggleClass("change3");
    })
    $("#info-text").click(function(){
        $("#content4").slideToggle();
        $("#info-text").toggleClass("change4");
    })
})

// Jquery for cart in nav
$(document).ready(function(){
    $("#cart-panel-close").click(function(){
        $("#cart-panel").animate({right: '-90%'}, "8000ms");
        $("#over-layer").fadeOut();
        $("#cart-panel").fadeOut();
        $("body").removeClass("no-scroll");
    })
    $("#over-layer").click(function(){
        $("#cart-panel").animate({right: '-90%'}, "8000ms");
        $("#over-layer").fadeOut();
        $("#cart-panel").fadeOut();
        $("body").removeClass("no-scroll");
    })
    $("#continue-shopping").click(function(){
        $("#cart-panel").animate({right: '-90%'}, "8000ms");
        $("#over-layer").fadeOut();
        $("#cart-panel").fadeOut();
        $("body").removeClass("no-scroll");
    })
    $("#cart-panel-open").click(function(){
        $("#cart-panel").fadeIn("0ms");
        $("#cart-panel").animate({right: '0%'}, "8000ms");
        $("#over-layer").fadeIn();
        $("body").addClass("no-scroll");
    })
    $("body").delegate(".add-to-cart", "click", function(){
      var equal = 0;
      var titleItem = $(this).siblings(".itemTitle").text();
      var hiddenPrice = Number($(this).siblings(".product-price-hidden").text());
      var count = Number($("#cart-panel-open div").text());
      count += 1;
      $("#no-item").fadeOut();
      $("#continue-shopping").fadeOut();
      $("#cart-panel-open div").text(count);
      $("#cart-panel .cart-panel-body").css("justify-content","flex-start");
      $("#cart-item-list").fadeIn();

      $(".item-title").each(function(){
          if($(this).text() == titleItem) {
            $(this).siblings(".item-price").find("input").val(Number($(this).siblings(".item-price").find("input").val()) + 1);
            $(this).siblings(".item-price").find(".number-down").css("opacity", "1");
            $("#total-price-hidden").text(Number($("#total-price-hidden").text()) + hiddenPrice);
            $("#price").text(parseInt(Number($("#total-price-hidden").text())).toLocaleString());
            equal = 1;
          }
      })
      if(equal == 0) {
        var htmlAdder = '<div class="cart-item"><img src="';
        htmlAdder += $(this).siblings("img").attr("src") + '" >';
        htmlAdder += '<div class="item-detail"><span class="item-title">';
        htmlAdder += $(this).siblings(".itemTitle").text() + '</span>';
        htmlAdder += '<div class="item-price"><div class="item-number"><input type="text" readonly class="count-number" value="1"><img src="images/icon/caret-up-solid.svg" alt="" class="number-up"><img src="images/icon/caret-down-solid.svg" alt="" class="number-down"></div> x ';
        htmlAdder += $(this).siblings("span").text() + '<div class="cart-item-price-hidden">';
        htmlAdder += $(this).siblings(".product-price-hidden").text() + '</div></div><div class="product-size"><span class="selected-size size">S</span><span class="size">M</span><span class="size">L</span><span class="size">XL</span><span class="size">XXL</span></div></div><div class="delete-item"><img src="images/icon/trash-alt-regular.svg" alt=""></div></div>';
        $("#cart-item-list").append(htmlAdder);
        $("#total-price-hidden").text(Number($("#total-price-hidden").text()) + hiddenPrice);
        $("#price").text(parseInt(Number($("#total-price-hidden").text())).toLocaleString());
        $(".payment").css("display", "block");
      }
    })
  $("body").delegate(".delete-item", "click", function(){
        var hiddenPrice = Number($(this).parent().find(".cart-item-price-hidden").text());
        var countCart = Number($("#cart-panel-open div").text());
        var countItem = Number($($(this).siblings(".item-detail")).find("input").val());
        countCart -= countItem;
        $("#cart-panel-open div").text(countCart);
        $(this).parent().remove();
        $("#total-price-hidden").text(Number($("#total-price-hidden").text()) - hiddenPrice*countItem);
        $("#price").text(parseInt(Number($("#total-price-hidden").text())).toLocaleString());
        if(countCart == 0)
        {
          $("#cart-panel .cart-panel-body").css("justify-content","center");
          $("#cart-item-list").css("display", "none");
          $(".payment").css("display", "none");
          $("#no-item").fadeIn();
          $("#continue-shopping").fadeIn();
        }
  })
  $("body").delegate(".number-up", "click", function(){
        var hiddenPrice = Number($($(this).parent()).parent().find(".cart-item-price-hidden").text());
        var count = Number($(this).siblings("input").val());
        count += 1;
        $(this).siblings("input").val(count);
        $("#total-price-hidden").text(Number($("#total-price-hidden").text()) + hiddenPrice);
        $("#price").text(parseInt(Number($("#total-price-hidden").text())).toLocaleString());
        $("#cart-panel-open div").text(Number($("#cart-panel-open div").text()) + 1);
        if(count > 1)
          $(this).siblings(".number-down").css("opacity", "1");
  })
  $("body").delegate(".number-down", "click", function(){
        var hiddenPrice = Number($($(this).parent()).parent().find(".cart-item-price-hidden").text());
        var count = Number($(this).siblings("input").val());
        if(count > 1) {
          count -= 1;
          $(this).siblings("input").val(count);
        $("#total-price-hidden").text(Number($("#total-price-hidden").text()) - hiddenPrice);
        $("#price").text(parseInt(Number($("#total-price-hidden").text())).toLocaleString());
          $("#cart-panel-open div").text(Number($("#cart-panel-open div").text()) - 1);
          if(count == 1)
            $(this).css("opacity", "0.5");
        }
  })
  
  $("body").delegate(".size", "click", function(){
    $(this).addClass("selected-size");
    $(this).siblings(".size").removeClass("selected-size");
  })
})

// Jquery for divMenu & divFavour
$(document).ready(function() {
    $(".divMenu .divItem img").hover(
        function(){
            $(this).attr("src", function(i, oldValue){
                oldValue = oldValue.slice(7);
                return "images/hover_" + oldValue;
            });
        }, 
        function(){
            $(this).attr("src", function(i, oldValue){
                oldValue = oldValue.slice(13);
                return "images/" + oldValue;
            });
        }
    )
    $(".moreInfo").click(function(){
        alert("ok");
        $(".moreInfo .tooltip").fadeToggle();
    })
})

// Jquery for detail page
$(document).ready(function(){
    $(".divMain .divImg .img").click(
        function(){
            $("#scaleImg").fadeIn(400);
            $("#scaleImg").siblings("img").fadeOut(0);
            $("#scaleImg").attr("src", $(this).attr("src"));
        }
    )
    $("#scaleImg").mouseleave(function(){
        $("#scaleImg").fadeOut(400);
        $("#scaleImg").siblings("img").fadeIn(0);
        $("#scaleImg").attr("src", "");
    })
    .click(function(){
        $("#scaleImg").fadeOut(400);
        $("#scaleImg").siblings("img").fadeIn(0);
        $("#scaleImg").attr("src", "");
    })
    $("#up-btn").click(function(){
        $("#numberProduct").val(Number($("#numberProduct").val()) + 1);
        if($("#numberProduct").val() > 1) {
            $("#down-btn").css("opacity", "1");
        }
    })
    $("#down-btn").click(function(){
        if($("#numberProduct").val() > 1) {
            $("#numberProduct").val(Number($("#numberProduct").val()) - 1);
        }
        if($("#numberProduct").val() == 1) {
            $(this).css("opacity", "0.5");
        }
    })
    $(".size").click(function(){
      $(this).addClass("selectedSize");
      $(this).siblings(".size").removeClass("selectedSize");
    })
    $("body").delegate("#addIntoCart", "click", function(){
        var equal = 0;
        var titleItem = $(".divDetailProduct .divTitle").text();
        var hiddenPrice = Number($(".divDetailProduct .hidden-detail-price").text());
        var count = Number($("#cart-panel-open div").text());
        count += Number($("#numberProduct").val());
        $("#no-item").fadeOut();
        $("#continue-shopping").fadeOut();
        $("#cart-panel-open div").text(count);
        $("#cart-panel .cart-panel-body").css("justify-content","flex-start");
        $("#cart-item-list").fadeIn();
    
        $(".item-title").each(function(){
            if($(this).text() == titleItem) {
              $(this).siblings(".item-price").find("input").val(Number($(this).siblings(".item-price").find("input").val()) + Number($("#numberProduct").val()));
              $(this).siblings(".item-price").find(".number-down").css("opacity", "1");
              $("#total-price-hidden").text(Number($("#total-price-hidden").text()) + (hiddenPrice * Number($("#numberProduct").val())));
              $("#price").text(parseInt(Number($("#total-price-hidden").text())).toLocaleString());
              equal = 1;
            }
        })
        if(equal == 0) {
          var htmlAdder = '<div class="cart-item"><img src="';
          htmlAdder += $("#scaleImg").attr("src") + '" >';
          htmlAdder += '<div class="item-detail"><span class="item-title">';
          htmlAdder += titleItem + '</span>';
          htmlAdder += '<div class="item-price"><div class="item-number"><input type="text" readonly class="count-number" value="' + Number($("#numberProduct").val()) + '"><img src="images/icon/caret-up-solid.svg" alt="" class="number-up"><img src="images/icon/caret-down-solid.svg" alt="" class="number-down"></div> x ';
          htmlAdder += (hiddenPrice * Number($("#numberProduct").val())).toLocaleString() + '<div class="cart-item-price-hidden">';
          htmlAdder += hiddenPrice + '</div></div><div class="product-size"><span class="selected-size size">S</span><span class="size">M</span><span class="size">L</span><span class="size">XL</span><span class="size">XXL</span></div></div><div class="delete-item"><img src="images/icon/trash-alt-regular.svg" alt=""></div></div>';
          $("#cart-item-list").append(htmlAdder);
          $("#total-price-hidden").text(Number($("#total-price-hidden").text()) + hiddenPrice);
          $("#price").text(parseInt(Number($("#total-price-hidden").text())).toLocaleString());
          $(".payment").css("display", "block");
        }
        $("#cart-panel").fadeIn("0ms");
        $("#cart-panel").animate({right: '0%'}, "8000ms");
        $("#over-layer").fadeIn();
        $("body").addClass("no-scroll");
      })
})


// Jquery for List page
$(document).ready(function(){
            $("#toggle-text").click(function(){
                var text = $("#filter-box").css("display");
                if (text === "none"){
                    $("#filter-box").fadeIn();
                    $("#toggle-text span").text("Ẩn bộ lọc");
                } else {
                    $("#filter-box").fadeOut();
                    $("#toggle-text span").text("Hiện bộ lọc");
                }
            })
            $(window).resize(function(){
                $("#filter-box").fadeOut();
                $("#toggle-text span").text("Hiện bộ lọc");
            })
            $("#color").click(function(){
                if ($("#color-checkbox").css("display") == "none"){
                    $(this).css({"font-weight":"bold", "color":"black"});
                    $("#color-checkbox").slideDown();
                    $(this).siblings("i.fa-chevron-down").fadeOut(0);
                    $(this).siblings("i.fa-chevron-up").fadeIn(0);
                } else {
                    $(this).css({"font-weight":"normal", "color":"#4d4944"});
                    $("#color-checkbox").slideUp();
                    $(this).siblings("i.fa-chevron-up").fadeOut(0);
                    $(this).siblings("i.fa-chevron-down").fadeIn(0);
                }
            })
            $("#size").click(function(){
                if ($("#size-checkbox").css("display") == "none"){
                    $(this).css({"font-weight":"bold", "color":"black"});
                    $("#size-checkbox").slideDown();
                    $(this).siblings("i.fa-chevron-down").fadeOut(0);
                    $(this).siblings("i.fa-chevron-up").fadeIn(0);
                } else {
                    $(this).css({"font-weight":"normal", "color":"#4d4944"});
                    $("#size-checkbox").slideUp();
                    $(this).siblings("i.fa-chevron-up").fadeOut(0);
                    $(this).siblings("i.fa-chevron-down").fadeIn(0);
                }
            })
            $("#gender").click(function(){
                if ($("#gender-checkbox").css("display") == "none"){
                    $(this).css({"font-weight":"bold", "color":"black"});
                    $("#gender-checkbox").slideDown();
                    $(this).siblings("i.fa-chevron-down").fadeOut(0);
                    $(this).siblings("i.fa-chevron-up").fadeIn(0);
                } else {
                    $(this).css({"font-weight":"normal", "color":"#4d4944"});
                    $("#gender-checkbox").slideUp();
                    $(this).siblings("i.fa-chevron-up").fadeOut(0);
                    $(this).siblings("i.fa-chevron-down").fadeIn(0);
                }
            })
            $("#product-price").click(function(){
                if ($("#price-checkbox").css("display") == "none"){
                    $(this).css({"font-weight":"bold", "color":"black"});
                    $("#price-checkbox").slideDown();
                    $(this).siblings("i.fa-chevron-down").fadeOut(0);
                    $(this).siblings("i.fa-chevron-up").fadeIn(0);
                } else {
                    $(this).css({"font-weight":"normal", "color":"#4d4944"});
                    $("#price-checkbox").slideUp();
                    $(this).siblings("i.fa-chevron-up").fadeOut(0);
                    $(this).siblings("i.fa-chevron-down").fadeIn(0);
                }
            })
            $("#mobile-arrange").click(function(){
                if ($("#mobile-arrange-radio").css("display") == "none"){
                    $(this).css({"font-weight":"bold", "color":"black"});
                    $("#mobile-arrange-radio").slideDown();
                    $(this).siblings("i.fa-chevron-down").fadeOut(0);
                    $(this).siblings("i.fa-chevron-up").fadeIn(0);
                } else {
                    $(this).css({"font-weight":"normal", "color":"#4d4944"});
                    $("#mobile-arrange-radio").slideUp();
                    $(this).siblings("i.fa-chevron-up").fadeOut(0);
                    $(this).siblings("i.fa-chevron-down").fadeIn(0);
                }
            })
            $(".view-more a").click(function(){
                $("#hidden-item-1").fadeIn();
                $("#hidden-item-2").fadeIn();
                $("#hidden-item-3").fadeIn();
                $(".view-more").fadeOut();
                $("#divMenu1").css("padding-bottom", "0");
            })

            // Mobile filter display
            $("#open-mobile-filter").click(function(){
                $("#filter-box").fadeIn();
                $("#over-filter-layer").fadeIn();
                $("body").addClass("no-scroll");
                
            })
            $("#over-filter-layer").click(function(){
                $("#filter-box").fadeOut();
                $("#over-filter-layer").fadeOut();
                $("body").removeClass("no-scroll");
            })
            $("#filter-panel-close").click(function(){
                $("#filter-box").fadeOut();
                $("#over-filter-layer").fadeOut();
                $("body").removeClass("no-scroll");
            })
        })
//test price
        $(document).ready(function(){
            $('select').on('change', function (e) {
            var optionSelected = $("option:selected", this);
            var valueSelected = this.value;
            if(valueSelected=='4'){
                    $("#divItem_8").css({"order" : "7"});
                    $("#divItem_7").css({"order" : "1"});
                    $("#divItem_6").css({"order" : "8"});
                    $("#divItem_5").css({"order" : "3"});
                    $("#divItem_4").css({"order" : "6"});
                    $("#divItem_3").css({"order" : "4"});
                    $("#divItem_2").css({"order" : "5"});
                    $("#divItem_1").css({"order" : "2"});
            }
            if(valueSelected=='1'){

                    $("#divItem_8").css({"order" : "1"});
                    $("#divItem_7").css({"order" : "5"});
                    $("#divItem_6").css({"order" : "2"});
                    $("#divItem_5").css({"order" : "7"});
                    $("#divItem_4").css({"order" : "6"});
                    $("#divItem_3").css({"order" : "8"});
                    $("#divItem_2").css({"order" : "4"});
                    $("#divItem_1").css({"order" : "3"});
            }
            if(valueSelected=='2'){
                    $("#divItem_8").css({"order" : "1"});
                    $("#divItem_7").css({"order" : "5"});
                    $("#divItem_6").css({"order" : "2"});
                    $("#divItem_5").css({"order" : "7"});
                    $("#divItem_4").css({"order" : "6"});
                    $("#divItem_3").css({"order" : "8"});
                    $("#divItem_2").css({"order" : "4"});
                    $("#divItem_1").css({"order" : "3"});
            }
            if(valueSelected=='3'){
                    $("#divItem_8").css({"order" : "2"});
                    $("#divItem_7").css({"order" : "8"});
                    $("#divItem_6").css({"order" : "1"});
                    $("#divItem_5").css({"order" : "6"});
                    $("#divItem_4").css({"order" : "3"});
                    $("#divItem_3").css({"order" : "5"});
                    $("#divItem_2").css({"order" : "4"});
                    $("#divItem_1").css({"order" : "7"});
            }
            });
        })
        
    // JS của Đặt hàng
    function toggle(){
        var m=document.getElementById("change-text");
        var x=document.getElementById("show-product-info");
        var y=document.getElementById("show-coupon");
        var z=document.getElementById("show-calculate");
        var t=document.getElementById("calculate-footer");
        var text = m.innerHTML;
        
        if (text == "Hiển thị thông tin đơn hàng") {
            x.style.display = "block";
            y.style.display = "block";
            z.style.display = "block";
            t.style.display = "block";
            m.innerHTML = "Ẩn thông tin đơn hàng";

        } else {
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "none";
            t.style.display = "none";
            m.innerHTML = "Hiển thị thông tin đơn hàng";
        }
    }
    // Đóng JS của Đặt hàng