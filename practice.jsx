//   create-a-controlled-input
class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      // Change code below this line
      this.handleChange = this.handleChange.bind(this)
      // Change code above this line
    }
    // Change code below this line
    handleChange(event) {
      this.setState({
    input: event.target.value
  });
  
    }
    // Change code above this line
    render() {
      return (
        <div>
          { /* Change code below this line */}
          <input value = {this.state.input} onChange = {this.handleChange}></input>
          { /* Change code above this line */}
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };

//   create-a-controlled-form
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      // Change code below this line
          event.preventDefault()
          this.setState({
            submit: this.state.input
          });
      // Change code above this line
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            {/* Change code below this line */}
            <input value = {this.state.input} onChange = {this.handleChange}></input>
            {/* Change code above this line */}
            <button type='submit'>Submit!</button>
          </form>
          {/* Change code below this line */}
          <h1>{this.state.submit}</h1>
          {/* Change code above this line */}
        </div>
      );
    }
  }

//   Pass State as Props to Child Components
class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'CamperBot'
      }
    }
    render() {
      return (
         <div>
           {/* Change code below this line */}
           <Navbar name = {this.state.name}/>
           {/* Change code above this line */}
         </div>
      );
    }
  };
  
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
      <div>
        {/* Change code below this line */}
        <h1>Hello, my name is: {this.props.name}</h1>
        {/* Change code above this line */}
      </div>
      );
    }
  };

//   Pass a Callback as Props
class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
         <div>
          { /* Change code below this line */ }
          <GetInput input = {this.state.inputValue} handleChange = {this.handleChange}/>
          <RenderInput input = {this.state.inputValue} />
          { /* Change code above this line */ }
         </div>
      );
    }
  };
  
  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };
  
  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };


  // Use the Lifecycle Method componentDidMount
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
    render() {
      return (
        <div>
          {/* Change code below this line */}
          <h1>Active Users: {this.state.activeUsers} </h1>
          {/* Change code above this line */}
        </div>
      );
    }
  }

  // Add Event Listeners

  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // Change code below this line
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress)
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress)
    }
    // Change code above this line
    handleEnter() {
      this.setState((state) => ({
        message: state.message + 'You pressed the enter key! '
      }));
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  };


  // Optimize Re-Renders with shouldComponentUpdate

  class OnlyEvens extends React.Component {
    constructor(props) {
      super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Should I update?');
      // Change code below this line
      if (nextProps.value % 2 === 0){
        console.log(nextProps.value);
        return true;
      } else{
        return false;
      }
      
      // Change code above this line
    }
    componentDidUpdate() {
      console.log('Component re-rendered.');
    }
    render() {
      return <h1>{this.props.value}</h1>;
    }
  }
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
      this.addValue = this.addValue.bind(this);
    }
    addValue() {
      this.setState(state => ({
        value: state.value + 1
      }));
    }
    render() {
      return (
        <div>
          <button onClick={this.addValue}>Add</button>
          <OnlyEvens value={this.state.value} />
        </div>
      );
    }
  }