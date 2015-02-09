<?php

define('TM_SELF', $_SERVER['SCRIPT_NAME'], false);


if (isset($_FILES['fileToUpload'])) {
    $file = $_FILES['fileToUpload'];

    $uploaddir = realpath('./uploadTest') . '/';
    if (@move_uploaded_file($file['tmp_name'], $uploaddir . $file['name'])) {
        echo '0';
    }
    else {
        echo '1';
    }
}
else {

?>
<html>
  <head>
    <script src="js/jquery.js"></script>
    <script src="jsToolbox.js"></script>
  </head>

  <body> 
<?php





?> 
  
    <form id="uploadTestForm" action="<?php echo TM_SELF; ?>" method="POST">
        <input name="fileToUpload" type="file" size="50" maxlength="<?php echo ini_get('upload_max_filesize'); ?>" /><br />
        <input name="aHiddenField" type="hidden" value="TM+MK" />
        
        <br />
        <input type="submit" />
    </form>
    
    <script type="text/javascript">
    
        $jsTB.page.addOnLoaded(function() {
            $jsTB.funcs.registerForFileUpload('#uploadTestForm', {
                success: function(ctx) {
                    alert(ctx.data);
                },
                
                error: function(ctx) {
                    alert(ctx.error);
                },
                
                progress: function(ctx) {
                    // alert(ctx.percentage);
                },
            });
        });
    
    </script>
  </body>
</html>
<?php

}  // else
