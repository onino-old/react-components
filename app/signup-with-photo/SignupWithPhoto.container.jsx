
import React, { Component } from 'react';
import SignupWithPhoto from "./SignupWithPhoto.jsx";
import getStyles from "./SignupWithPhoto.styles.js";

import styles from "./SignupWithPhoto.styles.js"

export default class  SignupWithPhotoContainer extends Component {
	
constructor(props){
	super(props);
	
	this.state = {
		canTest : false,
		styles : styles(props.stylesOptions),
	}
}

/*_______________________________________________________________________________________________________________
_________________________________________________________________________________________________________________  
_____________________________________________COMPONENT LIFE TIME_________________________________________________
_________________________________________________________________________________________________________________*/

	componentDidMount(){
		if(!Meteor.userId()){
			console.log('hey')
			browserHistory.push('login')
		}
	}

	/*componentWillReceiveProps(newProps) {

	}

	shouldComponentUpdate(){

	}

	componentDidUpdate(){

	}

	componentWillUnmount(){

	}*/	


/*_______________________________________________________________________________________________________________
_________________________________________________________________________________________________________________  
_____________________________________________COMPONENT METHODS___________________________________________________
_________________________________________________________________________________________________________________*/

/*	toggleStateBool(key){
		this.setState({
			[key] : !this.state[key]
		})
	}

	showMessage(message){
		this.setState({
			message : message,
			showMessage : true
		})
	}

	test(){

	}*/


/*_________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________ 
_____________________________________________COMPONENT VIEWS_______________________________________________________
_________________________________________________________________________________________________________________*/



/*_________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________  
_____________________________________________COMPONENT TEMPLATE____________________________________________________
_________________________________________________________________________________________________________________*/

	render() {
		const style=this.props.style || {width:"100%", height:"100%"}
		return  (
			<div style={style}>
				<SignupWithPhoto 
					{...this.props}
					styles={this.state.styles}
				/>
			</div>
		);
	}
}
    