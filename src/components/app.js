import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./header"
import IntegrationChecker from "./integration_checker"
import SavedIntegrations from "./saved_integrations"

const App = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Header />
				<Route exact path="/" component={IntegrationChecker} />
				<Route path="/saved" component={SavedIntegrations} test="testing" />
			</div>
		</BrowserRouter>
	)
}

export default App
