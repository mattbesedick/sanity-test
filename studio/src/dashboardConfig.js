export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc26cf933d94488838b5d65',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-56pkini8',
                  apiId: '45fecf17-b7b2-4bb2-8e15-0789407a2e3b'
                },
                {
                  buildHookId: '5fc26cf92e5496759f401cf1',
                  title: 'Blog Website',
                  name: 'sanity-test-web-trf4x1p3',
                  apiId: '8f9cc65b-5622-4893-b6eb-fa17727b8b77'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattbesedick/sanity-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-test-web-trf4x1p3.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
