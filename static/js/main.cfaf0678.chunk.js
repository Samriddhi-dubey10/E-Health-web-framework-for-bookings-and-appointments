(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{112:function(e,t,s){},113:function(e,t,s){},185:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=s(21),c=s.n(i),r=(s(109),s(110),s(111),s(112),s(12)),o=s(13),l=s(15),d=s(14),h=(s(113),s(6)),j=s(3),m=s(0),b=function(){return Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(m.jsx)("p",{children:"Loading . . ."})]})},u=s(7),O=[{src:"../assets/images/slide1.png",altText:"Slide 1",caption:"Slide 1"},{src:"../assets/images/slide2.png",altText:"Slide 2",caption:"Slide 2"},{src:"../assets/images/slide3.png",altText:"Slide 3",caption:"Slide 3"}],x=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={activeIndex:0},a.next=a.next.bind(Object(u.a)(a)),a.previous=a.previous.bind(Object(u.a)(a)),a.goToIndex=a.goToIndex.bind(Object(u.a)(a)),a.onExiting=a.onExiting.bind(Object(u.a)(a)),a.onExited=a.onExited.bind(Object(u.a)(a)),a}return Object(o.a)(s,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===O.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?O.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,s=O.map((function(t){return Object(m.jsxs)(j.m,{onExiting:e.onExiting,onExited:e.onExited,children:[Object(m.jsx)("img",{className:"d-block w-100",src:t.src,alt:t.altText}),Object(m.jsx)(j.j,{captionText:t.caption,captionHeader:t.caption})]},t.src)}));return Object(m.jsxs)(j.i,{activeIndex:t,next:this.next,previous:this.previous,children:[Object(m.jsx)(j.l,{items:O,activeIndex:t,onClickHandler:this.goToIndex}),s,Object(m.jsx)(j.k,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),Object(m.jsx)(j.k,{direction:"next",directionText:"Next",onClickHandler:this.next})]})}}]),s}(a.Component);function g(e){var t=e.item,s=e.isLoading,a=e.errMess;return s?Object(m.jsx)(b,{}):a?Object(m.jsx)("h4",{children:a}):Object(m.jsx)(j.f,{src:t.image,alt:t.name})}var f=function(e){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{class:"row row-content align-items-center",children:Object(m.jsx)("div",{class:"col",children:Object(m.jsx)(x,{})})}),Object(m.jsxs)("div",{className:"row justify-content-left",children:[Object(m.jsx)("div",{className:"col-md",children:Object(m.jsx)("h1",{className:"head",children:"Best Health Packages"})}),Object(m.jsx)("div",{className:"col col-lg-2",children:Object(m.jsx)("a",{href:"./menu",class:"btn btn-info ",children:"View All "})})]}),Object(m.jsxs)("div",{className:"row align-items-start",children:[Object(m.jsx)("div",{className:"col-12 col-md m-1",children:Object(m.jsx)(g,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})}),Object(m.jsx)("div",{className:"col-12 col-md m-1",children:Object(m.jsx)(g,{item:e.promotion})}),Object(m.jsx)("div",{className:"col-12 col-md m-1",children:Object(m.jsx)(g,{item:e.leader})})]}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"../assets/images/banner.png",alt:"banner"})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"img1",src:"../assets/images/How it Works.png",alt:"banner"})}),Object(m.jsx)("div",{class:"jumbotron jumbotron-fluid",children:Object(m.jsx)("div",{class:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{class:"col-12 col-sm-6  mr-auto",children:[Object(m.jsx)("h1",{children:"Excellence of Health Check"}),Object(m.jsx)("p",{children:"Health Check is one of the most trusted  in diagnostics today, with a network of fully automated labs across major cities in India, that are hardcoded with innovative technology, advanced robotics and intelligent digital solutions. With an extensive team of highly qualified lab technicians and pathologists, our single-minded purpose is to follow the strictest of quality measures to maintain accuracy for each test we perform.!"}),Object(m.jsx)("a",{class:"btn btn-warning btn-lg",href:"./AboutUs",role:"button",children:"Know more"})]}),Object(m.jsx)("img",{className:"ml-auto",src:"../assets/images/lab.jpg",alt:"lab "})]})})}),Object(m.jsx)("div",{class:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{class:"col-12 col-sm-6  mr-auto",id:"chatting",children:Object(m.jsx)("iframe",{className:"chatbot",src:"https://webchat.botframework.com/embed/healthcheck123-bot?s=goSgICJX5q8.Q0FPwC24K8pT0aqjqYZyyRhsSwtrqmd7VCPRsQ6QiqU"})})})})]})};function p(e){var t=e.dish;e.onClick;return Object(m.jsx)(j.d,{className:" card text-center",children:Object(m.jsxs)(h.b,{to:"/menu/".concat(t.id),children:[Object(m.jsx)(j.f,{width:"100%",src:t.image,alt:t.name}),Object(m.jsx)("a",{href:"#",class:"btn btn-info ",children:"Know More "})]})})}var v=function(e){var t=e.dishes.dishes.map((function(e){return Object(m.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(m.jsx)(p,{dish:e})},e.id)}));return e.dishes.isLoading?Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)(b,{})})}):e.dishes.errMess?Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)("h4",{children:e.dishes.errMess})})})}):Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(j.a,{children:[Object(m.jsx)(j.b,{children:Object(m.jsx)(h.b,{to:"/home",children:"Home"})}),Object(m.jsx)(j.b,{active:!0,children:"Health Packages"})]}),Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h3",{children:"Health Packages"}),Object(m.jsx)("hr",{})]})]}),Object(m.jsx)("div",{className:"row",children:t})]})},N=(s(124),s(99)),k=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(m.jsxs)(N.Carousel,{showArrows:!0,infiniteLoop:!0,showThumbs:!1,showStatus:!1,autoPlay:!0,interval:6100,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"../assets/images/test1.jpg"}),Object(m.jsxs)("div",{className:"myCarousel",children:[Object(m.jsx)("h3",{children:"Rakhi Desai"}),Object(m.jsx)("h4",{children:"Banglore"}),Object(m.jsx)("p",{children:'"Speedy Report" I would like to appreciate about Health Check service and speedy report delivery. I really appreciate their efforts.'})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"../assets/images/test2.jpg"}),Object(m.jsxs)("div",{className:"myCarousel",children:[Object(m.jsx)("h3",{children:"Sakshi Shukla"}),Object(m.jsx)("h4",{children:"Mumbai"}),Object(m.jsx)("p",{children:'"Report came on time" They Amazed me with their great quality of word. I got my tests done \u2026 and report came on time\u2026'})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"../assets/images/test3.jpg"}),Object(m.jsxs)("div",{className:"myCarousel",children:[Object(m.jsx)("h3",{children:"Megha Dubey"}),Object(m.jsx)("h4",{children:"Delhi"}),Object(m.jsx)("p",{children:"Very polite, quick works, punctual, responsible . All the best to your team and i wish you prosperity and success."})]})]})]})}}]),s}(a.Component);function y(e){var t=e.leader;return Object(m.jsx)("div",{className:"col-12 mt-5",children:Object(m.jsxs)(j.t,{tag:"li",children:[Object(m.jsx)(j.t,{left:!0,middle:!0,children:Object(m.jsx)(j.t,{object:!0,src:t.image,alt:t.name})}),Object(m.jsxs)(j.t,{body:!0,className:"ml-5",children:[Object(m.jsx)(j.t,{heading:!0,children:t.name}),Object(m.jsx)("p",{children:t.description})]})]})},t.id)}var C=function(e){return e.leaders.map((function(e){return Object(m.jsx)(y,{leader:e})})),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(j.a,{children:[Object(m.jsx)(j.b,{children:Object(m.jsx)(h.b,{to:"/home",children:"Home"})}),Object(m.jsx)(j.b,{active:!0,children:"About Us"})]}),Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h3",{children:"About Us"}),Object(m.jsx)("hr",{})]})]}),Object(m.jsxs)("div",{className:"row row-content",children:[Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h2",{children:"Our Excellence"}),Object(m.jsx)("p",{children:"Healthcheck is one of the most trusted players in diagnostics today, with a network of fully automated labs across major cities in India, that are hard coded with innovative technology, advanced robotics and intelligent digital solutions. With an extensive team of highly qualified lab technicians and pathologists, our single minded purpose is to follow the strictest of quality measures to maintain accuracy for each test we perform."})]}),Object(m.jsx)("div",{className:"row ",children:Object(m.jsxs)("div",{class:"card-deck",children:[Object(m.jsxs)("div",{class:"card",children:[Object(m.jsx)("img",{class:"card-img-top",src:"../assets/images/doctor1.jpg",alt:"Card image cap"}),Object(m.jsxs)("div",{class:"card-body",children:[Object(m.jsx)("h5",{class:"card-title",children:"Dr. Sonali"}),Object(m.jsx)("p",{class:"card-text",children:"Dr. Sonali Solanki is an MD in Pathology. She has a diverse experience of working in reputed hospitals as well as for medical affairs in the IVD industry. She has a sound academic record and has been a university topper (Gold Medalist). She has worked closely with numerous hospitals and labs for their quality assessment and improvement, worked with various hospitals and labs in preparation for accreditations from NABL, ISO and CAP (College of American Pathologists). She has conducted training programs across the country for endorsement of best practices especially in the field of pre-analytical improvement."})]})]}),Object(m.jsxs)("div",{class:"card",children:[Object(m.jsx)("img",{class:"card-img-top",src:"../assets/images/doctor3.jpg",alt:"Card image cap"}),Object(m.jsxs)("div",{class:"card-body",children:[Object(m.jsx)("h5",{class:"card-title",children:"Dr.Sneha Verma"}),Object(m.jsx)("p",{class:"card-text",children:"Dr. Sneha Verma, a qualified MD Pathologist heads the lab operations at Health Check. With the diverse experience of more than 20+ years, she has a deep understanding of lab operations with a strong application of quality assurance practices in all aspects of the lab operations. Trained as an internal auditor in ISO 15189, she has been instrumental in getting NABL accreditation, CAP accreditation, ISO certification & setting up the lab as a 24x7 single unit from inception and had enabled expansion to a chain of more than 30 labs catering to samples from across India as well as from international centres in Africa and Nepal.."})]})]})]})})]}),Object(m.jsx)("div",{children:Object(m.jsx)(k,{})})]})},w=s(9),T=function(e){return e&&e.length},S=function(e){return function(t){return!t||t.length<=e}},F=function(e){return function(t){return t&&t.length>=e}},I=function(e){return!isNaN(Number(e))},A=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},P=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(o.a)(s,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(j.a,{children:[Object(m.jsx)(j.b,{children:Object(m.jsx)(h.b,{to:"/home",children:"Home"})}),Object(m.jsx)(j.b,{active:!0,children:"Contact Us"})]}),Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h3",{children:"Contact Us"}),Object(m.jsx)("hr",{})]})]}),Object(m.jsxs)("div",{className:"row row-content",children:[Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)("h3",{children:"Location Information"})}),Object(m.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(m.jsx)("h5",{children:"Our Address"}),Object(m.jsxs)("address",{children:["121, Clear Water Bay Road",Object(m.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(m.jsx)("br",{}),"HONG KONG",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-envelope"}),": ",Object(m.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(m.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(m.jsx)("h5",{children:"Map of our Location"})}),Object(m.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(m.jsxs)("div",{className:"btn-group",role:"group",children:[Object(m.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(m.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(m.jsxs)("a",{role:"button",className:"btn btn-info",children:[Object(m.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(m.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(m.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(m.jsxs)("div",{className:"row row-content",children:[Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)("h3",{children:"Send us your Feedback"})}),Object(m.jsxs)("div",{className:"col-12 col-md-9",children:[Object(m.jsxs)(w.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(m.jsxs)(j.C,{className:"form-group",children:[Object(m.jsx)(j.s,{htmlFor:"firstname",md:2,children:"First Name"}),Object(m.jsxs)(j.n,{md:10,children:[Object(m.jsx)(w.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:T,minLength:F(3),maxLength:S(15)}}),Object(m.jsx)(w.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(m.jsxs)(j.C,{className:"form-group",children:[Object(m.jsx)(j.s,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(m.jsxs)(j.n,{md:10,children:[Object(m.jsx)(w.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:T,minLength:F(3),maxLength:S(15)}}),Object(m.jsx)(w.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(m.jsxs)(j.C,{className:"form-group",children:[Object(m.jsx)(j.s,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(m.jsxs)(j.n,{md:10,children:[Object(m.jsx)(w.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:T,minLength:F(3),maxLength:S(15),isNumber:I}}),Object(m.jsx)(w.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(m.jsxs)(j.C,{className:"form-group",children:[Object(m.jsx)(j.s,{htmlFor:"email",md:2,children:"Email"}),Object(m.jsxs)(j.n,{md:10,children:[Object(m.jsx)(w.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:T,validEmail:A}}),Object(m.jsx)(w.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(m.jsxs)(j.C,{className:"form-group",children:[Object(m.jsx)(j.n,{md:{size:6,offset:2},children:Object(m.jsx)("div",{className:"form-check",children:Object(m.jsxs)(j.s,{check:!0,children:[Object(m.jsx)(w.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",Object(m.jsx)("strong",{children:"May we contact you?"})]})})}),Object(m.jsx)(j.n,{md:{size:3,offset:1},children:Object(m.jsxs)(w.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(m.jsx)("option",{children:"Tel."}),Object(m.jsx)("option",{children:"Email"})]})})]}),Object(m.jsxs)(j.C,{className:"form-group",children:[Object(m.jsx)(j.s,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(m.jsx)(j.n,{md:10,children:Object(m.jsx)(w.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(m.jsx)(j.C,{className:"form-group",children:Object(m.jsx)(j.n,{md:{size:10,offset:2},children:Object(m.jsx)(j.c,{type:"submit",color:"primary",children:"Send Feedback"})})})]}),"                   "]})]})]})}}]),s}(a.Component),H=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).toggleNav=a.toggleNav.bind(Object(u.a)(a)),a.state={isNavOpen:!1},a}return Object(o.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)(j.z,{dark:!0,expand:"md",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(j.B,{onClick:this.toggleNav}),Object(m.jsx)(j.A,{className:"logo ml-6",href:"/",children:Object(m.jsx)("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"logo"})}),Object(m.jsx)("h3",{className:"heading mr-4",children:" Health Check "}),Object(m.jsx)(j.o,{isOpen:this.state.isNavOpen,navbar:!0,children:Object(m.jsxs)(j.x,{navbar:!0,children:[Object(m.jsx)(j.y,{children:Object(m.jsxs)(h.c,{className:"nav-link",to:"/home",children:[Object(m.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(m.jsx)(j.y,{children:Object(m.jsxs)(h.c,{className:"nav-link",to:"/aboutus",children:[Object(m.jsx)("span",{className:"fa fa-info fa-lg"})," About Us"]})}),Object(m.jsx)(j.y,{children:Object(m.jsxs)(h.c,{className:"nav-link",to:"/menu",children:[Object(m.jsx)("span",{className:"fa fa-list fa-lg"})," Health Packages "]})}),Object(m.jsx)(j.y,{children:Object(m.jsxs)(h.c,{className:"nav-link",to:"/contactus",children:[Object(m.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contact Us"]})}),Object(m.jsx)(j.c,{className:"buttonn",color:"warning",href:"#chatting",children:Object(m.jsx)("i",{class:"fa fa-comments-o","aria-hidden":"true",children:"Chat With Us"})})]})})]})})})}}]),s}(a.Component);var L=function(e){return Object(m.jsx)("div",{className:"footer",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row justify-content-center",children:[Object(m.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(m.jsx)("h5",{children:"Links"}),Object(m.jsxs)("ul",{className:"list-unstyled",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"./AboutUs",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"./menu",children:"Health Packages"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"./ContactUs",children:"Contact"})})]})]}),Object(m.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(m.jsx)("h5",{children:"Our Address"}),Object(m.jsxs)("address",{children:["121, crystal paradise Bay Road",Object(m.jsx)("br",{}),"Clear Water Bay, Noida",Object(m.jsx)("br",{}),"India",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-phone fa-lg"}),": +91 12354 56578",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-fax fa-lg"}),": +91 87465 44321",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(m.jsx)("a",{href:"mailto:healthcheck@lab.net",children:"healthcheck@lab.net"})]})]}),Object(m.jsxs)("div",{className:"col-12 col-sm-4 align-self-center",children:[Object(m.jsx)("div",{children:Object(m.jsx)("h4",{children:"Follow Us"})}),Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(m.jsx)("i",{className:"fa fa-google-plus"})}),Object(m.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(m.jsx)("i",{className:"fa fa-facebook"})}),Object(m.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(m.jsx)("i",{className:"fa fa-linkedin"})}),Object(m.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(m.jsx)("i",{className:"fa fa-twitter"})}),Object(m.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(m.jsx)("i",{className:"fa fa-youtube"})}),Object(m.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(m.jsx)("i",{className:"fa fa-envelope-o"})})]})]})]}),Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-auto",children:Object(m.jsx)("p",{children:"\xa9 Copyright 2018 Health-Check"})})})]})})},M=s(102),E=s.n(M),q=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).onChangeName=a.onChangeName.bind(Object(u.a)(a)),a.onChangeEmail=a.onChangeEmail.bind(Object(u.a)(a)),a.onChangePhone=a.onChangePhone.bind(Object(u.a)(a)),a.onChangeHealthPackage=a.onChangeHealthPackage.bind(Object(u.a)(a)),a.onChangeHealthPackageconform=a.onChangeHealthPackageconform.bind(Object(u.a)(a)),a.onChangeAddress=a.onChangeAddress.bind(Object(u.a)(a)),a.onSubmit=a.onSubmit.bind(Object(u.a)(a)),a.state={name:"",email:"",phone:"",healthpackage:"",healthpackageConform:"",address:""},a}return Object(o.a)(s,[{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePhone",value:function(e){this.setState({phone:e.target.value})}},{key:"onChangeHealthPackage",value:function(e){this.setState({healthpackage:e.target.value})}},{key:"onChangeHealthPackageconform",value:function(e){this.setState({healthpackageConform:e.target.value})}},{key:"onChangeAddress",value:function(e){this.setState({address:e.target.value})}},{key:"onSubmit",value:function(e){if(e.preventDefault(),this.state.password===this.state.passwordConform){var t={name:this.state.name,email:this.state.email,phone:this.state.phone,healthpackage:this.state.healthpackage,healthpackageConform:this.state.healthpackageConform,address:this.state.address};E.a.post("http://localhost/reactProject/insert.php",t).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e.response)})),this.setState({name:"",email:"",phone:"",healthpackage:"",healthpackageConform:"",address:""})}else alert("Healthpackage mismatch")}},{key:"render",value:function(){return Object(m.jsxs)(j.p,{children:[Object(m.jsxs)(j.q,{children:[Object(m.jsx)(j.s,{htmlFor:"booking",md:12,children:" Name"}),Object(m.jsx)(j.r,{Label:"Full Name",value:this.state.name,onChange:this.onChangeName})]}),Object(m.jsxs)(j.q,{children:[Object(m.jsx)(j.s,{htmlFor:"booking",md:12,children:" Email"}),Object(m.jsx)(j.r,{Label:"Email",value:this.state.email,onChange:this.onChangeEmail})]}),Object(m.jsxs)(j.q,{children:[Object(m.jsx)(j.s,{htmlFor:"booking",md:12,children:" Phone"}),Object(m.jsx)(j.r,{Label:"Phone Number",value:this.state.phone,onChange:this.onChangePhone})]}),Object(m.jsxs)(j.q,{children:[Object(m.jsx)(j.s,{htmlFor:"booking",md:12,children:" HealthPackage"}),Object(m.jsx)(j.r,{Label:"HealthPackage",value:this.state.healthpackage,onChange:this.onChangeHealthPackage})]}),Object(m.jsxs)(j.q,{children:[Object(m.jsx)(j.s,{htmlFor:"booking",md:12,children:" Confirm HealthPackage"}),Object(m.jsx)(j.r,{Label:"Confirm HealthPackage",value:this.state.healthpackageConform,onChange:this.onChangeHealthPackageconform})]}),Object(m.jsxs)(j.q,{children:[Object(m.jsx)(j.s,{htmlFor:"booking",md:12,children:" Address"}),Object(m.jsx)(j.r,{Label:"Address",value:this.state.address,onChange:this.onChangeAddress})]}),Object(m.jsx)(j.c,{style:{background:"black",color:"white"},onClick:this.onSubmit,children:" Submit"})]})}}]),s}(a.Component),R=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={isCommentFormModalOpen:!1},a.toggleCommentFormModal=a.toggleCommentFormModal.bind(Object(u.a)(a)),a}return Object(o.a)(s,[{key:"toggleCommentFormModal",value:function(){this.setState({isCommentFormModalOpen:!this.state.isCommentFormModalOpen})}},{key:"render",value:function(){return Object(m.jsxs)(n.a.Fragment,{children:[Object(m.jsxs)(j.c,{outline:!0,onClick:this.toggleCommentFormModal,children:[Object(m.jsx)("span",{className:"fa fa-comments fa-lg"})," Book Now"]}),Object(m.jsxs)(j.u,{isOpen:this.state.isCommentFormModalOpen,toggle:this.toggleCommentFormModal,children:[Object(m.jsx)(j.w,{toggle:this.toggleCommentFormModal,children:" Book Now "}),Object(m.jsx)(j.v,{children:Object(m.jsx)("div",{children:Object(m.jsx)(q,{})})})]})]})}}]),s}(a.Component);function D(e){var t=e.dish;return null!=t?Object(m.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(m.jsxs)(j.d,{children:[Object(m.jsx)(j.f,{width:"100%",src:t.image,alt:t.name}),Object(m.jsxs)(j.e,{children:[Object(m.jsxs)(j.h,{children:[" ",t.name]}),Object(m.jsxs)(j.g,{children:[" ",t.description," "]})]})]})}):Object(m.jsx)("div",{})}function B(e){var t=e.dish,s=e.comments;if(null==s)return Object(m.jsx)("div",{});var a=s.map((function(e){return Object(m.jsxs)("li",{children:[Object(m.jsx)("p",{children:e.comment}),Object(m.jsxs)("p",{children:["-- ",e.author,", \xa0",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(e.date))]})]},e.id)}));return Object(m.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(m.jsx)("h4",{children:" About Tests "}),Object(m.jsx)("ul",{className:"list-unstyled",children:a}),Object(m.jsx)(R,{dish:t,comments:s})]})}var U=function(e){return null==e.dish?Object(m.jsx)("div",{}):Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(j.a,{children:[Object(m.jsx)(j.b,{children:Object(m.jsx)(h.b,{to:"/menu",children:"Menu"})}),Object(m.jsx)(j.b,{active:!0,children:e.dish.name})]}),Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsxs)("h3",{children:[" ",e.dish.menu]}),Object(m.jsx)("hr",{})]})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)(D,{dish:e.dish}),Object(m.jsx)(B,{dish:e.dish,comments:e.comments})]})]})},W="DISHES_LOADING",z="DISHES_FAILED",Q="ADD_DISHES",G=[{id:0,name:"Allergy Panel Paediatric",image:"/assets/images/card1.png",category:"mains",label:"Hot",price:"Rs.4500",featured:!0,description:"Total no.of Tests - 27  Quick Turn Around Time Reporting as per NABL ISO guidelines "},{id:1,name:"Smart Full Body Check-up",image:"/assets/images/card2.png",category:"appetizer",label:"",price:"Rs.799",featured:!1,description:"Total no.of Tests - 80 Quick Turn Around Time Reporting as per as guidelines"},{id:2,name:"Fever Panel",image:"/assets/images/card3.png",category:"appetizer",label:"New",price:"Rs.650",featured:!1,description:"Total no.of Tests - 49 Quick Turn Around Time Reporting as per as guidelines"},{id:3,name:"Healthy Heart",image:"/assets/images/card4.png",category:"dessert",label:"",price:"Rs.1099",featured:!1,description:"Total no.of Tests - 56 Quick Turn Around Time Reporting as per as guidelines"}],Z=function(){return{type:W}},K=function(e){return{type:Q,payload:e}},V=s(19),J=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(r.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchDishes()}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)(H,{}),Object(m.jsxs)(h.f,{children:[Object(m.jsx)(h.e,{path:"/home",component:function(){return Object(m.jsx)(f,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.filter((function(e){return e.featured}))[0],leader:e.props.leaders.filter((function(e){return e.featured}))[0]})}}),Object(m.jsx)(h.e,{exact:!0,path:"/menu",component:function(){return Object(m.jsx)(v,{dishes:e.props.dishes})}}),Object(m.jsx)(h.e,{path:"/menu/:dishId",component:function(t){var s=t.match;return Object(m.jsx)(U,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(s.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.filter((function(e){return e.dishId===parseInt(s.params.dishId,10)}))})}}),Object(m.jsx)(h.e,{exact:!0,path:"/contactus",component:function(){return Object(m.jsx)(P,{resetFeedbackForm:e.props.resetFeedbackForm})}}),Object(m.jsx)(h.e,{exact:!0,path:"/aboutus",component:function(){return Object(m.jsx)(C,{leaders:e.props.leaders})}}),Object(m.jsx)(h.d,{to:"/home"})]}),Object(m.jsx)(L,{})]})}}]),s}(a.Component),_=Object(h.g)(Object(V.connect)((function(e){return{comments:e.comments,dishes:e.dishes,leaders:e.leaders,promotions:e.promotions}}),(function(e){return{fetchDishes:function(){e((function(e){e(Z(!0)),setTimeout((function(){e(K(G))}),2e3)}))},resetFeedbackForm:function(){e(w.actions.reset("feedback"))}}}))(J)),Y=s(22),X=s(20),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,errMess:null,dishes:t.payload});case W:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case z:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},ee=[{id:0,dishId:0,rating:5,comment:"Grass mix 2:Timothy grass, cultivated rye, Birch, Mugwort, Dermatopha goides pteronyssinus, Dermatopha goides farinae, Cat, Dog, Horse, Cladosporium herbaru m, Asper gillus fumi gatus, Altern aria altern ata, Egg white, Egg yolk, Cow's milk, Codfish, nBosd 4 Al Phalactalbumin ( milk), nBosd 5 Beta-lacto globulin ( milk), nBosd 8 Casein ( Milk), nBosd 6 Bsa ( Milk), Wheat Flour, Rice, Soyabean, Peanut, Hazelnut, Carrot, potato, Apple",author:"No Special Prepartion is Required",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:1,rating:5,comment:"Now with 80 tests which includes Complete Hemogram (24 tests), Thyroid Tests (3 tests), Urine Routine & Microscopy (21 tests), Liver Function Tests (12 tests), Kidney Function Tests (10 tests), Lipid Profile Tests (9 tests), Blood Sugar Fasting",author:"Patient Instruction :12 hour fasting required",date:"2012-10-16T17:57:28.556094Z"},{id:2,dishId:2,rating:4,comment:"The Fever Panel consists of tests that help detect the causes of fever. The Fever Panel (CBC, Malaria Antigen, SGPT, WIDAL, Urine R/M)  Parameter Now with 49 tests which includes CBC (24 tests), MALARIA ANTIGEN, SGPT, WIDAL, URINE R/M (15 tests).",author:" Patient Instruction : NOT REQUIRED",date:"2014-09-05T17:57:28.556094Z"},{id:3,dishId:3,rating:3,comment:"Test ParametersNow with 56 tests which includes CBC (24 Tests), LFT (12 Tests), KFT (9 Tests), LIPID (9 Tests), HSCRP",author:"Patient Instruction :10 to 12 hours Fasting Is Required",date:"2015-02-13T17:57:28.556094Z"}],te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;return t.type,e},se=[{id:0,name:"Smart Full Body Check-up",image:"/assets/images/card2.png",label:"New",price:"Rs 799",featured:!0,description:"Total no.of Tests - 80 Quick Turn Around Time Reporting as per as guidelines"}],ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ne=[{id:0,name:"Peter Pan",image:"/assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"/assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"/assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Healthy Heart Package",image:"/assets/images/card4.png",designation:"Executive Chef",abbr:"Rs 1099",featured:!0,description:"Total no.of Tests - 56 Quick Turn Around Time Reporting as per as guidelines"}],ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ce=s(103),re=s.n(ce),oe=s(104),le=s.n(oe),de={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},he=Object(X.createStore)(Object(X.combineReducers)(Object(Y.a)({dishes:$,comments:te,promotions:ae,leaders:ie},Object(w.createForms)({feedback:de}))),Object(X.applyMiddleware)(re.a,le.a)),je=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(m.jsx)(V.Provider,{store:he,children:Object(m.jsx)(h.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(_,{})})})})}}]),s}(a.Component),me=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,186)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};c.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(je,{})}),document.getElementById("root")),me()}},[[185,1,2]]]);
//# sourceMappingURL=main.cfaf0678.chunk.js.map