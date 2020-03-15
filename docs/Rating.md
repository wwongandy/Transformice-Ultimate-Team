# How Rating is Calculated

This rating calculation algorithm is derived following this [FIFA 19 Squad Rating Guide](https://www.fifauteam.com/fifa-19-squad-rating-guide/). Below are the steps for calculating the overall rating.

#### 1. Average Rating

The average rating is calculated by summing up all of the draft's cards' individual ratings, divided by 5. As the maximum individual rating of each card is 100, the average rating maximum is also 100.

e.g. A draft with card ratings; 78, 71, 84, 77, 83 has an average rating of `(78 + 71 + 84 + 77 + 83) / 5 = 78.6`.

#### 2. Correction Factor

The correction factor is the difference between each card's rating and the average rating. A card with equal or less than the average rating is ignored in the calculation.

e.g. A draft with the above card ratings and average rating has a correction factor of `((84-78.6) + (83-78.6)) = 9.8`

#### 3. Overall Rating

The overall rating can now be calculated. This is done by adding up the summed value from the average rating step and the correction factor, with the resultant divided by 5. The maximum overall rating is 100.

e.g. A draft with the above summed value (from the average rating) and correction factor has an overall rating of `((78 + 71 + 84 + 77 + 83) + 9.8) / 5 = 80.56 => 80`.