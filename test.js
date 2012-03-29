var Point = function (x, y) {
  this.x = x || 0;
  this.y = y || 0;
}


var Line = function (a, b, c) {
	if (! (this instanceof Line)){
		return new Line(a, b, c);
	} //evitare che l'utente debba per forza usare new

	this.a = a;
	this.b = b;
	this.c = c;
}

Point.prototype.getDistanceFromLine = function(line){
	return ((line.a*this.x) + (line.b*this.y) + (line.c)) / (Math.sqrt(Math.pow(line.a)) + (Math.pow(line.b)));
}

Point.prototype.getDistance = function (x) {
	if (x instanceof Point){
		//return this.getDistanceFromPoint(f);
	} 

	if (x instanceof Line){
		return this.getDistanceFromLine(x);
	}

	throw new Error('x is not a Point nor a Line');

}

var Triangle = function (p1, p2, p3) {
 // this.p1 = p1;
 // this.p2 = p2;
 // this.p3 = p3;

  this.points = [p1, p2, p3];

 // this.l1 = p2.getDistance(p3);
 // this.l2 = p3.getDistance(p1);
 // this.l3 = p1.getDistance(p2);
}

Triangle.prototype.above = function(line){
	return this.points.every(function(point) {
 		return point.getDistance(line) > 0;})
};

Triangle.prototype.below = function(line){
	//return ((this.p1.getDistance(line) < 0) && (this.p2.getDistance(line) < 0) && (this.p3.getDistance(line) < 0));
	return this.points.every(function(point) {
 		return point.getDistance(line) < 0;})
};

Triangle.prototype.intercect = function(line){
	return (! (this.below(line) && (this.above(line)));
};


var Quad = function (p1, p2, p3, p4){
	this.points = [p1, p2, p3, p4];
};

Quad.prototype.above = Triangle.prototype.above;

Quad.prototype.below = Triangle.prototype.below;

Quad.prototype.intercect = Triangle.prototype.intercect;



