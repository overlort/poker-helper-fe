import React from 'react';
import { observer } from 'mobx-react-lite';
import { cardStore } from '../store/cardStore';
import { SUITS, RANKS, SUIT_TO_LETTER } from '../types';

export const CardSelector = observer(() => {
  const deck = SUITS.flatMap(suit => RANKS.map(rank => `${rank}${suit}`));

  return (
    <div className="grid grid-cols-13 gap-1">
      {deck.map(card => {
        const rank = card[0];
        const suit = card[1] as typeof SUITS[number];
        const internalCard = `${rank}${SUIT_TO_LETTER[suit]}`;
        const selected = cardStore.selectedCards.includes(internalCard);

        return (
          <button
            key={card}
            onClick={() => cardStore.addCard(internalCard)}
            className={`w-10 h-14 flex items-center justify-center border rounded shadow-sm text-xl font-bold transition-transform hover:scale-110 ${
              selected ? 'bg-green-200 ring-2 ring-green-500' : 'bg-white'
            } ${suit === '♥' || suit === '♦' ? 'text-red-600' : 'text-black'}`}
          >
            {rank}{suit}
          </button>
        );
      })}
    </div>
  );
});