// see all availabe configs here: https://github.com/ninjacobra/nuxt3-awesome-starter/blob/v2/app.config.ts
export default defineAppConfig({
  awesome: {
    name: 'Nuxt 3 Awesome Starter Demo',
    description:
      'a demo from starter template for Nuxt 3 with minimalist themes design, built in components, drawer & menus, and more.',
    author: {
      name: 'ninjacobra',
      links: {
        github: 'https://github.com/ninjacobra',
        medium: 'https://ninjacobra.medium.com',
        website: 'https://ninjacobra.site',
      },
    },
    layout: {
      welcome: {
        // if false, in index page will show alert "create file "~/pages/index.vue" to replace this page"
        disableInfoReplaceIndexInWelcomePage: false,
        secondaryActionButton: {
          title: 'See Github',
        }
      }
    },
    project: {
      links: {
        github: 'https://github.com/ninjacobra/nuxt3-awesome-starter',
      },
    },
  },
})
