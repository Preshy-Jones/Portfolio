import React from "react";

const Project = ({ id, name, url, skills, github }) => {
	return (
		<div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
			<div className="image-project">
				<div className={`img-pro ${id}`}></div>
			</div>
			<div className="flexunique">
				<div>
					{" "}
					<a
						title={url}
						className="project-name"
						rel="noopener noreferrer"
						target="_blank"
						href={url}>
						<h2>{name}</h2>
					</a>
					{skills && <h3>{skills.map((skill) => skill)}</h3>}
				</div>
				<a className="flexself" href={github}>
					{" "}
					<i class=" fab fa-github"></i>
				</a>
			</div>
		</div>
	);
};

export default Project;
