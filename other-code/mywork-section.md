/*html*/
    <div class="portfolio">
      <!-- Portfolio item 01 -->

      <a href="https://gildoch.github.io/travel-journal/" target="_blank" class="portfolio__item">
        <img src="img/travel-jornal/capa.png" alt="" class="portfolio__img" />
      </a>

      <!-- Portfolio item 02 -->
      <a href="./pages/portfolio-item-ipemo.html" target="_blank" class="portfolio__item">
        <img src="./img/ipemo/capa.jpg" alt="" class="portfolio__img" />
      </a>

      <!-- Portfolio item 03 -->
      <a href="./pages/portfolio-item-ciss.html" target="_blank" class="portfolio__item">
        <img src="./img/ciss/capa.jpg" alt="" class="portfolio__img" />
      </a>

      <!-- Portfolio item 04 -->
      <a href="https://gildoch.github.io/meme-generator/" target="_blank" class="portfolio__item">
        <img src="img/meme-generator/capa.png" alt="" class="portfolio__img" />
      </a>
    </div>


/*Css*/
.my-work {
  background-color: darken($color: $clr-light, $amount: 1);
  color: $clr-dark;
  text-align: center;
  margin-top: 10px;
}

.portfolio {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.portfolio__item {
  overflow: hidden;
  margin: 5px;
}

.portfolio__img {
  transition: transform 750ms cubic-bezier(0.5, 0, 0.5, 1), opacity 250ms linear;
}

.portfolio__item:focus {
  position: relative;
  z-index: 2;
}

.portfolio__img:hover,
.portfolio__item:focus .portfolio__img {
  transform: scale(1.2);
  opacity: 0.5;
}

/* Individual portfolio item styles */
.section__subtitle--work {
  color: $clr-accent;
  font-weight: $fw-bold;
  padding: 15px;
}
