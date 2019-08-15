import React from "react"
import { Helmet } from "react-helmet"
import { string } from "prop-types"

import ResourcesBadge from "../assets/svg/resources.svg"

DisplayWidget.propTypes = {
	data: string.isRequired,
}

export default function DisplayWidget(props) {
	const { data, name } = props
	const dataArray = data.split("</div>")

	const isolateScript = dataArray[dataArray.length - 1]
		.replace('<script type="text/javascript">', "")
		.replace("</script>", "")

	return (
		<div className="integration-details">
			<Helmet
				script={[
					{
						type: "text/javascript",
						innerHTML: isolateScript,
					},
				]}
			/>

			<div className="d-f ai-c jc-fs mb-2">
				<ResourcesBadge />
				<h2>{name}</h2>
			</div>

			<div id="resources_calendar_widget" className="styled">
				<div className="loader">Loading...</div>
			</div>
		</div>
	)
}
