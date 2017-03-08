
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';



    // APPS COMPONENTS
    import SendEmailSimple from "./SendEmailSimple.jsx";


    // STYLES
    import styles from "./SendEmailSimple.styles.js";

	import users from "./SendEmail.dataMocks.js";

    export default class  SendEmailSimpleContainer extends Component {

    constructor(props){
        super(props);
        //console.log(props.theme)
        
        this.state = {
            canTest : false,
			users : users,
            styles : styles(props.theme)
        }

    }

    /*_______________________________________________________________________________________________________________
    _________________________________________________________________________________________________________________  
    _____________________________________________COMPONENT LIFE CYCLE_________________________________________________
    _________________________________________________________________________________________________________________*/


        componentWillMount() { 

        }

        componentDidMount(){

        }

        componentWillReceiveProps(newProps) {
            this.setState({
                styles : styles(newProps.theme)
            })

        }

        /*shouldComponentUpdate(){

        }*/

        componentDidUpdate(){

        }

        componentWillUnmount(){

        }	


    /*_______________________________________________________________________________________________________________
    _________________________________________________________________________________________________________________  
    _____________________________________________COMPONENT METHODS___________________________________________________
    _________________________________________________________________________________________________________________*/

        toggleStateBool(key){
            this.setState({
                [key] : !this.state[key]
            })
        }

        test(){

        }


    /*_________________________________________________________________________________________________________________
    ___________________________________________________________________________________________________________________ 
    _____________________________________________COMPONENT VIEWS_______________________________________________________
    _________________________________________________________________________________________________________________*/



    /*_________________________________________________________________________________________________________________
    ___________________________________________________________________________________________________________________  
    _____________________________________________COMPONENT TEMPLATE____________________________________________________
    _________________________________________________________________________________________________________________*/
        render() {
            return  (
                <div style={{width:"auto", height:"auto"}}>
                    {this.state.users ? 
                        <SendEmailSimple 
                            {...this.props}
                            users = {this.state.users}
                            styles={this.state.styles}
                        />:
                        <div>loading</div>
                    }
                </div>
            );
        }
    }
    