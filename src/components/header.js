import React from "react"
import Logo from "./logo"

export default function Header() {
	return (
		<header className="d-f fd-c jc-sb">
			<Logo />
			<nav className="d-f fd-c fd-r@sm ai-c@sm jc-fs jc-sb@sm px-2 py-1">
				<div className="mb-1 mb-0@sm">
					<a href="#_" className="mr-1">
						Create New
					</a>
					<a href="#_">My Saved Integrations</a>
				</div>
				<div>
					<p className="m-0">
						Logged in as: <strong>Josh Wilkerson</strong>
					</p>
				</div>
			</nav>
		</header>
	)
}
