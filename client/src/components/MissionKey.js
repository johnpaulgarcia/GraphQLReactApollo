import React, { Component } from 'react';

export default function MissionKey(){
	return <div className="my-3">
		<p>
			<span class="px-3 mr-3 bg-success" /> = Success
		</p>

		<p>
			<span class="px-3 mr-3 bg-danger" /> = Fail
		</p>
	</div>
}
