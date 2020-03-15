/**
 * Virtual card.
 */

class Card {

  constructor() {
    
    // Chemistry attributes
    this.msrv = null;
    this.lvct = null;

    // Links with other cards to calculate card chemistry
    this.links = [
      /**
       * {
       *  card: null
       *  value: null
       * }
       */
    ];

    // Card chemistry
    this.chemistry = null;
  };
};