// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  css: [
    '@/assets/styles/reset.scss',
  ],

  app: {
    head: {
      script: [],
      title:'페이오티 키오스크',
      meta:[
        {charset:'utf-8'},
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link:[
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Material+Icons'},
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Material+Icons+Outlined'},
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap'},
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'},
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100;200;300;400;500;600;700&display=swap'}
      ],
    },
  },
})
