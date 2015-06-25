<?php $title = 'Построенные объекты'; ?>
<?php $description = ''; ?>
<?php $keywords = ''; ?>
<?php include("array.php"); ?>
<?php 
$root = $_SERVER['DOCUMENT_ROOT'];
include($root."/blocks/meta.php");
include($root."/blocks/header.php"); 
?>

<article>
<div class="container objects">
   <div class="">
      <h1 class="h1">Перечень объектов</h1>

   
    <div id="images" class="center-block">
<?php foreach($bd as $row) { ?>
				<div id="a" class="col-md-3 col-sm-6 col-xs-12" style="padding:0;">
				    <img height="292px" src="img/objects/<?php echo $row['img'];?>" alt="car1"/>
					<a class="fancybox-thumb" rel="gallery1" href="img/objects/<?php echo $row['img'];?>" title="<?php echo $row['alt'];?>"><span><?php echo $row['text1'].'</br>'.$row['text2'].'</br>'.$row['text3'];?></span></a>
				</div>
<?php } ?>			
			</div>
  <!-- <a class="all-projects" href="#">Все проекты</a> -->
  </div>
</div>

   </div><!-- row -->
</div><!-- container -->
</article>

<?php include($root."/blocks/footer.php"); ?>