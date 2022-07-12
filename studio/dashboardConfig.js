export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '62cd3f6188dcb96993ff9ac3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cijr58um',
                  apiId: '44a69fad-8021-4ded-9e9e-a5683ff03c33'
                },
                {
                  buildHookId: '62cd3f61fe55ee57f6873a35',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4s8kgxev',
                  apiId: '0b4ec31d-7c1a-4afa-bbad-aaac655ec661'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/basora55/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4s8kgxev.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
