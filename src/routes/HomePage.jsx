import React, { useState } from "react";
import "../css/css-routes/homePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { CHRIS_JSON } from "../utils/constants";

function HomePage() {
	const itemsPerPage = 2; // Number of items to display per page
	const [currentPage, setCurrentPage] = useState(0);

	const handleClickNext = () => {
		setCurrentPage(currentPage + 1);
	};

	const handleClickPrev = () => {
		setCurrentPage(currentPage - 1);
	};

	const renderWorkItems = () => {
		const startIndex = currentPage * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return Work.slice(startIndex, endIndex).map(
			({ Position, Company, Location, BriefDesc, BulletPoints }, index) => (
				<div key={index} className="job-card">
					<div>Position: {Position}</div>
					<div>Company: {Company}</div>
					<div>Location: {Location}</div>
					<div>Description: {BriefDesc}</div>
					<div className="bullet-points">
						{BulletPoints.map((el, bulletIndex) => (
							<div key={bulletIndex} className="bp-container">
								<FontAwesomeIcon size={"xs"} icon={faCircle} />
								<div>{el}</div>
							</div>
						))}
					</div>
				</div>
			)
		);
	};

	const {
		Email,
		Phone,
		Location,
		GitHub,
		LinkedIn,
		Intro,
		Work,
		Certifications,
	} = CHRIS_JSON;
	const formatIntro = (str) => {
		let formatted = str
			.split(" ")
			.map((el) => {
				return el[el.length - 1] === "." ? (el += "\n") : el;
			})
			.join(" ");
		console.log(formatted);
		return formatted;
	};

	return (
		<>
			<div className="hp">
				<div className="hp-section-one">
					<div className="contact-card">
						<div className="card-title">Contact</div>
						<div>E-mail: {Email}</div>
						<div>Phone: {Phone}</div>
						<div>Location: {Location}</div>
						<div>GitHub: {GitHub}</div>
						<div>LinkedIn: {LinkedIn}</div>
					</div>
					<div className="desc-card">
						<div className="card-title">
							Software Engineer: Front-End Developer
						</div>
						<div className="intro-card">{formatIntro(Intro)}</div>
					</div>
				</div>
				<div className="hp-section-two">
					<div className="wex-header">
						<button disabled={currentPage === 0} onClick={handleClickPrev}>
							Previous
						</button>
						<div>Work Experience</div>
						<button
							disabled={
								currentPage >= Math.ceil(Work.length / itemsPerPage) - 1
							}
							onClick={handleClickNext}
						>
							Next
						</button>
					</div>
					<div className="work-container">{renderWorkItems()}</div>
				</div>
				{/*
				<div>
					<h4>Work Experience</h4>
					<div>
						{Work.map(
							({ Position, Company, Location, BriefDesc, BulletPoints }) => {
								return (
									<div className="job-card">
										<div>Position: {Position}</div>
										<div>Company: {Company}</div>
										<div>Location: {Location}</div>
										<div>Location: {BriefDesc}</div>
										<div className="bullet-points">
											{BulletPoints.map((el) => {
												return <div>{el}</div>;
											})}
										</div>
									</div>
								);
							}
						)}
					</div>
				</div>
				<div>
					<h4>Education + Certifications</h4>
					<div>
						{Certifications.map(
							({
								Title,
								Institution,
								State,
								DateStart,
								DateEnd,
								Description,
								Technologies,
							}) => {
								return (
									<div className="cert-card">
										<div>{Title}</div>
										<div>{Institution}</div>
										<div>{State}</div>
										{Description ? <div>{Description}</div> : ""}
										<div>
											<div>{DateStart}</div>
											<div>{DateEnd}</div>
										</div>
										<div className="bullet-points">
											{Technologies.map((el) => {
												return <div>{el}</div>;
											})}
										</div>
									</div>
								);
							}
						)}
					</div>
				</div>
				<div>
					<h4>Languages</h4>
        </div>
          */}
			</div>
		</>
	);
}

export default HomePage;
