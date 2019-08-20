import React from "react"
import { Link } from "react-router-dom"
import { testData } from "./test_data"

import GivingBadge from "../assets/svg/giving.svg"
import PeopleBadge from "../assets/svg/people.svg"
import ResourcesBadge from "../assets/svg/resources.svg"
import Close from "../assets/svg/close.svg"

export default function SavedIntegrations() {
	return (
		<div className="px-4 py-2">
			<h1>My Saved Integrations</h1>
			<div className="pl-2">
				{testData.map(data => {
					return (
						<div className="integration-link" key={data.id}>
							<Link
								to={{
									pathname: data.path,
									state: { hasInheritedProps: false, app: data.app },
								}}
								className="app"
							>
								<span className="icon">
									{data.app == "giving" && <GivingBadge />}
									{data.app == "people" && <PeopleBadge />}
									{data.app == "resources" && <ResourcesBadge />}
								</span>
								{data.name}
							</Link>
							<a href="#_" className="delete">
								<Close />
							</a>
						</div>
					)
				})}
			</div>
		</div>
	)
}
