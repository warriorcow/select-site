import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    isOpen: true,
    menu: [
      {
        label: 'women',
        items: [
          {
            label: 'international',
            items: [
              {
                label: 'New Faces',
                to: '/1'
              },
              {
                label: 'Main board',
                to: '/2'
              },
              {
                label: 'direct',
                to: '/3'
              }
            ]
          },
          {
            label: 'Local',
            items: [
              {
                label: 'New Faces',
                to: '/4'
              },
              {
                label: 'Main board',
                to: '/5'
              },
              {
                label: 'direct',
                to: '/6'
              }
            ]
          }
        ]
      },
      {
        label: 'men',
        items: [
          {
            label: 'international',
            items: [
              {
                label: 'New Faces',
                to: '/1'
              },
              {
                label: 'Main board',
                to: '/2'
              },
              {
                label: 'direct',
                to: '/3'
              }
            ]
          },
          {
            label: 'Local',
            items: [
              {
                label: 'New Faces',
                to: '/4'
              },
              {
                label: 'Main board',
                to: '/5'
              },
              {
                label: 'direct',
                to: '/6'
              }
            ]
          }
        ]
      },
      {
        label: 'become a model',
        to: '/model'
      },
      {
        label: 'about',
        to: '/about'
      },
      {
        label: 'contact us',
        to: '/contact'
      }
    ]
  }),
  actions: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
});
