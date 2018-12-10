import { types } from 'mobx-state-tree';

const Loading = types.model('Loading', {
  on: types.optional(types.boolean, false),
  global: types.optional(types.boolean, true),
}).actions(self => ({
  setOn(flag=false) {
    self.on = flag;
  }
}));

const LayoutStore = types.model('LayoutStore', {
  loading: types.optional(Loading),
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
});

export default LayoutStore;
