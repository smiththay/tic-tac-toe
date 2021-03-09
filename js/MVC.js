// create my objects, functions, and global vars

class Model {
    constructor(){
      this.controller = null;
      this.counter = 0;
    }
    setController (c){
      this.controller = c;
    }
    setState(s){
      this.counter = s;
      this.onSetState();
    }
    getState(){
      return this.counter;
    }
    onSetState(){
      this.controller.updateView();
    }
  }
  
  // View class
  class View {
    constructor (){
      this.m = null;
      this.increment_btn = document.getElementById("increment_btn");
      this.decrement_btn = document.getElementById("decrement_btn");
      this.counter_txt = document.getElementById("counter_txt");
    }
    
    setModel (model){
      this.m = model;
    }
    
    render (){
      this.counter_txt.textContent = this.getState();
    }
    
    getState(){
      var c = this.m.getState();
      return c;
    }
  }
  
  class Controller {
    constructor(model, view){
      this.v = view;
      this.m = model;
    }
    
    init(){
      this.v.increment_btn.addEventListener('click', this.incrementCounter.bind(this));
      this.v.decrement_btn.addEventListener('click', this.decrementCounter.bind(this));
    }
    
    incrementCounter(){
      this.m.setState(this.m.counter+1);
    }
    
    decrementCounter(){
      this.m.setState(this.m.counter-1);
    }
    
    updateView(){
      this.v.render();
    }
    
  }
  
  class App {
    constructor (){
      this.m = new Model();
      this.v = new View();
      this.v.setModel(this.m);
      this.c = new Controller(this.m, this.v);
      this.m.setController(this.c);
    }
    
    init(){
      console.log("starting the app");
      this.c.init();
    }
  }
  
  
  function init (){
      // instantiate and init the Model, View, and Controller
  
      // 1 - page loads, run init on the app
      let a = new App();
      
      a.init();
  
      console.log(a);
  
  }
  