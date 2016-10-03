@font-face {
    font-family: 'HelveticaNeueLTStd-Roman';
    src: url('fonts/HelveticaNeueLTStd-Roman.eot');
    src: url('fonts/HelveticaNeueLTStd-Roman.eot?#iefix') format('embedded-opentype'),
    url('fonts/HelveticaNeueLTStd-Roman.woff') format('woff'),
    url('fonts/HelveticaNeueLTStd-Roman.ttf') format('truetype'),
    url('fonts/HelveticaNeueLTStd-Roman.otf') format('opentype'),
    url('fonts/HelveticaNeueLTStd-Roman.svg#HelveticaNeueLTStd-Roman') format('svg');
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    unicode-range: U+0020-FB02;
}

@font-face {
    font-family: 'HelveticaNeueLTStd-Md';
    src: url('fonts/HelveticaNeueLTStd-Md.eot');
    src: url('fonts/HelveticaNeueLTStd-Md.eot?#iefix') format('embedded-opentype'),
    url('fonts/HelveticaNeueLTStd-Md.woff') format('woff'),
    url('fonts/HelveticaNeueLTStd-Md.ttf') format('truetype'),
    url('fonts/HelveticaNeueLTStd-Md.otf') format('opentype'),
    url('fonts/HelveticaNeueLTStd-Md.svg#HelveticaNeueLTStd-Md') format('svg');
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    unicode-range: U+0020-FB02;
}

html, body {
    background: transparent !important;
}

.gm-content, body {
    background: #ccc9d1 url(../img/home-bg.png) no-repeat center top;
    background: url("../images/background.png") repeat-y center top;
    background: #FFF;
    font-family: 'HelveticaNeue', 'Helvetica Neue', 'HelveticaNeueLTStd-Roman', Helvetica, Arial, 'Lucida Grande', sans-serif;
    background-size: 100%;
    color: #5d5d5d;
    /* padding-top: 5px; */
    height: 100%;
    padding: 0;
    margin: 0;
}
.gm-content.scroll-content{
    height: auto;
}

/*#screen {*/
    /*width: 100% !important;*/
    /*height: 100% !important;*/
    /*background: #EEE;*/
/*}*/

/*#screen .OT_root.OT_subscriber {*/
    /*width: 100% !important;*/
    /*height: 100vh !important;*/
/*}*/

.gm-content.transparent {
    background: transparent;
}

.gm-content.vertical-align-center {
    display: flex;
    align-items: center;
}

.pane {
    background: transparent;
}

.page {
    max-width: 680px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    min-height: 480px;
}

a:hover {
    text-decoration: none
}

a:focus {
    outline: none;
    text-decoration: none
}

ul.main-menu {
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    font-size: 30px;
    font-family: 'gotham-light';
}

ul.main-menu li {
    padding: 10px 0 14px 0
}

ul.main-menu li a {
    padding: 10px 0;
    color: #fff
}

ul.main-menu li a:hover, ul.main-menu li a:focus, ul.main-menu li a.active {
    font-family: 'gotham-medium';
    color: #e61b52;
}

.slider-thumb img {
    width: 12vw;
    max-width: none;
    height: 12vw;
    border-radius: 50%;
    border: 0.53vw solid white;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);
    transition: all .15s ease-in-out;
    transform: scale(1);
}
.slider-thumb li.active img {
    border-color: #e61b52;
}

.slider-thumb {
    padding-bottom: 10px;
    padding-top: 0px;
}

.slider-thumb ul {
    padding: 0;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    margin: 0;
    list-style: none;
    text-align: center
}

.slider-thumb ul li {
    display: inline-block;
    margin: 0;
}

.slider-thumb ul li a {
    padding: 2px;
    display: block;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
}

.slider-thumb ul li a {
    border: solid 2px #FFF;
    padding: 0;
}

.play-container .slider-thumb ul li a {
    border-color: transparent;
}

.slider-thumb ul li a.active {
    /*border: solid 2px #e61b52;*/
    padding: 0;
}

.carousel-discover2 .slider-thumb ul li a, .carousel-discover1 .slider-thumb ul li a {
    opacity: .7;
    filter: alpha(opacity=70);
}

.carousel-discover2 .slider-thumb ul li a.active, .carousel-discover1 .slider-thumb ul li a.active {
    opacity: 1;
    filter: alpha(opacity=100);
}

h2 {
    color: #e61b52;
    font-size: 48px;
    padding: 0;
    margin: 0;
    text-align: center
}

p {
    text-align: center
}

.slide img {
    box-shadow: 1px 0 5px 1px rgba(0, 0, 0, .25);
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
}

.bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: -moz-linear-gradient(top, rgba(0, 0, 0, .8) 69%, rgba(0, 0, 0, 0) 31%, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(39%, rgba(0, 0, 0, 0)), color-stop(61%, rgba(0, 0, 0, 0)), color-stop(78%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 1)));
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 69%, rgba(0, 0, 0, 0) 31%, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 1) 100%);
    background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 69%, rgba(0, 0, 0, 0) 31%, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 1) 100%);
    background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 69%, rgba(0, 0, 0, 0) 31%, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 1) 100%);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 69%, rgba(0, 0, 0, 0) 31%, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00515151', endColorstr='#515151', GradientType=0);
    border-radius: 6px;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px
}

.bg.no-radius {
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0
}

.slide span.bg .name {
    position: absolute;
    bottom: 5px;
    color: #fff;
    font-size: 25px;
    left: 15px;
    z-index: 1
}

.carousel-discover1 {
    padding-bottom: 15px
}

.carousel-discover1.preloader {
    margin-top: 130px;
}

/*.carousel-discover2 {*/
/*margin-top: 27px;}*/
.progress-bar-block {
    background-color: #383838;
    border-radius: 6px;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    height: 34px;
    position: relative;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, .3);
    margin-top: 10px;
    text-align: center;
    margin-bottom: 25px;
}

.progress {
    background-color: #e61b52;
    border-radius: 6px;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    height: 34px;
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
    text-transform: uppercase;
    color: #383838;
    padding: 0 0 0 20px;
    line-height: 34px;
    font-size: 17px;
}

.caption-conainer-view {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, .85);
    height: 100%;
    width: 100%;
    padding: 12px;
    border-radius: 6px;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
}

.caption-conainer-view h3 {
    font-size: 15px;
    text-transform: uppercase;
    border-bottom: solid 1px #e1e1e1;
    color: #fff;
    padding: 0 0 5px 0;
    margin: 0;
    font-size: 15px
}

.caption-conainer-view ul {
    list-style: none;
    padding: 10px 0 0 0;
    margin: 0
}

.caption-conainer-view ul li {
    text-align: center;
    padding: 1px 0;
    font-size: 15px
}

.caption-conainer-view ul li a {
    color: #fff;
    font-family: 'gotham-book'
}

.caption-conainer-view ul li a.active, .caption-conainer-view ul li a:hover, .caption-conainer-view ul li a:focus {
    color: #e61b52;
}

.info-controls {
    position: absolute;
    right: 15px;
    top: 47%
}

.info-controls ul.pager {
    padding: 0;
    margin: 0;
    list-style: none
}

.info-controls ul.pager li {
    padding: 0 0 10px 0;
    margin: 0;
    list-style: none;
    display: block
}

.info-controls ul.pager li a {
    display: block;
    width: 12px;
    height: 12px;
    background-color: #333535;
    border-radius: 8px;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    text-indent: -9999px;
    border: 0;
    padding: 4px
}

.info-controls ul.pager li a.active {
    background-color: #e61b52;
}

.japan-flag {
    background: url(../img/flag-japan.png) no-repeat;
    background-size: 100%;
    width: 66px;
    height: 49px;
    margin: 0 auto;
}

.selected-slide {
    border-color: #20b767 !important;
    overflow: hidden;
    position: relative
}

.icon-selected {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 999;
    background: url(../img/selected-check-icon.png) no-repeat center;
    background-size: 60px 60px
}

.select-arrow-left {
    left: -75px;
    background-position: left center;
    background-image: none;
}

.remove-slide {
    border-color: #e61b52 !important;
    overflow: hidden;
    position: relative;
}

.icon-remove {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 999;
    background: url(../img/remove-slide-icon.png) no-repeat center;
    background-size: 60px 60px
}

.remove-arrow-right {
    right: -75px;
    background-position: right center;
    left: auto;
    background-image: none;
}

.remove-slide-view {
    margin: 60px 50px 30px 50px
}

.slide {
    transition: all linear 0.3s;
    position: relative;
}

.accept-slide {
    /* margin-left: 75px
   */
}

.reject-slide {
    right: 75px
}

.accept-slide img, .reject-slide img {
    opacity: .5 !important;
    filter: alpha(opacity=50);
}

.tick-txt {
    position: absolute;
    width: 100%;
    left: 55px;
    text-align: center;
    font-size: 36px;
    color: #20b767;
    /* height: 100%; */
    top: 35%
}

.cross-txt {
    position: absolute;
    width: 100%;
    right: 55px;
    text-align: center;
    font-size: 36px;
    color: #e61b52;
    /* height: 100%; */
    top: 35%
}

.title-block {
    text-align: center;
    padding: 20px 0;
}

.title-block p {
    color: #232326
}

.video-chat-countdown {
    padding: 0;
    text-align: center
}

.video-chat-countdown p {
    color: #fff;
    font-size: 14px;
}

.video-chat-countdown .time {
    font-size: 84px;
    color: #e61b52;
    line-height: 90px;
}

.hint {
    padding: 10px 0 0 0;
}

.hint span {
    color: #e61b52
}

.info-icon {
    background: url(../img/exc-icon.png) no-repeat;
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 1000;
    text-indent: -9999px;
    top: 20px;
    left: 25px;
    background-size: 100%
}

.OT_widget-container {
    margin-left: -27px;
}

.chat-call-bg {
    position: absolute;
    height: 200px;
    bottom: 0;
    width: 100%;
    left: 0;
    background: -moz-linear-gradient(top, rgba(30, 87, 153, 0) 0%, rgba(0, 0, 0, 0.86) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(30, 87, 153, 0)), color-stop(100%, rgba(0, 0, 0, 0.86)));
    background: -webkit-linear-gradient(top, rgba(30, 87, 153, 0) 0%, rgba(0, 0, 0, 0.86) 100%);
    background: -o-linear-gradient(top, rgba(30, 87, 153, 0) 0%, rgba(0, 0, 0, 0.86) 100%);
    background: -ms-linear-gradient(top, rgba(30, 87, 153, 0) 0%, rgba(0, 0, 0, 0.86) 100%);
    background: linear-gradient(to bottom, rgba(30, 87, 153, 0) 0%, rgba(0, 0, 0, 0.86) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#001e5799', endColorstr='#db000000', GradientType=0);
}

.end-call-btn {
    background: url(../img/end-call-icon.png) no-repeat;
    width: 86px;
    height: 86px;
    background-size: 100%;
    margin: 50px auto;
    display: block
}

.relative {
    position: relative
}

.message {
    padding: 10px 0
}

.message p {
    font-size: 15px;
    text-transform: uppercase
}

ul.chat-info-type {
    padding: 0;
    margin: 0 20px;
    list-style: none;
    border-top: solid 1px #d4d4d4
}

ul.chat-info-type li {
    border-bottom: solid 1px #d4d4d4;
    position: relative;
    font-family: 'HelveticaNeue', 'Helvetica Neue', 'HelveticaNeueLTStd-Md', Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-size: 15px
}

ul.chat-info-type li a {
    display: block;
    padding: 10px 10px 10px 45px;
    color: #8f8f8f
}

ul.chat-info-type li a:hover, ul.chat-info-type li a:focus {
    color: #e61b52
}

ul.chat-info-type li a span.icon {
    position: absolute;
    left: 15px;
    top: 15px;
    background: url(../img/chat-info-icon.png) no-repeat;
    display: block;
    background-size: 24px;
    height: 136px
}

ul.chat-info-type li a span.icon.inapp-video {
    background-position: 0 0;
    width: 24px;
    height: 30px;
}

ul.chat-info-type li a span.icon.inapp-chat {
    background-position: 0 -39px;
    width: 24px;
    height: 32px;
    top: 10px
}

ul.chat-info-type li a span.icon.spam {
    background-position: 0 -78px;
    width: 24px;
    height: 32px;
    top: 10px
}

ul.chat-info-type li a span.icon.other-reasons {
    background-position: 0 -117px;
    width: 24px;
    height: 32px;
    top: 10px
}

.btn-in-block {
    text-align: center;
    padding: 10px 0 20px 0
}

.modal-body {
    padding: 0;
    background-color: #f1f1f1;
    border-radius: 8px;
    overflow: hidden
}

.icon-head {
    box-shadow: 0 4px 9px -5px rgba(0, 0, 0, .2);
    background-color: #fff;
    padding: 10px 0
}

.icon-head .info-ticker {
    background: url(../img/info-tick-icon.png) no-repeat;
    width: 47px;
    height: 47px;
    background-size: 100%;
    margin: 0px auto
}

.modal-full {
    margin: 0 40px;
    top: 40px;
    position: absolute
}

.detailed-report-block {
    padding: 25px 0;
    text-align: center;
    color: #8f8f8f;
    font-size: 17px;
    font-family: 'HelveticaNeue', 'Helvetica Neue', 'HelveticaNeueLTStd-Md', Helvetica, Arial, 'Lucida Grande', sans-serif;
    margin-left: 20px;
    margin-right: 20px;
}

.form-control.field-report {
    border: 0;
    border-bottom: solid 1px #ccc;
    background-color: #f0f0f0;
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    box-shadow: none
}

.send-card-block {
    border: solid 2px #e61b52;
    border-radius: 50px;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    overflow: hidden;
    width: 70px;
    height: 70px;
    margin: 0 auto
}

.chat-mess-age {
    border: 0;
    background: none;
}

.chat-mess-age::-webkit-input-placeholder {
    font-size: 15px;
}

.chat-mess-age::-moz-placeholder {
    font-size: 15px
}

/* firefox 19+ */
.chat-mess-age:-ms-input-placeholder {
    font-size: 15px
}

/* ie */

.chat-mess-age-block {
    padding: 25px 0;
    text-align: center;
    color: #8f8f8f;
    font-size: 17px;
    font-family: 'HelveticaNeue', 'Helvetica Neue', 'HelveticaNeueLTStd-Md', Helvetica, Arial, 'Lucida Grande', sans-serif;
    border-bottom: solid 1px #a3a3a3;
    margin-left: 30px;
    margin-right: 30px
}

.chat-mess-age-block .quote {
    color: #e61b52;
    font-size: 20px;
    font-family: 'gotham-bold';
    font-weight: 700
}

.contact-card-opt {
    text-align: center;
    padding: 65px 0 45px 0
}

.contact-card-opt ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: inline-block
}

.contact-card-opt ul li {
    display: inline-block;
    margin: 10px
}

.contact-card-opt ul li a {
    display: block;
    width: 51px;
    height: 51px;
    text-indent: -9999px
}

.contact-card-opt ul li a.loc-pin {
    background: url(../img/loc-pin-icon.png) no-repeat;
    background-size: 100%;
}

.contact-card-opt ul li a.call {
    background: url(../img/call-icon.png) no-repeat;
    background-size: 100%;
}

.btn-in-block ul {
    padding: 0;
    margin: 0;
    list-style: none
}

.btn-in-block ul li {
    display: inline-block;
    margin: 0 10px
}

.btn-primary {
    background-color: #e61b52;
    border: 0;
    padding: 8px 15px;
    border-radius: 20px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    font-size: 16px;
    min-width: 120px
}

.btn-default {
    background-color: #dcdcdc;
    border: 0;
    padding: 8px 15px;
    border-radius: 20px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    text-transform: uppercase;
    font-size: 16px;
    color: #8f8f8f;
    min-width: 120px
}

a.btn-default:hover, a .btn-default:focus {
    color: #8f8f8f;
    background-color: #cccbcb;
}
.transparent{
    background: transparent !important;
}
#v-subscribe{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index:1;
    background: url("../img/loader.gif") no-repeat 50% 50%;
}
#v-publisher{
    position: absolute;
    right: 10px;
    top: 10px;
    z-index:2;
    width: 80px;
    height:100px;
    outline: 1px solid #fff;
    background: url("../img/loader.gif") no-repeat 50% 50%;
}
.call_container_black{
    background: #000000;
}
.call-opt {
    position: absolute;
    padding: 0;
    margin: 0;
    list-style: none;
    bottom: 70px;
    left: 0;
    width: 100%;
}

.call-opt li {
    position: absolute;
    z-index: 11;
}

.call-opt li a {
    text-indent: -9999px;
    display: block;
}

.call-opt li.drop-icon {
}

.call-opt li.drop-icon a {
    background: url(../img/drop-icon.png) no-repeat;
    width: 30px;
    height: 41px;
    background-size: 100%;
    margin-left: 35px;
}

.call-opt li.report-icon {
  left:0;
}

.call-opt li.report-icon a {
  background: url(../img/lock.png) no-repeat;
  width: 65px;
  height: 41px;
  background-size: 100%;
}

.call-opt li.call-icon {
    left:50%;
    margin-left: -33px;
}

.call-opt li.call-icon a {
    background: url(../img/ph-icon.png) no-repeat;
    width: 65px;
    height: 41px;
    background-size: 100%;
    margin: 0 auto
}

.call-opt li.timer-icon {
    right: 0;
}

/*.call-opt li.timer-icon a {*/
    /*background: url(../img/timer-icon.png) no-repeat;*/
    /*width: 36px;*/
    /*height: 41px;*/
    /*background-size: 100%;*/
    /*display: block;*/
    /*margin-right: 35px;*/
/*}*/

.settings.contact-settings ion-item span.fb {
    background-image: url('../img/facebook.png') !important;
    background-repeat: no-repeat !important;
}

.settings.contact-settings ion-item span.whatsapp {
    background-image: url('../img/whatsapp.png') !important;
    background-repeat: no-repeat !important;
}

.settings.contact-settings ion-item span.email {
    background-image: url('../img/email.png') !important;
    background-repeat: no-repeat !important;
}

.settings.contact-settings ion-item span.twitter {
    background-image: url('../img/twitter.png') !important;
    background-repeat: no-repeat !important;
}

.settings.contact-settings ion-item span.instagram {
    background-image: url('../img/instagram.png') !important;
    background-repeat: no-repeat !important;
}

.send-card-opt {
    text-align: center;
    padding: 25px 0 15px 0
}

.send-card-opt ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: inline-block
}

.send-card-opt ul li {
    display: inline-block;
    margin: 10px 5px 5px 5px;
}

.send-card-opt ul li a {
    background: url(../img/pickcontact-card.png) no-repeat;
    display: block;
    width: 50px;
    height: 50px;
    text-indent: -9999px;
    border: solid 2px #8f8f8f;
    border-radius: 50px;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    background-size: 235px 169px
}

.send-card-opt ul li a:hover, .send-card-opt ul li a:focus, .send-card-opt ul li a.active {
    background-color: #e61b52;
    border-color: #e61b52
}

.send-card-opt ul li a.twitter-icon {
    background-position: 10px -71px;
}

.send-card-opt ul li a.twitter-icon:hover, .send-card-opt ul li a.twitter-icon:focus, .send-card-opt ul li a.twitter-icon.active {
    background-position: 10px 14px;
}

.send-card-opt ul li a.fb-icon {
    background-position: -59px -72px;
}

.send-card-opt ul li a.fb-icon:hover, .send-card-opt ul li a.fb-icon:focus, .send-card-opt ul li a.fb-icon.active {
    background-position: -59px 14px;
}

.send-card-opt ul li a.call-icon {
    background-position: -131px -72px;
}

.send-card-opt ul li a.call-icon:hover, .send-card-opt ul li a.call-icon:focus, .send-card-opt ul li a.call-icon.active {
    background-position: -131px 14px;
}

.send-card-opt ul li a.bell-icon {
    background-position: -201px -72px;
}

.send-card-opt ul li a.bell-icon:hover, .send-card-opt ul li a.bell-icon:focus, .send-card-opt ul li a.bell-icon.active {
    background-position: -201px 14px;
}

.send-card-opt ul li a.save-icon {
    background-position: 9px -113px;
}

.send-card-opt ul li a.save-icon:hover, .send-card-opt ul li a.save-icon:focus, .send-card-opt ul li a.save-icon.active {
    background-position: 9px -29px;
}

.send-card-opt ul li a.pin-icon {
    background-position: -61px -114px;
}

.send-card-opt ul li a.pin-icon:hover, .send-card-opt ul li a.pin-icon:focus, .send-card-opt ul li a.pin-icon.active {
    background-position: -61px -29px;
}

.send-card-opt ul li a.whatsapp-icon {
    background-position: -130px -114px;
}

.send-card-opt ul li a.whatsapp-icon:hover, .send-card-opt ul li a.whatsapp-icon:focus, .send-card-opt ul li a.whatsapp-icon.active {
    background-position: -130px -29px;
}

.send-card-opt ul li a.email-icon {
    background-position: -201px -114px;
}

.send-card-opt ul li a.email-icon:hover, .send-card-opt ul li a.email-icon:focus, .send-card-opt ul li a.email-icon.active {
    background-position: -201px -29px;
}

.holder {
    width: 100%;
}

.pocket-head .pocket-icon {
    background: url(../img/pocket-icon.png) no-repeat;
    width: 47px;
    height: 47px;
    background-size: 100%;
    margin: 0px auto
}

.pocket-head .settings-icon {
    background: url(../img/settings-icon.png) no-repeat;
    width: 47px;
    height: 47px;
    background-size: 100%;
    margin: 0px auto;
    margin-bottom: 15px;
}

.pocket-slides {
    padding: 0 35px 20px 10px
}

.pocket-slides .slide {
    margin-bottom: 15px;
    transition: all linear 0.3s;
    width: 100%;
    height: auto;
}

.sort-by-letter {
    position: relative;
    right: -2%;
    text-align: right;
    float: right;
}

.sort-by-letter ul {
    padding: 0;
    margin: 0;
    list-style: none
}

.sort-by-letter ul li a {
    display: block;
    padding: 3px 5px;
    color: #e61b52
}

.text-head {
    right: 0;
    float: right;
    padding-right: 25px;
    padding-left: 25px;
    padding-bottom: 10px;
    color: #f10950;
    font-size: 17px;
}

.pocket-container {
    background-color: #f0f0f0;
    min-height: 100vh;
}

.pocket-container-mb-55 {
    margin-bottom: 55px;
}

.pocket-container-mb-95 {
    margin-bottom: 95px;
}

.pocket-close-icon {
    background: url(../img/close-icon-pocket.png) no-repeat;
    width: 58px;
    height: 58px;
    background-size: 100%;
    position: absolute;
    float: right;
    top: 25%;
    top: calc(50% - 39px);
    right: 50%;
    right: calc(50% - 29px);
    z-index: 10;
}

.pocket-slide-swap {
    left: -100px
}

.search-block {
    position: relative;
    top: 9px;
    background-color: #e1e1e1;
    border-radius: 6px;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    padding: 2px;
    height: 38px;
    margin: 20px 20px;
    padding: 2px 20px 2px 100px
}

.search-filed {
    border: 0;
    background-color: transparent;
    box-shadow: none;
    font-family: 'HelveticaNeue', 'Helvetica Neue', 'HelveticaNeueLTStd-Md', Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-size: 16px;
    position: absolute;
    width: 80%;
    left: 5%;
}

.search-btn {
    position: absolute;
    right: 5%;
    top: 30%;
    text-indent: -9999px;
    background: url(../img/search-icon.png) no-repeat;
    width: 14px;
    height: 14px;
    background-size: 100%
}

.send-card-opt.pocket-options ul {
    left: 0;
    top: 20%;
    width: 100%;
    max-width: 220px;
    margin: 0 auto;
}

.send-card-opt.pocket-options ul li a {
    border-color: #fff;
    width: 45px;
    height: 45px
}

.send-card-opt.pocket-options ul li a.call-icon {
    background-position: -133px 11px;
}

.send-card-opt.pocket-options ul li a.call-icon:hover, .send-card-opt.pocket-options ul li a.call-icon:focus, .send-card-opt.pocket-options ul li a.call-icon.active {
    background-position: -133px 11px;
}

.send-card-opt.pocket-options ul li a.pin-icon {
    background-position: -63px -31px;
}

.send-card-opt.pocket-options ul li a.pin-icon:hover, .send-card-opt.pocket-options ul li a.pin-icon:focus, .send-card-opt.pocket-options ul li a.pin-icon.active {
    background-position: -63px -31px;
}

.send-card-opt.pocket-options ul li a.bell-icon {
    background-position: -204px 11px;
}

.send-card-opt.pocket-options ul li a.bell-icon:hover, .send-card-opt.pocket-options ul li a.bell-icon:focus, .send-card-opt.pocket-options ul li a.bell-icon.active {
    background-position: -204px 11px;
}

.send-card-opt.pocket-options ul li a.twitter-icon {
    background-position: 8px 11px;
}

.send-card-opt.pocket-options ul li a.twitter-icon:hover, .send-card-opt.pocket-options ul li a.twitter-icon:focus, .send-card-opt.pocket-options ul li a.twitter-icon.active {
    background-position: 8px 11px;
}

.send-card-opt.pocket-options ul li a.fb-icon {
    background-position: -62px 11px;
}

.send-card-opt.pocket-options ul li a.fb-icon:hover, .send-card-opt.pocket-options ul li a.fb-icon:focus, .send-card-opt.pocket-options ul li a.fb-icon.active {
    background-position: -62px 11px;
}

.send-card-opt.pocket-options ul li a.save-icon {
    background-position: 7px -31px;
}

.send-card-opt.pocket-options ul li a.save-icon:hover, .send-card-opt.pocket-options ul li a.save-icon:focus, .send-card-opt.pocket-options ul li a.save-icon.active {
    background-position: 7px -31px;
}

.send-card-opt.pocket-options ul li a.whatsapp-icon {
    background-position: -133px -31px;
}

.send-card-opt.pocket-options ul li a.whatsapp-icon:hover, .send-card-opt.pocket-options ul li a.whatsapp-icon:focus, .send-card-opt.pocket-options ul li a.whatsapp-icon.active {
    background-position: -133px -31px;
}

.send-card-opt.pocket-options ul li a.email-icon {
    background-position: -204px -31px;
}

.send-card-opt.pocket-options ul li a.email-icon:hover, .send-card-opt.pocket-options ul li a.email-icon:focus, .send-card-opt.pocket-options ul li a.email-icon.active {
    background-position: -204px -31px;
}

.head-title {
    text-align: center;
    padding: 10px 0 0;
    color: #e61b52;
    position: relative;
    top: -10px;
}

.head-title-pocket {
    top: 5px;
}

.head-title span {
    left: 0;
    white-space: nowrap;
    /*-webkit-transition: all 0.3s;
      transition: all 0.3s;*/
}

.prevSlide .head-title span,
.head-title-prev span,
.nextSlide .head-title span,
.head-title-next span {
    position: absolute;
    left: -50px;
    color: #8f8f8f
}

.prevSlide .head-title span,
.head-title-prev span {
    left: auto;
    left: 90%;
}

body.settings {
    background: #f1f1f1
}

.settings ul li a.add2 {
    color: #8f8f8f
}

.settings ul {
    padding: 0 0 0 0;
    margin: 0;
    list-style: none;
}

.settings ul.bad-things {
    padding-top: 7vw;
    padding-bottom: 4vw;
}
.settings ul.bad-things p.small-text{
    margin-bottom: 2.66vw;
}

.settings ul.bad-things li {
    border-top: 1px solid #c8c7cc;
    border-bottom: 1px solid #c8c7cc;
}

.settings ul.left-list {
    background: white;
    padding-left: 4.26vw;
    padding-top: 0;
    margin-top: 7.86vw;
    border-top: 1px solid #c8c7cc;
    border-bottom: 1px solid #c8c7cc;
}

.settings .left-list-security .list {
    border-top: 1px solid #c8c7cc;
    border-bottom: 1px solid #c8c7cc;
}

.settings .left-list-security .list .selection__content {
    font-size: 4.66vw;
}

.settings ul.left-list.looking {
    margin-top: 17px;
}

.list-block-selection .list {
    padding: 1px 0;
}

.list-block-selection .item {
    background-color: #fff;
    margin-bottom: 1px;
}

.list-block-selection .item .item-content {
    padding: 10px 0 10px 0;
}

.item.add-more {
    padding: 0;
}

.settings ul.left-list li {
    padding-left: 0;
}

.left-list span {
    position: relative;
    top: -4px;
}

.settings ul li {
    background-color: #fff;
    padding: 0;
    height: 11.73vw;
    line-height: 11.73vw;
    border-bottom: solid 1px #e6e6e6;
    font-size: 4.66vw;
    font-family: 'HelveticaNeue', 'Helvetica Neue', 'HelveticaNeueLTStd-Md', Helvetica, Arial, 'Lucida Grande', sans-serif;
}

.settings ul li:last-child {
    border-bottom: none;
}

.settings--discovery ul li {
    overflow: hidden;
    line-height: 37px;
    padding-bottom: 0;
}

.settings ul li a {
    color: #5d5d5d
}

.settings ul li a:hover, .settings ul li a:focus, .settings ul li a.active {
    color: #e61b52
}

.settings .list-block li.add-more a:hover, .settings .list-block li.add-more a:focus, .settings .list-block li.add-more a.active {
    color: #e61b52
}

a.deactivate-account-link {
    text-align: center;
    color: #a7a7a7;
    padding: 0;
    font-size: 4.66vw;
    font-family: 'HelveticaNeue', 'Helvetica Neue', 'HelveticaNeueLTStd-Md', Helvetica, Arial, 'Lucida Grande', sans-serif;
    display: block;
    line-height: normal;
}

a.deactivate-account-link:hover, a.deactivate-account-link:focus {
    color: #5d5d5d
}

.label-title {
    position: relative;
    top: 10px;
    padding: 15px 20px 0;
    width: 100%;
    font-size: 14px;
    color: #7a7a7f;
    overflow: hidden;
    font-family: 'HelveticaNeue', 'Helvetica Neue', 'HelveticaNeueLTStd-Md', Helvetica, Arial, 'Lucida Grande', sans-serif;
}

.label-title--first {
    padding-top: 20px;
}

.label-title .pull-right {
    font-size: 4.26vw;
    color: #424242;
}

.settings.contact-settings li {
    position: relative;
    padding: 20px 0px 20px 70px
}

.settings.contact-settings li span.icon {
    position: absolute;
    left: 15px;
    top: 12px;
    background: url(../img/settings-contact-card@2x.png) no-repeat;
    display: block;
    background-size: 100%;
    height: 136px;
    width: 41px;
    height: 41px;
}

.item-content {
    border: none;
}

.settings.contact-settings ion-item {
    border: none;
    /* border-bottom: #000 solid 2px*/
}

.settings.contact-settings ion-item input {
    margin-left: 50px;
    font-size: 18px;
    color: #5d5d5d;
    width: 75%;
}

.settings.contact-settings ion-item span.icon {
    position: absolute;
    left: 15px;
    top: 12px;
    background: url(../img/settings-contact-card@2x.png) no-repeat;
    display: block;
    background-size: 100%;
    height: 136px;
    width: 41px;
    height: 41px;
}

.contact-settings ion-item span.icon.loc-pin {
    background-position: 0 -65px;
}

.contact-settings ion-item span.icon.bell-icon {
    background-position: 0 -131px;
}

.contact-settings ion-item span.icon.add-more {
    background-position: 0 -196px;
}

.contact-settings li span.icon.loc-pin {
    background-position: 0 -65px;
}

.contact-settings li span.icon.bell-icon {
    background-position: 0 -131px;
}

.contact-settings li span.icon.add-more {
    background-position: 0 -196px;
}

.settings {
    padding-bottom: 40px;
    max-width: 749px;
    margin: 0 auto;
    overflow: hidden;
}

.settings .slider-thumb li {
    border-bottom: 0;
    padding: 0;
    border-radius: 50%;
    position: relative;
    width: 12.53vw;
    height: 12.53vw;
    text-align: center;
    line-height: normal;
    overflow: visible;
    margin-right: 5.06vw;
}
.settings .slider-thumb li:last-child {
    margin-right: 0;
}

.settings .slider-thumb {
    padding: 0;
    margin: 0;
    margin-top: 10px;
    background-color: #fff
}

.settings .slider-thumb--pictures {
    margin-top: 2.66vw;
    max-height: none;
    overflow: hidden;
    padding: 2vw 0;
}

.settings .slider-thumb li.active a {
    padding: 0;
    position: absolute;
    overflow: hidden;
}

.settings .slider-thumb li.deleted {
    -webkit-animation: listItemDeleted 0.5s forwards;
    animation: listItemDeleted 0.5s forwards;
    overflow: hidden;
}

.pro-pic-bg {
    display: none;
}

.settings .slider-thumb li.active a .pro-pic-bg {
    background-color: rgba(230, 27, 82, .5);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius:50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    display: block;
}

.settings .slider-thumb li .cross-icon {
    background-image: url(../img/cross-icon.png);
    background-repeat: no-repeat;
    width: 12vw;
    height: 12vw;
    background-size: 4vw;
    background-position: center;
    display: block;
    margin: 0;
}

.settings .slider-thumb li.add {
    border: solid 0.53vw #e1e1e1;
    font-size: inherit;
    border-radius: 50%;
    width: 12vw;
    height: 12vw;
    position: relative;
    background-image: url(../img/plus-sign.png);
    background-repeat: no-repeat;
    background-size: 3vw;
    background-position: center;
}

.settings .slider-thumb li.add a {
    color: #e1e1e1;
    display: block;
    text-indent: -9999px;
    height: 12px;
    position: absolute;
    top: 18px;
    left: 18px;
    width: 12px;
    border: none;
}

.image-pop {
    -webkit-animation: imagePop 0.3s;
    animation: imagePop 0.3s;
    margin: 0 auto;
    max-width: 150%;
    position: absolute;
}

.deleted img {
    -webkit-animation: imageDeleted 0.5s forwards;
    animation: imageDeleted 0.5s forwards;
    margin: 0 auto;
    /*width: 0;*/
}

@keyframes imagePop {
    0% {
        width: 100%;
        top: 0%;
        left: 0%;
    }
    50% {
        width: 110%;
        top: -5%;
        left: -5%;
    }
    100% {
        width: 100%;
        top: 0%;
        left: 0%;
    }
}

@-webkit-keyframes imagePop {
    0% {
        width: 100%;
        top: 0%;
        left: 0%;
    }
    50% {
        width: 110%;
        top: -5%;
        left: -5%;
    }
    100% {
        width: 100%;
        top: 0%;
        left: 0%;
    }
}

@keyframes imageDeleted {
    0% {
        width: 100%;
    }
    50% {
        width: 70%;
    }
    100% {
        width: 0%;
    }
}

@-webkit-keyframes imageDeleted {
    0% {
        width: 100%;
    }
    50% {
        width: 70%;
    }
    100% {
        width: 0%;
    }
}

@keyframes listItemDeleted {
    0% {
        width: 54px;
    }
    50% {
        width: 50px;
        padding: 0;
        margin: 0;
    }
    99% {
        position: relative;
    }
    100% {
        width: 0%;
        padding: 0;
        margin: 0;
        display: none;
        position: absolute;
    }
}

@-webkit-keyframes listItemDeleted {
    0% {
        width: 54px;
    }
    50% {
        width: 54px;
    }
    99% {
        position: relative;
    }
    100% {
        width: 0%;
        padding: 0;
        margin: 0;
        position: absolute;
    }
}

.settings .slider-thumb li.add span {
    color: #e1e1e1;
    background: url(../img/plus-sign.png) no-repeat;
    width: 12px;
    height: 12px;
    background-size: 100%;
    margin: 0 auto;
    display: block;
    text-indent: -9999px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -6px;
    margin-left: -6px;
}

.settings .slider-thumb li.add a:focus {
    text-decoration: none
}

.profile-title {
    padding: 25px 15px 5px 15px
}

.settings ul.sub-menu {
    padding: 0;
    margin: 0;
    float: right;
}

.settings ul.sub-menu li {
    float: left;
    padding: 0;
    margin: 0;
    border: 0;
    position: relative
}

.settings ul.sub-menu li a.menu {
    float: left;
    padding: 10px 0;
    margin: 0;
    background: url(../img/reorder-control.png) no-repeat;
    width: 22px;
    height: 9px;
    background-size: 100%;
    text-indent: -9999px;
    margin-right: 10px;
    margin-top: 8px
}

.settings ul.sub-menu li a.delete {
    background-color: #e61b52;
    color: #fff;
    padding: 12px 5px;
    margin-right: -10px;
}

.settings li.add-more a {
    color: #aeaeae
}

.profile-note {
    padding: 10px 30px;
    text-align: center;
    font-size: 13px;
    font-family: 'gotham-book'
}

.video-chat .modal-backdrop {
    background-color: transparent
}

.slideElement {
    width: 100%;
    /*height: 157px;*/
    margin-bottom: 5%;
    overflow: hidden;
    height: auto;
    position: relative;
}

.modal.in .modal-dialog {
    -webkit-transform: translate(0, 15%);
    -ms-transform: translate(0, 15%);
    -o-transform: translate(0, 15%);
    transform: translate(0, 15%);
}

.pocket-icons {
    display: none;
}

.animate-show.ng-hide-add, .animate-show.ng-hide-remove {
    transition: all linear 0.5s;
    display: block !important;
}

.animate-show.ng-hide-add.ng-hide-add-active, .animate-show.ng-hide-remove {
    opacity: 0;
}

.animate-show.ng-hide-add, .animate-show.ng-hide-remove.ng-hide-remove-active {
    opacity: 1;
}

.slide.accept-slide img.accept-button {
    max-width: 60px;
    box-shadow: none;
    border-radius: 0;
    opacity: 1 !important;
    position: relative;
    top: 9%;
}

.slide.reject-slide img.reject-button {
    max-width: 60px;
    box-shadow: none;
    border-radius: 0;
    opacity: 1 !important;
    position: relative;
    top: 9%;
    left: 80%;
}

.slides {
    display: inline-block;
    position: relative;
}

.alpha_sidebar {
    position: absolute;
    right: 10px;
    z-index: 100;
    transition: all linear 0.3s;
}

.alpha_sidebar li {
    color: #e61b52;
    margin-bottom: 2px;
    cursor: pointer;
}

/*.modal {*/
/*background-color: transparent;*/
/*}*/

/*.modal-backdrop {*/
/*position: fixed;*/
/*top: 0;*/
/*right: 0;*/
/*bottom: 0;*/
/*left: 0;*/
/*z-index: 0;*/
/*background-color: #000;*/
/*}*/

.imgbg:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: -moz-linear-gradient(top, rgba(0, 0, 0, .8) 69%, rgba(0, 0, 0, 0) 31%, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(39%, rgba(0, 0, 0, 0)), color-stop(61%, rgba(0, 0, 0, 0)), color-stop(78%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 1)));
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 69%, rgba(0, 0, 0, 0) 31%, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 1) 100%);
    background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 69%, rgba(0, 0, 0, 0) 31%, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 1) 100%);
    background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 69%, rgba(0, 0, 0, 0) 31%, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 1) 100%);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 69%, rgba(0, 0, 0, 0) 31%, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00515151', endColorstr='#515151', GradientType=0);
}

.facebookButton {
    position: absolute;
    bottom: 20%;
    text-align: center;
    width: 100%;
}

.facebookButton a {
    color: #ffffff;
    border: 2px solid #ffffff;
    padding: 10px 15px;
    border-radius: 20px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
}

.help-chat-mess-age-block {
    margin-left: 15px;
    margin-right: 15px;
    padding: 5px 0;
}

@media (min-width: 450px) and (max-width: 640px) {
    .pocket-close-icon {
        top: 27%;
    }

    .slide.reject-slide img.reject-button {
        top: 10%;
        left: 87%;
    }

    .slide.accept-slide img.accept-button {
        top: 10%;
        left: 1%;
    }
}

@media (min-width: 320px) and (max-width: 359px) {
    .slider-thumb {
        padding-bottom: 10px;
        padding-top: 5px;
    }

    .slider-thumb ul li {
        margin: 0;
        width: 100%;
    }

    .slider-thumb img {
        width: 11.87vw;
        width: 11.87vw;
    }

    .settings .slider-thumb li .cross-icon {
        width: 16px;
        height: 16px;
        margin: 10px;
    }

    .caption-conainer-view ul {
        padding: 3px 0 0 0;
    }

    .caption-conainer-view ul li {
        font-size: 13px
    }

    .modal-full {
        margin: 0 20px
    }

    ul.chat-info-type li a {
        padding: 10px 0 10px 45px;
        bottom: 7px;
    }

    .modal-full {
        top: 20px
    }

    .pocket-close-icon {
        top: 25%;
    }

    .btn-default, .btn-primary {
        min-width: 102px
    }
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min--moz-device-pixel-ratio: 1.5), only screen and (min-resolution: 240dpi) {
    .sprite {
        background-image: url(img/pickcontact-card@2x.png);
    }
}

@media (min-height: 0) and (max-height: 510px) {
    .progress-bar-block {
        height: 25px;
    }

    .progress {
        height: 25px;
        line-height: inherit;
    }

    .chat-mess-age-block {
        padding: 15px 0;
    }

    .send-card-opt {
        padding: 10px 0
    }

    .send-card-opt ul li {
        margin: 5px;
    }

    .btn-in-block {
        padding: 10px 0;
    }

    .contact-card-opt {
        padding: 35px 0;
    }

    h1.logo {
        margin: 40px auto;
    }

    .carousel-discover1 {
        padding-bottom: 10px;
    }

    .carousel-discover2 {
        padding-top: 10px;
    }

    .progress-bar-block {
        margin-top: 0;
    }

    .title-block {
        padding: 0;
    }

    .pocket-head {
        padding: 5px 0;
    }

    .settings ul {
        padding: 10px 0 0 0;
    }

    .settings ul li {
        font-size: 15px;
    }

    .label-title {
        font-size: 15px;
    }

    .item {
        font-size: 15px;
    }

    .profile-title {
        padding: 15px 15px 5px 15px;
    }

    .item-complex .item-content {
        padding: 10px 50px 10px 15px;
    }

    .alpha_sidebar {
        font-size: 82%;
    }
}

@media (min-height: 511px) and (max-height: 589px) {
    .alpha_sidebar {
        font-size: 85%;
    }
}

@media (min-height: 590px) and (max-height: 619px) {
    .alpha_sidebar {
        font-size: 100%;
    }
}

@media (min-height: 620px) and (max-height: 644px) {
    .alpha_sidebar {
        font-size: 105%;
    }
}

@media (min-height: 645px) and (max-height: 689px) {
    .alpha_sidebar {
        font-size: 115%;
    }
}

@media (min-height: 690px) and (max-height: 719px) {
    .alpha_sidebar {
        font-size: 120%;
    }
}

@media (min-height: 720px) and (max-height: 850px) {
    .alpha_sidebar {
        font-size: 125%;
    }
}

@media (min-height: 800px) and (max-height: 2000px) {
    .slide.reject-slide img.reject-button {
        left: 90%;
    }

    .cross-txt, .tick-txt {
        top: 40%;
    }

    .slide.reject-slide img.reject-button, .slide.accept-slide img.accept-button {
        top: 24%;
    }
}

@media only screen and (orientation: landscape) {
    /*#screen {*/
        /*width: 100% !important;*/
        /*height: 100% !important;*/
    /*}*/

    .help-title {
        top: 0;
        padding-top: 5%;
    }

    .swipe {
        bottom: 4%;
    }

    .carousel-discover1 {
        padding-top: 10%;
    }

    .slider-pager {
        bottom: 15px;
    }

    .page-slider {
        height: auto;
    }
}

/*.angular-google-map-container {*/
/*height: 100vh;*/
/*z-index: 9999;*/
/*}*/

/*.google-map {*/
/*position: absolute;*/
/*left: 0;*/
/*right: 0;*/
/*bottom: 0;*/
/*z-index: 101;*/
/*height: 40%;*/
/*}*/

/*range slider*/
.ngrs-range-slider {
    border-left: none !important;
    border-right: none !important;
    border-radius: 0 !important;
    border-color: #ddd;
    background-color: #fff;
    color: #444;
    position: relative;
    z-index: 2;
    display: block;
    margin: -1px;
    padding: 10px !important;
    border-width: 1px;
    border-style: solid;
    font-size: 18px;
    font-family: 'HelveticaNeue', 'Helvetica Neue', 'HelveticaNeueLTStd-Md', Helvetica, Arial, 'Lucida Grande', sans-serif;
    margin-bottom: -5px !important;
}

.ngrs-range-slider .ngrs-handle {
    height: 7.33vw !important;
    width: 7.33vw !important;
    border-radius: 50% !important;
    background: #ffffff !important;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
    margin: 0 0 0 -3.62vw!important;
}

.ngrs-range-slider .ngrs-handle.ngrs-over i {
    background: none;
}

.ngrs-range-slider .ngrs-runner {
    height: 7.33vw !important;
    overflow: visible !important;
    margin: 2vw 7.33vw 0 7.33vw !important;
}

.ngrs-range-slider .ngrs-join {
    display: inline-block;
    overflow: hidden;
    margin: 0 !important;
    padding-right: 0px;
    padding-left: 0px;
    width: auto;
    top: 48% !important;
    height: 1px !important;
    outline: none;
    background: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ccc), color-stop(100%, #ccc));
    background: linear-gradient(to right, #ccc 0%, #ccc 100%);
    background-position: center;
    background-size: 99% 2px;
    background-repeat: no-repeat;
    -webkit-appearance: none;
    background-image: none !important;
    background-color: rgb(239, 39, 93) !important;
    z-index: 10;
}

.ngrs-runner {
    display: inline-block;
    overflow: hidden;
    margin-top: 5px;
    margin-bottom: 5px;
    padding-right: 2px;
    padding-left: 1px;
    width: auto;
    height: 43px;
    outline: none;
    background: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ccc), color-stop(100%, #ccc));
    background: linear-gradient(to right, #ccc 0%, #ccc 100%);
    background-position: center;
    background-size: 99% 1px;
    background-repeat: no-repeat;
    -webkit-appearance: none;
}

.ngrs-range-slider.ngrs-focus {
    border-color: #ddd !important;
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
}

.animated {
    visibility: hidden;
}

.visible {
    visibility: visible;
}

ion-view {
    transition-duration: 500ms !important;
    -webkit-transition-duration: 500ms !important;
}

div.pane {
    transition-duration: 1200ms !important;
    -webkit-transition-duration: 1200ms !important;
}

.gm-login {
    background: #ccc9d1 url('../images/imgo.jpg') no-repeat;
    background-size: 101%;
}

.fade-in-out.ng-enter, .fade-in-out .ng-enter {
    -webkit-animation: slideInUp 0.3s;
    -moz-animation: slideInUp 0.3s;
    animation: slideInUp 0.3s;
}

#networks div.list {
    padding: 20px 0 0 0;
}

.has-header-settings {
    top: 100px;
}

.has-header-pocket {
    top: 83px;
}

.hiding {
    -webkit-transition: all 1s;
    transition: all 1s;
    opacity: 0;
    height: 0 !important;
    margin: 0;
    padding: 0;
}

.hiding .delete-item {
    display: none;
}

.item.add-more {
    border-top: none;
}

.item.add-more input {
    width: 100%;
    position: relative;
    top: -1px;
    padding: 0 15px;
    font-size: 4.66vw;
    height: 11.73vw;
    line-height: 11.73vw;
    margin-left: 4.26vw;
}

.settings--discovery span {
    display: block;
    float: left;
    width: 33%;
}

.small-text {
    font-size: 3.73vw;
    font-weight: 400;
    text-align: left;
    font-family: 'HelveticaNeue', 'Helvetica Neue', 'HelveticaNeueLTStd-Md', Helvetica, Arial, 'Lucida Grande', sans-serif;
    padding-left: 4.26vw;
    color: #7a7a7f;
}

.item.active, .item.activated, .item-complex.active .item-content, .item-complex.activated .item-content, .item .item-content.active, .item .item-content.activated {
    background: none;
}

.left-list .list {
    margin-top: 20px;
    /*padding-left: 20px;*/
    color: #f10950;
    background: white;
}

.left-list-security .list {
    margin-top: 7.86vw;
}

.left-list .item:last-child .selection__content {
    border-bottom: none;
}

.left-list .list .item-content .selection__content__pink {
    color: #f10950;
}

.button.button-assertive.active, .button.button-assertive.activated {
    background-color: #d11e45;
}

.list-block-selection .button.button-assertive.active, .list-block-selection .button.button-assertive.activated {
    line-height: 45px;
    padding-top: 0;
}

.item-reorder .button.icon {
    color: #c7c7cc;
}

.status-bar-header {
    background: white;
    height: 25px;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.3);
}

.loading-screen-background {
    background-image: url(../img/ice-lolly-red-whole.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 17.6%;
    height: 100vh;
}

.item.item-share {
    padding: 0 15px 1px;
}

.item-options .button {
    min-height: 40px;
}

.contacts-content .disabled img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}

.gm-content.gm-with-background {
    /*background-image: url(../images/background.png);*/
}

.list-block-selection .item.item-2 {
    border-bottom: none;
}

/*New css modal pages Starts*/

.modal-item .modal-dialog {
    margin: 0 auto;
    width: 75.3vw;
    height: 69.3vw;
}

.modal-item .modal-body {
    padding: 0;
    background-color: white;
    height:52.13vw!important;
}

.modal-item .modal-info {
    text-align: center;
    color: #8f8f8f
}

.modal-item .modal-info .icon {
    text-align: center;
    padding: 0!important;
    margin: 8.53vw auto 0 auto;
    width: auto;
    height: 10.66vw;
}
.modal-item .modal-info .icon img{
    height: 100%;
    width: auto;
}

.modal-item .modal-info p {
    font-size: 4.66vw;
    color: #8f8f8f;
    font-weight: 500;
}

.modal-item .modal-info p.title {
    padding: 9.33vw 0;
    margin-bottom: 0;
    line-height: normal;
}

.modal-item .modal-info p.title span {
    display: block;
    font-size: 6.4vw;
    line-height: normal;
}

.modal-item .cant-talk {
    padding: 0px 0 10px 0;
    font-size: 3.86vw;
    margin-top: 1vw;
}

.modal-item .cant-talk a {
    font-weight: 700;
    color: #fd3257
}

.modal-item .modal-footer {
    background-color: #f9f9f9;
    border-radius: 0 0 6px 6px;
    text-align: center;
    padding: 0;
    height: 17.2vw;
    overflow: hidden;
}

.modal-item .modal-footer .time {
    font-size: 6.66vw;
    color: #fd3257;
    line-height: 17.2vw;
}

.modal-item .modal-footer .buttons {
    padding: 0;
    margin: 0;
    list-style: none
}

.modal-item .modal-footer .buttons li {
    float: left;
    width: 50%;
    font-size: 6.66vw;
}

.modal-item .modal-footer .buttons li.first a {
    border-right: solid 1px #e1e1e1;
    /*padding-right: 8px*/
}

.modal-item .modal-footer .buttons li a {
    display: block;
    text-align: center;
    padding: 0;
    color: #8f8f8f;
    line-height: 17.2vw;
}

.modal-item .modal-footer .buttons li a:hover, .modal-item .modal-footer .buttons li a:focus, .modal-item .modal-footer .buttons li a.active {
    color: #fd3257
}

.modal-item .modal-footer .buttons li.full {
    float: none;
    width: 100%
}

.modal-item .modal-info p.title span.rem-time {
    color: #fd3257;
    display: inline;
    font-size: 17px
}

.modal-item .modal-content {
    border-radius: 6px;
    box-shadow: none;
    border: solid 1px #e2e2e3;
}

.modal-item#match .modal-info p.title {
    padding-top: 16px;
    padding-bottom: 12px
}

.modal-item .cant-talk {
    padding-bottom: 5px
}

.modal-item#match .modal-info .icon {
    padding-bottom: 11px;
}

.modal-item#match .modal-body {
    height: 205px
}

.modal-item#match .cant-talk {
    padding-bottom: 0;
}

.modal-item#wait .modal-info .icon {
    padding-top: 19px;
    padding-bottom: 13px
}

.modal-item#wait .modal-body {
    height: 205px
}

.modal-item#wait .modal-info p.title {
    padding-bottom: 12px
}

.modal-item#wait .cant-talk {
    padding-bottom: 7px
}

.modal-item#no-luck .modal-body {
    border-radius: 8px;
    height: 195px
}

.modal-item#no-luck .modal-info .icon {
    padding-top: 0;
    padding-bottom: 0px;
}

.modal-item#no-luck .modal-body {
    border-radius: 8px;
    height: 52.13vw;
}

.modal-item#leave-the-game .modal-info .icon {
    padding-top: 16px;
    padding-bottom: 15px
}

.modal-item#times-up .modal-info .icon {
    padding-bottom: 9px
}

.modal-item#wait-for-partner,
.modal-item#no-luck,
.modal-item#times-up,
.modal-item#leave-the-game,
.modal-item#match,
.modal-item#wait {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    left: 0;
    background: rgba(0,0,0,0.5);
}

.modal-item#wait-for-partner .modal-info .icon {
    padding-top: 18px;
    padding-bottom: 16px
}

.modal-item#wait-for-partner .modal-body {
    border-radius: 8px;
    height: 194px
}

.modal-item#message-sent .modal-info .icon {
    padding-top: 6px;
    padding-bottom: 14px
}

.modal-item#message-sent .modal-body {
    border-radius: 8px;
    height: 194px
}

.modal-item#sex-selection .modal-info .icon {
    padding-bottom: 6px
}

.modal-item#sex-selection .modal-body {
    border-radius: 8px;
    height: 194px
}

.welcome-givme {
    text-align: center;
    margin: 0 10px;
}

.welcome-givme .pic {
    position: relative;
    margin-top: 42.26vw;
    margin-bottom: 24.01vw;
    vertical-align: middle;
    white-space: nowrap;
    text-align: center;
}

.welcome-givme .pic img {
    width: 17.6vw;
    max-width: 132px;
}

.welcome-givme .welcome-title {
    font-size: 6.53vw;
    color: #424242
}

.welcome-givme .welcome-subtitle {
    font-size: 4.66vw;
    color: #424242
}

.welcome-givme .fb-login {
    padding: 25.33vw 0 0 0;
}

.welcome-givme .fb-login .login-with-fb-btn {
    background-color: #3c5c97;
    color: #fff;
    padding: 5.07vw 15px;
    text-align: center;
    border-radius: 6px;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    margin: 0;
    display: inline-block;
    font-size: 5.86vw;
    line-height: normal;
    width: 76.53vw;
    max-width: 574px;
}

.welcome-givme p.note {
    font-size: 2.8vw;
    margin-top: 6.67vw;
    color: #656565;
}

.home-gevme {
    text-align: center;
    background: #fff url(../img/home-bg.png) repeat center top;
}

.home-gevme .list .main-menu-text:last-child {
    border-bottom: none;
}

.home-gevme .pic {
    text-align: center;
}

.home-gevme .pic img {
    width: 49.53%;
}

.home-gevme ul {
    padding: 0;
    margin: 0;
    list-style: none
}

.home-gevme .item-thumbnail-left.item-complex {
    margin: 0 70px;
    border-bottom: solid 1px #e4e4e4;
    padding: 0
}

.home-gevme .item-thumbnail-left.item-complex:first-child {
    padding-top: 0;
}

.home-gevme .main-menu-text,
.home-gevme .main-menu-text .item-content {
    background: transparent;
}

.home-gevme .main-menu-text .item-content {
    margin: 0;
}

.home-gevme .menu-row-holder {
    padding: 0;
    color: #979797;
    font-size: 6vw;
    line-height: 20.9vw;
    letter-spacing: 1px;
}

.home-gevme .rounded-rectangle {
    text-align: left;
}

.home-gevme ul li a {
    color: #979797;
    font-size: 23px
}

.home-gevme .slide-to {
    background-color: #fff;
    border: solid 1px #f0f0f0;
    box-shadow: inset 1px 1px 3px 2px rgba(0, 0, 0, .2);
    height: 82px;
    border-radius: 50px;
    margin-top: 75px;
    position: relative;
    margin-left: 35px;
    margin-right: 35px
}

.home-gevme .slide-to .slide-circle {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    background-color: #fd3257;
    line-height: 80px;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, .2)
}

.home-gevme .slide-to-play {
    font-size: 22px;
    color: #979797;
    margin-left: 120px;
    line-height: 82px;
    text-align: left;
    cursor: pointer;
}

.home-gevme .slide-to-play-text.active {
    color: #fd3257;
    animation: blink 3s infinite;
    -webkit-animation: blink 3s infinite;
}

@keyframes blink {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@-webkit-keyframes blink {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.selection__arrow img {
    width: 8px;
    height: auto;
}

/*New css modal pages End*/

.toggle .handle {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.35), 0 1px 1px rgba(0, 0, 0, 0.15);
}

.toggle .track {
    border: solid 1px #e6e6e6;
}

.toggle.toggle-assertive input:checked + .track {
    border-color: #fd3257;
    background-color: #fd3257;
}

.settings ul li.log-out {
    border-bottom: 1px solid #c8c7cc;
}

.button-icon .icon:before, .button-icon.icon:before {
    font-size: 32px;
    content: "";
    background: url("../img/reorder-control.png") no-repeat left top;
    width: 26px;
    height: 14px;
    background-size: 85%;
    margin-top: 6px;
}

#iceBreakers .item:nth-child(3), #languageItems .item:nth-child(3),
#iceBreakers .item:nth-child(4), #languageItems .item:nth-child(4),
#iceBreakers .item:nth-child(3) .item-content, #languageItems .item:nth-child(3) .item-content,
#iceBreakers .item:nth-child(4) .item-content, #languageItems .item:nth-child(4) .item-content{
    border-bottom: 0;
}

.settings .slider-thumb li {
    -moz-animation-duration: .5s;
    -webkit-animation-duration: .5s;
    animation-duration: .5s;
}

.bxslider.slider-pic .front img,
.bxslider.slider-pic .back img,
.bxslider1.slider-pic .front img,
.bxslider1.slider-pic .back img {
/ / height: 175 px !important;
/ / width: 339 px !important;
}

/*
 * Poking visuals
 */

.poking {
    color: black;
    text-align: center;
    font-size: 25px;
    height: 25px;
    position: fixed;
    top: calc((100vh - 25px) / 2);
    width: 100%;
    animation: blink 3s infinite;
    -webkit-animation: blink 3s infinite;
}

.end-call {
    width: 61px;
    height: 61px;
    position: absolute;
    bottom: 20px;
    background: url(../img/end-call-icon.png) top left no-repeat;
    background-size: 100%;
    left: calc((100% - 61px) / 2);
}

.blurred .OT_widget-container {
    -webkit-filter: grayscale(0.5) blur(17px);
    filter: grayscale(0.5) blur(17px);
}

.platform-ios.platform-cordova:not(.fullscreen) .bar-header:not(.bar-subheader) > * {
    margin-top: 0;
}

.faded {
    opacity: 0.6;
}

/*#screen {*/
    /*z-index: 999;*/
    /*width: 100%;*/
    /*position: absolute;*/
/*}*/

/*.background-screen {*/
    /*z-index: 999;*/
    /*width: 100%;*/
    /*height: 100%;*/
/*}*/

/*.background-screen.background-screen--poking {*/
    /*z-index: 0;*/
    /*opacity: 0.2;*/
/*}*/

.relative {
    height: 100vh;
}

.modal.in {
    display: block;
    opacity: 1;
}

.poke_background, .poke_background_opacity {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}

.poke_background_opacity {
    background: rgba(255, 255, 255, 0.8);
}

/*
@media  (min-width: 300px) and (max-width: 376px) {
  .welcome-givme .pic {
    padding: 155px 0 90px
  }
}
*/
.item-right-editable.item-reordering {
    padding-left: 20px;
}

.OT_video-container {
    position: absolute;
    right: 10px
}

video::-webkit-media-controls {
    display: none;
}

.popup-container.active .popup {
    border-radius: 10px;
    color: #8f8f8f;
    -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
}

.popup-container.active .popup .popup-head h3 {
    font-family: 'HelveticaNeue', 'Helvetica Neue', 'HelveticaNeueLTStd-Md', Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 0;
    color: #8f8f8f;
}

.popup-container.active .popup .popup-head h5 {
    font-size: 17px;
    color: #8f8f8f;
}

.popup-container.active .popup .popup-body ul {
    padding: 0;
    margin: 0;
}

.popup-container.active .popup .popup-body ul li {
    list-style: none;
    display: inline-block;
    border-bottom: 1px #e1e1e1 solid;
    width: 100%;
    padding: 10px;
}

.popup-container.active .popup .popup-buttons {
    border-top: 1px #e1e1e1 solid;
}

.popup-container.active .popup .popup-buttons button {
    color: #fd3257;
    font-size: 25px;
}

.popup-container.active .popup .popup-buttons button.back {
    border-right: 1px #e1e1e1 solid;
    padding: 10px 0 10px 10px;
    color: #8f8f8f;
}

.popup-container.active .popup .popup-buttons button.send {
    border-left: 1px #fff solid;
    padding: 10px 10px 10px 0;
}

.popup-container.active .popup .popup-body input {
    background-color: transparent;
    border: 0;
    padding: 0 10px;
    width: 100%;
    font-size: 17px;
    outline: 0;
    height: 22px;
}

.popup-container.active .popup .popup-body ul li:last-child {
    border-bottom: 0;
}

.blur {
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
}

.backdrop.active {
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
    z-index: 1004;
}

.popup-container {
    z-index: 1005;
}

.popup-container.active .red-twin-lolly {
    background: url(../img/ice-lolly-red-twin.png) no-repeat center;
    background-size: 67px 40px;
    justify-content: center;
    width: 100%;
    height: 40px;
    display: block;
    margin-bottom: 20px;
}

.popup-container.active .phone {
    background: url('../img/phone.png') no-repeat center;
    background-size: 34px;
    vertical-align: middle;
}

.popup-container.active .facebook {
    background: url('../img/facebook.png') no-repeat center;
    background-size: 34px;
    vertical-align: middle;
}

.popup-container.active .snapchat {
    background: url('../img/snapchat.png') no-repeat center;
    background-size: 34px;
    vertical-align: middle;
}

.popup-container.active .instagram {
    background: url('../img/instagram.png') no-repeat center;
    background-size: 34px;
    vertical-align: middle;
}

.popup-container.active .skype {
    background: url('../img/skype.png') no-repeat center;
    background-size: 34px;
    vertical-align: middle;
}

.popup-container.active .phoneg {
    background: url('../img/phoneg.png') no-repeat center;
    background-size: 34px;
    vertical-align: middle;
}

.popup-container.active .facebookg {
    background: url('../img/facebookg.png') no-repeat center;
    background-size: 34px;
    vertical-align: middle;
}

.popup-container.active .snapchatg {
    background: url('../img/snapchatg.png') no-repeat center;
    background-size: 34px;
    vertical-align: middle;
}

.popup-container.active .instagramg {
    background: url('../img/instagramg.png') no-repeat center;
    background-size: 34px;
    vertical-align: middle;
}

.popup-container.active .skypeg {
    background: url('../img/skypeg.png') no-repeat center;
    background-size: 34px;
    vertical-align: middle;
}

.popup.active .lightning {
    background: url(../img/lightning.png) no-repeat center;
    background-size: 31px 40px;
    justify-content: center;
    width: 100%;
    height: 40px;
    display: block;
    margin-bottom: 20px;
    margin-top: 20px;
}

.newProfilePhoto {
    width: 100%;
}

.OT_video-container video {
   display: none;
}

/*Fix Toggle Responsive*/


.toggle{
    margin: 1.6vw 3.86vw 0 0;
    padding: 0;
}
.left-list span{
    top: 0;
    height: 100%;
}
.toggle .track{
    width: 13.6vw;
    height: 8.26vw;
    border-radius: 8.26vw;
}
.toggle .handle{
    width: 7.46vw;
    height: 7.46vw;
    border-radius: 50%;
    top: 0.4vw;
    left:0;
}
.toggle input:checked + .track .handle {
    -webkit-transform: translate3d(6vw, 0, 0);
    transform: translate3d(6vw, 0, 0);
    background-color: #fff; }


.platform-android .bar .title{
    font-size: 5vw;
}
.settings .label-title{
    top:auto;
    margin-top: 6.93vw;
    padding: 0 4.26vw;
    font-size: 3.73vw;
}
.settings .ngrs-range-slider{
    margin: 2.13vw 0 0 0!important;
    padding: 0!important;
    height: 11.73vw;
}
.list-block-selection .item-options{
    right: 15px;
}
.list-block-selection .item{
    padding: 0 15px;
}
@media (min-width: 750px) {
    .home-gevme .menu-row-holder {
        font-size: 45px;
    }

    .welcome-givme .welcome-title {
        font-size: 49px;
    }

    .welcome-givme .welcome-subtitle {
        font-size: 35px;
    }

    .welcome-givme .fb-login .login-with-fb-btn {
        font-size: 44px;
    }

    .welcome-givme p.note {
        font-size: 21px;
    }

    .left-list-security .list {
        margin-top: 59px;
    }

    .settings .left-list-security .list .selection__content {
        font-size: 35px;
    }

    .settings ul.left-list {
        margin-top: 59px;
    }

    .settings ul.left-list {
        padding-left: 32px;
    }
    .settings ul li {
        height: 88px;
        line-height: 88px;
        font-size: 35px;
    }
    .small-text {
        font-size: 28px;
        padding-left: 32px;
    }
    .settings ul.bad-things {
        padding-top: 54px;
        padding-bottom: 30px;
    }
    .settings ul.bad-things p.small-text{
        margin-bottom: 20px;
    }
    a.deactivate-account-link {
        font-size: 35px;
    }
    .toggle{
        margin: 12px 29px 0 0;
    }
    .toggle .track{
        width: 102px;
        height: 62px;
        border-radius: 62px;
    }
    .toggle .handle{
        width: 56px;
        height: 56px;
        top: 3px;
    }
    .toggle input:checked + .track .handle {
        -webkit-transform: translate3d(45px, 0, 0);
        transform: translate3d(45px, 0, 0);
    }


    .settings .label-title{
        margin-top: 52px;
        padding: 0 32px;
        font-size: 28px;
    }
    .label-title .pull-right {
        font-size: 32px;
    }
    .platform-android .bar .title{
        font-size: 38px;
    }
    .settings .ngrs-range-slider{
        margin: 16px 0 0 0!important;
        padding: 0!important;
        height: 88px;
    }
    .ngrs-range-slider .ngrs-handle {
        height: 55px !important;
        width: 55px !important;
        margin: 0 0 0 -27px!important;
    }
    .ngrs-range-slider .ngrs-runner {
        height: 55px !important;
        overflow: visible !important;
        margin: 15px 55px 0 55px !important;
    }


    .settings .slider-thumb--pictures {
        margin-top: 20px;
        max-height: none;
        overflow: hidden;
        padding: 15px 0;
    }
    .settings .slider-thumb li .cross-icon {
        width: 90px;
        height: 90px;
        background-size: 30px;
    }
    .settings .slider-thumb li.add {
        border: solid 4px #e1e1e1;
        width: 90px;
        height: 90px;
        background-size: 22px;
    }
    .settings .slider-thumb li {
        width: 94px;
        height: 94px;
        margin-right: 38px;
    }
    .slider-thumb img {
        width: 90px;
        height: 90px;
        border: 4px solid white;
    }
    .item.add-more input {
        font-size: 35px;
        height: 88px;
        line-height: 88px;
        margin-left: 32px;
    }

    .welcome-givme .pic {
        margin-top: 317px;
        margin-bottom: 180px;
    }
    .welcome-givme .fb-login {
        padding: 190px;
    }
    .welcome-givme .fb-login .login-with-fb-btn {
        padding: 38px 15px;
    }
    .welcome-givme p.note {
        margin-top: 50px;
    }
    .home-gevme .menu-row-holder {
        line-height: 157px;
    }

    .modal-item .modal-dialog {
        width: 565px;
        height: 520px;
    }
    .modal-item .modal-info .icon {
        margin: 64px auto 0 auto;
        height: 80px;
    }
    .modal-item .modal-info p {
        font-size: 35px;
    }
    .modal-item .modal-info p.title {
        padding: 70px 0;
    }
    .modal-item .modal-info p.title span {
        font-size: 48px;
    }
    .modal-item .modal-footer {
        height: 129px;
    }
    .modal-item .modal-footer .buttons li {
        font-size: 50px;
    }
    .modal-item .modal-footer .buttons li a {
        line-height: 129px;
    }
    .modal-item .modal-body {
        height: 391px!important;
    }

    .modal-item .cant-talk {
        font-size: 29px;
        margin-top: 8px;
    }
    .modal-item .modal-footer .time {
        font-size: 50px;
        line-height: 129px;
    }
}
