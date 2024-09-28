import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    isOpen: false,
    menu: [
      {
        label: 'Women',
        items: [
          {
            label: 'International',
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
                label: 'Direct',
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
                label: 'Direct',
                to: '/6'
              }
            ]
          }
        ]
      },
      {
        label: 'Men',
        items: [
          {
            label: 'International',
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
                label: 'Direct',
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
                label: 'Direct',
                to: '/6'
              }
            ]
          }
        ]
      },
      {
        label: 'Become a model',
        to: '/model'
      },
      {
        label: 'About',
        to: '/about'
      },
      {
        label: 'Contact us',
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
