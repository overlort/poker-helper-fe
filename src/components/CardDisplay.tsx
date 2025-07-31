import React from 'react';
import { observer } from 'mobx-react-lite';
import { cardStore } from '../store/cardStore';
import { LETTER_TO_SUIT } from '../types';

export const CardDisplay = observer(() => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Выбранные карты:</h3>
      <div className="flex gap-2 flex-wrap">
        {cardStore.selectedCards.map(card => {
          const suit = LETTER_TO_SUIT[card[1]];
          const rank = card[0];
          const isRed = suit === '♥' || suit === '♦';
          return (
            <div
              key={card}
              className={`w-12 h-16 flex items-center justify-center rounded border shadow text-xl font-bold ${
                isRed ? 'text-red-600 bg-white' : 'text-black bg-white'
              }`}
            >
              {rank}{suit}
            </div>
          );
        })}
      </div>
    </div>
  );
});
