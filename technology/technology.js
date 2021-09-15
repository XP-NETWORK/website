var tech_sec = ''

	tech_sec += '<section class="techno_banar"> <div class="tech_banar_container text-center"> <div class="tech_banar_title"> <h4 class="blue_title">Technology</h4> <h1 class="inner_banar_title tcb">Start Building</h1> <p class="sec_t">A complete toolset for building great NFT dApps, including a smart contract editor, a migration module, a compliance validator, an app editor, a Polkadot VM hub, a testnet, and more.</p> <div class="tech_btns"> <a target="_blank" href="whitepaper.html" class="blue_btn" >Whitepaper <img src="/assets/img/icons/arrow-white.svg" ></a> <a target="_blank" href="https://github.com/xp-network" class="blue_btn">GitHub <img src="/assets/img/icons/arrow-white.svg" ></a> </div> </div> <div class="tech_banar_img"> <img src="/assets/img/tech_page/tech_frame.png" alt=""> </div> </div> </section>';

	tech_sec +='<section class="use_case_area" id="use-cases">'
	tech_sec += '<span class="blue_art"></span> <div class="use_case_container"> <div class="use_case_title"> <h2 class="secTitle text-white">Use cases</h2> <p class="sec_t owc">XP.network supports 10+ types of NFT dApps, and you can mix and match features as you wish. The NFT industry is  so much more than marketplaces – perhaps it’s your dApp that will disrupt it?</p> </div>' 
	tech_sec +='<div class="use_case_slider"> <div class="use_case_top_slide"> <ul class="usecaseTop owl-carousel"> <li><span class="coro_1">Tickets</span></li> <li><span class="coro_2">NFT Royalties</span></li> <li><span class="coro_3">NFT Insurance</span></li> <li><span class="coro_4">Tickets</span></li> <li><span class="coro_5">NFT Marketplace</span></li> <li><span class="coro_6">NFT Royalties</span></li> <li><span class="coro_7">Will / succession registration</span></li> <li><span class="coro_8">Legal Contract</span></li> <li><span class="coro_1">Tickets</span></li> <li><span class="coro_2">NFT Royalties</span></li> <li><span class="coro_3">NFT Insurance</span></li> <li><span class="coro_4">Tickets</span></li> <li><span class="coro_5">NFT Marketplace</span></li> <li><span class="coro_6">NFT Royalties</span></li> <li><span class="coro_7">Will / succession registration</span></li> <li><span class="coro_8">Legal Contract</span></li> </ul> </div> <div class="use_case_bottom_slide"> <ul class="usecaseBottom owl-carousel" > <li><span class="coro_8">NFT Marketplace</span></li> <li><span class="coro_5">Brand protection</span></li> <li><span class="coro_4">NFT Rights Retention on Other Blockchains </span></li> <li><span class="coro_2">Legal Contract</span></li> <li><span class="coro_7">Lotteries</span></li> <li><span class="coro_1">Brand protection</span></li> <li><span class="coro_8">NFT Marketplace</span></li> <li><span class="coro_5">Brand protection</span></li> <li><span class="coro_4">NFT Rights Retention on Other Blockchains </span></li> <li><span class="coro_2">Legal Contract</span></li> <li><span class="coro_7">Lotteries</span></li> <li><span class="coro_1">Brand protection</span></li> </ul> </div> </div> </div>' 
	tech_sec += '</section>'

	tech_sec +='<section class="roaemap_area" id="roaemapArea"> <span class="mar_art_1"></span> <div class="roadMap_title text-center"> <h2 class="secTitle">Delivery Roadmap</h2> <p class="sec_t">Follow our journey from inception to launch. Please note that the team reserves the right to make changes to the roadmap if needed.</p></div><div class="road_map_slider_area"> <div class="road_map_iner"> <div class="road_map_slider owl-carousel"> <div class="single_roadMap"> <div class="road_content"> <h4 class="blue_title">Q4 2020</h4> <ul class="map_text"> <li>XP.network is born</li><li>Macroscopic system architecture</li><li>Architecture of Smart Contract Editor</li><li>Architecture of Polkadot Parathread for Diem</li></ul> </div><span class="map_quot">Q4</span> </div><div class="single_roadMap"> <div class="road_content"> <h4 class="blue_title">Q1 2021</h4> <ul class="map_text"> <li>White Paper</li><li>Architecture of Move-VM Compiler</li><li>Architecture of Compliance Validator</li><li>Private sale preparations</li></ul> </div><span class="map_quot">Q1</span> </div><div class="single_roadMap"> <div class="road_content"> <h4 class="blue_title">Q2 2021</h4> <ul class="map_text"> <li>Application Editor Architecture</li><li>XP.network RPC Protocol</li><li>First Substrate Bridge with Elrond</li></ul> </div><span class="map_quot">Q2</span> </div><div class="single_roadMap"> <div class="road_content"> <h4 class="blue_title">Q3 2021</h4> <ul class="map_text"> <li>XP.network Testnet as a Polkadot Parachain</li><li>Substrate Bridge with Ethereum</li><li>Substrate Multi Chain Bridge</li><li>Multi Token XP.network Wallet</li><li>XP.network Explorer</li></ul> </div><span class="weAreHere">We are here</span> </div><div class="single_roadMap"> <div class="road_content"> <h4 class="blue_title">Q4 2021</h4> <ul class="map_text"> <li>Move-VM Pallet Integration</li><li>Move NFT Author Royalties Standards</li><li>Move NFT DApp Generator</li><li>NFT Marketplace in Move</li><li>Alpha Version of Application Editor</li></ul> </div><span class="map_quot">Q4</span> </div></div></div><div class="road_map_liner"><img src="/assets/img/tech_page/map_line.svg" alt=""></div></div></section>';

jQuery(document).ready(function(){
	jQuery("#techno_wraper").html(tech_sec);
});
