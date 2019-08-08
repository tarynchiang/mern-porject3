(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},38:function(e,t,n){e.exports=n(66)},43:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(35),s=n.n(i),c=(n(43),n(10)),o=n(2),l=n(3),u=n(5),m=n(4),g=n(6),h=(n(14),n(15)),d=n(1),p=n.n(d),f=function e(){var t=this;Object(o.a)(this,e),this.signup=function(e,n){return t.service.post("/signup",{username:e,password:n}).then(function(e){return e.data})},this.login=function(e,n){return t.service.post("/login",{username:e,password:n}).then(function(e){return e.data})},this.currentUser=function(){return t.service.get("/getcurrentuser").then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})};var n=p.a.create({baseURL:"https://mern-project3.herokuapp.com",withCredentials:!0});this.service=n},k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.trytoSignUp=function(e){e.preventDefault();var t=n.state.usernameInput,a=n.state.passwordInput;n.service.signup(t,a).then(function(e){console.log("-----",e),n.props.toggleForm("signup"),n.props.getUser(),n.props.history.push("/firstpage")})},n.state={usernameInput:"",passwordInput:""},n.service=new f,n}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-sec"},r.a.createElement("form",{className:"sign-form",onSubmit:this.trytoSignUp},r.a.createElement("h3",null,"Sign Up Today"),r.a.createElement("legend",null,"Username"),r.a.createElement("input",{value:this.state.usernameInput,name:"usernameInput",onChange:this.handleChange}),r.a.createElement("legend",null,"Password"),r.a.createElement("input",{type:"password",value:this.state.passwordInput,name:"passwordInput",onChange:this.handleChange}),r.a.createElement("div",{className:"btn-sec"},r.a.createElement("button",{className:"btn",onClick:this.props.cancelBtn},"Cancel"),r.a.createElement("button",{className:"btn"},"Submit"))))}}]),t}(a.Component),E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.trytoLogIn=function(e){e.preventDefault();var t=n.state.usernameInput,a=n.state.passwordInput;n.service.login(t,a).then(function(e){console.log("-----",e),n.props.toggleForm("login"),n.props.getUser(),n.props.history.push("/firstpage")})},n.state={usernameInput:"",passwordInput:""},n.service=new f,n}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-sec"},r.a.createElement("form",{className:"sign-form",onSubmit:this.trytoLogIn},r.a.createElement("h3",null,"Log In"),r.a.createElement("legend",null,"Username"),r.a.createElement("input",{value:this.state.usernameInput,name:"usernameInput",onChange:this.handleChange}),r.a.createElement("legend",null,"Password"),r.a.createElement("input",{type:"password",value:this.state.passwordInput,name:"passwordInput",onChange:this.handleChange}),r.a.createElement("div",{className:"btn-sec"},r.a.createElement("button",{className:"btn",onClick:this.props.cancelBtn},"Cancel"),r.a.createElement("button",{className:"btn"},"Log In"))))}}]),t}(a.Component),b=n(18),I=n.n(b),C=n(21),y=n(8),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).addNewItem=function(e){p.a.post("".concat("https://mern-project3.herokuapp.com","/create-item"),{name:e.target.name},{withCredentials:!0}).then(function(){console.log("success create"),n.props.getMyIngredients()}).catch(function(e){console.log(e)})},n.deleteItem=function(e){p.a.post("".concat("https://mern-project3.herokuapp.com","/delete-item/")+e).then(function(){console.log("success delete"),n.props.getMyIngredients()}).catch(function(e){console.log(e)})},n.CompareTwoLists=function(e,t){return e.filter(function(e){return-1!==t.indexOf(e)})},n.getCocktailName=function(e){return p.a.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+e.name).then(function(e){return console.log("Cocktails",e),e.data.drinks.map(function(e){return e.idDrink})})},n.SearchByIngredients=function(){var e=Object(C.a)(I.a.mark(function e(t){var a,r,i;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("IngredientsList",t),e.next=3,n.getCocktailName(t[0]);case 3:if(a=e.sent,1!==t.length){e.next=7;break}return console.log("result>>>>",a),e.abrupt("return",a);case 7:i=1;case 8:if(!(i<t.length)){e.next=18;break}return e.next=11,n.getCocktailName(t[i]);case 11:return r=e.sent,e.next=14,n.CompareTwoLists(r,a);case 14:a=e.sent;case 15:i++,e.next=8;break;case 18:return console.log("result>>>>",a),e.abrupt("return",a);case 20:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.handleSearchInput=Object(C.a)(I.a.mark(function e(){var t;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.SearchByIngredients(n.props.MyIngredients);case 2:t=e.sent,n.setState({cocktailsID:t}),n.fetchCocktailYouCanMake();case 5:case"end":return e.stop()}},e)})),n.fetchCocktailYouCanMake=function(){var e=[],t=[];n.state.cocktailsID.forEach(function(t,n){e.push(p.a.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+t))}),p.a.all(e).then(function(e){e.forEach(function(e){t.push(e.data.drinks[0])}),n.setState({cocktailYouCanMake:t})})},n.showCocktailYouCanMake=function(){return 0===n.state.cocktailYouCanMake.length?r.a.createElement("h1",null,"Sorry No Cocktail found :("):n.state.cocktailYouCanMake.map(function(e,t){return r.a.createElement(y.b,{exact:!0,to:{pathname:"/details/"+e.idDrink,state:{fromRefigerator:!0}},className:"eachCocktail"},r.a.createElement("img",{src:e.strDrinkThumb}),r.a.createElement("h3",null,e.strDrink))})},n.showAllIngredients=function(){return n.props.allTheIngredients.map(function(e){return r.a.createElement("li",null,r.a.createElement("button",{className:"eachIngredient",onClick:n.addNewItem,name:e},e))})},n.showMyIngredients=function(){return n.props.MyIngredients.map(function(e){return r.a.createElement("li",{className:"eachMyIngredient"},r.a.createElement("span",null,e.name),r.a.createElement("button",{className:"delete-btn",onClick:function(){n.deleteItem(e._id)}},r.a.createElement("img",{src:"/images/delete-button.png",alt:"delete-button"})))})},n.state={cocktailsID:[],cocktailYouCanMake:[]},n}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.location.state&&e.props.location.state.search&&(e.props.location.state.search=!1,e.handleSearchInput())},500)}},{key:"render",value:function(){return console.log("my state",this.state),this.props.ready&&this.props.mylistShowing?r.a.createElement("div",{className:"Ingredient-page"},r.a.createElement("div",{className:"list-part"},r.a.createElement("div",{className:"list-sec"},r.a.createElement("ul",{className:"IngredientsList"},this.showAllIngredients()),r.a.createElement("div",{className:"MyIngredientsList"},r.a.createElement("h1",null,"My Ingredients"),this.showMyIngredients())),r.a.createElement("button",{className:"search-btn",onClick:this.handleSearchInput},"Search")),r.a.createElement("div",{className:"myCocktailList"},this.showCocktailYouCanMake())):this.props.ready?r.a.createElement("div",null,r.a.createElement("ul",{className:"IngredientsList"},this.showAllIngredients())):r.a.createElement("h1",null,"Loading...")}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).getCocktailDetails=function(e){var t={};p.a.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+e).then(function(e){console.log("0-0-0-0-0-",e.data.drinks[0]),t.name=e.data.drinks[0].strDrink,t.ingredients=[],t.measures=[];for(var a,r,i=1,s=!0;s;)a=e.data.drinks[0]["strIngredient"+i],r=e.data.drinks[0]["strMeasure"+i],0===a.length?s=!1:(t.ingredients.push(a),t.measures.push(r)),i++;t.instruction=e.data.drinks[0].strInstructions,t.img=e.data.drinks[0].strDrinkThumb,t.glass=e.data.drinks[0].strGlass,n.setState({Cocktail:t,ready:!0})})},n.goBack=function(){n.props.location.state&&n.props.location.state.fromRefigerator?(n.props.location.state.fromRefigerator=!1,n.props.history.push({pathname:"/refrigerator",state:{search:!0}})):n.props.history.goBack()},n.showIngredients=function(){return n.state.Cocktail.ingredients.map(function(e){return r.a.createElement("li",null,e)})},n.showAmount=function(){return n.state.Cocktail.measures.map(function(e){return r.a.createElement("li",null,e)})},n.showCocktailDetails=function(){return r.a.createElement("div",{className:"Details-page"},r.a.createElement("div",{className:"Cocktail-details"},r.a.createElement("img",{src:n.state.Cocktail.img}),r.a.createElement("div",{className:"Cocktail-info"},r.a.createElement("h1",null,n.state.Cocktail.name),r.a.createElement("h3",null,"Ingredients"),r.a.createElement("div",{className:"Amount"},r.a.createElement("ul",null,n.showIngredients()),r.a.createElement("ul",null,n.showAmount())),r.a.createElement("h3",null,"Instruction"),r.a.createElement("p",null,n.state.Cocktail.instruction))),r.a.createElement("button",{onClick:n.goBack,className:"GoBack-btn"},r.a.createElement("img",{src:"/images/backarrow.png",alt:"goback-btn"})))},n.state={Cocktail:{},ready:!1},n}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getCocktailDetails(this.props.match.params.id)}},{key:"render",value:function(){return this.state.ready?r.a.createElement("div",null,this.showCocktailDetails()):r.a.createElement("h1",null,"Loading...")}}]),t}(r.a.Component),O=n(19),N=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).getTheCocktail=function(){var e=n.props.match.params.id,t=n.props.thecocktails.find(function(t){return console.log("eachCId",t._id),t._id===e});console.log("found",t),n.setState({name:t.name,ingredients:t.ingredients,instruction:t.instruction,image:t.image,ready:!0})},n.updateFileInState=function(e){n.setState({image:e.target.files[0]})},n.handleFormSubmit=function(e){e.preventDefault();var t=new FormData;t.append("theImage",n.state.image),t.append("theName",n.state.name),t.append("theInstruction",n.state.instruction),n.state.ingredients.forEach(function(e){t.append("theIngredients",e)}),p.a.post("http://localhost:5000/update-cocktail/".concat(n.props.match.params.id),t).then(function(){n.props.getMyCocktail(),n.props.history.push("/profile")}).catch(function(e){return console.log(e)})},n.handleChange=function(e){console.log("NAME",e.target.name),console.log("VALUE",e.target.value),n.setState(Object(c.a)({},e.target.name,e.target.value))},n.deleteIngredient=function(e){p.a.post("http://localhost:5000/delete-ingredient/".concat(n.props.match.params.id,"/").concat(e)).then(function(){console.log("in the THENNNN"),n.props.getMyCocktail(),setTimeout(function(){n.getTheCocktail()},200)}).catch(function(e){console.log(e)})},n.showIngredientyouhave=function(){return n.state.ingredients.map(function(e){return r.a.createElement("div",{className:"myIngList"},r.a.createElement("p",null,e),r.a.createElement("button",{className:"delete-btn",type:"button",onClick:function(){n.deleteIngredient(e)}},r.a.createElement("img",{src:"/images/delete-button.png",alt:"delete-button"})))})},n.handleIngredients=function(){var e=Object(O.a)(n.state.ingredients),t=n.state.currentIngredient;e.push(t),n.setState({ingredients:e,currentIngredient:""})},n.state={name:"",ingredients:[],instruction:"",image:null,currentIngredient:"",ready:!1},n}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getTheCocktail()}},{key:"render",value:function(){var e=this;return console.log("=====",this.props),console.log("parameter",this.props.match.params.id),console.log("state",this.state),this.state.ready?r.a.createElement("div",{className:"add-cocktail"},r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"add-box"},r.a.createElement("div",{className:"first-box"},r.a.createElement("div",null,r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{type:"file",onChange:this.updateFileInState})),r.a.createElement("div",{className:"second-box"},r.a.createElement("div",{className:"sec-box1"},r.a.createElement("legend",null,"Ingredients"),r.a.createElement("input",{type:"text",name:"currentIngredient",value:this.state.currentIngredient,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("button",{type:"button",onClick:this.handleIngredients},"+"),this.showIngredientyouhave()),r.a.createElement("div",{className:"sec-box2"},r.a.createElement("legend",null,"Instruction"),r.a.createElement("textarea",{rows:"20",cols:"50",name:"instruction",value:this.state.instruction,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("input",{type:"submit",value:"Submit",className:"submit-btn"}))):r.a.createElement("h1",null,"Loading...")}}]),t}(a.Component),j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).changeEditing=function(e){n.setState({editing:e})},n.resetEdit=function(){n.setState({editing:!1})},n.deleteCocktail=function(e){p.a.post("".concat("https://mern-project3.herokuapp.com","/delete-cocktail/")+e).then(function(){n.props.getMyCocktail()}).catch(function(e){console.log(e)})},n.showMyCocktail=function(){return n.props.AlltheCocktails.filter(function(e){return e.owner._id===n.props.theUser._id}).map(function(e,t){return n.state.editing!==t?r.a.createElement("div",{className:"eachRecipe"},r.a.createElement(y.b,{exact:!0,to:"/recipedetails/".concat(e._id)},r.a.createElement("img",{src:e.img,alt:"cocktail-img"}),r.a.createElement("h1",null,e.name)),r.a.createElement("div",{className:"delete-edit"},r.a.createElement(y.b,{exact:!0,to:"/editCocktail/".concat(e._id)},"edit"),r.a.createElement("button",{onClick:function(){return n.deleteCocktail(e._id)}},"delete"))):r.a.createElement(N,{resetEditingSituation:n.resetEdit,theCocktail:e,getAllTheCocktailInAppJS:n.props.getMyCocktail})})},n.state={editing:!1},n}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("-=-=-=--=",this.props.AlltheCocktails),this.props.myCocktailReady?r.a.createElement("div",{className:"recipe-page"},this.showMyCocktail(),r.a.createElement(y.b,{exact:!0,to:"/createCocktail",className:"add-pic"},r.a.createElement("img",{src:"/images/add.png",alt:"add-sign"}))):r.a.createElement("h1",null,"Loading...")}}]),t}(r.a.Component),S=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=new FormData;t.append("theImage",n.state.newImage),t.append("theName",n.state.newName),t.append("theInstruction",n.state.newInstruction),n.state.newIngredients.forEach(function(e){t.append("theIngredients",e)}),p.a.post("".concat("https://mern-project3.herokuapp.com","/create-cocktail"),t,{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0}).then(function(){n.props.getMyCocktail(),n.setState({newName:"",newIngredients:[],newInstruction:"",newImage:null,currentIngredient:""}),n.props.history.push("/profile")}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(c.a)({},a,r))},n.handleIngredients=function(){var e=Object(O.a)(n.state.newIngredients),t=n.state.currentIngredient;e.push(t),n.setState({newIngredients:e,currentIngredient:""})},n.showIngredientyouhave=function(){return n.state.newIngredients.map(function(e){return r.a.createElement("p",null,e)})},n.updateFileInState=function(e){n.setState({newImage:e.target.files[0]})},n.state={newName:"",newIngredients:[],newInstruction:"",newImage:null,currentIngredient:""},n}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state),r.a.createElement("div",{className:"add-cocktail"},r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"add-box"},r.a.createElement("div",{className:"first-box"},r.a.createElement("div",null,r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",name:"newName",value:this.state.newName,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{type:"file",onChange:this.updateFileInState})),r.a.createElement("div",{className:"second-box"},r.a.createElement("div",{className:"sec-box1"},r.a.createElement("legend",null,"Ingredients"),r.a.createElement("input",{type:"text",name:"currentIngredient",value:this.state.currentIngredient,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("button",{type:"button",onClick:this.handleIngredients},"+"),this.showIngredientyouhave()),r.a.createElement("div",{className:"sec-box2"},r.a.createElement("legend",null,"Instruction"),r.a.createElement("textarea",{rows:"20",cols:"50",name:"newInstruction",value:this.state.newInstruction,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("input",{type:"submit",value:"Submit",className:"submit-btn"})))}}]),t}(a.Component),M=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).getTheCocktail=function(){var e=n.props.match.params.id,t=n.props.thecocktails.find(function(t){return console.log("eachCId",t._id),t._id===e});console.log("theCocktail",t),n.setState({name:t.name,ingredients:t.ingredients,instruction:t.instruction,image:t.img,ready:!0})},n.showIngredients=function(){return n.state.ingredients.map(function(e){return r.a.createElement("li",null,e)})},n.goBack=function(){},n.showCocktailDetail=function(){return r.a.createElement("div",{className:"Details-page"},r.a.createElement("div",{className:"Cocktail-details"},r.a.createElement("img",{src:n.state.image,alt:"cocktail-img"}),r.a.createElement("div",{className:"Cocktail-info"},r.a.createElement("h1",null,n.state.name),r.a.createElement("h3",null,"Ingredients"),r.a.createElement("div",{className:"Amount"},r.a.createElement("ul",null,n.showIngredients())),r.a.createElement("h3",null,"Instruction"),r.a.createElement("p",null,n.state.instruction))),r.a.createElement("button",{onClick:function(){n.props.history.goBack()},className:"GoBack-btn"},r.a.createElement("img",{src:"/images/backarrow.png",alt:"goback-btn"})))},n.state={name:"",ingredients:[],instruction:"",image:null,ready:!1},n}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getTheCocktail()}},{key:"render",value:function(){return this.state.ready?r.a.createElement("div",null,this.showCocktailDetail()):r.a.createElement("h1",null,"Loading...")}}]),t}(r.a.Component);var L=function(e){return r.a.createElement("div",{className:"Home-page"},r.a.createElement("h1",null,"Start your Night with Your Favorite ",r.a.createElement("i",null,"Cocktail")))};var x=function(e){return r.a.createElement("div",{className:"first-page"},r.a.createElement(y.b,{exact:!0,to:"/refrigerator"},"Refrigerator"),r.a.createElement(y.b,{exact:!0,to:"/profile"},"My own Recipes"))};var D=function(e){return r.a.createElement("nav",null,r.a.createElement(y.b,{exact:!0,to:"/firstpage"},r.a.createElement("img",{src:"/images/homeSign.png",alt:"home"})),r.a.createElement("div",null,!e.theUser&&r.a.createElement("span",null,r.a.createElement("button",{className:"btn",onClick:function(){return e.toggleForm("signup")}},"Sign Up"),r.a.createElement("button",{className:"btn",onClick:function(){return e.toggleForm("login")}}," Login ")),e.theUser&&r.a.createElement("span",null,r.a.createElement("button",{className:"btn",onClick:function(){e.pleaseLogOut().then(function(){e.getUser()})}},"Log Out "))))},U=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).getAllIngredients=function(){p.a.get("".concat("https://mern-project3.herokuapp.com","/ingredients-list")).then(function(e){n.setState({listOfAllIngredients:e.data,ready:!0})})},n.getMyIngredients=function(){p.a.get("".concat("https://mern-project3.herokuapp.com","/ingredient-you-have"),{withCredentials:!0}).then(function(e){console.log("my ingredients<<<<<<",e.data),n.setState({myListOfIngredients:e.data,mylistShowing:!0})})},n.getMyCocktails=function(){p.a.get("".concat("https://mern-project3.herokuapp.com","/yourowncocktail"),{withCredentials:!0}).then(function(e){console.log("my cocktails<<<<<<",e),n.setState({ListOfCocktails:e.data,myCocktailReady:!0})})},n.getCurrentlyLoggedInUser=function(){n.service.currentUser().then(function(e){n.setState({currentlyLoggedIn:e})}).catch(function(){n.setState({currentlyLoggedIn:null})})},n.toggleForm=function(e){var t,a,r;"signup"===e?(t="signupShowing",n.setState((a={},Object(c.a)(a,t,!n.state[t]),Object(c.a)(a,"loginShowing",!1),a))):(t="loginShowing",n.setState((r={},Object(c.a)(r,t,!n.state[t]),Object(c.a)(r,"signupShowing",!1),r)))},n.cancelBtn=function(){n.setState({signupShowing:!1,loginShowing:!1})},n.state={listOfAllIngredients:[],myListOfIngredients:[],ListOfCocktails:[],currentlyLoggedIn:null,signupShowing:!1,loginShowing:!1,ready:!1,mylistShowing:!1,myCocktailReady:!1},n.service=new f,n}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getMyIngredients(),this.getCurrentlyLoggedInUser(),this.getAllIngredients(),this.getMyCocktails()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(D,{theUser:this.state.currentlyLoggedIn,pleaseLogOut:function(){return e.service.logout()},toggleForm:this.toggleForm,getUser:this.getCurrentlyLoggedInUser}),this.state.signupShowing&&r.a.createElement(k,{getUser:this.getCurrentlyLoggedInUser,signupShowing:this.signupShowing,toggleForm:this.toggleForm,cancelBtn:this.cancelBtn}),this.state.loginShowing&&r.a.createElement(E,Object.assign({},this.props,{getUser:this.getCurrentlyLoggedInUser,toggleForm:this.toggleForm,cancelBtn:this.cancelBtn})),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(L,e)}}),r.a.createElement(h.a,{exact:!0,path:"/refrigerator",render:function(t){return r.a.createElement(v,Object.assign({},t,{allTheIngredients:e.state.listOfAllIngredients,MyIngredients:e.state.myListOfIngredients,getMyIngredients:e.getMyIngredients,ready:e.state.ready,mylistShowing:e.state.mylistShowing,getData:e.getAllIngredients,theUser:e.state.currentlyLoggedIn}))}}),r.a.createElement(h.a,{exact:!0,path:"/details/:id",render:function(t){return r.a.createElement(w,Object.assign({},t,{allTheIngredients:e.state.listOfAllIngredients,MyIngredients:e.state.myListOfIngredients,getMyIngredients:e.getMyIngredients,ready:e.state.ready,mylistShowing:e.state.mylistShowing,getData:e.getAllIngredients,theUser:e.state.currentlyLoggedIn}))}}),r.a.createElement(h.a,{exact:!0,path:"/profile",render:function(t){return r.a.createElement(j,Object.assign({},t,{getMyCocktail:e.getMyCocktails,AlltheCocktails:e.state.ListOfCocktails,myCocktailReady:e.state.myCocktailReady,theUser:e.state.currentlyLoggedIn}))}}),r.a.createElement(h.a,{exact:!0,path:"/createCocktail",render:function(t){return r.a.createElement(S,Object.assign({},t,{getMyCocktail:e.getMyCocktails,theUser:e.state.currentlyLoggedIn}))}}),r.a.createElement(h.a,{exact:!0,path:"/editCocktail/:id",render:function(t){return r.a.createElement(N,Object.assign({},t,{thecocktails:e.state.ListOfCocktails,getMyCocktail:e.getMyCocktails,theUser:e.state.currentlyLoggedIn}))}}),r.a.createElement(h.a,{exact:!0,path:"/firstpage",render:function(e){return r.a.createElement(x,e)}}),r.a.createElement(h.a,{exact:!0,path:"/recipedetails/:id",render:function(t){return r.a.createElement(M,Object.assign({},t,{thecocktails:e.state.ListOfCocktails}))}})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y.a,null,r.a.createElement(h.a,{path:"/",component:U})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.484c189c.chunk.js.map