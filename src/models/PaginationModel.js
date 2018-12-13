import { types } from 'mobx-state-tree';

const PaginationModel = types.model('PaginationModel', {
  showSizeChanger: true,
  showQuickJumper: true,
  current: 1,
  total: 0,
  pageSize: 10,
});

export default PaginationModel;
