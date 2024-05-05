import React from "react";
import CSCV from "../../assests/pdf/Christian_SheenCV.pdf";
import "../../css/css-routes/cv.css";

function CvBase() {
	return (
		<div style={{ width: "90vw", height: "80vh" }}>
			<embed
				src={CSCV}
				title="Christians Curriculum Vitae"
				type="application/pdf"
				style={{ width: "100%", height: "82vh" }}
			/>
		</div>
	);
}

export default CvBase;
