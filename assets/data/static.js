export const SECTION_OPTIONS = [
	{
		type: 'section_1',
		name: '1',
		icon: 'fas fa-paragraph',
		template: {
			type: 'container',
			class: 'container',
			id: 'container_aaaa',
			children: [
				{
					type: 'row',
					class: 'row',
					id: 'container_aaaa_1',
					parentId: 'container_aaaa',
					children: [
						{
							type: 'col',
							class: 'col dropzone ui-sortable',
							id: 'container_aaaa_1_a',
							parentId: 'container_aaaa_1',
							children: [],
						}
					]
				}
			]
		}
	},
	{
		type: 'section_2',
		name: '2',
		icon: 'fas fa-paragraph',
		template: {
			type: 'container',
			class: 'container',
			id: 'container_bbbb',
			children: [
				{
					type: 'row',
					class: 'row',
					id: 'container_bbbb_1',
					parentId: 'container_bbbb',
					children: [
						{
							type: 'col',
							class: 'col dropzone ui-sortable',
							id: 'container_bbbb_1_a',
							parentId: 'container_bbbb_1',
							children: [],
						},
						{
							type: 'col',
							class: 'col dropzone ui-sortable',
							id: 'container_bbbb_1_b',
							parentId: 'container_bbbb_1',
							children: [],
						},
					]
				}
			]
		}
	},
	{
		type: 'section_3',
		name: '3',
		icon: 'fas fa-paragraph',
		template: {
			type: 'container',
			class: 'container',
			id: 'container_cccc',
			children: [
				{
					type: 'row',
					class: 'row',
					id: 'container_cccc_1',
					parentId: 'container_cccc',
					children: [
						{
							type: 'col',
							class: 'col dropzone ui-sortable',
							id: 'container_cccc_1_a',
							parentId: 'container_cccc_1',
							children: [],
						},
						{
							type: 'col',
							class: 'col dropzone ui-sortable',
							id: 'container_cccc_1_b',
							parentId: 'container_cccc_1',
							children: [],
						},
						{
							type: 'col',
							class: 'col dropzone ui-sortable',
							id: 'container_cccc_1_c',
							parentId: 'container_cccc_1',
							children: [],
						},
					]
				}
			]
		}
	},
]

export const ELEMENT_OPTIONS = [
	{
		type: 'paragraph',
		icon: 'fas fa-paragraph',
		template: {
			id: '',
			class: '',
			content: `This is a template for a simple marketing or informational website.
					It includes a large callout called a jumbotron and three supporting pieces of content.
					Use it as a starting point to create something more unique.`,
		},
	},
	{
		type: 'heading',
		icon: 'fas fa-heading',
		template: {
			content: 'Main Title',
			id: '',
			options: {
				level: 1,
			},
		},
	},
	{
		type: 'image',
		icon: 'fas fa-image',
		template: {
			id: '',
			options: {
				src: 'https://s3-ap-southeast-1.amazonaws.com/alkemi-static/image-placeholder.jpg',
			},
		},
	},
	{
		type: 'button',
		icon: 'fas fa-image',
		template: {
			class: 'btn btn-primary',
			id: '',
			content: 'Button',
		},
	},
]

export const DUMMY_PROJECT_TEMPLATE_1 = {
	children: [
		{
			type: 'container',
			id: 'container_txkyg',
			class: 'container',
			children: [
				{
					type: 'row',
					class: 'row',
					id: 'row_1',
					parentId: 'container_txkyg',
					children: [
						{
							type: 'col',
							class: 'col dropzone ui-sortable',
							id: 'col_1',
							parentId: 'row_1',
							children: [
								{
									type: 'heading',
									class: '',
									id: 'heading_nfquv',
									parentId: 'col_1',
									content: 'Title 1',
									options: {
										level: 4,
									},
								},
							]
						},
						{
							type: 'col',
							class: 'col dropzone ui-sortable',
							id: 'col_2',
							parentId: 'row_1',
							children: [
								{
									type: 'heading',
									class: '',
									id: 'heading_nfquw',
									parentId: 'col_2',
									content: 'Title 2',
									options: {
										level: 4,
									},
								},
							]
						},
						{
							type: 'col',
							class: 'col dropzone ui-sortable',
							id: 'col_3',
							parentId: 'row_1',
							children: [
								{
									type: 'heading',
									class: '',
									id: 'heading_nfqux',
									parentId: 'col_3',
									content: 'Title 3',
									options: {
										level: 4,
									},
								},
							]
						}
					]
				}
			]
		}
	]
}

export const DUMMY_PROJECT_TEMPLATE = {
	children: [
		{
			type: 'container',
			class: 'jumbotron',
			id: 'container_txkyg',
			parentId: '',
			children: [
				{
					type: 'section',
					class: 'container dropzone ui-sortable',
					id: 'container_qyfok',
					parentId: 'container_txkyg',
					children: [
						{
							type: 'heading',
							class: 'display-3',
							id: 'heading_nfquv',
							parentId: 'container_qyfok',
							content: 'Hello, world!',
							options: {
								level: 1,
							},
						},
						{
							type: 'paragraph',
							id: 'paragraph_mwzvq',
							parentId: 'container_qyfok',
							class: '',
							content: `This is a template for a simple marketing or informational website.
										It includes a large callout called a jumbotron and three supporting pieces of content.
										Use it as a starting point to create something more unique.`,
						},
					],
				},
			],
		},
		{
			type: 'container',
			class: 'container container-small',
			id: 'container_gwcjb',
			parentId: '',
			children: [
				{
					type: 'card-deck',
					class: 'card-deck mb-3 text-center',
					id: 'card-deck_zevpy',
					parentId: 'container_gwcjb',
					children: [
						{
							type: 'card',
							class: 'card',
							id: 'card_yggic',
							parentId: 'card-deck_zevpy',
							children: [
								{
									type: 'card-header',
									id: 'card-header_one',
									parentId: 'card_yggic',
									class: 'card-header dropzone ui-sortable',
									children: [
										{
											type: 'heading',
											class: 'my-0 font-weight-normal',
											icon: 'fas fa-heading',
											id: 'heading_satu',
											parentId: 'card-header_one',
											content: `Free`,
											options: {
												level: 4,
											},
										},
									],
								},
								{
									type: 'card-body',
									class: 'card-body dropzone ui-sortable',
									id: 'card-body_01',
									parentId: 'card_yggic',
									children: [
										{
											type: 'heading',
											class: 'card-title pricing-card-title',
											id: 'card-title_01',
											parentId: 'card-body_01',
											content: '$0 / mo',
											options: {
												level: 1,
											},
										},
										{
											type: 'ul',
											class: 'list-unstyled mt-3 mb-4',
											id: 'ul_01',
											parentId: 'card-body_01',
											children: [
												{
													type: 'li',
													id: 'li_01_A',
													parentId: 'ul_01',
													content: '10 users included',
												},
												{
													type: 'li',
													id: 'li_01_B',
													parentId: 'ul_01',
													content: '2 GB of storage',
												},
												{
													type: 'li',
													id: 'li_01_C',
													parentId: 'ul_01',
													content: 'Email support',
												},
												{
													type: 'li',
													id: 'li_01_D',
													parentId: 'ul_01',
													content: 'Help center access',
												},
											],
										},
										{
											type: 'button',
											class: 'btn-block btn-lg btn-outline-primary',
											id: 'button_01',
											parentId: 'card-body_01',
											content: 'Sign up for free',
										},
									],
								},
							],
						},
						{
							type: 'card',
							class: 'card',
							id: 'card_wpzeo',
							parentId: 'card-deck_zevpy',
							children: [
								{
									type: 'card-header',
									id: 'card-header_two',
									parentId: 'card_wpzeo',
									class: 'card-header dropzone ui-sortable',
									children: [
										{
											type: 'heading',
											class: 'my-0 font-weight-normal',
											id: 'heading_dua',
											parentId: 'card-header_two',
											content: `Pro`,
											options: {
												level: 4,
											},
										},
									],
								},
								{
									type: 'card-body',
									class: 'card-body dropzone ui-sortable',
									id: 'card-body_02',
									parentId: 'card_wpzeo',
									children: [
										{
											type: 'heading',
											class: 'card-title pricing-card-title',
											id: 'card-title_02',
											parentId: 'card-body_02',
											content: '$15 / mo',
											options: {
												level: 1,
											},
										},
										{
											type: 'ul',
											class: 'list-unstyled mt-3 mb-4',
											id: 'ul_02',
											parentId: 'card-body_02',
											children: [
												{
													type: 'li',
													id: 'li_02_A',
													parentId: 'ul_01',
													content: '20 users included',
												},
												{
													type: 'li',
													id: 'li_02_B',
													parentId: 'ul_01',
													content: '10 GB of storage',
												},
												{
													type: 'li',
													id: 'li_02_C',
													parentId: 'ul_01',
													content: 'Priority Email support',
												},
												{
													type: 'li',
													id: 'li_02_D',
													parentId: 'ul_01',
													content: 'Help center access',
												},
											],
										},
										{
											type: 'button',
											class: 'btn-block btn-lg btn-primary',
											id: 'button_02',
											parentId: 'card-body_02',
											content: 'Get Started',
										},
									],
								},
							],
						},
						{
							type: 'card',
							class: 'card',
							id: 'card_wpzep',
							parentId: 'card-deck_zevpy',
							children: [
								{
									type: 'card-header',
									id: 'card-header_three',
									parentId: 'card_wpzep',
									class: 'card-header dropzone ui-sortable',
									children: [
										{
											type: 'heading',
											class: 'my-0 font-weight-normal',
											id: 'heading_tiga',
											parentId: 'card-header_three',
											content: `Enterprise`,
											options: {
												level: 4,
											},
										},
									],
								},
								{
									type: 'card-body',
									class: 'card-body dropzone ui-sortable',
									id: 'card-body_03',
									parentId: 'card_wpzep',
									children: [
										{
											type: 'heading',
											class: 'card-title pricing-card-title',
											id: 'card-title_03',
											parentId: 'card-body_03',
											content: '$29 / mo',
											options: {
												level: 1,
											},
										},
										{
											type: 'ul',
											class: 'list-unstyled mt-3 mb-4',
											id: 'ul_03',
											parentId: 'card-body_03',
											children: [
												{
													type: 'li',
													id: 'li_03_A',
													parentId: 'ul_01',
													content: '30 users included',
												},
												{
													type: 'li',
													id: 'li_03_B',
													parentId: 'ul_01',
													content: '15 GB of storage',
												},
												{
													type: 'li',
													id: 'li_03_C',
													parentId: 'ul_01',
													content: 'Phone & Email support',
												},
												{
													type: 'li',
													id: 'li_03_D',
													parentId: 'ul_01',
													content: 'Help center access',
												},
											],
										},
										{
											type: 'button',
											class: 'btn-block btn-lg btn-primary',
											id: 'button_03',
											parentId: 'card-body_03',
											content: 'Contact Us',
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
}
