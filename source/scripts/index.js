/* в этот файл добавляет скрипты*/
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');

  noUiSlider.cssClasses.target += ' drink-slider';

  if(!slider.noUiSlider) {
    noUiSlider.create(slider, {
      start: [0, 900], // Начальные значения
      connect: true, // Подключение ползунков
      range: {
        'min': 0, // Минимальное значение
        'max': 900 // Максимальное значение
      },
      step: 1, // Шаг слайдера
    });
  }
});
