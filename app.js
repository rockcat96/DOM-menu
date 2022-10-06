// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Task 1.0
// Select and cache the <main>element in a variable named mainEl.

const mainEl = document.querySelector("main")


// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.

// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'

mainEl.style.backgroundColor =  'var(--main-bg)'


// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1>
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"


// Task 1.3
// Add a class of flex-ctrto mainEl.

// Hint: Element.classList API
mainEl.classList.add("flex-ctr")


// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu")


// Task 2.1
// Set the height topMenuElelement to be 100%.
topMenuEl.style.height = "100%"


// Task 2.2
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"



// Task 2.3
// Add a class of flex-aroundto topMenuEl.
topMenuEl.classList.add("flex-aroundto")

// Task 3.1
// Iterate over the entire menuLinksarray and for each "link" object:

// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the topMenuElelement.

for(menu of menuLinks){
    const newA = document.createElement("a")
    newA.innerText = menu.text
    topMenuEl.append(newA)
}

// Task 4.0
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.

const subMenuEl = document.querySelector("#sub-menu")


// Task 4.1
// Set the height subMenuElelement to be 100%.

subMenuEl.style.height = "100%"


// Task 4.2
// Set the background color of subMenuElto the value stored in the --sub-menu-bg custom property.

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"


// Task 4.3
// Add the class of flex-around to the subMenuElelement.

subMenuEl.classList.add("flex-around")

// Task 4.4
// Set the CSS positionproperty of subMenuElto the value of absolute.

subMenuEl.style.position = "absolute"

// Task 4.5
// Set the CSS topproperty of subMenuElto the value of 0.

subMenuEl.style.top =  "0"


// Task 5.1
// Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.

const topMenuLinks = document.querySelectorAll("#top-menu a")

// Declare a global showingSubMenuvariable and initialize it to false;

let showingSubMenuvariable = false

 
// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.

//5.3
topMenuEl.addEventListener("click",(event)=>{
      event.preventDefault();
      if(event.target.nodeName !== "A" ) {
      return;
      } 
      
      if(event.target.classList.contains("active")){
            event.target.classList.remove("active");
            showingSubMenuvariable = false;
            subMenuEl.style.top = "0";
            return;
          }
      
      //5.4
      for(a of topMenuLinks){
        a.classList.remove("active")
      }

      //5.5
      event.target.classList.add("active")  
      
      //5.6
      //saving link object in a variable 
      // let about = {}
      // let catalog = {}
      // let orders = {}
      // let account = {}
      let currentEventLinkObj = {}

      for (me of menuLinks){
        // if(me.text === 'about'){about = me}
        // if(me.text === 'catalog'){catalog = me}
        // if(me.text === 'orders'){orders = me}
        // if(me.text === 'account'){account = me}

        if (event.target.innerText.toLowerCase() === me.text){
          if(me.subLinks){
            currentEventLinkObj = me.subLinks
            console.log("i worked!") //comment this out later
            showingSubMenuvariable = true
          }
          else{showingSubMenuvariable = false; console.log(showingSubMenuvariable)}
        }
      }
      

      //5.8

      const buildSubMenu = (currentEvent) => {
        subMenuEl.innerText = ""
        for(arr of currentEventLinkObj){
        const newA = document.createElement("a")
        newA.setAttribute("href", arr.href)
        newA.innerText = arr.text
        subMenuEl.append(newA)
      }
      }

      //5.7

      if(showingSubMenuvariable = true){
      
        buildSubMenu(currentEventLinkObj)
        subMenuEl.style.top = "100%"} 
        
      else{subMenuEl.style.top = "0"}

})
//6.0
  subMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    if(event.target.nodeName !== "A" ) {
      return;
    }
    // console.log(event.target.innerText) 

    //6.1
    showingSubMenuvariable = false;
    subMenuEl.style.top = "0";

    //6.2
    for(a of topMenuLinks){
      a.classList.remove("active")
    }

    //6.3 
    const h1 = document.querySelector("main h1")
    h1.innerText = event.target.innerHTML

    //6.4
    if(event.target.innerText === "ABOUT"){
      mainEl.innerHTML = "<h1>about</h1>"
    }

  })