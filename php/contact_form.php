<!DOCTYPE html>
<html lang="de">

<head>
    <script src="../header.js"></script>
    <title>Kontakt</title>
</head>
<body>
    <?php
    echo "Test";
    if(isset($_POST["submit"])){
        //mail("kontakt@christen-in-ilmenau.de", "Neues Kontaktformular abgeschickt", 'Angegebener Name: '.$_POST["name"].', Email: '.$_POST["email"].'Nachricht: '.$_POST["subject"]);
        echo "Test2";
        ?>
        <h1>Test</h1>
        <?php
    }
    ?>

</body>
<script src="https://kit.fontawesome.com/d6281656fa.js" crossorigin="anonymous"></script>
<script src="../body.js"></script>
<script src="../navigator.js"></script>
<script src="../footer.js"></script>
</html>