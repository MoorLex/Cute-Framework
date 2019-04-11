<br>
<br>
<p align="center">
    <img src="https://user-images.githubusercontent.com/20378514/55952557-9487f800-5c62-11e9-8ce3-b145b9182c74.png" alt="Cute Framework logo" width="100" height="100">
</p>
<h3 align="center">Cute Framework</h3>
<p align="center">Сетка</p>
<br>
<br>

- [Как это работает](#как-это-работает)
- [Колоннки](#колоннки)

<br>
<br>

## Как это работает

Данная сетка разработана на основе 12-ти колоночной системы [Bootstrap](https://getbootstrap.com/docs/4.3/layout/grid/). 
Работает она схожим образом, разве что Вам не обязательно использовать её только в контейнерах.


```html
<div class="row">
    <div class="col">
      <!-- Колонка 1 -->
    </div>
    <div class="col">
      <!-- Колонка 2 -->
    </div>
    <div class="col">
      <!-- Колонка 3 -->
    </div>
</div>
```

<br>
<br>

## Колонки
<small>_адаптивный класс_</small>

В отличии от привычной системы адаптации (от маленького к большому) в системе колонок Cute Framework Вы можете указывать 
размер колонки в любом направлении или же прописать в какой конкретно контрольной точке будет указанный размер `col-*`.


```html
<div class="row">
    <div class="col-12">
      <!-- Всегда на всю длину -->
    </div>
    <div class="sm-down:col-12 md:col-6 col">
      <!-- На всю длину только на телефонах-->
      <!-- На планшетах 50% от сетки-->
      <!-- В остальных случаях, всё доступное пространство-->
    </div>
    <div class="sm-down:col-12 md:col-6 col">
      <!-- На всю длину только на телефонах-->
      <!-- На планшетах 50% от сетки-->
      <!-- В остальных случаях, всё доступное пространство-->
    </div>
    <div class="md-down:col-12 col">
      <!-- На всю длину до мониторов-->
      <!-- В остальных случаях, всё доступное пространство-->
    </div>
</div>
```