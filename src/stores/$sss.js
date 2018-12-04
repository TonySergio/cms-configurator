import { types } from 'mobx-state-tree';

console.log(`TYPES: ${types}`);

const Todo = types
  .model({
    name: types.optional(types.string, 'list'),
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

export default Todo;
