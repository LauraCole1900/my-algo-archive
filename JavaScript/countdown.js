// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

const countdown = function (num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
};

countdown(10);
countdown(5);
countdown(23);
countdown(42);
