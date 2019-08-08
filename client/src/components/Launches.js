import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
	query LaunchesQuery {
		launches {
			flight_number
			mission_name
			launch_date_local
			launch_success
		}
	}
`

export class Launches extends Component{
	render(){
		return(
				<React.Fragment>
					<h4 className="display-6 my-6">Launches</h4>

					<Query query={LAUNCHES_QUERY}>
						{
							({loading,error,data}) => {
								if(loading) return <h4>Loading...</h4>
								if(error) console.log(error);
								console.log(data);
								return <React.Fragment>
									{
										data.launches.map(launch=>(

												<LaunchItem key={launch.flight_number} launch={launch}/>

											))
									}
								</React.Fragment>
							}
						}
					</Query>
				</React.Fragment>
			)
	}
}

 export default Launches;

// import React, { Component } from 'react';

// export class Launches extends Component{
// 	render(){
// 		return(
// 				<div>

// 				</div>
// 			)
// 	}
// }

// export default Launches;