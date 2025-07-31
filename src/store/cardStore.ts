import { makeAutoObservable } from 'mobx';
import { RANKS, SUITS, SUIT_TO_LETTER } from '../types';

class CardStore {
  selectedCards: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addCard(card: string) {
    if (this.selectedCards.length < 7 && !this.selectedCards.includes(card)) {
      this.selectedCards.push(card);
    }
  }

  removeCard(card: string) {
    this.selectedCards = this.selectedCards.filter(c => c !== card);
  }

  clearCards() {
    this.selectedCards = [];
  }

  setRandom(count: number) {
    const deck = SUITS.flatMap(suit => RANKS.map(rank => `${rank}${SUIT_TO_LETTER[suit]}`));
    this.selectedCards = deck.sort(() => 0.5 - Math.random()).slice(0, Math.min(count, 7));
  }
}

export const cardStore = new CardStore();