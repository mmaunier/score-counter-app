$(document).ready(function() {
    let score1 = 0;
    let score2 = 0;
    let ignoreNextClick = false; // Pour ignorer le prochain événement de clic
    
    // Tableau pour stocker l'historique des scores
    let scoreHistory = [];
    
    // Fonction pour formater les scores avec deux chiffres
    function formatScore(score) {
        return score < 10 ? '0' + score : '' + score;
    }
    
    // Initialiser les scores
    $('#score1').text(formatScore(score1));
    $('#score2').text(formatScore(score2));
    
    // Fonction pour sauvegarder l'état actuel dans l'historique
    function saveHistory() {
        // Enregistrer l'état actuel des scores
        scoreHistory.push({
            score1: score1,
            score2: score2
        });
    }
    
    // Fonction pour réinitialiser les scores
    function resetScores() {
        // Assurez-vous que les variables sont bien définies comme zéro
        score1 = 0;
        score2 = 0;
        
        // Mettre à jour l'affichage
        $('#score1').text(formatScore(score1));
        $('#score2').text(formatScore(score2));
        
        // Vider l'historique
        scoreHistory = [];
        
        // Ignorer le prochain clic
        ignoreNextClick = true;
        
        // Pour déboguer
        console.log("Scores réinitialisés:", score1, score2);
    }
    
    // Configuration du dialogue de confirmation
    $("#dialog-confirm").dialog({
        autoOpen: false,
        resizable: false,
        height: "auto",
        width: 300,
        modal: true,
        buttons: {
            "Oui": function() {
                resetScores();
                $(this).dialog("close");
                
                // Vérification après fermeture du dialogue
                setTimeout(function() {
                    console.log("Après fermeture du dialogue:", score1, score2);
                }, 100);
            },
            "Non": function() {
                $(this).dialog("close");
            }
        }
    });
    
    // Gérer les clics sur l'écran
    $(document).on('click', function(e) {
        // Si nous devons ignorer ce clic (après une réinitialisation)
        if (ignoreNextClick) {
            ignoreNextClick = false;
            return;
        }
        
        const width = $(window).width();
        const height = $(window).height();
        const clickX = e.pageX;
        const clickY = e.pageY;
        
        // Vérifier si le clic est dans la zone cliquable (entre 1/3 et 2/3 de la hauteur)
        if (clickY > height/3 && clickY < height*2/3) {
            // Enregistrer l'état actuel avant modification
            saveHistory();
            
            // Si le clic est sur la moitié gauche de l'écran
            if (clickX < width / 2) {
                score1 = (score1 + 1) % 100;
                $('#score1').text(formatScore(score1));
            } else {
                // Si le clic est sur la moitié droite de l'écran
                score2 = (score2 + 1) % 100;
                $('#score2').text(formatScore(score2));
            }
        }
    });
    
    // Gestionnaire pour l'icône de redémarrage
    $('#redemarrer-icon').on('click', function(e) {
        e.stopPropagation(); // Empêcher la propagation de l'événement
        $("#dialog-confirm").dialog("open");
    });
    
    // Gestionnaire pour l'icône d'annulation
    $('#annuler-icon').on('click', function(e) {
        e.stopPropagation(); // Empêcher la propagation de l'événement
        
        // S'il y a un historique, retourner à l'état précédent
        if (scoreHistory.length > 0) {
            const previousState = scoreHistory.pop();
            score1 = previousState.score1;
            score2 = previousState.score2;
            
            $('#score1').text(formatScore(score1));
            $('#score2').text(formatScore(score2));
        }
    });
    
    // Gestionnaire pour l'icône de paramètres
    $('#parametres-icon').on('click', function(e) {
        e.stopPropagation(); // Empêcher la propagation de l'événement
        // Ici vous pouvez ajouter une action pour les paramètres
        alert("Paramètres (à implémenter)");
    });
    
    // Fonction pour ajuster la taille des nombres en fonction de l'écran
    function adjustFontSize() {
        // Obtenir les dimensions actuelles du conteneur
        const containerHeight = $('.terrain-container').height();
        const containerWidth = $('.terrain-container').width();
        
        // Calculer une taille de police proportionnelle
        // Utiliser le minimum entre 40% de la hauteur et 20% de la largeur
        const fontSize = Math.min(containerHeight * 0.4, containerWidth * 0.2);
        
        // Appliquer la taille calculée aux scores
        $('.score').css('font-size', fontSize + 'px');
        
        console.log("Redimensionnement - Police:", fontSize + "px");
    }
    
    // Ajuster la taille au chargement
    adjustFontSize();
    
    // Réagir aux changements de taille de fenêtre
    $(window).on('resize', adjustFontSize);
    
    // Réagir aux changements d'orientation sur mobile
    $(window).on('orientationchange', adjustFontSize);
});