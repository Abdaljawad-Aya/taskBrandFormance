// admixAPI.on('load', function(){
// 	function prevent(_event) {
// 		if (_event) {
// 			_event.returnValue = false;
// 			_event.cancelBubble = true;
// 			if (_event.preventDefault) {
// 				_event.preventDefault();
// 			}
// 			if (_event.stopPropagation) {
// 				_event.stopPropagation();
// 			}
// 		}
// 	}
// 	admixAPI.init({
// 		'resize' : [
// 			{
// 				'name': 'state-1',
// 				'fixed' : {
// 						'vertical':"center",
// 						'horizontal':'center'
// 					},
// 				'width': '100%',
// 				'height': '100%'
// 			}
// 		]
// 	});
// 	function $(id){
// 		return document.getElementById(id);
// 	}
// 	var close = $('close');
// 	close.onclick = function(_event){
// 		prevent(_event);
// 		admixAPI.close();
// 	};
// 	document.getElementById("container").onclick = function(_event){
// 		prevent(_event);
// 		admixAPI.click();
// 		admixAPI.close(true);
// 	};
// 	document.body.onselectstart = function() {
// 		return false;
// 	}
// });