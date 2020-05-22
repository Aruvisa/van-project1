import React, { Component } from 'react';

class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            username : '',
            age: '',
            pekerjaan:'',
        };
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});

    }
    render() { 
        return ( 
            <form>
                <h1>Halo Nama ku adalah {this.state.username} dan umur ku adalah {this.state.age} dan pekerjaan ku adalah {this.state.pekerjaan}</h1>
                <p>Siapa nama mu ?</p>
                <input 
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>Berapa umur mu ?</p>
                <input 
                    type='number'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                <p>Apa pekerjaan mu ?</p>
                <input 
                    type='text'
                    name='pekerjaan'
                    onChange={this.myChangeHandler}
                />
            </form>
         );
    }
}
 
export default App2;
