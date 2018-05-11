function show(state) {
	'use strict';
	/* document.getElementById('popup-item').style.display = state;	 */	
	/* document.getElementById('wrap').style.display = state; */
  document.getElementsByClassName('wrap')[0].style.display = state;
  document.getElementsByClassName('popup-item')[0].style.display = state;
}