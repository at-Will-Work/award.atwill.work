(function($){

  mtapp.multiField({
    debug: false,
    id: 58,
    label: '過去の一次審査通過ストーリー',
    showAddFieldButton: true,
    showViewRawDataButton: true,
    fieldGroups: [
      [
        {
          "type" : "table", "label": "ストーリー", "options": [
            { "type": "text", "label": "タイトル" },
            { "type": "url", "label": "URL" }
          ]
        }
      ]
    ]
  });

  mtapp.multiField({
    debug: false,
    id: 351,
    label: '過去の一次審査通過ストーリー',
    showAddFieldButton: true,
    showViewRawDataButton: true,
    fieldGroups: [
      [
        {
          "type" : "table", "label": "ストーリー", "options": [
            { "type": "text", "label": "タイトル" },
            { "type": "url", "label": "URL" }
          ]
        }
      ]
    ]
  });

  mtapp.multiField({
    debug: false,
    id: 395,
    label: 'アワード実施の背景',
    showAddFieldButton: true,
    showViewRawDataButton: false,
    addFieldButtonLabel: '文章を追加',
    fieldGroups: [
      [
        { "type": "textarea", "label": "複数行テキスト", "rows": 4}
      ]
    ]
  });

  mtapp.multiField({
    debug: false,
    id: 396,
    label: 'ストーリーとは',
    showAddFieldButton: true,
    showViewRawDataButton: false,
    addFieldButtonLabel: '文章を追加',
    fieldGroups: [
      [
        { "type": "textarea", "label": "複数行テキスト", "rows": 4},
      ]
    ]
  });


  mtapp.multiField({
    debug: false,
    id: 398,
    label: '受賞のメリット',
    showAddFieldButton: true,
    showViewRawDataButton: true,
    fieldGroups: [
      [
	  	{ "type": "text", "label": "1行テキスト" },
		{ "type": "image", "label": "画像" },
        {
          "type" : "table", "label": "メリット", "options": [
            { "type": "textarea", "label": "内容" }
          ]
        }
      ]
    ]
  });

  mtapp.multiField({
    debug: false,
    id: 407,
    label: '応募方法',
    showAddFieldButton: true,
    showViewRawDataButton: true,
    fieldGroups: [
      [
        { "type": "h3", "label": "見出し H3" },
        { "type": "textarea", "label": "複数行テキスト", "rows": 4},
		{ "type": "textarea", "label": "複数行テキスト（文字小）", "rows": 4}
      ]
    ]
  });


  mtapp.multiField({
    debug: false,
    id: 409,
    label: '応募詳細',
    showAddFieldButton: true,
    showViewRawDataButton: true,
    fieldGroups: [
      [
        { "type": "h3", "label": "見出し H3" },
        { "type": "textarea", "label": "複数行テキスト", "rows": 4},
      ]
    ]
  });

  mtapp.multiField({
    debug: false,
    id: 411,
    label: '審査方法',
    showAddFieldButton: true,
    showViewRawDataButton: true,
    fieldGroups: [
      [
        { "type": "h3", "label": "見出し H3" },
        { "type": "textarea", "label": "複数行テキスト", "rows": 4},
        { "type": "code", "label": "コードブロック", "rows": 4},
        {
          "type" : "table", "label": "表組み", "options": [
            { "type": "text", "label": "タイトル" },
            { "type": "textarea", "label": "内容" }
          ]
        },
        {
          "type" : "multi-column", "label": "画像", "options": [
            { "type": "image", "label": "画像" },
            { "type": "text", "label": "キャプション" }
          ]
        }
      ]
    ]
  });

  mtapp.multiField({
    debug: false,
    id: 421,
    label: '応募説明会&ストーリー制作講座',
    showAddFieldButton: true,
    showViewRawDataButton: true,
    fieldGroups: [
      [
        { "type": "h3", "label": "見出し H3" },
        { "type": "textarea", "label": "複数行テキスト", "rows": 4},
        { "type": "code", "label": "コードブロック", "rows": 4},
        {
          "type" : "table", "label": "表組み", "options": [
            { "type": "text", "label": "タイトル" },
            { "type": "textarea", "label": "内容" }
          ]
        },
        {
          "type" : "multi-column", "label": "画像", "options": [
            { "type": "image", "label": "画像" },
            { "type": "text", "label": "キャプション" }
          ]
        }
      ]
    ]
  });

  mtapp.multiField({
    debug: false,
    id: 414,
    label: '過去の応募状況',
    showAddFieldButton: true,
    showViewRawDataButton: true,
    fieldGroups: [
      [
        { "type": "h3", "label": "見出し H3" },
        { "type": "textarea", "label": "複数行テキスト", "rows": 4},
        { "type": "image", "label": "画像" }
      ]
    ]
  });

	$('[name="content-field-130"]').MTAppListing({
	  url: '/app/mt-data-api.cgi/v4/sites/20/contentTypes/8/data',
	  data: {
	    fields: 'id,title',
	    limit: 9999999
	  },
	  jsontable: {
	    header: {
	      id: 'ID',
	      title: 'タイトル'
	    },
	    headerOrder: ['id', 'title'],
	    itemsRootKey: 'items',
	    listingCheckboxType: 'checkbox',
	    listingTargetKey: 'id',
	    listingTargetEscape: false
	  }
	});

})(jQuery);
