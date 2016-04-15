<main class="cd-editions">
    <div class="main-content">
        <h1>— 01</h1>
        <div class="content-block">
            <div class="editions-container">
                <div class="wrapper">
                    <? foreach ($years as $year) : ?>
                        <article class="edition"><a data-destination='edition' data-type="page-transition" href="<?= URL.'edition&year='.$year->year ?>"><?= $year->year ?></a></article>
                        <?php endforeach ?>
                </div>
            </div>
            <!-- <a href="index.html" data-type="page-transition">Back</a> -->
        </div>
        <a class="link-retrospective" data-destination="cd-retrospective" href="<?= URL ?>/retrospective" data-type="page-transition">Retrospective</a>
    </div>
</main>
