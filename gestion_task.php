    <?php

    //Connexion à la BDD
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = "usertask";
    try {
        // Création de la connexion avec PDO
        $pdo = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
        
        // Activation du mode erreur pour afficher les exceptions en cas de problème
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
        echo "Connexion réussie !";
    } catch (PDOException $e) {
        // Capture et affichage de l'erreur en cas d'échec de connexion
        die("Erreur de connexion : " . $e->getMessage());
    }

  





    ?>