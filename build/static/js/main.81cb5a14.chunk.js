(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=n(14),l=n(2),i=function(e){var t=e.addPerson,n=e.newName,a=e.newNumber,o=e.setNewName,c=e.setNewNumber;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:function(e){console.log(e.target.value),o(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:function(e){console.log(e.target.value),c(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},s=function(e){var t,n=e.newFilter,a=e.persons,o=e.deletePerson;t=""!==n?a.filter((function(e){var t=n.toLowerCase();return e.name.toLowerCase()===t})):a,console.log("PERSONS",t);var c=t.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"person",key:t},"Name: ",e.name," number: ",e.number,r.a.createElement("div",null,r.a.createElement("button",{id:e.id,onClick:o},"delete"))))}));return r.a.createElement("ul",null,c)},m=function(e){var t=e.newFilter,n=e.setFilter;return r.a.createElement("form",null,r.a.createElement("div",null,"Filter: ",r.a.createElement("input",{value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})))},f=n(3),d=n.n(f);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var p=function(){return d.a.get("/api").then((function(e){return e.data}))},w=function(e){return d.a.post("/api",e).then((function(e){return e.data}))},h=function(e,t){return d.a.put("".concat("/api","/").concat(e),t).then((function(e){return e.data}))},v=function(e){return d.a.delete("".concat("/api","/").concat(e)).then((function(e){return e.data}))},g=m,E=s,O=i,y=function(e){var t=e.message,n={color:"gray",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"};return null===t?(n={},null):r.a.createElement("div",{style:n,className:"message"},t)},j=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),s=i[0],m=i[1],f=Object(a.useState)(""),d=Object(l.a)(f,2),j=d[0],N=d[1],P=Object(a.useState)(""),C=Object(l.a)(P,2),k=C[0],L=C[1],S=Object(a.useState)(null),F=Object(l.a)(S,2),x=F[0],D=F[1];Object(a.useEffect)((function(){p().then((function(e){o(e)}))}),[]);var B=function(){setTimeout((function(){D(null)}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{newFilter:k,setFilter:L}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(y,{message:x}),r.a.createElement(O,{addPerson:function(e){if(e.preventDefault(),n.some((function(e){return e.name.toLowerCase()===s.toLowerCase()&&e.number.toLowerCase()===j.toLowerCase()}))||""===s)alert("".concat(s," already in the list or field is empty"));else if(n.some((function(e){return e.name.toLowerCase()===s.toLowerCase()&&e.number.toLowerCase()!==j.toLowerCase()}))){if(window.confirm("do you want to update the number for "+s)){var t=n.find((function(e){return e.name.toLowerCase()===s.toLowerCase()})),a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{number:j});h(t.id,a).then((function(e){var a=n.map((function(t){return t.id===e.id?e:t}));o(a),D("".concat(t.name,"' has not been updated")),B()})).catch((function(e){D("".concat(t.name,"' has not been added to Phonebook succesfully due to '").concat(e)),B()}))}}else{var r={name:s,number:j,id:n.length+1};w(r).then((function(e){o(n.concat(e)),D("".concat(e.name,"' added to Phonebook succesfully")),B()})).catch((function(e){D("".concat(r.name,"' has not been added to Phonebook succesfully due to '").concat(e)),B()}))}m(""),N("")},newName:s,newNumber:j,setNewName:m,setNewNumber:N}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(E,{persons:n,newFilter:k,deletePerson:function(e){var t=e.currentTarget.id;v(t).then((function(e){p().then((function(e){o(e),D("User deleted"),B()})).catch((function(e){D("failed to to retrieve phonebook due to '".concat(e)),B()}))})).catch((function(e){D("deleting user was not succesfull due to '".concat(e)),B()}))}}))};n(37);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.81cb5a14.chunk.js.map