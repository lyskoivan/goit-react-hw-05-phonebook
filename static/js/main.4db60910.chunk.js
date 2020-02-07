(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={enter:"slide-250_enter__2towO",enterActive:"slide-250_enterActive__39I3R",exit:"slide-250_exit__34zcA",exitActive:"slide-250_exitActive__19VXS"}},16:function(t,e,n){t.exports={item__button:"Contact_item__button__YUgoC",item__right:"Contact_item__right__2WNXH"}},18:function(t,e,n){t.exports={Message:"Message_Message__N3W7W",Message__text:"Message_Message__text__2iTZB"}},19:function(t,e,n){t.exports={contacts__list:"ContactsList_contacts__list__1Rzln",list__items:"ContactsList_list__items__8B7mP"}},2:function(t,e,n){t.exports={contacts__form:"FormContacts_contacts__form__CRY4i",contacts__label:"FormContacts_contacts__label__1kwhp",contacts__input:"FormContacts_contacts__input__2KzBq",contacts__button:"FormContacts_contacts__button__nTIXa"}},22:function(t,e,n){t.exports={contacts__filter:"FilterContacts_contacts__filter__2_Uw9"}},23:function(t,e,n){t.exports={main_wrapper:"App_main_wrapper__3Amlh"}},24:function(t,e,n){t.exports={enter:"slide-500_enter__1StqB",enterActive:"slide-500_enterActive__2U3DF",exit:"slide-500_exit__Xz0fn",exitActive:"slide-500_exitActive__MgsV2"}},27:function(t,e,n){t.exports=n(44)},33:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),s=(n(32),n(33),n(25)),i=n(8),l=n(9),m=n(13),u=n(10),_=n(14),d=n(45),h=n(15),f=n.n(h),p=n(2),b=n.n(p),g=n(11),E=n.n(g),v=n(18),C=n.n(v),N=function(){return c.a.createElement("div",{className:C.a.Message},c.a.createElement("p",{className:C.a.Message__text},"Contact already exists"))},x=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:"",showError:!1},n.handleChangeName=function(t){n.setState({name:t.target.value})},n.handleChangeNumber=function(t){n.setState({number:t.target.value})},n.reset=function(){n.setState({name:"",number:""})},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,c=e.number;if(a&&c){if(n.props.contacts.find((function(t){return t.name===a})))return n.setState((function(t){return{showError:!t.showError}}),(function(){return setTimeout((function(){n.setState((function(t){return{showError:!t.showError}}))}),2e3)})),void n.reset();var r={name:a,number:c,id:f.a.generate()};n.props.addNewContact(r),n.reset()}},n}return Object(_.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.showError;return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{in:a,timeout:250,classNames:E.a,unmountOnExit:!0},c.a.createElement(N,null)),c.a.createElement("form",{onSubmit:this.handleSubmit,className:b.a.contacts__form},c.a.createElement("label",{htmlFor:f.a.generate(),className:b.a.contacts__label},"Name",c.a.createElement("input",{type:"text",value:e,onChange:this.handleChangeName,className:b.a.contacts__input})),c.a.createElement("label",{htmlFor:f.a.generate(),className:b.a.contacts__label},"Number",c.a.createElement("input",{type:"tel",value:n,onChange:this.handleChangeNumber,className:b.a.contacts__input})),c.a.createElement("button",{type:"submit",className:b.a.contacts__button},"Add contact")))}}]),e}(a.Component),w=n(46),y=n(16),S=n.n(y),O=function(t){var e=t.name,n=t.number,a=t.handleDeleteContact;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:S.a.item__name},e),c.a.createElement("div",{className:S.a.item__right},c.a.createElement("p",null,n),c.a.createElement("button",{type:"button",onClick:a,className:S.a.item__button})))},A=n(19),F=n.n(A),k=function(t){var e=t.contacts,n=t.handleDeleteContact;return c.a.createElement(w.a,{component:"ul",className:F.a.contacts__list},e.map((function(t){return c.a.createElement(d.a,{key:t.id,timeout:250,classNames:E.a},c.a.createElement("li",{className:F.a.list__items},c.a.createElement(O,{name:t.name,number:t.number,handleDeleteContact:function(){return n(t.id)}})))})))},j=n(22),D=n.n(j),M=function(t){var e=t.filter,n=t.handleFilter;return c.a.createElement("input",{type:"text",value:e,onChange:n,placeholder:"Filter...",className:D.a.contacts__filter})},L=n(23),B=n.n(L),I=n(24),z=n.n(I),J=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",isLoad:!1},n.addNewContact=function(t){n.setState((function(e){return{contacts:[t].concat(Object(s.a)(e.contacts))}}))},n.handleFilter=function(t){n.setState({filter:t.target.value})},n.handleDeleteContact=function(t){var e=n.state.contacts.filter((function(e){return e.id!==t}));n.setState({contacts:e})},n}return Object(_.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){try{var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t,isLoad:!0})}catch(e){console.log(e)}}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;if(e.contacts!==n)try{localStorage.setItem("contacts",JSON.stringify(n))}catch(a){console.log(a)}}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=t.isLoad,r=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,n);return c.a.createElement("div",{className:B.a.main_wrapper},c.a.createElement(d.a,{in:a,timeout:500,classNames:z.a,unmountOnExit:!0},c.a.createElement("h1",null,"Phonebook")),c.a.createElement(x,{addNewContact:this.addNewContact,contacts:e}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(M,{filter:n,handleFilter:this.handleFilter}),c.a.createElement(k,{contacts:r,handleDeleteContact:this.handleDeleteContact}))}}]),e}(a.Component);o.a.render(c.a.createElement(J,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.4db60910.chunk.js.map