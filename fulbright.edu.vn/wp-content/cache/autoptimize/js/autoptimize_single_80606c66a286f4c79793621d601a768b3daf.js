(function($){$('.tab_content--link').click(function(){let id=$(this).attr('data-index');$('.tab_content--box').removeClass('active');$('.tab_content--link').removeClass('active');$('.tab_content').find(`[data-index='${id}']`).toggleClass('active');});$('.tab_content--box .close').click(function(){$('.tab_content--box').removeClass('active');$('.tab_content--link').removeClass('active');});$('.tab-link').click(function(){$('.tab_content--box').removeClass('active');$('.tab_content--link').removeClass('active');});$('.faq__header').click(function(){var content=$(this).siblings('.faq__content');if(!content.hasClass('active')){$('.faq__item').removeClass('active');$('.faq__content').removeClass('active').animate({height:0},300);}
$(this).parent().toggleClass('active');if(content.hasClass('active')){content.removeClass('active').animate({height:0},300);}else{content.addClass('active').animate({height:content[0].scrollHeight},300);}});$('.faq__close').click(function(){$(this).parent().parent().removeClass('active');var content=$(this).parent().parent().find('.faq__header').siblings('.faq__content');console.log(content);content.removeClass('active').animate({height:0},300);});if($(window).width()>576){let heightItemLWrap1=$('.timeline__list-left .timeline__item:nth-child(1)');let heightItemLWrap3=$('.timeline__list-left .timeline__item:nth-child(2)');let heightItemRWrap2=$('.timeline__list-right .timeline__item:nth-child(1)');let heightItemRWrap4=$('.timeline__list-right .timeline__item:nth-child(2)');heightItemRWrap2.css('margin-top',heightItemLWrap1.find('.timeline__item--wrap').outerHeight());heightItemRWrap2.find('.timeline__item--wrap').css('padding-top',heightItemLWrap1.find('.timeline__item--bottom > ul').outerHeight());heightItemLWrap3.css('margin-top',heightItemRWrap2.find('.timeline__item--top').outerHeight());heightItemLWrap3.find('.timeline__item--wrap').css('padding-top',heightItemRWrap2.find('.timeline__item--bottom > ul').outerHeight());heightItemRWrap4.css('margin-top',heightItemLWrap3.find('.timeline__item--top').outerHeight());heightItemRWrap4.find('.timeline__item--wrap').css('padding-top',heightItemLWrap3.find('.timeline__item--bottom > ul').outerHeight());}})(jQuery);