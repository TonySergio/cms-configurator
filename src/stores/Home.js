import { types } from 'mobx-state-tree';

const Home = types
  .model({
    name: types.optional(types.string, '123'),
    done: types.optional(types.boolean , false)
  })
  .actions(self => {
    function setTitle(newTitle) {
      self.name = newTitle;
    }

    return {
      setTitle,
    };
  });

export default Home;
