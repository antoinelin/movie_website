<?php
//echo "<pre>"; print_r($stats); echo "<pre>";
//echo "<pre>"; print_r($festival); echo "<pre>";

?>

<main class="cd-edition">
  <ul class="home_project-indicators" id="myMenu">
    <a href="#1"><li data-menuanchor="1" class="home_project-indicator"><span class="spanMenu1 activeMenu"></span><p class="spanMenu1 activeText">EDITION</p></li></a>
    <a href="#2"><li data-menuanchor="2" class="home_project-indicator"><span class="spanMenu2"></span><p class="spanMenu2">BUDGET</p></li></a>
    <a href="#3"><li data-menuanchor="3" class="home_project-indicator"><span class="spanMenu3"></span><p class="spanMenu3">EARNINGS</p></li></a>
    <a href="#4"><li data-menuanchor="4" class="home_project-indicator"><span class="spanMenu4"></span><p class="spanMenu4">GENDER</p></li></a>
    <a href="#5"><li data-menuanchor="5" class="home_project-indicator"><span class="spanMenu5"></span><p class="spanMenu5">ORIGINS</p></li></a>
    <a href="#6"><li data-menuanchor="6" class="home_project-indicator"><span class="spanMenu6"></span><p class="spanMenu6">CATEGORIES</p></li></a>
  </ul>



  <div id="fullpage" class="fp_background" data-year="<?= $festival[0]->year ?>">
    <div class="section first_one">
      <div class="slide moviesCompetition" data-anchor="hoverview">
        <a class="moviesFlip" href="#1/films_slide">MOVIES IN</br>COMPETITION</a>
        <h2 class="title_section"><span><?= $festival[0]->year ?></span></h2>
        <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</br>Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
        <section>
          <div class="picture">
            <img src="<?= $festival[0]->poster ?>" alt="poster cannes <?= $festival[0]->year ?>" />
          </div>
          <div class="text">
            <header>
              <h3>Edition n°<?= $festival[0]->edition ?></h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </header>

            <div class="infos">
                <figure>
                  <p class='number'> <?= $stats["budget_total"] ?> </p>
                  <p class="category">Budget </p>
                </figure>
                <figure>
                  <p class='number'> <?= $stats["earning_total"] ?></p>
                  <p class="category">earning</p>
                </figure>
                <figure>
                  <p class='number'><?= $stats["origins"] ?></p>
                  <p class="category">origins</p>
                </figure>
                <figure>
                  <p class='number'><?= $stats["genres_total"] ?></p>
                  <p class="category">categories</p>
                </figure>
            </div>

          </div>
        </section>
      </div>
    </div>
    <div class="section second_one">
      <h2 class="title_section"><span><?= $festival[0]->year ?></span></h2>
      <canvas class="canvas" width="800" height="450"></canvas>
    </div>
    <div class="section third_one">
      <h2 class="title_section"><span><?= $festival[0]->year ?></span></h2>
    </div>
    <div class="section fourth_one">
      <h2 class="title_section"><span><?= $festival[0]->year ?></span></h2>
    </div>
    <div class="section fifth_one">
      <h2 class="title_section"><span><?= $festival[0]->year ?></span></h2>
      <canvas class="canvas" width="800" height="450"></canvas>

    </div>
    <div class="section last_one">
      <h2 class="title_section"><span><?= $festival[0]->year ?></span></h2>
      <canvas class="canvas" width="800" height="450"></canvas>
    </div>
  </div>
</main>
