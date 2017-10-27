import React from 'react';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';


import { Provider } from 'react-redux';
import { createStore } from 'redux';


export default class Main extends React.Component{
	 constructor(props) {
  		super(props);
	 }


	 render() {
	 	return (
		 		<div className='container-fluid'>
		 			<div className="row">
		 				<div className='col-md-3 col-lg-3 scrollable'>
		 					<login/>
		 				</div>
				 	</div>
				</div>
	 	);
	 }
}