import React, { useState } from 'react';

const dialogues = {
  start: {
    text: 'Greetings, traveler! What brings you to these lands?',
    options: [
      { text: 'I seek adventure.', next: 'adventure' },
      { text: 'Just passing through.', next: 'passing' },
      { text: 'None of your business.', next: 'rude' },
    ],
  },
  adventure: {
    text: 'Ah, a brave soul! The cave nearby holds many secrets.',
    options: [
      { text: 'Tell me more.', next: 'more' },
      { text: 'Thanks for the tip!', next: 'end' },
    ],
  },
  passing: {
    text: 'Safe travels then. May the winds favor your path.',
    options: [{ text: 'Farewell.', next: 'end' }],
  },
  rude: {
    text: 'No need to be harsh. Good day to you.',
    options: [{ text: '...', next: 'end' }],
  },
  more: {
    text: 'Many have gone seeking glory, few have returned.',
    options: [{ text: 'I will be careful.', next: 'end' }],
  },
  end: {
    text: 'Farewell, traveler!',
    options: [],
  },
};

export default function NPCDialogue() {
  const [current, setCurrent] = useState('start');

  const dialogue = dialogues[current];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', marginBottom: '20px' }}>
      <p>{dialogue.text}</p>
      <div>
        {dialogue.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setCurrent(opt.next)}
            style={{
              marginRight: 10,
              marginTop: 10,
              padding: '8px 12px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}
