// Maximum size of a draft
const DRAFT_SIZE = 5;

/**
 * Calculating the overall rating from the draft of cards.
 * Algorithm as defined in /docs/Rating.md
 */
function Rating(draft) {

  // 1. Average Rating
  let summedRatings = 0;
  draft.cards.forEach(function(card) {
    summedRatings += card.individualRating;
  });

  const averageRating = summedRatings / DRAFT_SIZE;
  
  // 2. Correction Factor
  let correctionFactor = 0;
  draft.cards.forEach(function(card) {
    if (card.individualRating > averageRating) {
      correctionFactor += (card.individualRating - averageRating);
    };
  });

  // 3. Overall Rating
  // Final step
  return Math.round((summedRatings + correctionFactor) / DRAFT_SIZE);
};

/**
 * All function algorithms below defined in 
 * /docs/Chemistry.md
 */

// Individual chemistry mappings; colors -> numbers
const LINK_COLORS = {
  Green: 2,
  Yellow: 1,
  Red: 0
};

/**
 * Calculating the individual chemistry between a card
 * and another (Link).
 */
function Link(card, otherCard) {
  
  const msrvMatch = card.msrv === otherCard.msrv,
    lvctMatch = card.lvct === otherCard.lvct;

  if (msrvMatch && lvctMatch) {
    return LINK_COLORS.Green;
  } else if (msrvMatch || lvctMatch) {
    return LINK_COLORS.Yellow;
  } else {
    return LINK_COLORS.Red;
  };
};

/**
 * Calculating the card chemistry for a card based on
 * its individual links.
 */
function CardChemistry(card) {

  let cardChemistry = 0;

  card.links.forEach(function(link) {
    cardChemistry += link.value;
  });

  cardChemistry *= 1.25;

  return Math.round(cardChemistry);
};

/**
 * Calculating the overall chemistry from the draft of cards.
 */
function Chemistry(draft) {

  let summedChemistry = 0;

  draft.cards.forEach(function(card) {
    summedChemistry += (card.chemistry * 2);
  });

  return summedChemistry;
};