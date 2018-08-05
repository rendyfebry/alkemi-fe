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
			class: 'container',
			id: 'container_gwcjb',
			parentId: '',
			children: [
				{
					type: 'row',
					class: 'row',
					id: 'row_zevpy',
					parentId: 'container_gwcjb',
					children: [
						{
							type: 'col',
							class: 'col dropzone',
							id: 'col_yggic',
							parentId: 'row_zevpy',
							children: [
							],
						},
						{
							type: 'col',
							class: 'col dropzone',
							id: 'col_wpzeo',
							parentId: 'row_zevpy',
							children: [
							],
						},
					],
				},
			],
		},
	],
}


export const PROJECT_TEMPLATE = {
  children: [
	{
	  type: 'nav',
	  class: 'navbar navbar-expand-md navbar-dark bg-dark',
	  children: [
		{
		  type: 'link',
		  href: '#',
		  class: 'navbar-brand',
		  content: 'Navbar',
		},
		{
		  class: 'collapse navbar-collapse',
		  children: [
			{
			  type: 'ul',
			  class: 'navbar-nav ml-auto',
			  children: [
				{
				  type: 'li',
				  class: 'nav-item active',
				  children: [
					{
					  type: 'link',
					  class: 'nav-link',
					  href: '#',
					  content: 'Home',
					},
				  ],
				},
				{
				  type: 'li',
				  class: 'nav-item',
				  children: [
					{
					  type: 'link',
					  class: 'nav-link',
					  href: '#',
					  content: 'Link',
					},
				  ],
				},
				{
				  type: 'li',
				  class: 'nav-item',
				  children: [
					{
					  type: 'link',
					  class: 'nav-link',
					  href: '#',
					  content: 'Link',
					},
				  ],
				},
				{
				  type: 'li',
				  class: 'nav-item',
				  children: [
					{
					  type: 'link',
					  class: 'nav-link',
					  href: '#',
					  content: 'Link',
					},
				  ],
				},
			  ],
			},
		  ],
		},
	  ],
	},
	{
	  type: 'section',
	  class: 'jumbotron',
	  id: 'section-2',
	  children: [
		{
		  type: 'section',
		  class: 'container dropzone',
		  id: 'section-2-1',
		  children: [
			{
			  type: 'heading',
			  class: 'display-3',
			  id: 'section-2-1-1',
			  content: 'Hello, world!',
			  options: {
				level: 1,
			  },
			},
			{
			  type: 'paragraph',
			  id: 'section-2-1-2',
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
	  type: 'section',
	  class: 'pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center',
	  id: 'section-3',
	  children: [
		{
		  type: 'col',
		  class: 'col dropzone',
		  id: 'col-3-1',
		  children: [
			{
			  type: 'heading',
			  content: 'Pricing',
			  id: 'col-3-1-a',
			  options: {
				level: 1,
			  },
			},
			{
			  type: 'paragraph',
			  class: '',
			  id: 'col-3-1-b',
			  content: `This is a template for a simple marketing or informational website.
													It includes a large callout called a jumbotron and three supporting pieces of content.
													Use it as a starting point to create something more unique.`,
			},
		  ],
		},
	  ],
	},
	{
	  type: 'section',
	  class: 'container container-small',
	  children: [
		{
		  class: 'card-deck mb-3 text-center',
		  children: [
			{
			  class: 'card',
			  children: [
				{
				  class: 'card-header',
				  children: [
					{
					  type: 'heading',
					  class: 'my-0 font-weight-normal',
					  content: 'Free',
					  options: {
						level: 4,
					  },
					},
				  ],
				},
				{
				  class: 'card-body',
				  children: [
					{
					  type: 'heading',
					  class: 'card-title pricing-card-title',
					  content: '$0 / mo',
					  options: {
						level: 1,
					  },
					},
					{
					  type: 'ul',
					  class: 'list-unstyled mt-3 mb-4',
					  children: [
						{
						  type: 'li',
						  content: '10 users included',
						},
						{
						  type: 'li',
						  content: '2 GB of storage',
						},
						{
						  type: 'li',
						  content: 'Email support',
						},
						{
						  type: 'li',
						  content: 'Help center access',
						},
					  ],
					},
					{
					  type: 'button',
					  class: 'btn-block btn-lg btn-outline-primary',
					  content: 'Sign up for free',
					},
				  ],
				},
			  ],
			},
			{
			  class: 'card',
			  children: [
				{
				  class: 'card-header',
				  children: [
					{
					  type: 'heading',
					  class: 'my-0 font-weight-normal',
					  content: 'Pro',
					  options: {
						level: 4,
					  },
					},
				  ],
				},
				{
				  class: 'card-body',
				  children: [
					{
					  type: 'heading',
					  class: 'card-title pricing-card-title',
					  content: '$15 / mo',
					  options: {
						level: 1,
					  },
					},
					{
					  type: 'ul',
					  class: 'list-unstyled mt-3 mb-4',
					  children: [
						{
						  type: 'li',
						  content: '20 users included',
						},
						{
						  type: 'li',
						  content: '10 GB of storage',
						},
						{
						  type: 'li',
						  content: 'Priority email support',
						},
						{
						  type: 'li',
						  content: 'Help center access',
						},
					  ],
					},
					{
					  type: 'button',
					  class: 'btn-primary btn-lg btn-block',
					  content: 'Get started',
					},
				  ],
				},
			  ],
			},
			{
			  class: 'card',
			  children: [
				{
				  class: 'card-header',
				  children: [
					{
					  type: 'heading',
					  class: 'my-0 font-weight-normal',
					  content: 'Enterprise',
					  options: {
						level: 4,
					  },
					},
				  ],
				},
				{
				  class: 'card-body',
				  children: [
					{
					  type: 'heading',
					  class: 'card-title pricing-card-title',
					  content: '$29 / mo',
					  options: {
						level: 1,
					  },
					},
					{
					  type: 'ul',
					  class: 'list-unstyled mt-3 mb-4',
					  children: [
						{
						  type: 'li',
						  content: '30 users included',
						},
						{
						  type: 'li',
						  content: '15 GB of storage',
						},
						{
						  type: 'li',
						  content: 'Phone and email support',
						},
						{
						  type: 'li',
						  content: 'Help center access',
						},
					  ],
					},
					{
					  type: 'button',
					  class: 'btn-primary btn-lg  btn-block',
					  content: 'Contact us',
					},
				  ],
				},
			  ],
			},
		  ],
		},
		{
		  type: 'footer',
		  class: 'pt-4 my-md-5 pt-md-5 border-top',
		  children: [
			{
			  type: 'row',
			  class: 'row',
			  children: [
				{
				  type: 'col',
				  class: 'col-12 col-md dropzone',
				  children: [
					{
					  type: 'image',
					  class: 'mb-2',
					  options: {
						src: 'https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg',
						width: 24,
						height: 24,
					  },
					},
				  ],
				},
				{
				  type: 'col',
				  class: 'col-16 col-md dropzone',
				  children: [
					{
					  type: 'heading',
					  content: 'Features',
					  options: {
						level: 5,
					  },
					},
					{
					  type: 'ul',
					  class: 'list-unstyled text-small',
					  children: [
						{
						  type: 'li',
						  children: [
							{
							  type: 'link',
							  href: '#',
							  class: 'text-muted',
							  content: 'Cool stuff',
							},
						  ],
						},
						{
						  type: 'li',
						  children: [
							{
							  type: 'link',
							  href: '#',
							  class: 'text-muted',
							  content: 'Random feature',
							},
						  ],
						},
						{
						  type: 'li',
						  children: [
							{
							  type: 'link',
							  href: '#',
							  class: 'text-muted',
							  content: 'Team feature',
							},
						  ],
						},
						{
						  type: 'li',
						  children: [
							{
							  type: 'link',
							  href: '#',
							  class: 'text-muted',
							  content: 'Stuff for developers',
							},
						  ],
						},
						{
						  type: 'li',
						  children: [
							{
							  type: 'link',
							  href: '#',
							  class: 'text-muted',
							  content: 'Another one',
							},
						  ],
						},
						{
						  type: 'li',
						  children: [
							{
							  type: 'link',
							  href: '#',
							  class: 'text-muted',
							  content: 'Last time',
							},
						  ],
						},
					  ],
					},
				  ],
				},
				{
				  type: 'col',
				  class: 'col-16 col-md dropzone',
				  children: [
					{
					  type: 'heading',
					  content: 'Resources',
					  options: {
						level: 5,
					  },
					},
					{
					  type: 'ul',
					  class: 'list-unstyled text-small',
					  children: [
						{
						  type: 'li',
						  children: [
							{
							  type: 'link',
							  href: '#',
							  class: 'text-muted',
							  content: 'Resource',
							},
						  ],
						},
						{
						  type: 'li',
						  children: [
							{
							  type: 'link',
							  href: '#',
							  class: 'text-muted',
							  content: 'Resource name',
							},
						  ],
						},
						{
						  type: 'li',
						  children: [
							{
							  type: 'link',
							  href: '#',
							  class: 'text-muted',
							  content: 'Another resource',
							},
						  ],
						},
						{
						  type: 'li',
						  children: [
							{
							  type: 'link',
							  href: '#',
							  class: 'text-muted',
							  content: 'Final resource',
							},
						  ],
						},
					  ],
					},
				  ],
				},
				{
				  type: 'col',
				  class: 'col-16 col-md dropzone',
				  children: [
					{
					  type: 'heading',
					  content: 'About',
					  options: {
						level: 5,
					  },
					},
					{
					  type: 'ul',
					  class: 'list-unstyled text-small',
					  children: [
						{
						  type: 'li',
						  children: [
							{
							  type: 'link',
							  href: '#',
							  class: 'text-muted',
							  content: 'Team',
							},
						  ],
						},
						{
						  type: 'li',
						  children: [
							{
							  type: 'link',
							  href: '#',
							  class: 'text-muted',
							  content: 'Locations',
							},
						  ],
						},
						{
						  type: 'li',
						  children: [
							{
							  type: 'link',
							  href: '#',
							  class: 'text-muted',
							  content: 'Privacy',
							},
						  ],
						},
						{
						  type: 'li',
						  children: [
							{
							  type: 'link',
							  href: '#',
							  class: 'text-muted',
							  content: 'Terms',
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
		},
	  ],
	},
  ],
}
