const routes = [{
	path: '/',
	component: () => import('layouts/MyLayout.vue'),
	children: [{
		path: '',
		component: () => import('pages/Index.vue')
	},
	{
		path: '/design-gallery',
		component: () => import('pages/Collection/Collection.vue'),
		children: [{
			path: '/design-gallery',
			component: () => import('pages/Collection/CollectionGallery.vue'),
		}]
	},
	{
		path: '/design-gallery/websites',
		component: () => import('pages/Collection/CollectionWebsites.vue')
	},
]
}]


// Always leave this as last one
if (process.env.MODE !== 'ssr') {
	routes.push({
		path: '*',
		component: () => import('pages/Error404.vue')
	})
}

export default routes
