module.exports = {
  title: 'jkcs 随记',
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    sidebar: {
      '/': [
        {
          title: '逆向与破解',
          collapsable: false,
          children: [
            '/hack/frida',
            '/hack/unity-Il2cpp',
          ]
        },
        ['/about', '关于此博客']
      ],
    }
  }
};
