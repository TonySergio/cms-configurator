import { types } from 'mobx-state-tree';
import store from 'store'

const Loading = types.model('Loading', {
  on: types.optional(types.boolean, false),
  global: types.optional(types.boolean, true),
}).actions(self => ({
  setOn(flag=false) {
    self.on = flag;
  }
}));

const defaultTheme = 'light';

const MenuRoute = types.model('MenuRoute', {
  id: types.string,
  icon: types.optional(types.string, ''),
  name: types.string,
  route: types.string,
  menuParentId: types.optional(types.string, ''),
  breadcrumbParentId: types.optional(types.string, '')
})


const defaultRoutes = [{
    id: '1',
    icon: 'home',
    name: 'Start Page',
    route: '/home',
  },
  {
      id: '2',
      icon: 'database',
      name: 'Configurations',
      route: '/configurations',
  },
  {
    id: '21',
    menuParentId: '-1',
    breadcrumbParentId: '2',
    name: 'Configuration Edit',
    route: '/configurations/:id'
  },
];

const LayoutStore = types.model('LayoutStore', {
  loading: types.optional(Loading, {}),
  avatar: '/anonym_user.jpg',
  userName: 'Black Jack',
  routeList: types.optional(types.array(MenuRoute), defaultRoutes),
  collapsed: store.get('collapsed') || false,
  theme: store.get('theme') || defaultTheme,
  isMobile: false,
  notifications: types.optional(types.array(types.string), [])
}).actions(self => ({
    handleCollapseChange(collapsed) {
      store.set('collapsed', collapsed);
      self.collapsed = collapsed;
    },

    handleThemeChange(theme=defaultTheme) {
      store.set('theme', theme);
      self.theme = theme;
    },
    setMobile(mobile) {
      self.isMobile = mobile;
    }

}))

export default LayoutStore;
