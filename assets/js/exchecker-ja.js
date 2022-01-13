/*!
 * exchecker-ja
 *
 * @version   : 1.1
 * @author    : nori (norimania@gmail.com)
 * @copyright : 5509 (http://5509.me/)
 * @license   : The MIT License
 * @link      : http://5509.me/log/exvalidation
 * @modified  : 2012-04-09 16:52
 */
;(function($) {
  // Extend validation rules
  $.exValidationRules = $.extend($.exValidationRules, {
    chkrequired: [
      "入力してください",
      function(txt, t) {
        if ( $(t).hasClass("chkgroup") ) {
          var flag = 0;
          $("input,select",t).each(function() {
            if ( $(this).val().length > 0 ) flag++;
          });
          if ( txt && flag === $("input,select", t).length ) {
            if ( /^[ 　\r\n\t]+$/.test(txt) ) {
              return false;
            } else {
              return true;
            }
          }
        } else {
          if ( txt && txt.length>0 ) {
            if ( /^[ 　\r\n\t]+$/.test(txt) ) {
              return false;
            } else {
              return true;
            }
          }
        }
      }
    ],
    chkselect: [
      "選択してください",
      function(txt, t) {
        if ( txt && txt.length>0 ) {
          if ( /^[ 　\r\n\t]+$/.test(txt) ) {
            return false;
          } else {
            return true;
          }
        }
      }
    ],
    chkretype: [
      "入力内容が異なります",
      function(txt, t) {
        var elm = $("#" + $(t).attr("class").split("retype\-")[1].split(/\b/)[0]);
        if ( elm.hasClass("chkgroup") ) {
          var chktxt = $("input", elm), txt = $("input", t);
          for ( var i = 0, flag = false; i < chktxt.length; i++ ) {
            if ( chktxt[i].value === txt[i].value ) {
              flag = true;
            } else {
              flag = false;
              break;
            }
          }
          if ( flag ) return true;
        } else {
          return elm.val() == txt;
        }
      }
    ],
 	chkname: [ "お名前を入力してください", function(a, b) {
		if ($(b).hasClass("chkgroup")) {
			var c = 0;
			$("input,select", b).each(function() {
				if ($(this).val().length > 0) c++;
			});
			if (a && c === $("input,select", b).length) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
			} else if (a && a.length > 0) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
	}],
 	chktantoname: [ "担当者氏名を入力してください", function(a, b) {
		if ($(b).hasClass("chkgroup")) {
			var c = 0;
			$("input,select", b).each(function() {
				if ($(this).val().length > 0) c++;
			});
			if (a && c === $("input,select", b).length) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
			} else if (a && a.length > 0) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
	}],
	chkgroupname: [ "団体名を入力してください", function(a, b) {
		if ($(b).hasClass("chkgroup")) {
			var c = 0;
			$("input,select", b).each(function() {
				if ($(this).val().length > 0) c++;
			});
			if (a && c === $("input,select", b).length) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
			} else if (a && a.length > 0) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
	}],
	chkgroupname_mix: [ "組織名を入力してください", function(a, b) {
		if ($(b).hasClass("chkgroup")) {
			var c = 0;
			$("input,select", b).each(function() {
				if ($(this).val().length > 0) c++;
			});
			if (a && c === $("input,select", b).length) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
			} else if (a && a.length > 0) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
	}],
	chkgroupname_kana: [ "フリガナを入力してください", function(a, b) {
		if ($(b).hasClass("chkgroup")) {
			var c = 0;
			$("input,select", b).each(function() {
				if ($(this).val().length > 0) c++;
			});
			if (a && c === $("input,select", b).length) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
			} else if (a && a.length > 0) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
	}],
	chkaddress: [ "所在地を入力してください", function(a, b) {
		if ($(b).hasClass("chkgroup")) {
			var c = 0;
			$("input,select", b).each(function() {
				if ($(this).val().length > 0) c++;
			});
			if (a && c === $("input,select", b).length) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
			} else if (a && a.length > 0) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
	}],
	chkaddresspost: [ "郵送先ご住所を入力してください", function(a, b) {
		if ($(b).hasClass("chkgroup")) {
			var c = 0;
			$("input,select", b).each(function() {
				if ($(this).val().length > 0) c++;
			});
			if (a && c === $("input,select", b).length) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
			} else if (a && a.length > 0) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
	}],
    chkemail: [
      "正しいメールアドレスの形式を入力してください",
      /^(?:[^\@]+?@[A-Za-z0-9_\.\-]+\.+[A-Za-z\.\-\_]+)*$/
    ],
	chkmailaddress: [ "メールアドレスを入力してください", function(a, b) {
		if ($(b).hasClass("chkgroup")) {
			var c = 0;
			$("input,select", b).each(function() {
				if ($(this).val().length > 0) c++;
			});
			if (a && c === $("input,select", b).length) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
			} else if (a && a.length > 0) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
	}],
	chkcategory: [ "事業カテゴリを選択してください", function(a, b) {
		if ($(b).hasClass("chkgroup")) {
			var c = 0;
			$("input,select", b).each(function() {
				if ($(this).val().length > 0) c++;
			});
			if (a && c === $("input,select", b).length) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
			} else if (a && a.length > 0) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
	}],
	chkscale: [ "会社規模を選択してください", function(a, b) {
		if ($(b).hasClass("chkgroup")) {
			var c = 0;
			$("input,select", b).each(function() {
				if ($(this).val().length > 0) c++;
			});
			if (a && c === $("input,select", b).length) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
			} else if (a && a.length > 0) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
	}],
	chkstatus: [ "現在のステータスを選択してください", function(a, b) {
		if ($(b).hasClass("chkgroup")) {
			var c = 0;
			$("input,select", b).each(function() {
				if ($(this).val().length > 0) c++;
			});
			if (a && c === $("input,select", b).length) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
			} else if (a && a.length > 0) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
	}],
	chktel: [ "電話番号を入力してください", function(a, b) {
		if ($(b).hasClass("chkgroup")) {
			var c = 0;
			$("input,select", b).each(function() {
				if ($(this).val().length > 0) c++;
			});
			if (a && c === $("input,select", b).length) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
			} else if (a && a.length > 0) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
	}],
	chkstorytitle: [ "応募ストーリータイトルを入力してください", function(a, b) {
		if ($(b).hasClass("chkgroup")) {
			var c = 0;
			$("input,select", b).each(function() {
				if ($(this).val().length > 0) c++;
			});
			if (a && c === $("input,select", b).length) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
			} else if (a && a.length > 0) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
	}],
	chkstorytitle_kento: [ "検討しているストーリータイトルを入力してください", function(a, b) {
		if ($(b).hasClass("chkgroup")) {
			var c = 0;
			$("input,select", b).each(function() {
				if ($(this).val().length > 0) c++;
			});
			if (a && c === $("input,select", b).length) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
			} else if (a && a.length > 0) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
	}],
	chkteams: [ "応募者チーム構成を入力してください", function(a, b) {
		if ($(b).hasClass("chkgroup")) {
			var c = 0;
			$("input,select", b).each(function() {
				if ($(this).val().length > 0) c++;
			});
			if (a && c === $("input,select", b).length) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
			} else if (a && a.length > 0) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
	}],
	chktime: [ "相談希望日時を入力してください", function(a, b) {
		if ($(b).hasClass("chkgroup")) {
			var c = 0;
			$("input,select", b).each(function() {
				if ($(this).val().length > 0) c++;
			});
			if (a && c === $("input,select", b).length) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
			} else if (a && a.length > 0) if (/^[ 　\r\n\t]+$/.test(a)) return false; else return true;
	}],
    chkreco: [
      "推薦方法を選択してください",
      function(txt, t) {
        return $("input:checked",t).length>0;
      }
    ],
    chktype: [
      "組織種別を選択してください",
      function(txt, t) {
        return $("input:checked",t).length>0;
      }
    ],
    chktheme: [
      "応募テーマを選択してください",
      function(txt, t) {
        return $("input:checked",t).length>0;
      }
    ],
    chkcontacttype: [
      "連絡手段を選択してください",
      function(txt, t) {
        return $("input:checked",t).length>0;
      }
    ],
    chkthemeother: [
      "テーマは2つまでしか選択できません",
      function(txt, t) {
        return $("input:checked",t).length<3;
      }
    ],
    chkhankaku: [
      "全角文字は使用できません",
      /^(?:[a-zA-Z0-9@\<\>\;\:\[\]\{\}\|\^\=\/\!\*\`\"\#\$\+\%\&\'\(\)\,\.\-\_\?\\\s]*)*$/
    ], //"
    chkzenkaku: [
      "全角文字で入力してください",
      /^(?:[^a-zA-Z0-9@\<\>\;\:\[\]\{\}\|\^\=\/\!\*\"\#\$\+\%\&\'\(\)\,\.\-\_\?\\\s]+)*$/
    ],
    chkhiragana: [
      "ひらがなで入力してください",
      /^(?:[ぁ-ゞ]+)*$/
    ],
    chkkatakana: [
      "カタカナで入力してください",
      /^(?:[ァ-ヾ]+)*$/
    ],
    chkfurigana: [
      "ふりがなはひらがな、全角数字と〜、ー、（）が利用できます",
      /^(?:[ぁ-ゞ０-９ー～（）\(\)\d 　]+)*$/
    ],
    chknochar: [
      "英数字で入力してください",
      /^(?:[a-zA-Z0-9]+)*$/
    ],
    chknocaps: [
      "英数字(小文字のみ)で入力してください",
      /^(?:[a-z0-9]+)*$/
    ],
    chknumonly: [
      "半角数字のみで入力してください",
      /^(?:[0-9]+)*$/
    ],
    chkmin: [
      "文字以上で入力してください",
      function(txt, t) {
        if ( txt.length === 0 ) return true;
         var length = $(t).attr("class").match(/min(\d+)/) ? RegExp.$1 : null;
        return txt.length >= length;
      }
    ],
    chkmax: [
      "文字以内で入力してください",
      function(txt, t) {
        var length = $(t).attr("class").match(/max(\d+)/) ? RegExp.$1 : null;
        return txt.length <= length;
      }
    ],
    chkradio: [
      "選択してください",
      function(txt, t) {
        return $("input:checked",t).length>0;
      }
    ],
    chkcheckbox: [
      "選択してください",
      function(txt, t) {
        return $("input:checked",t).length>0;
      }
    ],
	chkprivacy: [ "個人情報の取り扱いに同意をお願いします", function(a, b) {
		return $("input:checked", b).length > 0;
    }],
    chkzip: [
      "正しい郵便番号の形式を入力してください",
      /^(?:\d{3}-?\d{4}$|^\d{3}-?\d{2}$|^\d{3}$)*$/
    ],
    chkurl: [
      "正しいURLの形式を入力してください",
      /^(?:(?:ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)*$/
    ],
    chktels: [
      "正しい電話番号を入力してください",
      /^(?:\(?\d+\)?\-?\d+\-?\d+)*$/
    ],
    chkfax: [
      "正しいファックス番号を入力してください",
      /^(?:\(?\d+\)?\-?\d+\-?\d+)*$/
    ],
    chkfilesize: [
      "ファイルサイズ容量が10MBを超えています",
      function(txt, t) {
	    var file = $('input[type="file"]').prop('files')[0];
        if ( txt && txt.length>0 ) {
          if (file.size > 10485760) {
            return false;
          } else {
            return true;
          }
        }
      }
    ],
    chkfile: [
      "ファイルを選択してください",
      function(txt, t) {
        if ( txt && txt.length>0 ) {
          if ( /^[ 　\r\n\t]+$/.test(txt) ) {
            return false;
          } else {
			var filevalue = $('input[type="file"]')[0].files[0].name;
			$("#uv").html(filevalue);
            return true;
          }
        }
      }
    ]
  });
})(jQuery);

