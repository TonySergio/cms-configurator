import { types } from 'mobx-state-tree';
import PaginationModel from 'models/PaginationModel';


const ConfigurationView = types.model('ConfigurationView', {
  id: types.identifierNumber,
  name: types.string,
  bankConfigurationType: types.string, //TODO: enum
  machines: types.string,
  qty: types.optional(types.integer, 0),
  toppers: types.optional(types.integer, 0),
  progressiveType: types.string,
  monitorConfiguration: types.integer,
  qtyDevices: types.optional(types.integer, 0)
});

const defaultList = [
  {
    id: 1,
    name: 'DLK Mega B2B',
    bankConfigurationType:'B2B',
    machines: 'Altera V',
    qty: 6,
    toppers: 6,
    progressiveType: 'Mega Digital Sign',
    monitorConfiguration: 5,
    qtyDevices: 2
  },
  {
    id: 2,
    name: 'DLK Mega',
    bankConfigurationType:'Line',
    machines: 'Altera V',
    qty: 3,
    toppers: 3,
    progressiveType: 'Mega Digital Sign',
    monitorConfiguration: 5,
    qtyDevices: 1
  },
  {
    id: 3,
    name: 'JPS 3M Signage',
    bankConfigurationType:'Line',
    machines: 'Altera',
    qty: 5,
    toppers: 0,
    progressiveType: 'Regular Digital Sign',
    monitorConfiguration: 2,
    qtyDevices: 1
  },
  {
    id: 4,
    name: 'JPS 2M Signage',
    bankConfigurationType:'Line',
    machines: 'Maple',
    qty: 4,
    toppers: 3,
    progressiveType: 'Regular Digital Sign',
    monitorConfiguration: 2,
    qtyDevices: 2
  }
];

const ConfigurationsStore = types.model('ConfigurationsStore', {
  list: types.optional(types.array(ConfigurationView), defaultList),
  pagination: types.optional(PaginationModel, {}),
  //currentItem: types.optional(ConfigurationView, null),
  selectedRowKeys: types.optional(types.array(types.integer), [])
})
  .actions( self => ({
    setSelectedKeys(keys) {
      self.selectedRowKeys = keys;
    }
  }));

export default ConfigurationsStore;
