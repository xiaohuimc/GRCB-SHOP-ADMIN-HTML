"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[394],{74394:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-page"},[e("div",{staticClass:"content-nav"},[e("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[e("el-breadcrumb-item",[t._v("快递模板")])],1),e("div",{staticClass:"operation-nav"},[e("el-button",{attrs:{icon:"plus"},on:{click:t.exceptareaList}},[t._v("偏远地区")]),e("el-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.addFreightTemplate}},[t._v("添加快递模板")])],1)],1),e("div",{staticClass:"content-main"},[e("div",{staticClass:"form-table-box"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:""}},[e("el-table-column",{attrs:{prop:"id",label:"ID",width:"100px"}}),e("el-table-column",{attrs:{prop:"name",label:"名字"}}),e("el-table-column",{attrs:{prop:"package_price",label:"包装费"}}),e("el-table-column",{attrs:{prop:"freight_type",label:"按件/按重",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(0==e.row.freight_type?"按件":"按重")+" ")]}}])}),e("el-table-column",{attrs:{label:"操作",width:"170"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"small"},on:{click:function(e){return t.handleRowEdit(a.$index,a.row)}}},[t._v("编辑")]),e("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.handleRowDelete(a.$index,a.row)}}},[t._v("删除 ")])]}}])})],1)],1)])])},r=[],i=(a(57658),{data(){return{tableData:[]}},methods:{expressList(){this.$router.push({name:"shipper"})},exceptareaList(){this.$router.push({name:"except_area"})},addFreightTemplate(){this.$router.push({name:"freight_add"})},handleRowEdit(t,e){this.$router.push({name:"freight_add",query:{id:e.id}})},handleRowDelete(t,e){this.$confirm("确定要删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.axios.post("shipper/destory",{id:e.id}).then((t=>{console.log(t.data),0===t.data.errno&&(this.$message({type:"success",message:"删除成功!"}),this.getList())}))}))},getList(){this.axios.get("shipper/freight").then((t=>{console.log(t),this.tableData=t.data.data}))}},components:{},mounted(){this.getList()}}),n=i,l=a(1001),o=(0,l.Z)(n,s,r,!1,null,"789d2f2f",null),c=o.exports}}]);
//# sourceMappingURL=394.5f503052.js.map