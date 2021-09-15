var footer_sct = '<div class="foonterContainer">';

    footer_sct +='<div class="footer_top">';
    footer_sct +='<div class="row foot_row">';
    footer_sct +='<div class="col-lg-3 mb-5 foot_larg_col">';
    footer_sct +='<div class="footer-logo">';
    footer_sct +='<a href="/"><img src="/assets/img/icons/logo.svg" alt="LOG"></a>';
    footer_sct +='</div>';
    // footer_sct +=' <div class="subscrib_area"> <h5 class="widget_title">Stay in the loop</h5> <p>Subscribe for your newsleters</p><form action="#" class="subscribForm" id="subscribeSubmit"> <input type="email" id="subscribe_form_email" name="subscribe_form_email" placeholder="Your email address"><a href="javascript:void(0);" class="button footer_subscript_btns" id="send_sub"><img src="assets/img/icons/send-blue.svg" alt=""></a></div><p id="success-sub">Send!</p>';
    footer_sct +='<div id="sub_res"></div></div>';
    footer_sct +='<div class="col-lg-3 mb-5 foot_col">';
    footer_sct +='<div class="footer_widget">';
    footer_sct +='<h5 class="widget_title">发现</h5>';
    footer_sct +='<ul class="widget_links">';
    footer_sct +='<li><a href="https://bridge.xp.network/?cn=true" target="_blank">跨链桥</a></li>';
    footer_sct +='<li><a href="https://explorer.xp.network" target="_blank">搜索工具 </li>';
    footer_sct +='<li><a href="" style="pointer-events:none;">钱包 <span class="cominSoo">即将推出</span></a></li>';
    footer_sct +='<li><a href="/cn/ambassadorship/" style="">媒介大使</a></li>';
    footer_sct +='<li><a target="_blank" href="https://coinmarketcap.com/zh/currencies/xp-network/" style="">CoinMarketCap</a></li>';

    footer_sct +='</ul>';
    footer_sct +='</div>';
    footer_sct +='<div class="footer_widget">';
    footer_sct +='<h5 class="widget_title">技术</h5>';
    footer_sct +='<ul class="widget_links">';
      
    footer_sct +='<li><a target="_blank" href="https://wiki.xp.network/" class="">文件</a></li>';
    footer_sct +='<li><a href="/cn/#use-cases" class="">使用案例</a></li>';
    footer_sct +='<li><a href="/cn/#roaemapArea" class="">交付流程</a></li>';
    
    footer_sct +='</ul>';
    
    footer_sct +='</div>';
    footer_sct +='</div>';
  
    footer_sct +='<div class="col-lg-3 mb-5 foot_col expad">';

      footer_sct +='<div class="footer_widget">';
      footer_sct +='<h5 class="widget_title">资源</h5>';
      footer_sct +='<ul class="widget_links">';
        footer_sct +='<li><a href="/whitepaper" target="_blank">白皮书</a></li>';
    footer_sct +='<li><a href="https://github.com/xp-network/" target="_blank">GitHub</a></li>';
    footer_sct +='<li><a href="/cn/xpnet/#token-metrics">代币指标</a></li>';
    footer_sct +='<li><a href="http://blog.xp.network/" target="_blank">博客</a></li>';
      footer_sct +='</ul>';
    footer_sct +='</div>';

    footer_sct +='<div class="footer_widget">';
    footer_sct +='<h5 class="widget_title">团队</h5>';
    footer_sct +='<ul class="widget_links">';
    footer_sct +='<li><a href="/cn/team">概述</a></li>';
    footer_sct +='<li><a href="/cn/team/#advisors">顾问</a></li>';
    footer_sct +='<li><a href="/cn/team/#apply">职业生涯</a></li>';
    footer_sct +='</ul>';
    footer_sct +='</div>';

    footer_sct +='</div>';
    
    footer_sct +='<div class="col-lg-3 mb-5 foot_col">';
    footer_sct +='<div class="footer_widget social_wid">';
    footer_sct +='<h5 class="widget_title">社区</h5>';
    footer_sct +='<ul class="widget_links social_links">';
    footer_sct +='<li><a href="https://www.linkedin.com/company/xp-network/" target="_blank"><i class="fab fa-linkedin-in"></i> 领英</a></li>';
    footer_sct +='<li><a href="https://t.me/xp_network" target="_blank"><i class="fab fa-telegram-plane"></i> Telegram</a></li>';
    footer_sct +='<li><a href="https://twitter.com/xpnetwork_" target="_blank"><i class="fab fa-twitter"></i> 推特</a></li>';
    footer_sct +='<li><a target="_blank" href="https://www.reddit.com/user/XP_network/"><i class="fab fa-reddit"></i> Reddit</a></li>';
    footer_sct +='</ul>';
    footer_sct +='</div>';
    footer_sct +='</div>';
    footer_sct +='</div>';
    footer_sct +='</div>';
    footer_sct +='<div class="footer_bottom">';
    footer_sct +='<div class="row">';
    footer_sct +='<div class="col-md-6">';
    footer_sct +='<div class="privacy_terms">';
    footer_sct +='<a href="/cn/privacy-policy/" target="_blank">隐私政策</a>';
    footer_sct +='<a href="" style="pointer-events:none;">使用条款</a>';
    footer_sct +='</div>';
    footer_sct +='</div>';
    footer_sct +='<div class="col-md-6">';
    footer_sct +='<div class="powerBy">';
    footer_sct +='<p>首个区块链不可知的NFT生态系统</p>';
    footer_sct +='</div>';
    footer_sct +='</div>';
    footer_sct +='<div class="col-lg-6">';
    footer_sct +='<div class="copy_right">';
    footer_sct +='<p>© 2021 XP.network Ltd. 版权所有</p>';
    footer_sct +='</div>';
    footer_sct +='</div>';
    footer_sct +='</div>';
    footer_sct +='</div>';
    footer_sct +='</div>';

$(document).ready(function(){
  //alert(footer_sct);
    $("#footer_area_section").html(footer_sct);
});
