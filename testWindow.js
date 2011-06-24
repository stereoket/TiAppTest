var t = {
	init: function(){
		t.win2 = Ti.UI.currentWindow;
		t.win2.exitOnClose = true;
		t.win2.backgroundColor = "#000";
		Ti.API.debug('Using an '+Ti.Platform.osname+' device');				
		// set scroll view 
		var newHeight = Ti.Platform.displayCaps.platformHeight - (20* (Ti.Platform.displayCaps.platformHeight/100));
		
		t.sview = Titanium.UI.createScrollView({
		    contentWidth:'auto',
		    contentHeight:'auto',
			borderRadius:10,
			height: newHeight,
			backgroundColor: '#000',
		    top:0,
		    showVerticalScrollIndicator:true
		});
		t.view = Ti.UI.createView({
		    backgroundColor:'#336699',
		    borderRadius:10,
		    width: Ti.Platform.displayCaps.platformWidth,
			height: 1500,
		    top:10,
			layout: 'vertical'
		});
		
		
		t.sview.add(t.view);
		t.win2.add(t.sview);
	},
	printMessage: function(message, height){
		Ti.API.info('Print Message to screen');
		if(height == null) height = 25;
		if(Ti.Platform.displayCaps.platformWidth > 340) {
			var fSize = 25;
			var hAdj = 25;
		} else {
			fSize = 11;
			hAdj = 0;
		}
		var printLabel = Titanium.UI.createLabel({
			text:message,
			color:'#fff',
			top:5,
			left: 10,
			height:height+ hAdj,
			width:'90%',
			zIndex:10,
			font:{fontSize: fSize}
		});
		t.view.add(printLabel);
	}
}
t.init();
t.printMessage('***** TEST *****');
// Write ytour test here or within the class above. Make sure to t.printMessage("TEXT"); at breakpoints within your test. 
