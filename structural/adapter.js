// The Adapter pretends to be a round peg, with a radius equal to a half
// of the square’s width (in other words, the radius of the smallest circle that can accommodate the square peg).

// this is the hole, this is the square peg, this is the adapter
class Hole {
  constructor(radius) {
    this.radius = radius;
    this.getRadius = function () {
      return this.radius;
    };
    this.fits = function (peg) {
      return this.getRadius() >= peg.getRadius();
    };
  }
}

class RoundPeg {
  constructor(radius) {
    this.radius = radius;
  }
  getRadius() {
    return this.radius;
  }
}

class SquarePeg {
  constructor(width) {
    this.getWidth = function () {
      return width;
    };
  }
}

class SquarePegAdapter extends RoundPeg {
  constructor(peg, radius) {
    super((peg.getWidth() * Math.sqrt(2)) / 2);
  }
}
const hole = new Hole(5);
const rpeg = new RoundPeg(5);

const smallSqpeg = new SquarePeg(5);
const largeSqpeg = new SquarePeg(10);
// console.log(hole.fits(smallSqpeg));

const smallAdapter = new SquarePegAdapter(smallSqpeg);
console.log(hole.fits(smallAdapter));
const adapter = new SquarePegAdapter(largeSqpeg);
console.log(adapter.getRadius());
console.log(hole.fits(adapter));
