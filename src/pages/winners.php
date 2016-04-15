
<main class="cd-winners">
  <header>
    <h1>21</h1>
    <p>Ici, la liste des nominés. Des nouveaux espoirs aux plus attendus, ils ont fait l'histoire du Festival.</p>
  </header>
  <section class="winners-posters">
    <?php
      for ($i= 0; $i < count($movies) ; $i++) {
          if($i == 0){
            echo '<a class="winner" data-attribute-name="'.trim($movies[$i]).' " href="#"><img src="'.$posters[$movies[$i]].'" class="winner-poster"/><div class="film-name">'.trim($movies[$i]).'</div></a> ';
          }
          else {
            echo '<a data-attribute-name="'.trim($movies[$i]).' " href="#"><img src="'.$posters[$movies[$i]].'" class="winner-poster"/><div class="film-name">'.trim($movies[$i]).'</div></a> ';
          }
      }
    ?>
  </section>
  <? foreach ($movies as $movie) : ?>
  <section class="movie-sheet" data-attribute-movie="<?= $movie ?>">
    <div class="description-container">
      <div class="big-poster">
        <img src="<?= $posters[$movie] ?>" alt=""/>
      </div>
      <div class="description">
        <h2><?= $movie ?></h2>
        <p class="synopsis"><?= $synopsis[$movie] ?></p>
        <p class="specs"><strong>Film Director : </strong><?= $directors[$movie]?></p>
        <p class="specs"><strong>Category : </strong><?= $categories[$movie]?></p>
        <p class="specs"><strong>Duration : </strong><?= $durations[$movie]?>min</p>
        <? if ($movie == $movie[0]) : ?>
          <h3 class="price">Palme d&#39; Or of Festival de Cannes</h3>
        <?php endif ?>
      </div>
    </div>
    <a href="#" class="go-back">MOVIES IN COMPETITION</a>
  </section>
  <?php endforeach ?>
  <a href="<?= URL?>editions" class="all-years">ALL YEARS</a>
  <a href="#" class="current-year">2005</a>
</main>
