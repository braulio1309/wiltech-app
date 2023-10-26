(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1220:function(n,a,t){"use strict";t(697)},1221:function(n,a,t){(a=t(28)(!1)).push([n.i,".dragArea[data-v-96086cc2]{min-height:50px;outline:1px dashed}",""]),n.exports=a},1865:function(n,a,t){"use strict";t.r(a);var e=t(16),s=t(309),i=t.n(s),r={props:["tasks"],components:{draggable:i.a},name:"nested-draggable"},l=(t(1220),t(8)),o=Object(l.a)(r,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("draggable",{staticClass:"dragArea",attrs:{tag:"ul",list:n.tasks,group:{name:"g1"}}},n._l(n.tasks,(function(a){return t("li",{key:a.name},[t("p",[n._v(n._s(a.name))]),n._v(" "),t("nested-draggable",{attrs:{tasks:a.tasks}})],1)})),0)}),[],!1,null,"96086cc2",null).exports,d=1,c=8,g=["vue.draggable","draggable","component","based","Sortablejs"],p={name:"DragDropDemo",mounted:function(){e.c.index()},components:{draggable:i.a,NestedDraggable:o},display:"DragDropDemo",order:0,data:function(){return{enabled:!0,list:[{name:"John",id:0},{name:"Joao",id:1},{name:"Jean",id:2}],dragging1:!1,list1:[{name:"John",id:1},{name:"Joao",id:2},{name:"Jean",id:3},{name:"Gerard",id:4}],list2:[{name:"Juan",id:5},{name:"Edgard",id:6},{name:"Johnson",id:7}],list3:[{name:"dog 1",id:1},{name:"dog 2",id:2},{name:"dog 3",id:3},{name:"dog 4",id:4}],list4:[{name:"cat 5",id:5},{name:"cat 6",id:6},{name:"cat 7",id:7}],transitionList:g.map((function(n,a){return{name:n,order:a+1}})),drag:!1,headers:["id","name","sport"],list5:[{id:1,name:"Abby",sport:"basket"},{id:2,name:"Brooke",sport:"foot"},{id:3,name:"Courtenay",sport:"volley"},{id:4,name:"David",sport:"rugby"}],dragging:!0,nestedList:[{name:"task 1",tasks:[{name:"task 2",tasks:[]}]},{name:"task 3",tasks:[{name:"task 4",tasks:[]}]},{name:"task 5",tasks:[]}]}},computed:{draggingInfo:function(){return this.dragging?"under drag":""},dragOptions:function(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}}},methods:{log:function(){},checkMove:function(){},add:function(){this.list.push({name:"Juan "+d,id:d++})},replace:function(){this.list=[{name:"Edgard",id:d++}]},cloneDog:function(n){var a=n.id;return{id:c++,name:"cat ".concat(a)}},removeAt:function(n){this.list.splice(n,1)},sort:function(){this.transitionList=this.transitionList.sort((function(n,a){return n.order-a.order}))}}},m=Object(l.a)(p,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("b-container",{attrs:{fluid:""}},[t("b-row",[t("b-col",{attrs:{cols:"6"}},[t("iq-card",{scopedSlots:n._u([{key:"headerTitle",fn:function(){return[t("h4",{staticClass:"card-title"},[n._v("Basic Dragdrop Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[t("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[t("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-1"}},[t("div",{staticClass:"card"},[t("kbd",{staticClass:"bg-dark"},[t("pre",{staticClass:"text-white",attrs:{id:"basic-dragdrop"}},[t("code",[n._v('\n<template>\n  <div class="row">\n    <div class="col-12">\n      <div class="form-group d-flex justify-content-between align-items-center">\n        <div class="form-check">\n          <input\n            id="disabled"\n            type="checkbox"\n            v-model="enabled"\n            class="form-check-input"\n          />\n          <label class="form-check-label" for="disabled">Drag and Drop enabled</label>\n        </div>\n        <div\n          class="buttons"\n          aria-label="Basic example"\n        >\n          <button class="btn btn-primary btn-sm" @click="add">Add</button>&nbsp;\n          <button class="btn btn-primary btn-sm" @click="replace">Replace</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-12">\n      <h5 class="mb-2">Draggable</h5>\n\n      <draggable\n        :list="list"\n        :disabled="!enabled"\n        class="list-group"\n        ghost-class="ghost"\n        :move="checkMove"\n        @start="dragging1 = true"\n        @end="dragging1 = false"\n      >\n        <div\n          class="list-group-item"\n          v-for="element in list"\n          :key="element.name"\n        >\n        </div>\n      </draggable>\n    </div>\n  </div>\n</template>\n<script>\nimport draggable from \'vuedraggable\'\nlet id = 1\nexport default {\n  name: \'DragDropDemo\',\n  display:\'DragDropDemo\',\n  order: 0,\n  components: {\n  draggable\n  },\n  data(){\n    return {\n      enabled: true,\n      list: [\n        { name: "John", id: 0 },\n        { name: "Joao", id: 1 },\n        { name: "Jean", id: 2 }\n      ],\n      dragging: false\n    };\n  },\n  computed: {\n    draggingInfo() {\n      return this.dragging ? "under drag" : "";\n    }\n  },\n  methods: {\n    add () {\n      this.list.push({ name: "Juan " + id, id: id++ });\n    },\n    replace () {\n      this.list = [{ name: "Edgard", id: id++ }];\n    },\n    checkMove (e) {\n      window.console.log("Future index: " + e.draggedContext.futureIndex);\n    }\n  }\n}\n<\/script>\n')])])])])]),n._v(" "),[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"form-group d-flex justify-content-between align-items-center"},[t("div",{staticClass:"form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.enabled,expression:"enabled"}],staticClass:"form-check-input",attrs:{id:"disabled",type:"checkbox"},domProps:{checked:Array.isArray(n.enabled)?n._i(n.enabled,null)>-1:n.enabled},on:{change:function(a){var t=n.enabled,e=a.target,s=!!e.checked;if(Array.isArray(t)){var i=n._i(t,null);e.checked?i<0&&(n.enabled=t.concat([null])):i>-1&&(n.enabled=t.slice(0,i).concat(t.slice(i+1)))}else n.enabled=s}}}),n._v(" "),t("label",{staticClass:"form-check-label",attrs:{for:"disabled"}},[n._v("Drag and Drop enabled")])]),n._v(" "),t("div",{staticClass:"buttons",attrs:{"aria-label":"Basic example"}},[t("button",{staticClass:"btn btn-primary btn-sm",on:{click:n.add}},[n._v("Add")]),n._v(" \n                      "),t("button",{staticClass:"btn btn-primary btn-sm",on:{click:n.replace}},[n._v("Replace")])])])])]),n._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("h5",{staticClass:"mb-2"},[n._v("Draggable "+n._s(n.draggingInfo))]),n._v(" "),t("draggable",{staticClass:"list-group",attrs:{list:n.list,disabled:!n.enabled,"ghost-class":"ghost",move:n.checkMove},on:{start:function(a){n.dragging1=!0},end:function(a){n.dragging1=!1}}},n._l(n.list,(function(a){return t("div",{key:a.name,staticClass:"list-group-item"},[n._v("\n                      "+n._s(a.name)+"\n                    ")])})),0)],1)])]]},proxy:!0}])})],1),n._v(" "),t("b-col",{attrs:{cols:"6"}},[t("iq-card",{scopedSlots:n._u([{key:"headerTitle",fn:function(){return[t("h4",{staticClass:"card-title"},[n._v("Two Lists Dragdrop Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2",modifiers:{"collapse-2":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[t("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[t("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-2"}},[t("div",{staticClass:"card"},[t("kbd",{staticClass:"bg-dark"},[t("pre",{staticClass:"text-white",attrs:{id:"two-lists-dragdrop"}},[t("code",[n._v('\n<template>\n  <div class="row">\n    <div class="col-6">\n      <h5 class="mb-2">Draggable 1</h5>\n      <draggable class="list-group" :list="list1" group="people" @change="log">\n        <div\n          class="list-group-item"\n          v-for="(element, index) in list1"\n          :key="element.name"\n        >\n        </div>\n      </draggable>\n    </div>\n\n    <div class="col-6">\n      <h5 class="mb-2">Draggable 2</h5>\n      <draggable class="list-group" :list="list2" group="people" @change="log">\n        <div\n          class="list-group-item"\n          v-for="(element, index) in list2"\n          :key="element.name"\n        >\n        </div>\n      </draggable>\n    </div>\n  </div>\n</template>\n<script>\nimport draggable from \'vuedraggable\'\nlet id = 1\nexport default {\n  name: \'DragDropDemo\',\n  display:\'DragDropDemo\',\n  order: 0,\n  components: {\n  draggable\n  },\n  data(){\n    return {\n      enabled: true,\n      list1: [\n        { name: "John", id: 1 },\n        { name: "Joao", id: 2 },\n        { name: "Jean", id: 3 },\n        { name: "Gerard", id: 4 }\n      ],\n      list2: [\n        { name: "Juan", id: 5 },\n        { name: "Edgard", id: 6 },\n        { name: "Johnson", id: 7 }\n      ],\n      dragging: false\n    };\n  },\n  computed: {\n    draggingInfo() {\n      return this.dragging ? "under drag" : "";\n    }\n  },\n  methods: {\n    add () {\n      this.list.push({ name: "Juan " + id, id: id++ });\n    },\n    replace () {\n      this.list = [{ name: "Edgard", id: id++ }];\n    },\n    checkMove (e) {\n      window.console.log("Future index: " + e.draggedContext.futureIndex);\n    }\n  }\n}\n<\/script>\n')])])])])]),n._v(" "),[t("div",{staticClass:"row"},[t("div",{staticClass:"col-6"},[t("h5",{staticClass:"mb-2"},[n._v("Draggable 1")]),n._v(" "),t("draggable",{staticClass:"list-group",attrs:{list:n.list1,group:"people"},on:{change:n.log}},n._l(n.list1,(function(a,e){return t("div",{key:a.name,staticClass:"list-group-item"},[n._v("\n                      "+n._s(a.name)+" "+n._s(e)+"\n                    ")])})),0)],1),n._v(" "),t("div",{staticClass:"col-6"},[t("h5",{staticClass:"mb-2"},[n._v("Draggable 2")]),n._v(" "),t("draggable",{staticClass:"list-group",attrs:{list:n.list2,group:"people"},on:{change:n.log}},n._l(n.list2,(function(a,e){return t("div",{key:a.name,staticClass:"list-group-item"},[n._v("\n                      "+n._s(a.name)+" "+n._s(e)+"\n                    ")])})),0)],1)])]]},proxy:!0}])})],1),n._v(" "),t("b-col",{attrs:{cols:"6"}},[t("iq-card",{scopedSlots:n._u([{key:"headerTitle",fn:function(){return[t("h4",{staticClass:"card-title"},[n._v("Transitions Dragdrop Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-5",modifiers:{"collapse-5":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[t("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[t("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-5"}},[t("div",{staticClass:"card"},[t("kbd",{staticClass:"bg-dark"},[t("pre",{staticClass:"text-white",attrs:{id:"transitions-dragdrop"}},[t("code",[n._v('\n<template>\n  <div class="row">\n    <div class="col-12">\n      <button class="btn btn-primary" @click="sort">\n        To original order\n      </button>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-12">\n      <h5>Transition</h5>\n      <draggable\n          class="list-group"\n          tag="ul"\n          v-model="transitionList"\n          v-bind="dragOptions"\n          @start="drag = true"\n          @end="drag = false">\n        <transition-group type="transition" :name="!drag ? \'flip-list\' : null">\n          <li class="list-group-item" v-for="element in transitionList" :key="element.order">\n            <i :class=" element.fixed ? \'fa fa-anchor\' : \'glyphicon glyphicon-pushpin\' " @click="element.fixed = !element.fixed" aria-hidden="true" ></i>\n          </li>\n        </transition-group>\n      </draggable>\n    </div>\n  </div>\n</template>\n<script>\nimport draggable from \'vuedraggable\'\nconst message = [\n  "vue.draggable",\n  "draggable",\n  "component",\n  "for",\n  "vue.js 2.0",\n  "based",\n  "on",\n  "Sortablejs"\n];\nexport default {\n  name: \'DragDropDemo\',\n  display:\'DragDropDemo\',\n  order: 0,\n  components: {\n    draggable\n  },\n  data(){\n    return {\n      transitionList: message.map((name, index) => {\n        return { name, order: index + 1 };\n      }),\n      drag: false\n    },\n  }\n  computed: {\n    draggingInfo() {\n      return this.dragging ? "under drag" : "";\n    }\n  },\n  methods: {\n    sort () {\n      this.transitionList = this.transitionList.sort((a, b) => a.order - b.order)\n    }\n  }\n}\n<\/script>\n')])])])])]),n._v(" "),[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"d-flex justify-content-between"},[t("h5",{staticClass:"mb-2"},[n._v("Transition")]),n._v(" "),t("button",{staticClass:"btn btn-primary btn-sm mb-2",on:{click:n.sort}},[n._v("\n                      To original order\n                    ")])]),n._v(" "),t("draggable",n._b({staticClass:"list-group",attrs:{tag:"ul"},on:{start:function(a){n.drag=!0},end:function(a){n.drag=!1}},model:{value:n.transitionList,callback:function(a){n.transitionList=a},expression:"transitionList"}},"draggable",n.dragOptions,!1),[t("transition-group",{attrs:{type:"transition",name:n.drag?null:"flip-list"}},n._l(n.transitionList,(function(a){return t("li",{key:a.order,staticClass:"list-group-item"},[t("i",{class:a.fixed?"fa fa-anchor":"glyphicon glyphicon-pushpin",attrs:{"aria-hidden":"true"},on:{click:function(n){a.fixed=!a.fixed}}}),n._v("\n                        "+n._s(a.name)+"\n                      ")])})),0)],1)],1)])]]},proxy:!0}])})],1),n._v(" "),t("b-col",{attrs:{cols:"6"}},[t("iq-card",{scopedSlots:n._u([{key:"headerTitle",fn:function(){return[t("h4",{staticClass:"card-title"},[n._v("Table Column Dragdrop Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-6",modifiers:{"collapse-6":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[t("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[t("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-6"}},[t("div",{staticClass:"card"},[t("kbd",{staticClass:"bg-dark"},[t("pre",{staticClass:"text-white",attrs:{id:"table-column-dragdrop"}},[t("code",[n._v('\n<template>\n  <div class="row">\n    <div class="col-8">\n    <h5>Draggable table</h5>\n    <table class="table table-striped">\n      <thead class="thead-dark">\n        <draggable v-model="headers" tag="tr">\n          <th v-for="header in headers" :key="header" scope="col">\n          </th>\n        </draggable>\n      </thead>\n    <tbody>\n      <tr v-for="item in list5" :key="item.name">\n        <td v-for="header in headers" :key="header">\n        </td>\n      </tr>\n    </tbody>\n    </table>\n    </div>\n  </div>\n</template>\n<script>\nimport draggable from \'vuedraggable\'\n\nexport default {\n  name: \'DragDropDemo\',\n  display:\'DragDropDemo\',\n  order: 0,\n  components: {\n    draggable\n  },\n  data(){\n    return {\n      headers: ["id", "name", "sport"],\n      list: [\n        { id: 1, name: "Abby", sport: "basket" },\n        { id: 2, name: "Brooke", sport: "foot" },\n        { id: 3, name: "Courtenay", sport: "volley" },\n        { id: 4, name: "David", sport: "rugby" }\n      ],\n      dragging: false\n    }\n  }\n}\n<\/script>\n')])])])])]),n._v(" "),[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("h5",{staticClass:"mb-2"},[n._v("Draggable table")]),n._v(" "),t("table",{staticClass:"table table-striped"},[t("thead",{staticClass:"thead-dark"},[t("draggable",{attrs:{tag:"tr"},model:{value:n.headers,callback:function(a){n.headers=a},expression:"headers"}},n._l(n.headers,(function(a){return t("th",{key:a,attrs:{scope:"col"}},[t("i",{staticClass:"fas fa-arrows-alt"}),n._v(n._s(a)+"\n                      ")])})),0)],1),n._v(" "),t("tbody",n._l(n.list5,(function(a){return t("tr",{key:a.name},n._l(n.headers,(function(e){return t("td",{key:e},[n._v(n._s(a[e]))])})),0)})),0)])])])]]},proxy:!0}])})],1),n._v(" "),t("b-col",{attrs:{cols:"6"}},[t("iq-card",{scopedSlots:n._u([{key:"headerTitle",fn:function(){return[t("h4",{staticClass:"card-title"},[n._v("Custom Clone Dragdrop Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-3",modifiers:{"collapse-3":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[t("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[t("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-3"}},[t("div",{staticClass:"card"},[t("kbd",{staticClass:"bg-dark"},[t("pre",{staticClass:"text-white",attrs:{id:"custom-clone-dragdrop"}},[t("code",[n._v('\n<template>\n  <div class="row">\n      <div class="col-6">\n        <h5 class="mb-2">Draggable 1</h5>\n        <draggable\n          class="dragArea list-group"\n          :list="list3"\n          :group="{ name: \'people\', pull: \'clone\', put: false }"\n          :clone="cloneDog"\n          @change="log"\n        >\n          <div class="list-group-item" v-for="element in list3" :key="element.id">\n          </div>\n        </draggable>\n      </div>\n\n      <div class="col-6">\n        <h5 class="mb-2">Draggable 2</h5>\n        <draggable\n          class="dragArea list-group"\n          :list="list4"\n          group="people"\n          @change="log"\n        >\n          <div class="list-group-item" v-for="element in list4" :key="element.id">\n          </div>\n        </draggable>\n      </div>\n    </div>\n</template>\n<script>\nimport draggable from \'vuedraggable\'\nlet idGlobal = 8\nexport default {\n  name: \'DragDropDemo\',\n  display:\'DragDropDemo\',\n  order: 0,\n  components: {\n    draggable\n  },\n  data(){\n    return {\n      enabled: true,\n      list3: [\n        { name: \'dog 1\', id: 1 },\n        { name: \'dog 2\', id: 2 },\n        { name: \'dog 3\', id: 3 },\n        { name: \'dog 4\', id: 4 }\n      ],\n      list4: [\n        { name: \'cat 5\', id: 5 },\n        { name: \'cat 6\', id: 6 },\n        { name: \'cat 7\', id: 7 }\n      ],\n      dragging: false\n    };\n    },\n    computed: {\n      draggingInfo() {\n        return this.dragging ? "under drag" : "";\n      }\n    },\n    methods: {\n      cloneDog  ({ id }) {\n      return {\n        id: idGlobal++,\n        name: `cat ${id}`\n    }\n  }\n}\n<\/script>\n')])])])])]),n._v(" "),[t("div",{staticClass:"row"},[t("div",{staticClass:"col-6"},[t("h5",{staticClass:"mb-2"},[n._v("Draggable 1")]),n._v(" "),t("draggable",{staticClass:"dragArea list-group",attrs:{list:n.list3,group:{name:"people",pull:"clone",put:!1},clone:n.cloneDog},on:{change:n.log}},n._l(n.list3,(function(a){return t("div",{key:a.id,staticClass:"list-group-item"},[n._v("\n                      "+n._s(a.name)+"\n                    ")])})),0)],1),n._v(" "),t("div",{staticClass:"col-6"},[t("h5",{staticClass:"mb-2"},[n._v("Draggable 2")]),n._v(" "),t("draggable",{staticClass:"dragArea list-group",attrs:{list:n.list4,group:"people"},on:{change:n.log}},n._l(n.list4,(function(a){return t("div",{key:a.id,staticClass:"list-group-item"},[n._v("\n                      "+n._s(a.name)+"\n                    ")])})),0)],1)])]]},proxy:!0}])})],1),n._v(" "),t("b-col",{attrs:{cols:"6"}},[t("iq-card",{scopedSlots:n._u([{key:"headerTitle",fn:function(){return[t("h4",{staticClass:"card-title"},[n._v("Nested Dragdrop Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-4",modifiers:{"collapse-4":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[t("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[t("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-4"}},[t("div",{staticClass:"card"},[t("kbd",{staticClass:"bg-dark"},[t("pre",{staticClass:"text-white",attrs:{id:"handle-dragdrop"}},[t("code",[n._v("\n<template>\n  <nested-draggable :tasks=\"nestedList\" />\n</template>\n<script>\nimport NestedDraggable from '@component/core/dragdrop/nested-draggable'\nexport default{\n  components: { NestedDraggable },\n  data () {\n    return {\n      nestedList: [\n        {\n          name: 'task 1',\n          tasks: [\n            {\n              name: 'task 2',\n              tasks: []\n            }\n          ]\n        },\n        {\n          name: 'task 3',\n          tasks: [\n            {\n              name: 'task 4',\n              tasks: []\n            }\n          ]\n        },\n        {\n          name: 'task 5',\n          tasks: []\n        }\n      ]\n    }\n  }\n}\n<\/script>\n")])])])])]),n._v(" "),[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("h5",{staticClass:"mb-2"},[n._v("Nested Draggable")]),n._v(" "),t("nested-draggable",{attrs:{tasks:n.nestedList}})],1)])]]},proxy:!0}])})],1)],1)],1)}),[],!1,null,null,null);a.default=m.exports},697:function(n,a,t){var e=t(1221);"string"==typeof e&&(e=[[n.i,e,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};t(40)(e,s);e.locals&&(n.exports=e.locals)}}]);
//# sourceMappingURL=44.js.map