(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(73)},42:function(e,t,a){},43:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(32),c=a.n(r),l=(a(42),a(8)),s=a(1),i=a(2),m=a(4),u=a(3),p=a(5),h=(a(43),a(14)),g=a(6),d=a.n(g),y=a(11),E=(a(61),a(62),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),d.a.post("".concat("https://whorunswhat.herokuapp.com/api","/companies"),{companyName:a.state.companyName,companyDomain:a.state.companyDomain,companyRootEmail:a.state.companyRootEmail,companyLogoUrl:a.state.companyLogoUrl,companySiteUrl:a.state.companySiteUrl,companyLinkedinUrl:a.state.companyLinkedinUrl,companyGithubUrl:a.state.companyGithubUrl},{withCredentials:!0}).then(function(){a.props.getData(),a.setState({companyName:"",companyDomain:"",companyRootEmail:"",companyLogoUrl:"",companySiteUrl:"",companyLinkedinUrl:"",companyGithubUrl:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(l.a)({},n,o))},a.state={companyName:"",companyDomain:"",companyRootEmail:"",companyLogoUrl:"",companySiteUrl:"",companyLinkedinUrl:"",companyGithubUrl:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("span",null,o.a.createElement("form",{className:"card-body",onSubmit:this.handleFormSubmit},o.a.createElement("label",null,"Company Name:"),o.a.createElement("input",{className:"form-control",type:"text",name:"companyName",value:this.state.companyName,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("label",null,"Primary Domain Name (.com, .net, .io, etc.):"),o.a.createElement("input",{className:"form-control",type:"text",name:"companyDomain",value:this.state.companyDomain,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("label",null,"Root Domain of Company Email (so we can validate employees):"),o.a.createElement("input",{className:"form-control",type:"text",name:"companyRootEmail",value:this.state.companyRootEmail,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("label",null,"Company Logo URL:"),o.a.createElement("input",{className:"form-control",type:"text",name:"companyLogoUrl",value:this.state.companyLogoUrl,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("label",null,"Company Website URL:"),o.a.createElement("input",{className:"form-control",type:"text",name:"companySiteUrl",value:this.state.companySiteUrl,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("label",null,"Company LinkedIn URL:"),o.a.createElement("input",{className:"form-control",type:"text",name:"companyLinkedinUrl",value:this.state.companyLinkedinUrl,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("label",null,"Company Github Organization URL:"),o.a.createElement("input",{className:"form-control",type:"text",name:"companyGithubUrl",value:this.state.companyGithubUrl,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("div",{className:"text-right"},o.a.createElement("input",{className:"btn btn-sm btn-success save-cancel",type:"submit",value:"Add"}),o.a.createElement("button",{className:"btn btn-sm btn-secondary save-cancel",onClick:function(t){return e.props.resetEditingSituation()}},"Cancel"))))}}]),t}(n.Component)),f=(a(63),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){var t=a.state.companyName,n=a.state.companyDomain,o=a.state.companyRootEmail,r=a.state.companyLogoUrl,c=a.state.companySiteUrl,l=a.state.companyLinkedinUrl,s=a.state.companyGithubUrl;e.preventDefault(),d.a.post("".concat("https://whorunswhat.herokuapp.com/api","/companies/update/").concat(a.props.theCompany._id),{companyName:t,companyDomain:n,companyRootEmail:o,companyLogoUrl:r,companySiteUrl:c,companyLinkedinUrl:l,companyGithubUrl:s}).then(function(){a.props.getAllTheCompaniesInAppJS(),a.props.resetEditingSituation()}).catch(function(e){return console.log(e)})},a.handleChange=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.state={companyName:a.props.theCompany.companyName,companyDomain:a.props.theCompany.companyDomain,companyRootEmail:a.props.theCompany.companyRootEmail,companyLogoUrl:a.props.theCompany.companyLogoUrl,companySiteUrl:a.props.theCompany.companySiteUrl,companyLinkedinUrl:a.props.theCompany.companyLinkedinUrl,companyGithubUrl:a.props.theCompany.companyGithubUrl},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"card"},o.a.createElement("h3",{className:"card-header"},this.state.companyName),o.a.createElement("form",{className:"card-body",onSubmit:this.handleFormSubmit},o.a.createElement("label",null,"Company Name:"),o.a.createElement("input",{className:"form-control",type:"text",name:"companyName",value:this.state.companyName,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("label",null,"Primary Domain Name (.com, .net, .io, etc.):"),o.a.createElement("input",{className:"form-control",type:"text",name:"companyDomain",value:this.state.companyDomain,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("label",null,"Root Domain of Company Email (so we can validate employees):"),o.a.createElement("input",{className:"form-control",type:"text",name:"companyRootEmail",value:this.state.companyRootEmail,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("label",null,"Company Logo URL:"),o.a.createElement("input",{className:"form-control",type:"text",name:"companyLogoUrl",value:this.state.companyLogoUrl,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("label",null,"Company Website URL:"),o.a.createElement("input",{className:"form-control",type:"text",name:"companySiteUrl",value:this.state.companySiteUrl,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("label",null,"Company LinkedIn URL:"),o.a.createElement("input",{className:"form-control",type:"text",name:"companyLinkedinUrl",value:this.state.companyLinkedinUrl,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("label",null,"Company Github Organization URL:"),o.a.createElement("input",{className:"form-control",type:"text",name:"companyGithubUrl",value:this.state.companyGithubUrl,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("div",{className:"text-right"},o.a.createElement("input",{className:"btn btn-sm btn-success save-cancel",type:"submit",value:"Save"}),o.a.createElement("button",{className:"btn btn-sm btn-secondary save-cancel",onClick:function(t){return e.props.resetEditingSituation()}},"Cancel"))))}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).changeEditing=function(e){a.setState({editing:e})},a.resetEdit=function(){a.setState({editing:!1})},a.deleteCompany=function(e){d.a.delete("".concat("https://whorunswhat.herokuapp.com/api","/companies/").concat(e)).then(function(){a.props.getData()}).catch(function(e){console.log(e)})},a.showCompanies=function(){return a.props.allTheCompanies.map(function(e,t){return a.state.editing!==t?o.a.createElement("div",{className:"card text-center",key:e._id},o.a.createElement("img",{src:e.companyLogoUrl,className:"card-img-top",alt:e.companyName,onError:function(e){e.target.onerror=null,e.target.src="white-image.png"}}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},o.a.createElement(y.b,{to:"/companies/".concat(e._id)},e.companyName)),o.a.createElement("p",{className:"card-text"},e.companyDomain),e.companyLinkedinUrl&&o.a.createElement("a",{href:e.companyLinkedinUrl,className:"media-text",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-linkedin-in btn btn-lg btn-outline-primary"})),e.companyGithubUrl&&o.a.createElement("a",{href:e.companyGithubUrl,className:"media-text",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-github btn btn-lg btn-outline-primary"}))),o.a.createElement("div",{className:"card-footer"},o.a.createElement("small",{className:"text-muted"},"Last updated on ",e.updated_at.substring(0,10)))):o.a.createElement(f,{resetEditingSituation:a.resetEdit,theCompany:e,getAllTheCompaniesInAppJS:a.props.getData})})},a.state={editing:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.ready?o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"card-columns"},this.showCompanies())):o.a.createElement("div",{className:"text-center"},o.a.createElement("div",{className:"spinner-grow text-primary",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-secondary",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-success",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-danger",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-warning",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-info",role:"status"}))}}]),t}(n.Component),v=(a(68),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),d.a.post("".concat("https://whorunswhat.herokuapp.com/api","/technologies"),{techName:a.state.techName,techIconUrl:a.state.techIconUrl,techDescription:a.state.techDescription,techRefUrl:a.state.techRefUrl,techTopic:a.state.techTopic,theCompany:a.props.theCompanyToAddTechnologiesTo},{withCredentials:!0}).then(function(){a.props.getData(),a.setState({techName:"",techIconUrl:"",techDescription:"",techRefUrl:"",techTopic:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(l.a)({},n,o))},a.state={techName:"",techIconUrl:"",techDescription:"",techRefUrl:"",techTopic:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{className:"add-technology",onSubmit:this.handleFormSubmit},o.a.createElement("label",null,"Technology Name:"),o.a.createElement("input",{type:"text",name:"techName",value:this.state.techName,onChange:this.handleChange}),o.a.createElement("label",null,"Technology Icon URL:"),o.a.createElement("input",{type:"text",name:"techIconUrl",value:this.state.techIconUrl,onChange:this.handleChange}),o.a.createElement("label",null,"Technology Description:"),o.a.createElement("textarea",{name:"techDescription",value:this.state.techDescription,onChange:this.handleChange}),o.a.createElement("label",null,"Technology Reference URL:"),o.a.createElement("input",{type:"text",name:"techRefUrl",value:this.state.techRefUrl,onChange:this.handleChange}),o.a.createElement("select",{name:"techTopic",value:this.state.techTopic,onChange:this.handleChange},o.a.createElement("option",{value:"Full Stack"},"Full Stack"),o.a.createElement("option",{value:"Front End"},"Front End"),o.a.createElement("option",{value:"Backend"},"Backend"),o.a.createElement("option",{value:"Systems"},"Systems"),o.a.createElement("option",{value:"Data"},"Data")),o.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component)),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){var t=a.state.techName,n=a.state.techIconUrl,o=a.state.techDescription,r=a.state.techRefUrl,c=a.state.techTopic;e.preventDefault(),d.a.post("".concat("https://whorunswhat.herokuapp.com/api","/technologies/update/").concat(a.props.theTechnology._id),{techName:t,techIconUrl:n,techDescription:o,techRefUrl:r,techTopic:c}).then(function(){a.props.getAllTheCompaniesInAppJS(),a.props.resetEditingSituation()}).catch(function(e){return console.log(e)})},a.handleChange=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.state={techName:a.props.theTechnology.techName,techIconUrl:a.props.theTechnology.techIconUrl,techDescription:a.props.theTechnology.techDescription,techRefUrl:a.props.theTechnology.techRefUrl,techTopic:a.props.theTechnology.techTopic},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state),o.a.createElement("div",{className:"media bg-white border rounded"},o.a.createElement("form",{className:"media-body",onSubmit:this.handleFormSubmit},o.a.createElement("label",null,"Technology Name:"),o.a.createElement("input",{className:"form-control",type:"text",name:"techName",value:this.state.techName,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("label",null,"Technology Icon URL:"),o.a.createElement("input",{className:"form-control",type:"text",name:"techIconUrl",value:this.state.techIconUrl,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("label",null,"Technology Description:"),o.a.createElement("textarea",{className:"form-control",name:"techDescription",rows:"3",value:this.state.techDescription,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("label",null,"Technology Reference URL:"),o.a.createElement("input",{className:"form-control",type:"text",name:"techRefUrl",value:this.state.techRefUrl,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("label",null,"Topic:"),o.a.createElement("select",{className:"form-control",name:"techTopic",value:this.state.techTopic,onChange:function(t){return e.handleChange(t)}},o.a.createElement("option",{value:"Full Stack"},"Full Stack"),o.a.createElement("option",{value:"Front End"},"Front End"),o.a.createElement("option",{value:"Backend"},"Backend"),o.a.createElement("option",{value:"Systems"},"Systems"),o.a.createElement("option",{value:"Data"},"Data")),o.a.createElement("div",{className:"text-right"},o.a.createElement("input",{className:"btn btn-sm btn-success save-cancel",type:"submit",value:"Save"}),o.a.createElement("button",{className:"btn btn-sm btn-secondary save-cancel",onClick:function(t){return e.props.resetEditingSituation()}},"Cancel"))))}}]),t}(n.Component),C=(a(69),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).resetEdit=function(){a.setState({editing:!1})},a.edit=function(e){a.setState({editing:e})},a.deleteTechnology=function(e,t){d.a.put("".concat("https://whorunswhat.herokuapp.com/api","/companies/technologies"),{company:e,technology:t}).then(function(){a.props.getData()}).catch(function(e){console.log(e)})},a.state={editing:!1,companyId:a.props.match.params.theID},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.allTheCompanies,a=this.props.match.params.theID,n=t.find(function(e){return e._id===a});return n?o.a.createElement("div",{className:"container"},o.a.createElement("div",null,o.a.createElement("div",{className:"card text-center mx-auto",key:n._id},o.a.createElement("img",{src:n.companyLogoUrl,className:"card-img-top mx-auto",alt:n.companyName}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},o.a.createElement(y.b,{to:"/companies/".concat(n._id)},n.companyName)),o.a.createElement("p",{className:"card-text"},n.companyDomain),o.a.createElement("a",{href:n.companyLinkedinUrl,className:"media-text",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-linkedin-in btn btn-lg btn-outline-primary"})),"\xa0",o.a.createElement("a",{href:n.companyGithubUrl,className:"media-text",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-github btn btn-lg btn-outline-primary"}))),o.a.createElement("div",{className:"card-footer"},o.a.createElement("small",{className:"text-muted"},"Last updated on ",n.updated_at.substring(0,10)))),n.companyTechnologies.length>0&&o.a.createElement("div",{className:"mx-auto"},o.a.createElement("br",null),o.a.createElement("div",{className:"text-center mx-auto"},o.a.createElement("h5",null,"Technologies at ",n.companyName)),o.a.createElement("div",{className:"mx-auto"},n?n.companyTechnologies.map(function(t,a){return e.state.editing!==a?o.a.createElement("div",{className:"media bg-white border rounded",key:t._id},o.a.createElement("img",{src:t.techIconUrl,className:"border rounded bg-light align-self-start mr-3 media-img-size",alt:t.techName}),o.a.createElement("div",{className:"media-body"},o.a.createElement("h5",{className:"media-title mt-0"},t.techName),o.a.createElement("div",{className:"media-text"},t.techDescription),o.a.createElement("a",{href:t.techRefUrl,className:"media-text",target:"_blank",rel:"noopener noreferrer"},t.techName," - Reference ",o.a.createElement("i",{className:"fas fa-external-link-alt small"})),o.a.createElement("p",null,o.a.createElement("small",{className:"text-muted"},"Last updated on ",t.updated_at.substring(0,10)))),function(t,a){return e.props.theUser&&n.companyUsers.includes(e.props.theUser._id)?o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{className:"btn btn-sm btn-primary",onClick:function(){e.edit(a)}},"Edit"),o.a.createElement("button",{className:"btn btn-sm btn-outline-danger ml-1",onClick:function(){e.deleteTechnology(n._id,t._id)}},"Delete")):null}(t,a)):o.a.createElement(N,{theTechnology:t,getAllTheCompaniesInAppJS:e.props.getData,resetEditingSituation:e.resetEdit})}):o.a.createElement("div",{className:"text-center"},o.a.createElement("div",{className:"spinner-grow text-primary",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-secondary",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-success",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-danger",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-warning",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-info",role:"status"})))),o.a.createElement("div",{className:"right-side-column",style:{float:"right"}},o.a.createElement(v,{theCompanyToAddTechnologiesTo:n._id,getData:this.props.getData})))):o.a.createElement("div",{className:"text-center"},o.a.createElement("div",{className:"spinner-grow text-primary",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-secondary",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-success",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-danger",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-warning",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-info",role:"status"}))}}]),t}(n.Component)),U=(a(70),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).changeEditing=function(e){a.setState({editing:e})},a.resetEdit=function(){a.setState({editing:!1})},a.deleteCompany=function(e){d.a.delete("".concat("https://whorunswhat.herokuapp.com/api","/companies/").concat(e)).then(function(){a.props.getData()}).catch(function(e){console.log(e)})},a.showTheCompanies=function(){if(a.props.theUser)return a.props.allTheCompanies.filter(function(e){return e.companyUsers.includes(a.props.theUser._id)}).map(function(e,t){return a.state.editing!==t?o.a.createElement("div",{className:"card text-center",key:e._id},o.a.createElement("img",{src:e.companyLogoUrl,className:"card-img-top",alt:e.companyName}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},o.a.createElement(y.b,{to:"/companies/".concat(e._id)},e.companyName)),o.a.createElement("p",{className:"card-text"},e.companyDomain),o.a.createElement("a",{href:e.companyLinkedinUrl,className:"media-text",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-linkedin-in btn btn-lg btn-outline-primary"})),"\xa0",o.a.createElement("a",{href:e.companyGithubUrl,className:"media-text",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-github btn btn-lg btn-outline-primary"})),e.companyUsers.includes(a.props.theUser._id)&&o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-sm btn-primary my-2",onClick:function(){a.changeEditing(t)}},"Edit"))),o.a.createElement("div",{className:"card-footer"},o.a.createElement("small",{className:"text-muted"},"Last updated on ",e.updated_at.substring(0,10)))):o.a.createElement(f,{resetEditingSituation:a.resetEdit,theCompany:e,getAllTheCompaniesInAppJS:a.props.getData})});a.props.history.push("/")},a.state={editing:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.ready?o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:""},o.a.createElement(E,{getData:this.props.getData})),o.a.createElement("div",{className:"card-columns"},this.showTheCompanies())):o.a.createElement("div",{className:"text-center"},o.a.createElement("div",{className:"spinner-grow text-primary",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-secondary",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-success",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-danger",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-warning",role:"status"}),o.a.createElement("div",{className:"spinner-grow text-info",role:"status"}))}}]),t}(n.Component)),w=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e,a,n,o){return t.service.post("/signup",{username:e,password:a,personalEmail:n,fullName:o}).then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.currentUser=function(){return t.service.get("/getcurrentuser").then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})};var a=d.a.create({baseURL:"https://whorunswhat.herokuapp.com/api/auth",withCredentials:!0});this.service=a},x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.tryToSignUp=function(e){e.preventDefault();var t=a.state.username,n=a.state.password,o=a.state.personalEmail,r=a.state.fullName;a.state.userRole;a.service.signup(t,n,o,r).then(function(){a.props.toggleForm("signup"),a.props.getUser()})},a.state={username:"",password:"",personalEmail:"",fullName:"",userRole:""},a.service=new w,a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.tryToSignUp},o.a.createElement("h3",null,"Signup For An Account"),o.a.createElement("legend",null,"Username"),o.a.createElement("input",{value:this.state.username,name:"username",onChange:this.handleChange}),o.a.createElement("legend",null,"Password"),o.a.createElement("input",{value:this.state.password,name:"password",onChange:this.handleChange}),o.a.createElement("legend",null,"Email Address"),o.a.createElement("input",{value:this.state.personalEmail,name:"personalEmail",onChange:this.handleChange}),o.a.createElement("legend",null,"Full Name"),o.a.createElement("input",{value:this.state.fullName,name:"fullName",onChange:this.handleChange}),o.a.createElement("legend",null,"Role"),o.a.createElement("select",{name:"userRole",value:this.state.userRole,onChange:this.handleChange},o.a.createElement("option",{value:"Full Stack"},"Full Stack"),o.a.createElement("option",{value:"Front End"},"Front End"),o.a.createElement("option",{value:"Backend"},"Backend"),o.a.createElement("option",{value:"Systems"},"Systems"),o.a.createElement("option",{value:"Data"},"Data")),o.a.createElement("button",null,"Submit"))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.tryToLogin=function(e){e.preventDefault();var t=a.state.usernameInput,n=a.state.passwordInput;a.service.login(t,n).then(function(){a.props.toggleForm("login"),a.props.getUser()})},a.state={usernameInput:"",passwordInput:""},a.service=new w,a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.tryToLogin},o.a.createElement("h3",null,"Login"),o.a.createElement("legend",null,"Username"),o.a.createElement("input",{value:this.state.usernameInput,name:"usernameInput",onChange:this.handleChange}),o.a.createElement("legend",null,"Password"),o.a.createElement("input",{value:this.state.passwordInput,name:"passwordInput",onChange:this.handleChange}),o.a.createElement("button",null,"Submit"))}}]),t}(n.Component);a(71);var k=function(e){return o.a.createElement("nav",{className:"navbar navbar-expand-lg collapse-md navbar-dark"},o.a.createElement("div",null,o.a.createElement(y.b,{className:"logo",to:"/"},o.a.createElement("img",{src:"../wrw-logo.png",alt:"WhoRunsWhat"}))),o.a.createElement("div",{className:"collapse navbar-collapse",id:"Navbar1"},o.a.createElement("ul",{className:"navbar-nav mr-auto"}),o.a.createElement("ul",{className:"navbar-nav"},e.theUser&&o.a.createElement("li",null,o.a.createElement(y.b,{className:"nav-link active",exact:!0,to:"/dashboard"},"My Dashboard"))),!e.theUser&&o.a.createElement("span",{className:"right"},o.a.createElement("button",{className:"btn btn-sm btn-outline-light login-signup",onClick:function(){return e.toggleForm("login")}},"Login"),o.a.createElement("button",{className:"btn btn-sm btn-outline-light login-signup",onClick:function(){return e.toggleForm("signup")}},"Sign Up")),e.theUser&&o.a.createElement("div",null,o.a.createElement("div",{className:"btn btn-sm btn-outline-light logout",onClick:function(){e.pleaseLogOut().then(function(){e.getUser()})}},"Log Out"))))},O=a(20),L=a.n(O),D=a(36),j=a(35),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).getAllCompanies=function(){d.a.get("".concat("https://whorunswhat.herokuapp.com/api","/companies")).then(function(e){a.setState({listOfCompanies:e.data,companiesListClone:e.data,ready:!0})})},a.onInputChange=function(e){console.log(e.target.name,e.target.value);var t=e.target,n=t.name,o=t.value;a.setState(Object(l.a)({},n,o)),a.checkForCompany()},a.state={listOfCompanies:[],companiesListClone:[],searchField:"",companyName:"",companySiteUrl:"",companyLogoUrl:"",apiCompaniesList:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"checkForCompany",value:function(){var e=Object(j.a)(L.a.mark(function e(){var t,a,n,o,r=this;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("checking for company"),t=[],a=Object(D.a)(this.state.listOfCompanies),console.log("the company list in state -=---- ",a),!((n=a.filter(function(e,t){return e.companyName.toUpperCase().includes(r.state.searchField.toUpperCase())})).length<=1)){e.next=13;break}return console.log("the if condition in the search"),e.next=9,this.getData(this.state.searchField);case 9:o=e.sent,console.log("the companies from the api >>>>>>>>>>>>>>>>>>>>>>> ",o),n.forEach(function(e){console.log("the first for each ===== ",e),o.forEach(function(a){console.log("match this <<<<<< ",e.companyName.toUpperCase()," >>>>>>>>>>>>>>>> ",a.name.toUpperCase()," ======== ",String(a.name.toUpperCase())===String(e.companyName.toUpperCase())),String(a.name.toUpperCase())!==String(e.companyName.toUpperCase())&&t.push(a)})}),0===n.length&&o.length>0&&(t=o);case 13:t.forEach(function(e){d.a.post("".concat("https://whorunswhat.herokuapp.com/api","/companies/create"),{companyName:e.name,companyDomain:e.domain,companyLogoUrl:e.logo},{withCredentials:!0}).then(function(e){n.push(e)}).catch(function(e){console.log(e)})}),console.log("matched:",n,"filtered:",t),this.setState({companiesListClone:n,apiCompaniesList:t});case 16:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getData",value:function(e){return d.a.get("https://autocomplete.clearbit.com/v1/companies/suggest?query=:"+e).then(function(e){return e.data})}},{key:"componentWillMount",value:function(){this.getAllCompanies()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"input py-4"},o.a.createElement("input",{className:"form-control form-control-lg",type:"search",id:"example-search-input",name:"searchField",value:this.state.searchField,onChange:function(t){e.onInputChange(t)},placeholder:"enter a company name..."})))}}]),t}(o.a.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).getAllCompanies=function(){d.a.get("".concat("https://whorunswhat.herokuapp.com/api","/companies"),{withCredentials:!0}).then(function(e){a.setState({listOfCompanies:e.data,ready:!0})})},a.getCurrentlyLoggedInUser=function(){a.service.currentUser().then(function(e){a.setState({currentlyLoggedIn:e})}).catch(function(){a.setState({currentlyLoggedIn:null})})},a.toggleForm=function(e){var t;t="signup"===e?"signupShowing":"loginShowing",a.setState(Object(l.a)({},t,!a.state[t]))},a.state={listOfCompanies:[],currentlyLoggedIn:null,ready:!1,signupShowing:!1,loginShowing:!1,searchResults:[]},a.service=new w,a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getAllCompanies(),this.getCurrentlyLoggedInUser()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(k,{theUser:this.state.currentlyLoggedIn,pleaseLogOut:function(){return e.service.logout()},toggleForm:this.toggleForm,getUser:this.getCurrentlyLoggedInUser}),this.state.signupShowing&&o.a.createElement("div",{className:"container-fluid mx-auto"},o.a.createElement(x,{getUser:this.getCurrentlyLoggedInUser,toggleForm:this.toggleForm})),this.state.loginShowing&&o.a.createElement("div",{className:"container-fluid mx-auto"},o.a.createElement(S,{getUser:this.getCurrentlyLoggedInUser,toggleForm:this.toggleForm})),o.a.createElement(T,null),o.a.createElement("div",{className:"container-fluid"},o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(b,Object.assign({},t,{theUser:e.state.currentlyLoggedIn,allTheCompanies:e.state.listOfCompanies,getData:e.getAllCompanies,ready:e.state.ready}))}}),o.a.createElement(h.a,{exact:!0,path:"/companies",render:function(t){return o.a.createElement(b,Object.assign({},t,{theUser:e.state.currentlyLoggedIn,allTheCompanies:e.state.listOfCompanies,getData:e.getAllCompanies,ready:e.state.ready}))}}),o.a.createElement(h.a,{exact:!0,path:"/dashboard",render:function(t){return o.a.createElement(U,Object.assign({},t,{theUser:e.state.currentlyLoggedIn,allTheCompanies:e.state.listOfCompanies,getData:e.getAllCompanies,ready:e.state.ready}))}}),o.a.createElement(h.a,{exact:!0,path:"/companies/:theID",render:function(t){return o.a.createElement(C,Object.assign({},t,{allTheCompanies:e.state.listOfCompanies,ready:e.state.ready,getData:e.getAllCompanies,theUser:e.state.currentlyLoggedIn}))}}))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(y.a,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.6017e7aa.chunk.js.map