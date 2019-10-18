import pageComponents from '@internal/page-components'
import 'ant-design-vue/lib/menu/style/css'
import 'ant-design-vue/lib/layout/style/css'
import 'ant-design-vue/lib/avatar/style/css'
import 'ant-design-vue/lib/breadcrumb/style/css'
import 'ant-design-vue/lib/divider/style/css'
import 'ant-design-vue/lib/icon/style/css'
import 'ant-design-vue/lib/back-top/style/css'
import 'ant-design-vue/lib/collapse/style/css'
import 'ant-design-vue/lib/drawer/style/css'
import 'ant-design-vue/lib/button/style/css'
import 'ant-design-vue/lib/anchor/style/css'
import 'ant-design-vue/lib/tooltip/style/css'
import 'ant-design-vue/lib/spin/style/css'
import {
  Avatar,
  BackTop,
  Breadcrumb,
  Divider,
  Layout,
  Icon,
  Menu,
  Collapse,
  Drawer,
  Button,
  Anchor,
  Tooltip,
  Spin
} from 'ant-design-vue'

export default ({ Vue }) => {
  Vue.use(Avatar)
  Vue.use(BackTop)
  Vue.use(Breadcrumb)
  Vue.use(Divider)
  Vue.use(Layout)
  Vue.use(Icon)
  Vue.use(Menu)
  Vue.use(Collapse)
  Vue.use(Drawer)
  Vue.use(Button)
  Vue.use(Anchor)
  Vue.use(Tooltip)
  Vue.use(Spin)

  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }
}