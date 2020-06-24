import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import _ from "lodash";


import {
  Form,
  message,
  Modal,
  notification,
  Icon,
  Input,
  Checkbox,
  Button,
  Layout,
  Menu,
  List,
  Switch,
  Skeleton,
  Avatar,
  Table,
  Tag,
  Divider,
  PageHeader,
  Statistic,
  Row,
  Spin,
  Card,
  Col,
  Slider,
  DatePicker,
  Breadcrumb,
  FormModel,
  Select,
  Radio,
  AutoComplete,
  InputNumber,
} from 'ant-design-vue';


import RangePicker from 'ant-design-vue/es/date-picker/RangePicker';

import RadioGroup from 'ant-design-vue/es/radio/Group'

import 'ant-design-vue/dist/antd.css';


Vue.use(Form);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Button);
Vue.use(Modal);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(List);
Vue.use(Switch);
Vue.use(Skeleton);
Vue.use(Avatar);
Vue.use(Table);
Vue.use(Tag);
Vue.use(Divider);
Vue.use(PageHeader);
Vue.use(Statistic);
Vue.use(Row);
Vue.use(Spin);
Vue.use(Card);
Vue.use(Col);
Vue.use(Slider);
Vue.use(DatePicker);
Vue.use(RangePicker);
Vue.use(Breadcrumb);
Vue.use(FormModel);
Vue.use(Select);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(AutoComplete);
Vue.use(InputNumber);



Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$_ = _;

window._ = _;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')