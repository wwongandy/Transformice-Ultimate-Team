# How Chemistry is Calculated

Before calculating the overall chemistry, there are 2 chemistry components to consider.

#### 1. Links

This is the chemistry between a card and another in the draft. This is determined by the `Main Server` (MSRV) and `Living Continent` (LVCT) attributes between them.

*This is defined by the color of the `link` between the two cards. The number value represents the different colors in code.*

* *Green* (**2**) - Match in both MSRV and LVCT
* *Yellow* (**1**) - Match in one of them
* *Red* (**0**) - Zero matches

#### 2. Card Chemistry

This is the total chemistry a card has. This is aggregated by adding all of the links the card has and multiplied with 1.25. The maximum card chemistry for each card is 10.

e.g. A card with 2 Green, 1 Yellow and Red links has a total chemistry value of `(2*2 + 1*1 + 1*0) * 1.25 = 6.25 => 6`.

#### 3. Overall Chemistry

The overall chemistry is calculated by adding up all of the card chemistries after each has been multiplied with 2. The maximum overall chemistry a draft has is 100.

e.g. A draft with 5 cards with the following card chemistries; 6.25, 7.5, 10, 2.5, 5 has an overall chemistry value of `(6.5*2 + 7.5*2 + 10*2 + 2.5*2 + 5*2) = 63`.