import React from 'react'

class Hello extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
            display: 'block',
            date: new Date()
        };
    }

    tick() {
        this.setState({date: new Date()});
    }


    componentDidMount() {
        this.timeID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }


    handliClick=() => {
        this.setState({
            isToggleOn: !this.state.isToggleOn,
            display: (this.state.isToggleOn ? 'block' : 'none')
        });
    }

    render() {
        return (
            <div>
                <p style={{display: this.state.display}}>
                {this.state.date.toLocaleTimeString()}
                </p>
                <button onClick={this.handliClick}>
                Click Me To Hide/Show
                </button>
            </div>
        );
    }
}


export default Hello
