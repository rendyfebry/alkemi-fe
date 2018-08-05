export const ELEMENT_OPTIONS = [
	{
		name: 'Paragraph',
		initial: 'elParagraph',
		icon: 'fas fa-paragraph',
		type: 'paragraph',
		html: `<div class="element-body"
					data-type="elParagrah"
					data-edit="text-editor"
					data-fontsize="16"
					data-linesize="1"
					data-color="#212121">
					<div class="element-action">
						<div class="item" data-action="edit">
							<i class="fas fa-pencil-alt"></i>
						</div>
						<div class="item" data-action="delete">
							<i class="fas fa-trash-alt"></i>
						</div>
						<div class="item handle" data-action="move">
							<i class="fas fa-arrows-alt"></i>
						</div>
					</div>
					<div class="element-content">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and scrambled it to make
							a type specimen book.
						</p>
					</div>
				</div>`,
		template: {
			type: 'paragraph',
			icon: 'fas fa-paragraph',
			id: '',
			class: '',
			content: `This is a template for a simple marketing or informational website.
					It includes a large callout called a jumbotron and three supporting pieces of content.
					Use it as a starting point to create something more unique.`,
		},
	},
	{
		name: 'Headline',
		initial: 'elHeading',
		icon: 'fas fa-heading',
		type: 'heading',
		html: `<div class="element-body" data-type="elHeading" data-edit="text-headline">
					<div class="element-action">
						<div class="item" data-action="edit">
							<i class="fas fa-pencil-alt"></i>
						</div>
						<div class="item" data-action="delete">
							<i class="fas fa-trash-alt"></i>
						</div>
						<div class="item handle" data-action="move">
							<i class="fas fa-arrows-alt"></i>
						</div>
					</div>
					<div class="element-content">
						<h1>Hello, world!</h1>
					</div>
				</div>`,
		template: {
			type: 'heading',
			icon: 'fas fa-heading',
			content: 'Main Title',
			id: '',
			options: {
				level: 1,
			},
		},
	},
	{
		name: 'Image',
		initial: 'elImage',
		icon: 'fas fa-image',
		type: 'image',
		html: `<div class="element-body" data-type="elImage" data-edit="image" data-reference="square">
						<div class="element-action">
							<div class="item" data-action="edit">
								<i class="fas fa-pencil-alt"></i>
							</div>
							<div class="item" data-action="delete">
								<i class="fas fa-trash-alt"></i>
							</div>
							<div class="item handle" data-action="move">
								<i class="fas fa-arrows-alt"></i>
							</div>
						</div>
						<div class="element-content">
							<img src="https://app.managix.id/static/img/image-placeholder.jpg" class="img-fluid img-responsive img-reference-square img-editing"/>
						</div>
					</div>`,
		template: {
			type: 'image',
			icon: 'fas fa-image',
			id: '',
			options: {
				src: 'https://app.managix.id/static/img/image-placeholder.jpg',
			},
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
								{
									type: 'heading',
									icon: 'fas fa-heading',
									id: 'heading_rujuh',
									parentId: 'col_yggic',
									content: `Click Here`,
									options: {
										level: 1,
									},
								},
							],
						},
						{
							type: 'col',
							class: 'col dropzone',
							id: 'col_wpzeo',
							parentId: 'row_zevpy',
							children: [
								{
									type: 'paragraph',
									icon: 'fas fa-paragraph',
									id: 'paragraph_pbjza',
									parentId: 'col_wpzeo',
									content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
											when an unknown printer took a galley of type and scrambled it to make
											a type specimen book.`,
								},
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
