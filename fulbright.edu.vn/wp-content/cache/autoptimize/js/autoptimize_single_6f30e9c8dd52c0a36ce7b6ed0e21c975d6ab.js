(function($){$(document).ready(function(){$(".faq__item-header").click(function(){const parentItem=$(this).parent(".faq__item");const content=$(this).parent().find(".faq__item-content");const otherItems=$(".faq__item").not(parentItem);const otherContents=$(".faq__item-content").not(content);const headingColor=$(this).find("h3");otherContents.slideUp();otherItems.removeClass("active");parentItem.toggleClass("active");$(this).siblings(".faq__item-content").slideToggle();if($(this).siblings(".faq__item-content").is(":visible")){$(headingColor).css("color","#8A8A8A");$(this).css("margin-bottom","0px");}else{$(headingColor).css("color","#00196E");$(this).css("margin-bottom","16px");}});});$(".campus__seemore").click(function(){const iframe=$(this).data("iframe");$(".campus__google-map").html(iframe);});})(jQuery);