import React from "react";
import Project from "../layouts/Project";
import {
	projects,
	miscellaneous,
	section3Title,
	section4Title,
	section5Title,
	full_stack,
} from "../../profile";

const Works = () => {
	return (
		<>
			<div data-aos="zoom-in-up" data-aos-once="true" className="third">
				<>
					<div className="pp-head-line mx-auto text-center">
						<h1 id="Projects" className="red-line pp-head">
							{section3Title}
						</h1>
					</div>
				</>
				<div className="row">
					{projects &&
						projects.map((x) => (
							<Project
								id={x.id}
								url={x.url}
								name={x.name}
								skills={x.skills}
								github={x.github}
							/>
						))}
				</div>
			</div>

			<div className="third">
				<>
					<div className="pp-head-line mx-auto text-center">
						<h1 id="Projects" className="red-line pp-head">
							{section4Title}
						</h1>
					</div>
				</>
				<div className="row">
					{miscellaneous &&
						miscellaneous.map((x) => (
							<Project
								id={x.id}
								url={x.url}
								name={x.name}
								skills={x.skills}
								github={x.github}
							/>
						))}
				</div>
			</div>
			<div className="third">
				<>
					<div className="pp-head-line mx-auto text-center">
						<h1 id="Projects" className="red-line pp-head">
							{section5Title}
						</h1>
					</div>
				</>
				<div className="row">
					{full_stack &&
						full_stack.map((x) => (
							<Project
								id={x.id}
								url={x.url}
								name={x.name}
								skills={x.skills}
								github={x.github}
							/>
						))}
				</div>
			</div>
		</>
	);
};

export default Works;
