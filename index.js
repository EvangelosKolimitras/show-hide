
class Toggler extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            title: "Show - Hide",
            btnStatus: false
        }
        this.toggler = this.toggler.bind(this)
    }

    toggler() {
        this.setState( prevState => ({
            btnStatus : !prevState.btnStatus
        }))
        console.log(this.state.btnStatus);
    }

    render() {

        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.toggler} >{this.state.btnStatus ? <span>Show Text</span> : <span>Hide Text</span> }</button>
                {
                    this.state.btnStatus ?
                    null :
                    <p>This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text.This is a sample text. </p>

                }
            </div>
        )
    }
}



ReactDOM.render( <Toggler/>, document.getElementById('App'))
