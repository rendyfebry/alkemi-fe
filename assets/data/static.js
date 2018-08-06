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
				src: 'https://app.managix.id/static/img/image-placeholder.jpg',
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
					class: 'container dropzone',
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
									class: 'card-header dropzone',
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
									class: 'card-body dropzone',
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
									class: 'card-header dropzone',
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
									class: 'card-body dropzone',
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
									class: 'card-header dropzone',
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
									class: 'card-body dropzone',
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
