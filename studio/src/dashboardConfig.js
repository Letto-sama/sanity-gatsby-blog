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
                  buildHookId: '604a366e27dc5d0eb3b22815',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xmecjvd5',
                  apiId: '9fa386ee-791f-4cf8-8ede-fcf8350e328e'
                },
                {
                  buildHookId: '604a366e8b10850d0aeef878',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-x23r2dn2',
                  apiId: '6527d49b-6d78-445d-8bb7-f3e1ec6ac102'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Letto-sama/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-x23r2dn2.netlify.app', category: 'apps' }
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
