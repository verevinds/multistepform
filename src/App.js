import React from 'react';
import MultiStepWrapper from './components/MultiStep/MultiStepWrapper';

function App() {
  return (
    <MultiStepWrapper
      input={[
        {
          fileName: {
            title: 'Имя',
            placeholder: 'Имя...',
            type: '',
          },
          lastName: { title: 'Фамилия', type: 'text' },
          tch: {
            title: 'Проверка на бота',
            type: 'switch',
            description: 'Вы человек?',
          },
          swi: {
            type: 'switch',
            description: 'Вы программист?',
            parent: 'tch',
          },
          checkbox: {
            title: 'Ваш любимый цвет',
            type: 'checkbox',
            description: 'красный',
          },
          checkbox2: {
            type: 'checkbox',
            description: 'синий',
          },
          checkbox3: {
            type: 'checkbox',
            description: 'зеленый',
          },
        },
        {
          email: { title: 'Email', type: 'email', required: true },
          phone: { title: 'Телефон', type: 'tel', required: true },
        },
      ]}
      titleStep={['Персональная информация', 'Контактная']}
    />
  );
}

export default App;
