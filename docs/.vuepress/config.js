module.exports = {
  title: 'Ring-UI',
  description: 'vue 2.0 ui组件库',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nextLinks: false, // 禁用所有页面的 下一篇 链接
    prevLinks: false, // 禁用所有页面的 上一篇 链接
    lastUpdated: 'Last Updated',
    logo: '/favicon-32x32.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: 'GitHub', link: 'https://github.com/huiXinYiJi/ring-ui', target:'_blank' },
      // {
      //   text: '选择语言',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: '中文', link: '/language/chinese/' },
      //     { text: '英文', link: '/language/japanese/' }
      //   ]
      // }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '介绍',
          collapsable: false,
          children: [
            ['', 'Ring UI']
          ]
        },
        {
          title: '快速上手',
          collapsable: false,
          children: [
            ['installation', '安装'],
            ['import-on-demand', '按需引入'],
            ['supported-platforms', '支持平台'],
            ['common-issues', '常见问题']
          ]
        },
        {
          title: '指南',
          collapsable: false,
          children: [
            ['theme', '主题'],
            ['i18n', '国际化'],
          ]
        },
        {
          title: '版本',
          collapsable: false,
          children: [
            ['changelog', '变更日志'],
          ]
        }
      ],
      '/components/': [
        {
          title: '组件总览',
          path: '/components/',
          collapsable: false,
        },
        {
          title: '通用',
          collapsable: false,
          children: [
            ['basic/color', 'Color 色彩'],
            ['basic/button', 'Button 按钮'],
            ['basic/icon', 'Icon 图标'],
            ['basic/typography', 'Typography 排版'],
          ]
        },
        {
          title: '布局',
          collapsable: false,
          children: [
            ['layout/divider', 'Divider 分割线'],
            ['layout/grid', 'Grid 栅格'],
            ['layout/layout', 'Layout 布局'],
            ['layout/space', 'Space 间距'],
          ]
        },
        {
          title: '导航',
          collapsable: false,
          children: [
            ['navigation/affix', 'Affix 固钉'],
            ['navigation/breadcrumb', 'Breadcrumb 面包屑'],
            ['navigation/dropdown', 'Dropdown 下拉菜单'],
            ['navigation/menu', 'Menu 导航菜单'],
            ['navigation/page-header', 'PageHeader 页头'],
            ['navigation/pagination', 'Pagination 分页'],
            ['navigation/steps', 'Steps 步骤条'],
          ]
        },
        {
          title: 'Form',
          collapsable: false,
          children: [
            ['form/auto-complete', 'AutoComplete 自动完成'],
            ['form/cascader', 'Cascader 级联选择'],
            ['form/checkbox', 'Checkbox 多选框'],
            ['form/date-picker', 'DatePicker 日期选择框'],
            ['form/input', 'Input 输入框'],
            ['form/input-number', 'InputNumber 数字输入框'],
            ['form/mentions', 'Mentions 提及'],
            ['form/radio', 'Radio 单选框'],
            ['form/rate', 'Rate 评分'],
            ['form/select', 'Select 选择器'],
            ['form/slider', 'Slider 滑动输入条'],
            ['form/switch', 'Switch 开关'],
            ['form/time-picker', 'TimePicker 时间选择框'],
            ['form/transfer', 'Transfer 穿梭框'],
            ['form/tree-select', 'TreeSelect 树选择'],
            ['form/upload', 'Upload 上传'],
            ['form/color-picker', 'ColorPicker 颜色选择器'],
            ['form/form', 'Form 表单'],
          ]
        },
        {
          title: '数据展示',
          collapsable: false,
          children: [
            ['data/table', 'Table 表格'],
            ['data/tree', 'Tree 树形控件'],
            ['data/tooltip', 'Tooltip 文字提示'],
            ['data/avatar', 'Avatar 头像'],
            ['data/badge', 'Badge 徽标数'],
            ['data/calendar', 'Calendar 日历'],
            ['data/card', 'Card 卡片'],
            ['data/carousel', 'Carousel 走马灯'],
            ['data/collapse', 'Collapse 折叠面板'],
            ['data/comment', 'Comment 评论'],
            ['data/descriptions', 'Descriptions 描述列表'],
            ['data/empty', 'Empty 空状态'],
            ['data/image', 'Image 图片'],
            ['data/list', 'List 列表'],
            ['data/popover', 'Popover 气泡卡片'],
            ['data/statistic', 'Statistic 统计数值'],
            ['data/tabs', 'Tabs 标签页'],
            ['data/tag', 'Tag 标签'],
            ['data/timeline', 'Timeline 时间轴'],
          ]
        },
        {
          title: '反馈',
          collapsable: false,
          children: [
            ['reback/alert', 'Alert 警告提示'],
            ['reback/drawer', 'Drawer 抽屉'],
            ['reback/message', 'Message 消息提示'],
            ['reback/message-box', 'MessageBox 弹框'],
            ['reback/modal', 'Modal 对话框'],
            ['reback/Notification', 'Notification 通知'],
            ['reback/popconfirm', 'Popconfirm 气泡确认框'],
            ['reback/progress', 'Progress 进度条'],
            ['reback/result', 'Result 结果'],
            ['reback/skeleton', 'Skeleton 骨架屏'],
            ['reback/loading', 'Loading 加载中'],
          ]
        },
        {
          title: 'Other',
          collapsable: false,
          children: [
            ['other/anchor', 'Anchor 锚点'],
            ['other/back-top', 'BackTop 回到顶部'],
            ['other/config-provider', 'ConfigProvider 全局化配置'],
            ['other/locale-provider', 'LocaleProvider 国际化'],
            ['other/infinite-scroll', 'InfiniteScroll 无限滚动'],
          ]
        }
      ],
      // fallback
      '/': [
        '',
      ]
    }
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/nprogress', 'vuepress-plugin-side-anchor'],
  chainWebpack(config, isServer) {
    for (const lang of ["sass", "scss"]) {
      for (const name of ["modules", "normal"]) {
        const rule = config.module.rule(lang).oneOf(name);
        rule.uses.delete("sass-loader");

        rule
          .use("sass-loader")
          .loader("sass-loader")
          .options({
            implementation: require("sass"),
            sassOptions: {
              indentedSyntax: lang === "sass"
            }
          });
      }
    }
  }
}
