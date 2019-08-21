import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./header"
import IntegrationChecker from "./integration_checker"
import SavedIntegrations from "./saved_integrations"
import DisplayEmbedForm from "./display_embed_form"
import DisplayWidget from "./display_widget"

const App = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Header />
				<div className="p-3">
					<Route exact path="/" component={IntegrationChecker} />
					<Route path="/saved" component={SavedIntegrations} />
					<Route
						path="/form"
						render={props => <DisplayEmbedForm {...props} />}
					/>
					<Route
						path="/widget"
						render={props => <DisplayWidget {...props} />}
					/>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
