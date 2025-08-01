import React from 'react';
import { cardStore } from '../store/cardStore';
import { pokerApi } from '../api/pokerApi';

export const Controls = () => {
  const handleSend = async () => {
    try {
      if (cardStore.selectedCards.length < 5 || cardStore.selectedCards.length > 7) {
        alert('Нужно выбрать от 5 до 7 карт');
        return;
      }
      await pokerApi.evaluate(cardStore.selectedCards);
      alert('Карты отправлены!');
    } catch (e: any) {
      alert('Ошибка при отправке: ' + (e.response?.data?.message || e.message));
    }
  };

  const handleGetBest = async () => {
    try {
      const res = await pokerApi.getBestHand();
      const { combination, bestCards } = res.data;

      if (!bestCards || bestCards.length === 0) {
        alert('🧐 Комбинация не определена.');
        return;
      }
      alert(`🃏 Лучшая комбинация: ${combination}`);
    } catch (e: any) {
      const msg = e.response?.data?.message || e.message;
      alert('Ошибка при получении комбинации: ' + msg);
    }
  };

  const handleClear = async () => {
    try {
      await pokerApi.clear();
      cardStore.clearCards();
    } catch (e: any) {
      alert('Ошибка при очистке: ' + (e.response?.data?.message || e.message));
    }
  };

  const buttonStyle = 'px-4 py-2 rounded shadow hover:scale-105 transition';

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {[5, 6, 7].map(n => (
        <button
          key={n}
          onClick={() => cardStore.setRandom(n)}
          className={`${buttonStyle} bg-indigo-200 hover:bg-indigo-300`}
        >
          Случайно {n}
        </button>
      ))}
      <button className={`${buttonStyle} bg-green-200 hover:bg-green-300`} onClick={handleSend}>Отправить</button>
      <button className={`${buttonStyle} bg-yellow-200 hover:bg-yellow-300`} onClick={handleGetBest}>Комбинация</button>
      <button className={`${buttonStyle} bg-red-200 hover:bg-red-300`} onClick={handleClear}>Очистить</button>
    </div>
  );
};