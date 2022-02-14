var CONFIG = {
	"forms": {
		"activate_form" : {
			"hidden" : {
				"register-currency": "",
				"fullname": ""
			},
			"modal": false
		},
		"exit_form" : {
			"hidden" : {
				"register-currency": "",
				"fullname": ""
			},
			"modal": false
		},
		"wait_form" : {
			"hidden" : {
				"register-currency": "",
				"fullname": ""
			},
			"modal": false
		},
		"register_form" : {
			"hidden" : {
				"register-currency": "",
				"firstname": "",
				"lastname":""
			},
			"modal": false
		},
		"call_back_form" : {
			"hidden" : {
				"firstname": "unknown",
				"lastname": "unknown",
				"email": "unknown",
				"age": "18",
				"register-currency": "",
				"fullname": ""
			},
			"modal": false
		}
	},
	"registration" : false,
	"iframe" : false,
	"source-id" : "0",
	"style" : "@keyframes lds-facebook_1{0%{top:36px;height:128px}50%{top:60px;height:80px}100%{top:60px;height:80px}}@-webkit-keyframes lds-facebook_1{0%{top:36px;height:128px}50%{top:60px;height:80px}100%{top:60px;height:80px}}@keyframes lds-facebook_2{0%{top:42px;height:116px}50%{top:60px;height:80px}100%{top:60px;height:80px}}@-webkit-keyframes lds-facebook_2{0%{top:42px;height:116px}50%{top:60px;height:80px}100%{top:60px;height:80px}}@keyframes lds-facebook_3{0%{top:48px;height:104px}50%{top:60px;height:80px}100%{top:60px;height:80px}}@-webkit-keyframes lds-facebook_3{0%{top:48px;height:104px}50%{top:60px;height:80px}100%{top:60px;height:80px}}.lds-facebook{position:relative}.lds-facebook div{position:absolute;width:30px}.lds-facebook div:nth-child(1){left:35px;background:#fdfdfd;-webkit-animation:lds-facebook_1 1s cubic-bezier(0,0.5,0.5,1) infinite;animation:lds-facebook_1 1s cubic-bezier(0,0.5,0.5,1) infinite;-webkit-animation-delay:-.2s;animation-delay:-.2s}.lds-facebook div:nth-child(2){left:85px;background:#85a2b6;-webkit-animation:lds-facebook_2 1s cubic-bezier(0,0.5,0.5,1) infinite;animation:lds-facebook_2 1s cubic-bezier(0,0.5,0.5,1) infinite;-webkit-animation-delay:-.1s;animation-delay:-.1s}.lds-facebook div:nth-child(3){left:135px;background:#bbcedd;-webkit-animation:lds-facebook_3 1s cubic-bezier(0,0.5,0.5,1) infinite;animation:lds-facebook_3 1s cubic-bezier(0,0.5,0.5,1) infinite}.lds-facebook{width:200px!important;height:200px!important;-webkit-transform:translate(-100px,-100px) scale(1) translate(100px,100px);transform:translate(-100px,-100px) scale(1) translate(100px,100px);margin:20% auto 0}.wait-window{z-index:999999;position:relative;position:fixed;top:0;left:0;width:100%;height:100%;display:none;}",
	"iframe-template": "<iframe src='' id='iframe' style='display:none'></iframe>",
	"modal-template" : "<div id='postModal' class='modal fade' tabindex='-1' role='dialog'> <div class='modal-dialog' role='document'> <div class='modal-content'> <div class='modal-body'> <a type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></a><div class='alert' role='alert'></div></div></div></div></div>",
	"inputs-template" : {
		"fullname": "<div class='form_group--name'><input data-validation-type='fullname' autocomplete='name' type='text' name='fullname' placeholder='الاسم بالكامل' required><div class='validation'><i class='fjs fjs-exclamation'></i></div><div class='error'></div></div>",
		"firstname" : "<div class='form_group--name'> <input data-validation-type='firstname' autocomplete='given-name' name='firstname' placeholder='الإسم' required><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		"lastname" : "<div class='form_group--name'> <input data-validation-type='lastname' autocomplete='family-name'  placeholder='لقب' name='lastname' value='' required><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		"email" : "<div class='form_group--email'> <input type='email' data-validation-type='email' autocomplete='email' name='email' placeholder='البريد الإلكتروني' required><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		"phone" : "<div class='form_input--group'><input  data-validation-type='phone' name='phone' placeholder='' required><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		"code" : "<div class='form_input--group code' style='display:none'><p>في غضون دقيقة سوف يتم الاتصال بك. أدخل أول خمسة أرقام من الرقم الوارد</p><input type='hidden' data-validation-type='code' name='code' placeholder='أدخل أول خمسة أرقام' required><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		"conditions" : "<div class='checkbox-wrapper'> <label><input  class='inverted' required name='conditions' type='checkbox' data-validation-type='conditions' checked> أنا أتفق مع <a href='#' data-terms='use'>اتفاقية العميل</a></label><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		"age" : "<div class='checkbox-wrapper'> <label><input  class='inverted' required name='age' type='checkbox' data-validation-type='age' checked> عمري أكثر من 18 عامًا وأنا أُوافق على اتفاقية الزّبون</label><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		"register-currency" : "<div class='form_group--radio'><input class='form_group--radio-input' value='rub' id='radio-1' name='register-currency' checked='' type='radio'> <label for='radio-1'>Ruble</label> <input class='form_group--radio-input' value='usd' id='radio-2' name='register-currency' type='radio'> <label for='radio-2'>Dollar</label> <input class='form_group--radio-input' value='eur' id='radio-3' name='register-currency' type='radio'> <label for='radio-3'>Euro</label> </div>"
	},
	"main-template" : "<div class='form_group--hidden'> <input type='hidden' data-validation-type='bcamp_id' name='bcamp_id'> <input type='hidden' data-validation-type='buid' name='buid'> <input type='hidden' data-validation-type='tsid' name='tsid'> <input type='hidden' data-validation-type='plid' name='plid'> <input type='hidden' data-validation-type='affid' name='affid'> <input type='hidden' data-validation-type='subid' name='subid'> <input data-validation-type='offerid' name='offerid' type='hidden'> <input data-validation-type='transactionid' name='transactionid' type='hidden'> <input data-validation-type='domain' name='domain' type='hidden'></div><div class='form_group--button'> <div class='modal-buttons--spans'><span></span><span></span></div><div class='modal-buttons--button'><button class='modal-close'>العودة إلى الموقع</button><button class='send-form btn primary-btn' type='submit' >تسجيل</button></div></div>",
	"trackersTemplates": [
		{
			"name": "facebook",
			"enabled": true,
			"id": 0,
			"events": [
					{
						"name": "load",
						"code": "console.log('load event')"
					},
					{
						"name": "registration",
						"code": "console.log('registration event')"
					}
				]
		},
		{
			"name": "google",
			"enabled": false,
			"id": 0,
			"events": [
				{
					"name": "load",
					"code": "console.log('load event')"
				},
				{
					"name": "registration",
					"code": "console.log('registration event')"
				}
			]
		},
		{
			"name": "yandex",
			"enabled": false,
			"id": 0,
			"events": [
				{
					"name": "load",
					"code": "console.log('load event')"
				},
				{
					"name": "registration",
					"code": "console.log('registration event')"
				}
			]
		},
		{
			"name": "tiktok",
			"enabled": false,
			"id": 0,
			"events": [
				{
					"name": "load",
					"code": "console.log('load event')"
				},
				{
					"name": "registration",
					"code": "console.log('registration event')"
				}
			]
		},
		{
			"name": "matomo",
			"enabled": false,
			"id": 0,
			"events": [
				{
					"name": "load",
					"code": "_paq.push(['trackEvent', 'lp', 'lp_visit']);$('.form-container').one('click touch', function (event) {_paq.push(['trackEvent', 'lp', 'form_initiated']);})"
				},
				{
					"name": "registration",
					"code": "_paq.push(['trackEvent', 'lp', 'form_completed']);"
				}
			]
		}
	],
	"backOffer": false,
	"backOfferEnabled": false,
	"secondOffer": false,
	"secondOfferEnabled": false,
	"defaultAffiliateID": 1234,
	"defaultOfferID": 4567,
	"emailValidation": 1,
	"phoneValidation": 2,
	"redirectTarget": "platform",
	"validationCountries": [],
	"enableAgentGenderSelector": false,
	"registerRedirectDelay": false,
	"preferredCountryList": ["ae", "sa", "qa", "kw", "bh", "om"]
};

$.FormJS_Form = (function() {
	return function(list) {
		return $.FormJS('GetScript', list);
	}
})();