/* ---------------------------------------------------------------------- */
/*	form
/* ---------------------------------------------------------------------- */

;(function($) {
	var validation = null;
	if (document.getElementById("entry_form") != null) {
		validation = $("form#entry_form").exValidation({
			firstValidate: true,
			stepValidation: true,
			customListener : "blur change",
			scrollToErr: true,
			errMsgPrefix: "",
			errTipCloseBtn: false,
			errInsertPos: 'after',
			errPosition: 'fixed',
			rules: {
				aww_reco: "chkreco",
				aww_name: "chkname",
				aww_tel: "chktel chktels",
				aww_email: "chkmailaddress chkemail",
				aww_groupname: "chkgroupname",
				aww_address: "chkaddress",
				aww_category: "chkcategory",
				aww_scale: "chkscale",
				aww_storytitle: "chkstorytitle chkmax50",
				aww_teams: "chkteams",
				aww_themes: "chktheme",
				aww_themes_other: "chkthemeother",
				loadfile: "chkfile chkfilesize"
			}
		});
	}
})(jQuery);