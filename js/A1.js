(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("Egh+gAMUAoJAAzAb0gAz");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Line, new cjs.Rectangle(-218.9,-2.8,438,5.6), null);


(lib.L1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAP4IAA/v");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.L1, new cjs.Rectangle(-1.5,-103,3,206.1), null);


(lib.E2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("ABVAAQAAAjgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAig");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.E2, new cjs.Rectangle(-10,-10,20,20), null);


(lib.E1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("ABVAAQAAAjgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAig");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.E1, new cjs.Rectangle(-10,-10,20,20), null);


// stage content:
(lib.A1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.L1();
	this.instance.parent = this;
	this.instance.setTransform(258.2,199.6);
	this.instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({alpha:0,visible:true},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(14));

	// L1_L
	this.instance_1 = new lib.L1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(133.1,198.5);
	this.instance_1.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({alpha:0,visible:true},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(25));

	// E2_L
	this.instance_2 = new lib.E2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(258.7,303.1);
	this.instance_2.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({scaleX:0.06,scaleY:0.06,visible:true},0).wait(1).to({scaleX:0.15,scaleY:0.15},0).wait(1).to({scaleX:0.25,scaleY:0.25,y:303.2},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:303.3},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:303.4},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:303.5},0).wait(1).to({scaleX:0.62,scaleY:0.62,y:303.6},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:303.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:303.8},0).wait(1).to({scaleX:1,scaleY:1,y:303.9},0).wait(44));

	// E1_L
	this.instance_3 = new lib.E1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(133.1,300.1);
	this.instance_3.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({regX:13.6,regY:13.6,scaleX:0.06,scaleY:0.06,x:133.9,y:300.9,visible:true},0).wait(1).to({regX:0,regY:0,scaleX:0.14,scaleY:0.14,x:133.1,y:300.1},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:133.2,y:300.2},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:133.3,y:300.3},0).wait(1).to({scaleX:0.37,scaleY:0.37},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:133.4,y:300.4},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:133.5,y:300.5},0).wait(1).to({scaleX:0.61,scaleY:0.61},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:133.6,y:300.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:133.7,y:300.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:133.8,y:300.8},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:1,scaleY:1,x:133.9,y:300.9},0).wait(49));

	// Line_L
	this.instance_4 = new lib.Line();
	this.instance_4.parent = this;
	this.instance_4.setTransform(258.7,299.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:1},0).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(314.7,295.5,438,217.6);
// library properties:
lib.properties = {
	id: '0E73EEBA566F454BB4E7C6F61BDF8800',
	width: 550,
	height: 400,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0E73EEBA566F454BB4E7C6F61BDF8800'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;