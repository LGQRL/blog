$(document).ready(function () {
$("#navList").append('<li style="background-color: rgba(0, 0, 0, 0);"><a id="blog_nav_sitehome" class="menu" href="https://mobile.zcool.com.cn/u/15723178" style="background-color: rgba(0, 0, 0, 0);">站酷</a></li>');
$('*').css('background-color', '#00000000');
$('#main').css('background-color', '#ffffff');
//$('#blogCalendar').css('background-color', '#ffffff');
var sideBarMain= document.getElementById("sideBarMain");
var blogCalendar= document.getElementById("blogCalendar");
blogCalendar.style.backgroundImage = "url(https://kanjiantu.com/images/2019/06/16/-ID_5942171e4cc697c94698b.md.jpg)";
//blogCalendar.style.backgroundImage = "url(https://www.kanjiantu.com/images/2019/08/10/00-02-24--00-02-330a286138ef061753.gif)";
        $("#blog-news").append('<div z-index:100 style="width: 80px;height: 80px;background: url(https://www.kanjiantu.com/content/images/users/dITlD/av_1560112423.jpg);background-size: 100%; margin-left: 13%;border-radius: 50%;"></div>')
        $("#mainContent").append('<div id="bottomDiv" z-index:100 style="width: auto;height: 370px;margin-left: 24em;background: url(https://www.kanjiantu.com/images/2019/07/21/1563691923632-0136c3b6a18b6d4045.md.jpg);background-size: 100%;"></div>')
        var header = document.getElementById("header");
//        $("#header").append('<img id="headerImg" src="https://kanjiantu.com/images/2019/07/29/58b67972c69ba338262610679fb16f86-015bcd9cc44295979b.md.jpg" style="width:100%">')
        var bottomDiv = document.getElementById("bottomDiv");
        var bg = new Array(
"https://www.kanjiantu.com/images/2019/08/07/649734780-016620d12c25f88bf3.jpg",
"https://www.kanjiantu.com/images/2019/08/07/IMG_20190806_013414684e06eabee7e57e.jpg",
            "https://kanjiantu.com/images/2019/07/29/58b67972c69ba338262610679fb16f86-015bcd9cc44295979b.md.jpg",
            "https://kanjiantu.com/images/2019/06/29/53051f7d75c5d8cf04e1a6d512c40cd0e6b6c0281b8336fb.md.png",
            "https://kanjiantu.com/images/2019/06/29/5c2a70c8d19d2f035b87ff00851c3a51187b04cb6cddf039.md.jpg",
            "https://kanjiantu.com/images/2019/06/19/92461b1d2f22bf762f7d1.md.jpg",
            "https://kanjiantu.com/images/2019/06/19/924624d0aa3cee8f56485.md.jpg",
            "https://kanjiantu.com/images/2019/06/19/92460d57cbaf69f3cf283.md.jpg",
            "https://kanjiantu.com/images/2019/06/19/92459453f2f3d21860c24.md.jpg",
            "https://kanjiantu.com/images/2019/06/19/9245690f580f59f9e2a51.md.jpg",
            "https://kanjiantu.com/images/2019/06/19/9245842b0f623b8e1457c.md.jpg",
            "https://kanjiantu.com/images/2019/06/19/92457e4f33c029689254b.md.jpg",
            "https://kanjiantu.com/images/2019/06/19/924553bf69cd9db637c03.md.jpg",
            "https://kanjiantu.com/images/2019/06/19/9245459894751da3804ae.md.jpg",
            "https://kanjiantu.com/images/2019/06/19/92463c837b7f8bf3d21f6.md.jpg",
            "https://kanjiantu.com/images/2019/06/19/924534c345f368f24c09f.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_365215b6a31849addf317.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_36520d7752c1261bbf52f.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_18943d7cf77300a932fc3.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/thumb-1920-444211f18ec47044ed40fc.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/ffd47b417ba192ee80d318b912c5b43358df06415e25ace8.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/thumb-1920-4419950653f23a797c2d6a.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/ff726865a1e8c0f67c4ee2586625124e081afad11ef9cea0.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/e1ea511b164f1995d85eac9583c5d50df9bfb3382c93c0e2.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/e05798ccf7ec27785da0db29fb73a6b4520be6e52346821a.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/d86970e289bca9a87b7283b21408e5fa68c139d529ee942d.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/d526685ad4c2eafecd1df0b89230f763bbf6c4fc035fa90e.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/d4087bf122ab506e8fa6f85f5083adec8effa1557998939d.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/a491b56b4e392638b5452087978d9d3377e92e2f530f573e.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/05350853f6277c4012ceea81556760488f9d4a1349d4e3b7.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/953264652a237d3fea9169.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/948864691942523ec83081.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/913715d8018cb21b45cc3d.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/948861a76b3d2c9ac09dca.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/738660a8a77e31d73a33f7.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/7466585894f83e21863a41.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/66309811d16e02cd2236a6.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/6583196772a00e4eb31a99.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/527357cf5ba33f77b2ece4.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/417259b68b182275848f1f.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/41730042fea2c9d76a854c.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/3992332e3c1fa63e90f453.md.png",
            "https://kanjiantu.com/images/2019/06/16/286148b8f4490ba62a66d7.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/2709636fa8807e04008d00.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/1233367c9f5a9ed0300f6d.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/82021af102a22eaafef06da31d6b451ff46a7f48f59a3122.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/401201921be1537af5c57.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/74353f8848f72ad242780.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/19902044dbf4504e6c68a.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/3169933bd0197dee8ef70.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/131449acd0169debfa39a.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/950e214558d4c57333b71d153457cc7990978a4e8ac2e641.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/00151adf7a39c6a39643a41d4dccca643cc6a8d74f0a45f6.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/673f9e023acfee26dfb2c10d1cc71ea438225f0b0469f2e8.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/89fb159b0f242490eaf2e8468f85a0bdd30448d5733f51ff.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/94dc33c063ae52c6cb499a7e7028d523744565013108c4ff.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/39f84f12afa9666b1776aed73af34b3475c000f63109bb27.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/26b345b794fcbba935ce45c2c3fc092db9852061f8123490.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/21bb52e48ecedd18ad1e93abe56c2bd579a28d3d70f292ab.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/5bf172992b346c292d9d9edee2bcaffbfdd937cc29271a4e.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_1001031504e0fbb7afac947.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_9695810704c675c6f65320.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_96957585dd5d537cc821cc.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_9176317bf7b7a3ab643630.md.png",
            "https://kanjiantu.com/images/2019/06/16/-ID_931745681b3fa3b5c91ef9.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_92731013d78c07fb15dc04.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_902378aed91bf25be5b9df.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_8075652ff7d89803f5532e.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_7052048726f5c34e18e351.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_663098501580353bea47ec.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_59614636da57ed35ebbdc5.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_510159fe8eb65b010b9e9c.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_5776843689b62ac8cd9404.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_416035b97ae42d9993b1d1.md.png",
            "https://kanjiantu.com/images/2019/06/16/-ID_466517da718975a5c21305.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_46344597e432de2a621abc.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_310221f3929cca4afa74f2.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_24271790b07ae2f04746b9.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_7435361155de358c9d862.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_617894a4290d7efc40a9a.md.jpg",
            "https://kanjiantu.com/images/2019/06/16/-ID_5942171e4cc697c94698b.md.jpg"
        );
        var ii = Math.floor(Math.random() * bg.length);
//        $("#headerImg").attr("src",bg[ii]);
        header.style.backgroundImage = "url(" + bg[ii] + ")";

        //页尾图片
        var bottomBg = new Array(
            "https://kanjiantu.com/images/2019/08/02/5bda6d00fdd9e418b9177a34605ce105267ae151ccf91e15.png",
            "https://kanjiantu.com/images/2019/08/02/4763e8d8c8147a8ed3f3135e19e8c177b65a0629a165d3cf.png",
            "https://kanjiantu.com/images/2019/08/02/405881f313596d176588877f581ecb4c34d7f2cf9ba9e7b6.png",
            "https://kanjiantu.com/images/2019/08/02/29e14c7582e576d8d70f2ff9f4880cfb196cc33e279653de.png",
            "https://kanjiantu.com/images/2019/08/02/b14b824961b771016aefde9c959f352f09fcc1d53fdd1937.png",
            "https://kanjiantu.com/images/2019/08/02/d0a3e0bed1a3e2037e4f41d4f7fd2f0c19585dd134ac4b54.png",
            "https://kanjiantu.com/images/2019/08/02/cfa9f8a14bceed48613779559ed659c28c1a3f189c0cdb8f.png",
            "https://kanjiantu.com/images/2019/08/02/ebb2e64308845bf9ee73c3f9102e48bd13d7ac911bba68f9.png",
            "https://kanjiantu.com/images/2019/08/02/183419c24b74a3630f220711a4da2fa0ebf7eeba42d96d38.png",
            "https://kanjiantu.com/images/2019/08/02/e0b853db42b22cb7f8a1ed60d379bdb71c7d04debcd53df1.png",
            "https://kanjiantu.com/images/2019/08/02/6c2e30064e07434e9605e3d719af86bdf6c705b817752dce.png",
            "https://kanjiantu.com/images/2019/08/02/966dc1d540f8819c03313cd92be08341f58547a9f9a64730.png",
            "https://kanjiantu.com/images/2019/08/02/0626936b51f5b4c3607e895ece433610af5be2a6e83c350d.png"
        )
        var bottomDivii = Math.floor(Math.random() * bottomBg.length);
        bottomDiv.style.backgroundImage = "url(" + bottomBg[bottomDivii] + ")";
        bottomDiv.style.backgroundRepeat = 'no-repeat';

        $("#leftcontentcontainer > td").css("background", '#F8F8F8');

        var main = document.getElementById("main");
        var mainbg = new Array(
        "https://www.kanjiantu.com/images/2019/08/17/Screenshot_20190817_011508_com.bainian19-0137e700e19b7c76a8.jpg",
"https://www.kanjiantu.com/images/2019/08/17/Screenshot_20190817_011345_com.bainian19-020324519b392c60df.jpg",
"https://www.kanjiantu.com/images/2019/08/17/696262018-0144dc5fa07b4aa0b1.jpg",
"https://www.kanjiantu.com/images/2019/08/15/8a8d50072d30a1046ea019d17c5130fa-01104a8f91325d3e44.jpg",
"https://www.kanjiantu.com/images/2019/08/15/3f47555f512612cbcce3c121ffe9314d-01dfe07d38a3e29e6e.jpg",
"https://www.kanjiantu.com/images/2019/08/15/b24c5c69534cefa7988a6ec333175f79-0156f4e72994542494.jpg",
"https://www.kanjiantu.com/images/2019/08/14/f269da64fc79afd90f5b6fd36bc9228e-02a496042dd1312ad5.jpg",
"https://www.kanjiantu.com/images/2019/08/14/1cbf907988b1663a81d46396d1912a90-01714a37f6496bcdcf.jpg",
"https://www.kanjiantu.com/images/2019/08/14/87bad06fc895b0bbe0547a31a3ec3bcc-012c2b8292596ecb19.jpg",
"https://www.kanjiantu.com/images/2019/08/14/c3d777db9d0690ab29abe953dd49bda7-013dd6e0d25dc252b0.jpg",
"https://www.kanjiantu.com/images/2019/08/14/f269da64fc79afd90f5b6fd36bc9228e-018d125f24e2dd5d71.jpg",
"https://www.kanjiantu.com/images/2019/08/14/b72dec3263d89618fcf118dac6a40a5e-013f8ea5a7b5af7517.jpg",
"https://www.kanjiantu.com/images/2019/08/14/c81573cc6946516244f91f9adb643ee3-02913a7385cbc40bd9.jpg",
"https://www.kanjiantu.com/images/2019/08/14/39bc4e8114945f365ff40f9094de1402-019c1f27e57a2c839e.jpg",
"https://www.kanjiantu.com/images/2019/08/14/2d14631c9c5d0869211ff9a526f0d753-01d5a12be42d3ff973.jpg",
"https://www.kanjiantu.com/images/2019/08/14/2eac1ef9c4f6f78ec5583aafaca2d675-01bf9f4ab66e4ff643.jpg",
"https://www.kanjiantu.com/images/2019/08/14/dfe03df463f0fda8ace9fbd6931d25f3-01a3c2456e150b5e2c.jpg",
"https://www.kanjiantu.com/images/2019/08/14/ff53b7147716c2354a15cb9025fe085b-010954f28f16974e2f.jpg",
"https://www.kanjiantu.com/images/2019/08/14/3db8806bac8c3fdc77a66f7255e5018b-019c87349bcb14b84b.jpg",
"https://www.kanjiantu.com/images/2019/08/14/7fcf3f53b82d7a56fdcac54bd354c718-0170ba0034fb7c68dd.jpg",
"https://www.kanjiantu.com/images/2019/08/07/5cdea3ac09529-0195d4d8475905e2a9.jpg",
"https://www.kanjiantu.com/images/2019/08/05/IMG_20190805_1809227af8dbc0eba51f48.jpg",
"https://www.kanjiantu.com/images/2019/08/05/1855_2016061514659578689513-01cbebf81f101b9030.jpg",
"https://www.kanjiantu.com/images/2019/08/05/0_2019080115646452828752-018af4a00aa1b2536e.jpg",
"https://www.kanjiantu.com/images/2019/08/05/OXcsVi7i132b702997d5e547.jpg",
"https://www.kanjiantu.com/images/2019/08/05/1089691044a9b064fa33daae28.jpg",
"https://www.kanjiantu.com/images/2019/08/05/108968560840aadae4af357f4f.jpg",
"https://www.kanjiantu.com/images/2019/08/05/ebe8a2e1478404d77fdddf9e70.jpg",
"https://www.kanjiantu.com/images/2019/08/05/56884f8347e44ffd8800c0bd41.jpg",
"https://www.kanjiantu.com/images/2019/08/05/a77c52da328e6701e831151045.jpg",
"https://www.kanjiantu.com/images/2019/08/05/f3fd20826f5cfcaa71aa43c001.jpg",
"https://www.kanjiantu.com/images/2019/08/05/714ec3b4e2817f7719bd4476ed.jpg",
"https://www.kanjiantu.com/images/2019/08/05/d91840ea6117c41bf323b8126e.jpg",
"https://www.kanjiantu.com/images/2019/08/05/64a58df06bc059a28d9fe365f4.jpg",
"https://www.kanjiantu.com/images/2019/08/05/721d510c3bb898d312f7241bba7645c6b7c4cc9470b27b90.png",
"https://www.kanjiantu.com/images/2019/08/05/c6d6723ba2c00da29eddc6da71fa2f56-01d0be9c67397841ee.jpg",
"https://www.kanjiantu.com/images/2019/08/05/478adccea88affdefa90fb92eab11e40-0186f19a9f1d6b62b4.jpg",
"https://www.kanjiantu.com/images/2019/08/05/e81d899dcc415c3c189f13c5832332b8-01c743c5d36268737a.jpg",
"https://www.kanjiantu.com/images/2019/08/05/abc25a0da95b4090db436c987add7320-013657d43a064c0dc5.jpg",
"https://www.kanjiantu.com/images/2019/08/05/02c2c96e7835c01699df495c9d5ed4cb-0192c026562b48380d.jpg",
"https://www.kanjiantu.com/images/2019/08/05/06459d9e5dbdc6c692d44884f910b0d4-012d5d5b0895b2f8d9.jpg",
"https://www.kanjiantu.com/images/2019/08/05/028b47ba27852b3f37590255568159da-017de0299118f323e6.jpg",
"https://www.kanjiantu.com/images/2019/08/05/355ccbbb612746a20f4e405aa44de2e2-010b81d826b78c4ec6.jpg",
"https://www.kanjiantu.com/images/2019/08/05/71306de2647802e9af6ed97972d23800-018b1a40421b25c27c.jpg",
"https://www.kanjiantu.com/images/2019/08/05/e151ddd82d00c71c96219088486d66ce-01861e548e139323a4.jpg",
"https://www.kanjiantu.com/images/2019/08/05/d81263343d4b3df08862527d02fb25ee-01ab3e4d5d816c53d9.jpg",
"https://www.kanjiantu.com/images/2019/08/05/f232c9a8dd276bf10af592c6bd6a7b5e-019407130ea2c70428.jpg",
"https://www.kanjiantu.com/images/2019/08/05/e02b30e237ff2d3611557a142bb0344c-013586a69fcb4c42ad.jpg",
"https://www.kanjiantu.com/images/2019/08/04/190804-15--393119623-01081a8233e8db1e36.jpg",
"https://www.kanjiantu.com/images/2019/07/30/1668c2e86642ea764d628412d7aa2e6b7a6cec1d684fe88c.jpg",
"https://www.kanjiantu.com/images/2019/07/30/a96c2f6f955eb3c61b36c196fe68e0008dff3ae8ccba3228.jpg",
"https://www.kanjiantu.com/images/2019/07/30/2ce4eaa45f9817a5037966f885f600ecac2eb884d7ab274b.jpg",
"https://www.kanjiantu.com/images/2019/07/30/99459530b01b9ea78d1fba28e99996850cda8dd22ad96e96.jpg",
"https://www.kanjiantu.com/images/2019/07/30/863b5a25a0df9d938c076cd20b6cd85e44232af28bb843d6.jpg",
"https://www.kanjiantu.com/images/2019/07/30/1af7392969981bc1e810b47b935cf6e28879cfb3b796e87c.jpg",
"https://www.kanjiantu.com/images/2019/07/30/895c569afa43089443d87e259f587d1d74378b778a305ab3.jpg",
"https://www.kanjiantu.com/images/2019/07/30/24e47628fcbea046bf7af9e0e4be1de8a10700448834f0a0.jpg",
"https://www.kanjiantu.com/images/2019/07/30/c7ddf6feac76719c1aee46cfebd8f3062eb880832d791540.jpg",
"https://www.kanjiantu.com/images/2019/07/30/46edf2998ff18f839cadc9a494920929542c1e95a89b1948.jpg",
"https://www.kanjiantu.com/images/2019/07/30/3b01f219e0f194ffa33886d99c07c0d9eeb830237b7afc38.jpg",
"https://www.kanjiantu.com/images/2019/07/30/3d150a6755b3872331d5ba71fc586564bf127201dbfcfcfa.jpg",
"https://www.kanjiantu.com/images/2019/07/30/a928ee82f0436749dbe14bcdb10d35573dba8c6eb465db0f.jpg",
"https://www.kanjiantu.com/images/2019/07/30/d25d7a1a9a97e64edf3f3a4aac30be005604a194b7e79ef3.jpg",
"https://www.kanjiantu.com/images/2019/07/30/ebb076360d5677206e119065755552ecbbca1c4513119049.jpg",
"https://www.kanjiantu.com/images/2019/07/30/de762441516ce919d443934b07c5b716c28acc0f6d03d2c1.jpg",
"https://www.kanjiantu.com/images/2019/07/30/0ff7faab08b71f5939d63bb09800002db0cec479562e81e9.jpg",
"https://www.kanjiantu.com/images/2019/07/30/4cec2bf59743ddefb73a3ddc4920a21234c9027f84742f6b.jpg",
"https://www.kanjiantu.com/images/2019/07/30/ebb076360d5677206e119065755552eca17e5151e5352112.jpg",
"https://www.kanjiantu.com/images/2019/07/20/1563494904800-012f2e067a2304800c.jpg",
"https://www.kanjiantu.com/images/2019/07/14/862ea57c0136b1a5902994afc49361cd839d84c3279d8522.png",
"https://www.kanjiantu.com/images/2019/07/14/c778555784017ac21f23dd0334ffe270f69d35d01dfd4404.png",
"https://www.kanjiantu.com/images/2019/07/14/80e10dac2fb28349f8e0b608ca94c32b7c88d2a3cac80d13.png",
"https://www.kanjiantu.com/images/2019/07/14/358f045b42ddc24903e2b01fae427730ed4aac9b3485a88e.png",
"https://www.kanjiantu.com/images/2019/07/14/f97f874a6fc6cd4ca9d75fdecaaf83cdc4db5a60d9db3925.png",
"https://www.kanjiantu.com/images/2019/07/14/4afce850d7e0566c32ebd7bcbf2739149799e57746d904c2.png",
"https://www.kanjiantu.com/images/2019/07/14/d1e6094a96313722eb4b1e93363c25bbe1000a88032c3f14.png",
"https://www.kanjiantu.com/images/2019/07/14/418b05b388b009bd069bc57242d7ff3a1bb44e240cd3a1d6.png",
"https://www.kanjiantu.com/images/2019/07/14/245730f91ac7b651a82fbe0eed83ac963d6bef08d046bdfd.png",
"https://www.kanjiantu.com/images/2019/06/29/c97766c69f25955ff75627dc929fcd6ca10a26ead3ecda7a.jpg",
"https://www.kanjiantu.com/images/2019/06/29/b6cf50977eb780e845af72fec9f9c38aa3d94112ebbf375a.jpg",
"https://www.kanjiantu.com/images/2019/06/29/07938c113dec23d99c55b484b4e4c7704bcd28b501ef1196.jpg",
"https://www.kanjiantu.com/images/2019/06/29/0922cfb7654d72623ede90b271d793e06a890c9044dcfa73.jpg",
"https://www.kanjiantu.com/images/2019/06/29/47e1c076698252fd408e46302d413dd7d290e8dc0a16cb65.jpg",
"https://www.kanjiantu.com/images/2019/06/29/5f10dcb9dd93817707167cdce81737c381def610f18e60a1.jpg",
"https://www.kanjiantu.com/images/2019/06/29/fa43ae5fd41ec8d9f0d10fd0d6484f8af618aafb01440504.jpg",
"https://www.kanjiantu.com/images/2019/06/29/f818bd6f558ce744b2220d2b3c3cf176430321f6f58ef7a0.jpg",
"https://www.kanjiantu.com/images/2019/06/29/f7ea3292b9e45df0cdac3fa0aa0bfe32339a7862f2b689aa.jpg",
"https://www.kanjiantu.com/images/2019/06/29/a5cfe9dc14ccc6b5a7f21a893a6c81b933a516d7fecccc05.jpg",
"https://www.kanjiantu.com/images/2019/06/29/67110428bbae9fe2713789f1e934ef2b76e01bb0348bc1bb.jpg",
"https://www.kanjiantu.com/images/2019/06/29/7772c1321147c401854d120b084b1a0545c7e8120eaff983.jpg",
"https://www.kanjiantu.com/images/2019/06/29/8399b13945a3b8cf5d531354e9ece60beae24e972040ee8e.jpg",
"https://www.kanjiantu.com/images/2019/06/29/37e3e33a445e5f1bf27eb86e98889c4198929ae197131daa.jpg",
"https://www.kanjiantu.com/images/2019/06/29/fbf3135fa2cd897276befbd07a7fbc5df5eb6f53fe875b09.jpg",
"https://www.kanjiantu.com/images/2019/06/29/9575d6921023eb9448bc9489f0c627993d783716a975cf25.jpg",
"https://www.kanjiantu.com/images/2019/06/29/2485ef69f2d2e6d2bb43b39b7707ee33448a44229fe0228d.jpg",
"https://www.kanjiantu.com/images/2019/06/29/55ac462d5967028e22cd800cfcf818ae7fa41e3dc94a8f0a.jpg",
"https://www.kanjiantu.com/images/2019/06/29/8c655b64e716bfcb0fddce81ed8ebf846a95947883440743.jpg",
"https://www.kanjiantu.com/images/2019/06/29/14253c649cb2dd3cc41245c9d98f2865-0141449737229c0eaf.jpg",
"https://www.kanjiantu.com/images/2019/06/29/4d21f7c85c7ca56c811b1633b3337a058c98c4bec423b9a9.jpg",
"https://www.kanjiantu.com/images/2019/06/29/bf780590b89fcf1dd2316557b2d5fee0-02fb6ceab803bcf4e9.jpg",
"https://www.kanjiantu.com/images/2019/06/29/3994844c2f610f9dae2451a0b849aa5c-0120f585136c780549.jpg",
"https://www.kanjiantu.com/images/2019/06/29/400c2ba553fb568be32fc3b6303e79fc-01e97e2bff90fed6c5.jpg",
"https://www.kanjiantu.com/images/2019/06/29/3e687f3c232d832b251eed91aa8229c27e8c476b910aaa93.jpg",
"https://www.kanjiantu.com/images/2019/06/28/PSX_20190626_14445237547805adf964fc.jpg",
"https://www.kanjiantu.com/images/2019/06/28/1023f0a17551271a384d0b98f9c01fb5-01cb7a15f0d7d7ad8f.jpg",
"https://www.kanjiantu.com/images/2019/06/28/31nswqnozwlusvjnfbl5ss7pd-0166692fe6543620db.jpg",
"https://www.kanjiantu.com/images/2019/06/28/4vh3ekpkh46102mu6nlf9yon8-0170340d7e6688b1af.jpg",
"https://www.kanjiantu.com/images/2019/06/28/7azvtw56wba96x4t93ucqlzwk-012f41ea01b16d6e94.jpg",
"https://www.kanjiantu.com/images/2019/06/28/2amlvjpzpn18tc47fs7k0jvz4-01280415f72dab58ee.jpg",
"https://www.kanjiantu.com/images/2019/06/27/40ynx1lalnqzwm9rofd0qvz8c-0157c269ad43b47c03.jpg",
"https://www.kanjiantu.com/images/2019/06/27/62kxzhe6vwz6qfb1enh0u4gib-01b77364594fd121c0.jpg",
"https://www.kanjiantu.com/images/2019/06/27/4683v37waurcnypa5t9kr3e76-01209cd1eaa7eb5c81.jpg",
"https://www.kanjiantu.com/images/2019/06/27/7ewi1rwxyup1xwni3w6qrmlvk-0191cfddee1aa4d3a7.jpg",
"https://www.kanjiantu.com/images/2019/06/27/7cyuh3sdfy7a0y7sgqxzdal3f-01b8500c79918b79d2.jpg",
"https://www.kanjiantu.com/images/2019/06/27/4zxlarp7g5n0iurzl9j0p1dbp-01f4e695db87f5ea1a.jpg",
"https://www.kanjiantu.com/images/2019/06/27/70xedecluq68xugloyeu7ucs-0181d0a8a103457c79.jpg",
"https://www.kanjiantu.com/images/2019/06/14/518cd14b77f7bd1fafa2235afa.jpg",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-13-01.00.20f8dc7a4fc6f2a244.png",
"https://www.kanjiantu.com/images/2019/06/14/a3a7e40963b4355edec0882e5834c3bfd9801eccee5b06c4.jpg",
"https://www.kanjiantu.com/images/2019/06/14/3b6eb27a6eb6190eaa6b9c6905.jpg",
"https://www.kanjiantu.com/images/2019/06/14/8e29b47a12aa43f41d15bd274e.jpg",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-14-08.57.35461f22ad4b254baf.png",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-14-08.57.517665cfc9026dd13f.png",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-14-08.56.55e06a5ca56180f361.jpg",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-13-08.28.0606c210fa18a21eea.png",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-13-12.58.142b2932a7f19b6ee7.jpg",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-13-12.56.34b1f439e885985068.jpg",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-13-08.49.045c960f24ba78da1d.png",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-13-08.23.0225493d497194b22a.jpg",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-13-06.27.34861d477971a109af.png",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-13-06.25.39a187d9395c420cd8.jpg",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-13-06.24.3371c2602368d3e892.jpg",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-13-06.24.06083e0aafac8fe1da.jpg",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-13-06.23.1445682a42a5186d72.jpg",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-13-01.57.23ed56300f0d4f196d.jpg",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-13-02.00.569f6c80a9a6cc3f3b.jpg",
"https://www.kanjiantu.com/images/2019/06/14/PicsArt_06-13-01.58.48faa6661d34c54a8a.jpg",
"https://www.kanjiantu.com/images/2019/06/13/LGQb9c9d1add92a49e8.jpg",
"https://www.kanjiantu.com/images/2019/06/12/LGQda207bb66c5e0414.jpg",
"https://www.kanjiantu.com/images/2019/06/12/LGQ528b5adf7eafa026.jpg"
        );
        var mainii = Math.floor(Math.random() * mainbg.length);
        main.style.backgroundImage = "url(" + mainbg[mainii] + ")";
        //获取背景图片高度
        var image_url = $('#header').css('background-image'),
            image;
        image_url = image_url.match(/^url\("?(.+?)"?\)$/);

        if (image_url[1]) {
            image_url = image_url[1];
            image = new Image();
            // just in case it is not already loaded
            $(image).load(function () {
                var bgHeight = image.height;
                var bgWidth = image.width;
                var divWidth = $('#header').width();
                var divHeight = (divWidth*bgHeight)/bgWidth;
                if(divHeight<500){
                       $('#header').height(divHeight+"px");
                }else{
                        divHeight=500;
                        $('#header').height(divHeight+"px");
                }
                
            });
            image.src = image_url;
        }
        //获取背景图片高度end

    });