const i18n_config = () => ({
  messages: {
    en: {
      genders: {
        women: "women",
        men: "men"
      },
      ui: {
        select: {
          placeholder: "Select option"
        }
      },
      becomeAModel: {
        title: "Become a model",
        description: "Fill out all fields to send your application to our agency",
        form: {
          first: {
            title: "Personal Information",
            namePlaceholder: "Full name",
            phone: "Phone",
            email: "Email",
            city: {
              text: "City",
              placeholder: "New York"
            },
            dateOfBirth: {
              text: "Date of Birth",
              placeholder: "01.01.2001"
            },
            maritalStatus: "Marital Status",
            maritalStatusOptions: {
              1: "Not married",
              2: "Married",
              3: "In a civil marriage",
              4: "Divorced"
            },
            instagram: "Instagram",
            telegram: "Telegram"
          },
          second: {
            title: "Measurements",
            bust: "Bust",
            shoes: "Shoes",
            waist: "Waist",
            hips: "Hips",
            clothingSize: "Clothing Size",
            shoeSize: "Shoe Size",
            height: "Height"
          },
          third: {
            title: "Portfolio and Experience",
            linkToPortfolio: "Link to Portfolio",
            linkToSnaps: "Link to Snaps",
            about: "About the Experience",
            aboutPlaceholder: "Write about your modeling experience"
          }
        },
        footer: {
          backButton: "< back",
          policyText: 'By clicking the "SEND" button, you consent to',
          policyLink: "the privacy and personal data processing policy",
          submitButton: {
            text: "Send",
            error: "An error occurred"
          }
        },
        thanks: {
          title: "Your application has been sent",
          description: "In the near future, the manager will study your profile and contact you",
          closeButton: "Okay"
        }
      },
      header: {
        becomeAModel: "Become a model",
        menu: "Menu"
      },
      footer: {
        policyText: "Privacy Policy"
      },
      tooltip: {
        buttonText: "Book a model",
        popover: {
          title: "Book a model",
          text: "To reserve a model, send a photo or name of the model to our manager",
          linkText: "Contact us"
        }
      },
      pages: {
        about: {
          breadcrumbs: {
            1: "Home",
            2: "About us"
          }
        },
        personalData: {
          breadcrumbs: {
            1: "Home",
            2: "Personal Data Consent"
          }
        },
        policy: {
          breadcrumbs: {
            1: "Home",
            2: "Privacy Policy"
          }
        },
        catalog: {
          breadcrumbs: {
            1: "Home"
          }
        },
        contacts: {
          breadcrumbs: {
            1: "Home",
            2: "Contact us"
          }
        },
        profile: {
          actions: {
            portfolio: "Portfolio",
            covers: "Covers",
            shows: "Shows",
            digitals: "Digitals",
            videos: "Videos",
            instagram: "Instagram",
            view_portfolio: "View",
            show_all: "Show all",
            hide: "Hide",
            see_other_models: "Back to the Models Board"
          },
          characteristic: {
            title: "Model\u2019s measurements",
            height: "Height",
            bust: "Bust",
            shoes: "Shoes",
            waist: "Waist",
            hips: "Hips",
            hair: "Hair",
            eyes: "Eyes"
          }
        },
        models: {
          title: "Select Our Models<br> and Talents",
          breadcrumbs: {
            1: "Home",
            2: "Category"
          }
        }
      },
      cookieBanner: {
        text: "We use cookies necessary for the stable, efficient and secure operation of the Site.",
        learnMore: "Learn more",
        accept: "Accept"
      },
      seo: {
        main: {
          h1: "Modeling Agency Select Management",
          title: "Modeling Agency Select Management - Moscow, Russia",
          description: "Modeling agency specializing in selecting top talent in Moscow, Russia."
        },
        models: {
          h1: "Models",
          title: "Select Management Model Catalog - Moscow, Russia",
          description: "Explore our talented models and book for your next project."
        },
        policy: {
          title: "Privacy Policy of Select Management Modeling Agency",
          description: "Privacy Policy of Select Management Modeling Agency, Russia, Moscow. Contact us at global@select.agency"
        },
        about: {
          title: "About Select Management Modeling Agency",
          description: "For over 10 years, the international modeling agency Select Management has been helping models build their careers and brands find their muse!"
        },
        contacts: {
          title: "Contact Information of Select Management Modeling Agency",
          description: "Contact information for Select Management Modeling Agency, Russia, Moscow. Contact us at global@select.agency"
        }
      }
    },
    ru: {
      genders: {
        women: "\u0436\u0435\u043D\u0449\u0438\u043D\u044B",
        men: "\u043C\u0443\u0436\u0447\u0438\u043D\u044B"
      },
      ui: {
        select: {
          placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442"
        }
      },
      becomeAModel: {
        title: "C\u0442\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C\u044E",
        description: "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u0432 \u043D\u0430\u0448\u0435 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E",
        form: {
          first: {
            title: "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
            namePlaceholder: "\u0424\u0418\u041E",
            phone: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
            email: "Email",
            city: {
              text: "\u0413\u043E\u0440\u043E\u0434",
              placeholder: "\u041C\u043E\u0441\u043A\u0432\u0430"
            },
            dateOfBirth: {
              text: "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
              placeholder: "01.01.2001"
            },
            maritalStatus: "\u0421\u0435\u043C\u0435\u0439\u043D\u043E\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
            maritalStatusOptions: {
              1: "\u041D\u0435 \u0437\u0430\u043C\u0443\u0436\u0435\u043C/\u041D\u0435 \u0436\u0435\u043D\u0430\u0442",
              2: "\u0416\u0435\u043D\u0430\u0442/\u0417\u0430\u043C\u0443\u0436\u0435\u043C",
              3: "\u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u0438\u0439 \u0431\u0440\u0430\u043A",
              4: "\u0420\u0430\u0437\u0432\u0435\u0434\u0435\u043D/\u0420\u0430\u0437\u0432\u0435\u0434\u0435\u043D\u0430"
            },
            instagram: "Instagram",
            telegram: "Telegram"
          },
          second: {
            title: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",
            bust: "\u0413\u0440\u0443\u0434\u044C",
            shoes: "\u0420\u0430\u0437\u043C\u0435\u0440 \u043E\u0431\u0443\u0432\u0438",
            waist: "\u0422\u0430\u043B\u0438\u044F",
            hips: "\u0411\u0451\u0434\u0440\u0430",
            clothingSize: "\u0420\u0430\u0437\u043C\u0435\u0440 \u043E\u0434\u0435\u0436\u0434\u044B",
            shoeSize: "\u0420\u0430\u0437\u043C\u0435\u0440 \u043E\u0431\u0443\u0432\u0438",
            height: "\u0420\u043E\u0441\u0442"
          },
          third: {
            title: "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0438 \u043E\u043F\u044B\u0442",
            linkToPortfolio: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",
            linkToSnaps: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u043D\u0435\u043F\u044B",
            about: "\u041E \u0432\u0430\u0448\u0435\u043C \u043E\u043F\u044B\u0442\u0435",
            aboutPlaceholder: "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E \u0432\u0430\u0448\u0435\u043C \u043E\u043F\u044B\u0442\u0435 \u0432 \u043C\u043E\u0434\u0435\u043B\u0438\u043D\u0433\u0435"
          }
        },
        footer: {
          backButton: "< \u043D\u0430\u0437\u0430\u0434",
          policyText: '\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443 "\u041E\u0422\u041F\u0420\u0410\u0412\u0418\u0422\u042C", \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441',
          policyLink: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.",
          submitButton: {
            text: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
            error: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430"
          }
        },
        thanks: {
          title: "\u0432\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430",
          description: "\u0412 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0438\u0437\u0443\u0447\u0438\u0442 \u0432\u0430\u0448\u0443 \u0430\u043D\u043A\u0435\u0442\u0443, \u0438 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438",
          closeButton: "\u0445\u043E\u0440\u043E\u0448\u043E"
        }
      },
      header: {
        becomeAModel: "\u0421\u0442\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C\u044E",
        menu: "\u041C\u0435\u043D\u044E"
      },
      footer: {
        policyText: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
      },
      tooltip: {
        buttonText: "\u0437\u0430\u0431\u0443\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C",
        popover: {
          title: "\u0437\u0430\u0431\u0443\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C",
          text: "\u0427\u0442\u043E\u0431\u044B \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C, \u043E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044E \u0438\u043B\u0438 \u0438\u043C\u044F \u043C\u043E\u0434\u0435\u043B\u0438 \u043D\u0430\u0448\u0435\u043C\u0443 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0443.",
          linkText: "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438"
        }
      },
      pages: {
        about: {
          breadcrumbs: {
            1: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
            2: "\u041E \u043D\u0430\u0441"
          }
        },
        personalData: {
          breadcrumbs: {
            1: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
            2: "C\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
          }
        },
        policy: {
          breadcrumbs: {
            1: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
            2: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
          }
        },
        catalog: {
          breadcrumbs: {
            1: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
          }
        },
        contacts: {
          breadcrumbs: {
            1: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
            2: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
          }
        },
        profile: {
          actions: {
            portfolio: "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",
            covers: "\u041E\u0431\u043B\u043E\u0436\u043A\u0438",
            shows: "\u0428\u043E\u0443",
            digitals: "\u0421\u043D\u0435\u043F\u044B",
            videos: "\u0412\u0438\u0434\u0435\u043E",
            instagram: "Instagram",
            view_portfolio: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C",
            show_all: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435",
            hide: "\u0421\u043A\u0440\u044B\u0442\u044C",
            see_other_models: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0445 \u043C\u043E\u0434\u0435\u043B\u0435\u0439"
          },
          characteristic: {
            title: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043C\u043E\u0434\u0435\u043B\u0438",
            height: "\u0420\u043E\u0441\u0442",
            bust: "\u0411\u044E\u0441\u0442",
            shoes: "\u0420\u0430\u0437\u043C\u0435\u0440 \u043E\u0431\u0443\u0432\u0438",
            waist: "\u0422\u0430\u043B\u0438\u044F",
            hips: "\u0411\u0435\u0434\u0440\u0430",
            hair: "\u0412\u043E\u043B\u043E\u0441\u044B",
            eyes: "\u0413\u043B\u0430\u0437\u0430"
          }
        },
        models: {
          title: "\u041D\u0430\u0448\u0438 \u043C\u043E\u0434\u0435\u043B\u0438 <br>\u0438 \u0442\u0430\u043B\u0430\u043D\u0442\u044B",
          breadcrumbs: {
            1: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
            2: "\u041D\u0430\u0448\u0438 \u043C\u043E\u0434\u0435\u043B\u0438 \u0438 \u0442\u0430\u043B\u0430\u043D\u0442\u044B"
          }
        }
      },
      cookieBanner: {
        text: "\u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043B\u044F \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0439, \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0421\u0430\u0439\u0442\u0430.",
        learnMore: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",
        accept: "\u041F\u0440\u0438\u043D\u044F\u0442\u044C"
      },
      seo: {
        main: {
          h1: "\u041C\u043E\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E Select Management",
          title: "\u041C\u043E\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E Select Management - \u041C\u043E\u0441\u043A\u0432\u0430, \u0420\u043E\u0441\u0441\u0438\u044F",
          description: "\u041C\u043E\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u044E\u0449\u0435\u0435\u0441\u044F \u043D\u0430 \u043F\u043E\u0434\u0431\u043E\u0440\u0435 \u0442\u0430\u043B\u0430\u043D\u0442\u043E\u0432 \u0432 \u041C\u043E\u0441\u043A\u0432\u0435, \u0420\u043E\u0441\u0441\u0438\u044F."
        },
        models: {
          h1: "\u041C\u043E\u0434\u0435\u043B\u0438",
          title: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043C\u043E\u0434\u0435\u043B\u0435\u0439 Select Management - \u041C\u043E\u0441\u043A\u0432\u0430, \u0420\u043E\u0441\u0441\u0438\u044F",
          description: "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0434\u043B\u044F \u0441\u0435\u0431\u044F \u043D\u0430\u0448\u0438\u0445 \u0442\u0430\u043B\u0430\u043D\u0442\u043B\u0438\u0432\u044B\u0445 \u043C\u043E\u0434\u0435\u043B\u0435\u0439 \u0438 \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u0443\u0439\u0442\u0435 \u0434\u043B\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430."
        },
        policy: {
          title: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043C\u043E\u0434\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0430\u0433\u0435\u043D\u0441\u0442\u0432\u0430 Select Management",
          description: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043C\u043E\u0434\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0430\u0433\u0435\u043D\u0441\u0442\u0432\u0430 Select Management, \u0420\u043E\u0441\u0441\u0438\u044F, \u041C\u043E\u0441\u043A\u0432\u0430. \u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438 - global@select.agency"
        },
        about: {
          title: "\u041E \u043C\u043E\u0434\u0435\u043B\u044C\u043D\u043E\u043C \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u0435 Select Management",
          description: "\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0435 \u043C\u043E\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E Select Management \u0443\u0436\u0435 \u0431\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u043C\u043E\u0434\u0435\u043B\u044F\u043C \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0441\u0432\u043E\u044E \u043A\u0430\u0440\u044C\u0435\u0440\u0443, \u0430 \u0431\u0440\u0435\u043D\u0434\u0430\u043C \u043D\u0430\u0439\u0442\u0438 \u0441\u0432\u043E\u044E \u043C\u0443\u0437\u0443!"
        },
        contacts: {
          title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u043C\u043E\u0434\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0430\u0433\u0435\u043D\u0441\u0442\u0432\u0430 Select Management",
          description: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043C\u043E\u0434\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0430\u0433\u0435\u043D\u0441\u0442\u0432\u0430 Select Management, \u0420\u043E\u0441\u0441\u0438\u044F, \u041C\u043E\u0441\u043A\u0432\u0430. \u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438 - global@select.agency"
        }
      }
    }
  }
});

export { i18n_config as default };
//# sourceMappingURL=i18n.config-6wapFx5L.mjs.map
