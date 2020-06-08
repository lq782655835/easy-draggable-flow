<template>
	<div id="header">

		<el-menu :default-active="$route.path" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item index="/">首页</el-menu-item>
			<el-submenu index="2">
				<template slot="title">demo</template>
				<el-menu-item index="/example1">example1</el-menu-item>
				<el-menu-item index="/example2">example2</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-header, .el-main {
  padding: 0;
}
</style>
