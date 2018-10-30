export 	const UrlRutes = (latA, lngA) => {
	const url= `https://image.maps.api.here.com/mia/1.6/routing?app_id=F2NFi480TAeaCU2fjGmC&app_code=DvU41ZrLHlIVBDtOruPEqg&waypoint0=${latA},${lngA}&waypoint1=19.451,-99.166&poix0=${latA},${lngA};00a3f2;00a3f2;11;.&poix1=19.451,-99.166;white;white;11;.&lc=1652B4&lw=6&t=0&ppi=320&w=250&h=300`;

	return url;
}

export const fetchGeocode = (number,street,cp) => {
	const urlGeocode = `https://geocoder.api.here.com/6.2/geocode.json?app_id=F2NFi480TAeaCU2fjGmC&app_code=DvU41ZrLHlIVBDtOruPEqg&searchtext=${number}+${street}+${cp}+mexico+city`;

	return urlGeocode;
};

export const newWaypoint = (latB, lngB) => {
	const urlNewWaypoint = `https://image.maps.api.here.com/mia/1.6/mapview?app_id=F2NFi480TAeaCU2fjGmC&app_code=DvU41ZrLHlIVBDtOruPEqg&lat=${latB}&lon=${lngB}&vt=0&z=14&w=300&h=300`;
	return urlNewWaypoint;
}