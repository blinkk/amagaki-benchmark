module.exports = function (pod) {
  pod.configure({
    metadata: {
      name: 'Amagaki benchmark',
    },
    localization: {
      defaultLocale: 'en',
      locales: [
        'de',
        'en',
        'fi',
        'fr',
        'it',
        'ja',
        'ko',
        'nl',
      ],
    },
    staticRoutes: [
      {
        path: '/static/',
        staticDir: '/source/static/',
      },
    ],
  });
};
