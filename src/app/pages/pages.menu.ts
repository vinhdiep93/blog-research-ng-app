export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'blogs',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'general.menu.blogs', // menu title
            icon: 'ion-android-home', // menu icon
            selected: false,
            expanded: false,
            order: 0
          }
        }
      }
    ]
  }
];
