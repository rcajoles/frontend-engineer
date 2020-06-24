<template>
	<a-layout id="components-layout-demo-top-side-2" style="min-height: 100vh">


		<a-layout>
			<a-layout-sider theme="light" :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
				<!-- <div class="logo" /> -->
				<Sidebar />
			</a-layout-sider>

			<a-layout style="padding: 0 24px 24px" :style="{ marginLeft: '350px' }">
				<a-breadcrumb style="margin: 16px 0">
					<!-- <a-breadcrumb-item>Home</a-breadcrumb-item>
					<a-breadcrumb-item>List</a-breadcrumb-item>
					<a-breadcrumb-item>App</a-breadcrumb-item> -->
				</a-breadcrumb>

				<a-layout-content

				>
				<Main />
				</a-layout-content>
			</a-layout>

		</a-layout>

	</a-layout>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

export default {
	components: {
		Sidebar,
		Main
	},
	data() {
		return {
			collapsed: false
		};
	}
};
</script>

<style lang="scss" scoped>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}

.ant-layout-sider {

	min-width: 366px !important;

}

</style>
