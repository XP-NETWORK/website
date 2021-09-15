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
    footer_sct +='<h5 class="widget_title">Discover</h5>';
    footer_sct +='<ul class="widget_links">';
    footer_sct +='<li><a href="https://bridge.xp.network/" target="_blank">Cross Chain Bridge</a></li>';
    footer_sct +='<li><a href="https://explorer.xp.network" target="_blank"">Explorer </a></li>';
    footer_sct +='<li><a href="" style="pointer-events:none;">Wallet <span class="cominSoo">Coming soon</span></a></li>';
    footer_sct +='<li><a href="/ambassadorship/" style="">Ambassadors</a></li>';
    footer_sct +='<li><a target="_blank" href="https://coinmarketcap.com/currencies/xp-network/" style="">CoinMarketCap</a></li>';
    footer_sct +='</ul>';
    footer_sct +='</div>';
    footer_sct +='<div class="footer_widget">';
    footer_sct +='<h5 class="widget_title">Technology</h5>';
    footer_sct +='<ul class="widget_links">';
      
    footer_sct +='<li><a target="_blank" href="https://wiki.xp.network/" class="">Wiki</a></li>';
    footer_sct +='<li><a href="/#use-cases" class="">Use cases</a></li>';
    footer_sct +='<li><a href="/#roaemapArea" class="">Delivery Roadmap</a></li>';

    footer_sct +='</ul>';
    
    footer_sct +='</div>';
    footer_sct +='</div>';
  
    footer_sct +='<div class="col-lg-3 mb-5 foot_col expad">';

      footer_sct +='<div class="footer_widget">';
      footer_sct +='<h5 class="widget_title">Resources</h5>';
      footer_sct +='<ul class="widget_links">';
        footer_sct +='<li><a href="/whitepaper" target="_blank">Whitepaper</a></li>';
    footer_sct +='<li><a href="https://github.com/xp-network/" target="_blank">GitHub</a></li>';
    footer_sct +='<li><a href="/xpnet/#token-metrics">Token metrics</a></li>';
    footer_sct +='<li><a href="http://blog.xp.network/" target="_blank">Blog</a></li>';
      footer_sct +='</ul>';
    footer_sct +='</div>';

    footer_sct +='<div class="footer_widget">';
    footer_sct +='<h5 class="widget_title">Team</h5>';
    footer_sct +='<ul class="widget_links">';
    footer_sct +='<li><a href="/team">Overview</a></li>';
    footer_sct +='<li><a href="/team/#advisors">Advisors</a></li>';
    footer_sct +='<li><a href="/team/#apply">Careers</a></li>';
    footer_sct +='</ul>';
    footer_sct +='</div>';

    footer_sct +='</div>';
    
    footer_sct +='<div class="col-lg-3 mb-5 foot_col">';
    footer_sct +='<div class="footer_widget social_wid">';
    footer_sct +='<h5 class="widget_title">Community</h5>';
    footer_sct +='<ul class="widget_links social_links">';
    footer_sct +='<li><a href="https://www.linkedin.com/company/xp-network/" target="_blank"><i class="fab fa-linkedin-in"></i> Linkedin</a></li>';
    footer_sct +='<li><a href="https://t.me/xp_network" target="_blank"><i class="fab fa-telegram-plane"></i> Telegram</a></li>';
    footer_sct +='<li><a href="https://twitter.com/xpnetwork_" target="_blank"><i class="fab fa-twitter"></i> Twitter</a></li>';
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
    footer_sct +='<a href="/privacy-policy/" target="_blank">Privacy Policy</a>';
    footer_sct +='<a href="" style="pointer-events:none;">Terms of use</a>';
    footer_sct +='</div>';
    footer_sct +='</div>';
    footer_sct +='<div class="col-md-6">';
    footer_sct +='<div class="powerBy">';
    footer_sct +='<p>The first blockchain-agnostic NFT ecosystem</p>';
    footer_sct +='</div>';
    footer_sct +='</div>';
    footer_sct +='<div class="col-lg-6">';
    footer_sct +='<div class="copy_right">';
    footer_sct +='<p>© 2021 XP.network Ltd. All Rights Reserved</p>';
    footer_sct +='</div>';
    footer_sct +='</div>';
    footer_sct +='</div>';
    footer_sct +='</div>';
    footer_sct +='</div>';

$(document).ready(function(){
  //alert(footer_sct);
    $("#footer_area_section").html(footer_sct);
});
