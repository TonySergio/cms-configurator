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
  icon: types.string,
  name: types.string,
  route: types.string
})


const defaultRoutes = [{
    id: '1',
    icon: 'dashboard',
    name: 'New',
    route: '/new',
}];

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
