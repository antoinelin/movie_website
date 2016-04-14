<div class="years">
  <?php
  $festivals = $db->query("SELECT * FROM cannes");
  $festivals = $festivals->fetchAll();
  foreach ($festivals as $festival) :?>
  <div class="year"><p><?= $festival->year ?></p></div>
<?php endforeach ?>
</div>
