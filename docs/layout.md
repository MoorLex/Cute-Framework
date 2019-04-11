<br>
<br>
<p align="center">
    <img src="https://user-images.githubusercontent.com/20378514/55952557-9487f800-5c62-11e9-8ce3-b145b9182c74.png" alt="Cute Framework logo" width="100" height="100">
</p>
<h3 align="center">Cute Framework</h3>
<p align="center">Макет</p>
<br>
<br>

- [Контейнер](#контейнер)
- [Контрольные точки](#контрольные-точки)
- [Слои](#слои)

<br>
<br>

## Контейнер

Контейнеры - основной элемент макета в Cute Framework, особенность которого заключается в том, что его максимальная 
широта меняеться только в моментах перехода через контрольную точку в системе адаптации, о которой вы сможете узнать 
подробнее чуть ниже. 

Также их использование не обязательно при работе с адаптивной системой колонок. 

```html
<div class="container">
  <!-- Контент -->
</div>
```

Так же, вы можете воспользоваться классом `.container-fluid` у которого максимальная широта плавно меняеться в 
зависимости от размера устройства. 


```html
<div class="container-fluid">
  <!-- Контент -->
</div>
```

<br>
<br>

## Контрольные точки

Система адаптации устанавливает размеры перехода с одного размера экрана на другой. При помощи данной системы, можно 
удобно и быстро прописывать классы, которые будут полностью зависить от размера устройства. 

```scss
// xs - Очень маленькие экраны (Телефоны)
@media (min-width: 0) { ... }

// sm - Маленькие экраны (Телефоны в горизонтальном положении)
@media (min-width: 480px) { ... }

// md - Средние экраны (Планшеты)
@media (min-width: 750px) { ... }

// lg - Большие экраны (Мониторы)
@media (min-width: 990px) { ... }

// xl - Очень большие экраны (Большие мониторы, телевизоры)
@media (min-width: 1470px) { ... }
```

Для того чтобы воспользоваться адаптивностью прямо при прописании классов в html коде, Вы можете добавлять к классам 
приставки адаптации при условии, что в документации класса указано - <small>_адаптивный класс_</small>.

- `*: ` - Только в рамках одной контрольной точки
```html
<div class="xs:d-block"></div>
<div class="sm:d-block"></div>
<div class="md:d-block"></div>
<div class="lg:d-block"></div>
<div class="xl:d-block"></div>
```

- `*-down: ` - Только до указанной контрольной точки (включительно)
```html
<div class="sm-down:d-block"></div>
<div class="md-down:d-block"></div>
<div class="lg-down:d-block"></div>
<div class="xl-down:d-block"></div>
```

- `*-up: ` - Только начиная от указанной контрольной точки (включительно)
```html
<div class="sm-up:d-block"></div>
<div class="md-up:d-block"></div>
<div class="lg-up:d-block"></div>
<div class="xl-up:d-block"></div>
```

<br>
<br>

## Слои
<small>_адаптивный класс_</small>

Вы можете контролировать очередь прорисовки элементов при помощи класса `z-*`

```html
<div class="z-1"></div>
<div class="z-2"></div>
<div class="z-3"></div>
<div class="z-4"></div>
<div class="z-5"></div>
<div class="z-6"></div>
<div class="z-7"></div>
<div class="z-8"></div>
<div class="z-9"></div>
```