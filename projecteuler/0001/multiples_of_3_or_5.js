var sum_multiples_of_3_and_5_brute_force = function(n) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
};

exports.sum_multiples_of_3_and_5_brute_force =
    sum_multiples_of_3_and_5_brute_force;
