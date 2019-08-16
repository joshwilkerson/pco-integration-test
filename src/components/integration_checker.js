import React from "react"
import DisplayEmbedForm from "./display_embed_form"
import DisplayWidget from "./display_widget"

export default class IntegrationChecker extends React.Component {
	state = {
		name: "",
		data: "",
		app: "",
		error: false,
	}

	render() {
		const { name, data, app, error } = this.state
		const dataArray = data.split("/")

		const handleInputChange = e => {
			this.setState({ data: e.target.value })
		}

		const handleUpdateName = e => {
			this.setState({ name: e.target.value })
		}

		const handleClear = e => {
			e.preventDefault()
			this.setState({
				name: "",
				app: "",
				data: "",
				error: false,
			})
		}

		const setDataType = () => {
			if (dataArray[dataArray.length - 1].includes("giving")) {
				this.setState({ app: "giving", error: false })
			} else if (dataArray[dataArray.length - 3] === "people") {
				this.setState({ app: "people", error: false })
			} else if (dataArray[dataArray.length - 4].includes("resources")) {
				this.setState({ app: "resources", error: false })
			} else {
				this.setState({ app: "", error: true })
			}
		}

		return (
			<div className="d-f fd-c p-2">
				{app == "" && (
					<div className="mb-2">
						<div className="d-f fd-c mb-2">
							<label htmlFor="name" className="mb-4p">
								Name
							</label>
							<input
								name="name"
								value={name}
								onChange={handleUpdateName}
								type="text"
							/>
						</div>

						<div className="d-f fd-c">
							<label htmlFor="data" className="mb-4p">
								Paste Code Here
							</label>
							<textarea
								name="data"
								rows="8"
								cols="30"
								value={data}
								onChange={handleInputChange}
							/>

							{error && (
								<div className="error mt-2 px-2 py-1 d-ib">invalid format</div>
							)}
						</div>

						<button
							onClick={setDataType}
							disabled={!data}
							className="mt-2 btn btn--primary"
						>
							Show Integration
						</button>
					</div>
				)}

				{(app === "giving" || app === "people") && (
					<DisplayEmbedForm data={data} app={app} name={name} />
				)}

				{app === "resources" && <DisplayWidget data={data} name={name} />}

				{app && (
					<div className="d-b mt-2">
						<button className="btn btn--primary mr-1">Save Integration</button>
						<button className="btn btn--secondary" onClick={handleClear}>
							Start Over
						</button>
					</div>
				)}
			</div>
		)
	}
}
