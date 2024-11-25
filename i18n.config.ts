export default defineI18nConfig(() => ({
  messages: {
    en: {
      genders: {
        women: 'women',
        men: 'men'
      },
      ui: {
        select: {
          placeholder: 'Select option',
        }
      },
      becomeAModel: {
        title: 'Become a model',
        description: 'Fill out all fields to send your application to our agency',
        form: {
          first: {
            title: 'Personal Information',
            namePlaceholder: 'Full name',
            phone: 'Phone',
            email: 'Email',
            city: 'City',
            dateOfBirth: 'Date of Birth',
            maritalStatus: 'Marital Status',
            maritalStatusOptions: {
              1: 'Not married',
              2: 'Married',
              3: 'In a civil marriage',
              4: 'Divorced'
            },
            instagram: 'Instagram',
            telegram: 'Telegram'
          },
          second: {
            title: 'Measurements',
            bust: 'Bust',
            waist: 'Waist',
            hips: 'Hips',
            clothingSize: 'Clothing Size',
            shoeSize: 'Shoe Size'
          },
          third: {
            title: 'Portfolio and Experience',
            linkToPortfolio: 'Link to Portfolio',
            linkToSnaps: 'Link to Snaps',
            about: 'About the Experience',
            aboutPlaceholder: 'Write about your modeling experience'
          }
        },
        footer: {
          backButton: '< back',
          policyText: 'By clicking the "SEND" button, you consent to',
          policyLink: 'the privacy and personal data processing policy',
          submitButton: 'Send'
        },
        thanks: {
          title: 'Your application has been sent',
          description: 'In the near future, the manager will study your profile and contact you',
          closeButton: 'Okay'
        }
      },
      header: {
        becomeAModel: 'Become a model',
        menu: 'Menu'
      },
      footer: {
        policyText: 'Privacy Policy'
      },
      tooltip: {
        buttonText: 'Book a model',
        popover: {
          title: 'Book a model',
          text: 'To reserve a model, send a photo or name of the model to our manager',
          linkText: 'Contact us'
        }
      },
      pages: {
        about: {
          breadcrumbs: {
            1: 'Home',
            2: 'About us'
          }
        },
        policy: {
          breadcrumbs: {
            1: 'Home',
            2: 'Privacy Policy'
          }
        },
        catalog: {
          breadcrumbs: {
            1: 'Home'
          }
        },
        profile: {
          actions: {
            portfolio: 'Portfolio',
            covers: 'Covers',
            shows: 'Shows',
            digitals: 'Digitals',
            videos: 'Videos',
            instagram: 'Instagram',
            view_portfolio: 'View',
            show_all: 'Show all',
            hide: 'Hide',
            see_other_models: 'Back to the Models Board'
          },
          characteristic: {
            title: 'Model Parameters',
            height: 'Height',
            bust: 'Bust',
            waist: 'Waist',
            hips: 'Hips',
            hair: 'Hair',
            eyes: 'Eyes'
          }
        },
        models: {
          title: 'Select Our Models and Talents',
          breadcrumbs: {
            1: 'Home',
            2: 'Category'
          }
        }
      },
      seo: {
        main: {
          h1: 'Modeling Agency Select Management',
          title: 'Modeling Agency Select Management - Moscow, Russia',
          description: 'Modeling agency specializing in selecting top talent in Moscow, Russia.'
        },
        models: {
          h1: 'Models',
          title: 'Select Management Model Catalog - Moscow, Russia',
          description: 'Explore our talented models and book for your next project.'
        },
        policy: {
          title: 'Privacy Policy of Select Management Modeling Agency',
          description: 'Privacy Policy of Select Management Modeling Agency, Russia, Moscow. Contact us at global@select.agency'
        },
        about: {
          title: 'About Select Management Modeling Agency',
          description: 'For over 10 years, the international modeling agency Select Management has been helping models build their careers and brands find their muse!'
        },
        contacts: {
          title: 'Contact Information of Select Management Modeling Agency',
          description: 'Contact information for Select Management Modeling Agency, Russia, Moscow. Contact us at global@select.agency'
        }
      }
    },


    ru: {
      genders: {
        women: 'женщины',
        men: 'мужчины'
      },
      ui: {
        select: {
          placeholder: 'Выберите вариант',
        }
      },
      becomeAModel: {
        title: 'Cтать моделью',
        description: 'Заполните все поля, чтобы отправить заявку в наше агентство',
        form: {
          first: {
            title: 'Основная информация',
            namePlaceholder: 'ФИО',
            phone: 'Телефон',
            email: 'Email',
            city: 'Город',
            dateOfBirth: 'Дата рождения',
            maritalStatus: 'Семейное положение',
            maritalStatusOptions: {
              1: 'Не замужем/Не женат',
              2: 'Женат/Замужем',
              3: 'Гражданский брак',
              4: 'Разведен/Разведена'
            },
            instagram: 'Instagram',
            telegram: 'Telegram'
          },
          second: {
            title: 'Параметры',
            bust: 'Грудь',
            waist: 'Талия',
            hips: 'Бёдра',
            clothingSize: 'Размер одежды',
            shoeSize: 'Размер обуви'
          },
          third: {
            title: 'Портфолио и опыт',
            linkToPortfolio: 'Ссылка на портфолио',
            linkToSnaps: 'Ссылка на снэпы',
            about: 'О вашем опыте',
            aboutPlaceholder: 'Расскажите о вашем опыте в моделинге'
          }
        },
        footer: {
          backButton: '< назад',
          policyText: 'Нажимая кнопку "ОТПРАВИТЬ", вы соглашаетесь с',
          policyLink: 'политикой конфиденциальности и обработки персональных данных',
          submitButton: 'Отправить'
        },
        thanks: {
          title: 'Ваша заявка отправлена',
          description: 'В ближайшее время менеджер ознакомится с вашим профилем и свяжется с вами',
          closeButton: 'Ок'
        }
      },
      header: {
        becomeAModel: 'Стать моделью',
        menu: 'Меню'
      },
      footer: {
        policyText: 'Политика конфиденциальности'
      },
      tooltip: {
        buttonText: 'забукировать модель',
        popover: {
          title: 'забукировать модель',
          text: 'Чтобы забронировать модель, отправьте фотографию или имя модели нашему менеджеру.',
          linkText: 'Свяжитесь с нами'
        }
      },
      pages: {
        about: {
          breadcrumbs: {
            1: 'Главная',
            2: 'О нас'
          }
        },
        policy: {
          breadcrumbs: {
            1: 'Главная',
            2: 'Политика конфиденциальности'
          }
        },
        catalog: {
          breadcrumbs: {
            1: 'Главная'
          }
        },
        profile: {
          actions: {
            portfolio: 'Портфолио',
            covers: 'Обложки',
            shows: 'Шоу',
            digitals: 'Снэпы',
            videos: 'Видео',
            instagram: 'Instagram',
            view_portfolio: 'Посмотреть',
            show_all: 'Показать все',
            hide: 'Скрыть',
            see_other_models: 'Смотреть других моделей'
          },
          characteristic: {
            title: 'Параметры модели',
            height: 'Рост',
            bust: 'Бюст',
            waist: 'Талия',
            hips: 'Бедра',
            hair: 'Волосы',
            eyes: 'Глаза'
          }
        },
        models: {
          title: 'Наши модели <br>и таланты',
          breadcrumbs: {
            1: 'Главная',
            2: 'Наши модели и таланты'
          }
        }
      },
      seo: {
        main: {
          h1: 'Модельное агентство Select Management',
          title: 'Модельное агентство Select Management - Москва, Россия',
          description: 'Модельное агентство, специализирующееся на подборе талантов в Москве, Россия.'
        },
        models: {
          h1: 'Модели',
          title: 'Каталог моделей Select Management - Москва, Россия',
          description: 'Откройте для себя наших талантливых моделей и забронируйте для следующего проекта.'
        },
        policy: {
          title: 'Политика конфиденциальности модельного агенства Select Management',
          description: 'Политика конфиденциальности модельного агенства Select Management, Россия, Москва. Связаться с нами - global@select.agency'
        },
        about: {
          title: 'О модельном агентстве Select Management',
          description: 'Международное модельное агентство Select Management уже более 10 лет помогает моделям построить свою карьеру, а брендам найти свою музу!'
        },
        contacts: {
          title: 'Контакты модельного агенства Select Management',
          description: 'Контактная информация модельного агенства Select Management, Россия, Москва. Связаться с нами - global@select.agency'
        }
      }
    }
  }
}));
