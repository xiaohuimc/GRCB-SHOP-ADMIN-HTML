"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[398],{47398:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-page"},[e("div",{staticClass:"content-nav"},[e("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[e("el-breadcrumb-item",[t._v("购物车列表")])],1)],1),e("div",{staticClass:"content-main"},[e("div",{staticClass:"filter-box"},[e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.filterForm}},[e("el-form-item",{attrs:{label:"商品名称"}},[e("el-input",{attrs:{placeholder:"商品名称"},model:{value:t.filterForm.name,callback:function(e){t.$set(t.filterForm,"name",e)},expression:"filterForm.name"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.onSubmitFilter}},[t._v("查询")])],1)],1)],1),e("div",{staticClass:"form-table-box"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:""}},[e("el-table-column",{attrs:{prop:"id",label:"ID",width:"60px"}}),e("el-table-column",{attrs:{prop:"user_id",label:"用户ID",width:"80px"}}),e("el-table-column",{attrs:{prop:"nickname",label:"用户昵称",width:"100px"}}),e("el-table-column",{attrs:{prop:"goods_id",label:"商品ID",width:"100px"}}),e("el-table-column",{attrs:{prop:"list_pic_url",label:"图片",width:"70px"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:t.row.list_pic_url,alt:""}})]}}])}),e("el-table-column",{attrs:{prop:"goods_name",label:"商品名称"}}),e("el-table-column",{attrs:{prop:"goods_specifition_name_value",label:"型号"}}),e("el-table-column",{attrs:{prop:"number",label:"数量",width:"70px"}}),e("el-table-column",{attrs:{prop:"retail_price",label:"成交价"}}),e("el-table-column",{attrs:{prop:"add_time",label:"加入时间"}}),e("el-table-column",{attrs:{prop:"is_delete",label:"是否删除"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("label",[t._v(t._s(1==a.row.is_delete?"已删":""))])]}}])})],1)],1),e("div",{staticClass:"page-box"},[e("el-pagination",{attrs:{"current-page":t.page,"page-size":10,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handlePageChange}})],1)])])},r=[],i={data(){return{page:1,total:0,filterForm:{name:""},tableData:[]}},methods:{handlePageChange(t){this.page=t,localStorage.setItem("shopCartPage",this.page),localStorage.setItem("shopCartFilterForm",JSON.stringify(this.filterForm)),this.getList()},onSubmitFilter(){this.page=1,this.getList()},getList(){this.axios.get("shopcart",{params:{page:this.page,name:this.filterForm.name}}).then((t=>{this.tableData=t.data.data.data,this.page=t.data.data.currentPage,this.total=t.data.data.count}))}},components:{},mounted(){this.getList()}},s=i,o=a(1001),n=(0,o.Z)(s,l,r,!1,null,"4cc555cc",null),p=n.exports}}]);
//# sourceMappingURL=398.ebc9258f.js.map