"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[431],{74431:function(e,o,t){t.r(o),t.d(o,{default:function(){return f}});var r=function(){var e=this,o=e._self._c;return o("div",{staticClass:"content-page"},[o("div",{staticClass:"content-nav"},[o("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[o("el-breadcrumb-item",{attrs:{to:{name:"shipper_list"}}},[e._v("快递公司")]),o("el-breadcrumb-item",[e._v(e._s(e.infoForm.id?"编辑快递公司":"添加快递公司"))])],1),o("div",{staticClass:"operation-nav"},[o("el-button",{attrs:{type:"primary",icon:"arrow-left"},on:{click:e.goBackPage}},[e._v("返回列表")])],1)],1),o("div",{staticClass:"content-main"},[o("div",{staticClass:"form-table-box"},[o("el-form",{ref:"infoForm",attrs:{rules:e.infoRules,model:e.infoForm,"label-width":"120px"}},[o("el-form-item",{attrs:{label:"名字",prop:"name"}},[o("el-input",{model:{value:e.infoForm.name,callback:function(o){e.$set(e.infoForm,"name",o)},expression:"infoForm.name"}})],1),o("el-form-item",{attrs:{label:"代号",prop:"code"}},[o("el-input",{model:{value:e.infoForm.code,callback:function(o){e.$set(e.infoForm,"code",o)},expression:"infoForm.code"}})],1),o("el-form-item",{attrs:{label:"客户编号"}},[o("el-input",{model:{value:e.infoForm.CustomerName,callback:function(o){e.$set(e.infoForm,"CustomerName",o)},expression:"infoForm.CustomerName"}}),o("div",{staticClass:"form-tips"},[e._v("打印电子面单，需要填写")])],1),o("el-form-item",{attrs:{label:"月结账号"}},[o("el-input",{model:{value:e.infoForm.MonthCode,callback:function(o){e.$set(e.infoForm,"MonthCode",o)},expression:"infoForm.MonthCode"}}),o("div",{staticClass:"form-tips"},[e._v("打印电子面单，需要填写")])],1),o("el-form-item",{attrs:{label:"排序",prop:"sort_order"}},[o("el-input-number",{attrs:{min:1,max:1e3},model:{value:e.infoForm.sort_order,callback:function(o){e.$set(e.infoForm,"sort_order",o)},expression:"infoForm.sort_order"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitInfo}},[e._v("确定保存")]),o("el-button",{on:{click:e.goBackPage}},[e._v("取消")])],1)],1)],1)])])},i=[],s=t(70636),n={data(){return{infoForm:{id:0,name:"",code:"",sort_order:0},infoRules:{name:[{required:!0,message:"请输入快递公司名字",trigger:"blur"}],code:[{required:!0,message:"请输入快递公司代号",trigger:"blur"}],MonthCode:[{required:!0,message:"请输入快递公司月结账号",trigger:"blur"}]}}},methods:{goBackPage(){this.$router.go(-1)},onSubmitInfo(){this.$refs["infoForm"].validate((e=>{if(!e)return!1;this.axios.post("shipper/store",this.infoForm).then((e=>{0===e.data.errno?(this.$message({type:"success",message:"保存成功"}),this.$router.go(-1)):this.$message({type:"error",message:"保存失败"})}))}))},getInfo(){if(this.infoForm.id<=0)return!1;let e=this;this.axios.get("shipper/info",{params:{id:e.infoForm.id}}).then((o=>{let t=o.data.data;e.infoForm=t}))}},components:{},mounted(){this.infoForm.id=this.$route.query.id||0,this.getInfo(),console.log(s.Z)}},a=n,m=t(1001),l=(0,m.Z)(a,r,i,!1,null,null,null),f=l.exports}}]);
//# sourceMappingURL=431.8ab66f1f.js.map