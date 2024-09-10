<!DOCTYPE html>
<html lang="de">

<head>
    <script src="../header.js"></script>
    <title>Kontakt</title>
</head>

<body>
    <div class="text">
        <div class="text title">
            <h1>Kontakt</h1>
        </div>
        <h1>Wir freuen uns, mit Ihnen in Kontakt zu treten!</h1>
        <p>
            Schreiben Sie uns gern eine Mail an <a href="mailto:kontakt@christen-in-ilmenau.de" target="_blank">kontakt@christen-in-ilmenau.de</a>, oder nutzen Sie unser Kontaktformular.
            Felder mit Stern ( * ) müssen ausgefüllt werden, bevor das Kontaktformular abgeschickt werden kann.
            Ihr Name (wenn angegeben) und ihre E-Mail-Adresse werden ausschließlich für Rückantworten gespeichert und verwendet, und nicht an Dritte weitergegeben.
        <div class="contact_form">
            <?php
                if(isset($_POST["submit"])){
                    mail("kontakt@christen-in-ilmenau.de", "Neues Kontaktformular abgeschickt", "Angegebener Name: ".$_POST["name"]."\n<br>Email: ".$_POST["email"]."\n<br>Nachricht: ".$_POST["subject"]);
                    ?>
                    <h1>Ihr Kontaktformular wurde versendet!</h1>
                    <?php
                }
                ?>
            <form method="post" action="contact.php">
          
              <label for="name">Name (optional): </label>
              <input type="text" id="name" name="name" placeholder="Ihr Name...">

              <label for="email">* E-Mail-Adresse:</label>
              <input type="email" id="email" name="email" placeholder="Ihre E-Mail-Adresse..." required>
          
              <label for="subject">* Was möchten Sie uns mitteilen?</label>
              <textarea id="subject" name="subject" placeholder="Ihre Fragen, Anmerkungen, Anregungen..." style="height:200px" required></textarea>
          
              <input type="submit" name="submit" value="Absenden" class="menubutton bottombutton">
          
            </form>
          </div>
        </p>
        <div class="footer">
        </div>
    </div>
    <div class="menu">
    </div>
    
</body>
<script src="https://kit.fontawesome.com/d6281656fa.js" crossorigin="anonymous"></script>
<script src="../body.js"></script>
<script src="../navigator.js"></script>
<script src="../footer.js"></script>
</html>