export function KickLogo() {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", "56");
	svg.setAttribute("height", "20");
	svg.setAttribute("viewBox", "0 0 56 20");
	svg.setAttribute("fill", "none");

	const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path.setAttribute(
		"d",
		"M1 0.5H0.5V1V19V19.5H1H6.78572H7.28572V19V15.5H8.21431V17V17.5H8.71431H10.1428V19V19.5H10.6428H16.4285H16.9285V19V13V12.5H16.4285H15V11V10.5H14.5H13.0715V9.50002H14.5H15V9.00002V7.5H16.4285H16.9285V7V1V0.5H16.4285H10.6428H10.1428V1V2.5H8.71431H8.21431V3V4.5H7.28572V1V0.5H6.78572H1ZM39.5715 0.5H39.0715V1V19V19.5H39.5715H45.3572H45.8572V19V15.5H46.7857V17V17.5H47.2857H48.7143V19V19.5H49.2143H55H55.5V19V13V12.5H55H53.5715V11V10.5H53.0715H51.6428V9.50002H53.0715H53.5715V9.00002V7.5H55H55.5V7V1V0.5H55H49.2143H48.7143V1V2.5H47.2857H46.7857V3V4.5H45.8572V1V0.5H45.3572H39.5715ZM18.3572 0.5H17.8572V1V19V19.5H18.3572H24.1428H24.6428V19V1V0.5H24.1428H18.3572ZM28 0.5H27.5V1V2.5H26.0715H25.5715V3V17V17.5H26.0715H27.5V19V19.5H28H31.8572H37.6428H38.1428V19V13V12.5H37.6428H32.3572V7.5H37.6428H38.1428V7V1V0.5H37.6428H31.8572H28Z"
	);
	path.setAttribute("fill", "#53FC18");
	path.setAttribute("stroke", "#18181B");

	svg.appendChild(path);
	return svg;
}
