var IntepretiveDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.oldStep = Dancer.prototype.step;

BlinkyDancer.prototype.step = function () {
  this.oldStep();
  this.$node.toggle();
};