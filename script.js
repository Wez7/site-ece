document.addEventListener('DOMContentLoaded', () => {
    // --- CONFIGURATION IMPORTANTE ---
    // Listez ici les noms de base de vos fichiers JSON (sans l'extension .json)
    // Par exemple, si vous avez "ECE_Optique_01.json" et "ECE_Meca_05.json",
    // mettez : ["ECE_Optique_01", "ECE_Meca_05"]
    const nomsDesSujets = [
    "ECE_25_PC_10_ECE_25_PC_10",
    "ECE_25_PC_11_ECE_25_PC_11",
    "ECE_25_PC_12_ECE_25_PC_ENONCE_12",
    "ECE_25_PC_13_ECE_25_PC_13_A",
    "ECE_25_PC_13_ECE_25_PC_13_B",
    "ECE_25_PC_14_ECE_25_PC_ENONCE_14",
    "ECE_25_PC_15_ECE_25_PC_15",
    "ECE_25_PC_16_ECE_25_PC_ENONCE_16",
    "ECE_25_PC_17_ECE_25_PCE_17",
    "ECE_25_PC_18_ECE_25_PC_18",
    "ECE_25_PC_19_ECE_25_PC_ENONCE_19",
    "ECE_25_PC_1_ECE_25_PC_1",
    "ECE_25_PC_20_ECE_25_PC_ENONCE_20",
    "ECE_25_PC_21_ECE_25_PC_21",
    "ECE_25_PC_22_ECE_25_PC_22",
    "ECE_25_PC_23_ECE_25_PC_ENONCE_23",
    "ECE_25_PC_24_ECE_25_PC_24",
    "ECE_25_PC_25_ECE_25_PC25A",
    "ECE_25_PC_25_ECE_25_PC_25B",
    "ECE_25_PC_27_ECE_25_PC_27",
    "ECE_25_PC_27_ECE_25_PC_27_B",
    "ECE_25_PC_28_ECE_25_PC_28",
    "ECE_25_PC_29_ECE_25_PC_29",
    "ECE_25_PC_2_ECE_25_PC_2",
    "ECE_25_PC_30_ECE_25_PC_30",
    "ECE_25_PC_31_ECE_25_PC_31",
    "ECE_25_PC_32_ECE_24_PC_32",
    "ECE_25_PC_33_ECE_25_PC_33",
    "ECE_25_PC_34_ECE_25_PC_34",
    "ECE_25_PC_35_ECE_25_PC_35",
    "ECE_25_PC_36_ECE_25_PC_36",
    "ECE_25_PC_37_ECE_25_PC_37",
    "ECE_25_PC_38_ECE_25_PC_38",
    "ECE_25_PC_39_ECE_25_PC_39",
    "ECE_25_PC_3_ECE_25_PC_3",
    "ECE_25_PC_40_ECE_25_PC_40",
    "ECE_25_PC_41_ECE_25_PC_ENONCE_41",
    "ECE_25_PC_42_ECE_25_PC_42",
    "ECE_25_PC_43_ECE_25_PC_43",
    "ECE_25_PC_44_ECE_25_PC_44",
    "ECE_25_PC_45_ECE_25_PC_45",
    "ECE_25_PC_46_ECE_25_PC_46",
    "ECE_25_PC_47_ECE_25_PC_47",
    "ECE_25_PC_48_ECE_25_PC_48",
    "ECE_25_PC_49_ECE_25_PC_49",
    "ECE_25_PC_4_ECE_25_PC_4",
    "ECE_25_PC_50_ECE_25_PC_50",
    "ECE_25_PC_51_ECE_25_PC_51",
    "ECE_25_PC_52_ECE_25_PC_52",
    "ECE_25_PC_53_ECE_25_PC_53",
    "ECE_25_PC_54_ECE_25_PC_54",
    "ECE_25_PC_55_ECE_25_PC_55",
    "ECE_25_PC_56_ECE_25_PC_56",
    "ECE_25_PC_57_ECE_25_PC_57",
    "ECE_25_PC_58_ECE_25_PC_58",
    "ECE_25_PC_59_ECE_25_PC_59",
    "ECE_25_PC_5_ECE_25_PC_ENONCE_5",
    "ECE_25_PC_60_ECE_25_PC_60",
    "ECE_25_PC_61_ECE_25_PC_61",
    "ECE_25_PC_62_ECE_25_PC_62",
    "ECE_25_PC_63_ECE_25_PC_63",
    "ECE_25_PC_64_ECE_25_PC_64",
    "ECE_25_PC_65_ECE_25_PC_65",
    "ECE_25_PC_66_ECE_25_PC_ 66",
    "ECE_25_PC_67_ECE_25_PC_67",
    "ECE_25_PC_67_regle-imprimer",
    "ECE_25_PC_68_ECE_25_PC_68",
    "ECE_25_PC_69_ECE_25_PC_69_A",
    "ECE_25_PC_69_ECE_25_PC_69_B",
    "ECE_25_PC_6_ECE_25_PC_6",
    "ECE_25_PC_70_ECE_25_PC_70",
    "ECE_25_PC_71_ECE_25_PC_71",
    "ECE_25_PC_72_ECE_25_PC_72",
    "ECE_25_PC_73_ECE_25_PC_73",
    "ECE_25_PC_74_ECE_25_PC_74",
    "ECE_25_PC_75_ECE_25_PC_75",
    "ECE_25_PC_76_ECE_25_PC_76",
    "ECE_25_PC_77_ECE_25_PC_77",
    "ECE_25_PC_78_ECE_25_PC_78",
    "ECE_25_PC_79_ECE_25_PC_79",
    "ECE_25_PC_7_ECE_25_PC_7",
    "ECE_25_PC_80_ECE_25_PC_80",
    "ECE_25_PC_81_ECE_25_PC_81A",
    "ECE_25_PC_81_ECE_25_PC_81_B",
    "ECE_25_PC_82_ECE_25_PC_82",
    "ECE_25_PC_83_ECE_25_PC_83",
    "ECE_25_PC_84_ECE_25_PC_84",
    "ECE_25_PC_85_ECE_25_PC_85",
    "ECE_25_PC_86_ECE_25_PC_86",
    "ECE_25_PC_87_ECE_25_PC_87",
    "ECE_25_PC_88_ECE_25_PC_88",
    "ECE_25_PC_89_ECE_25_PC_89",
    "ECE_25_PC_8_ECE_25_PC_8",
    "ECE_25_PC_90_ECE_25_PC_90",
    "ECE_25_PC_9_ECE_25_PC_9"
];
    // --- FIN DE LA CONFIGURATION ---

    const cheminBaseJson = './json/'; // Chemin vers le dossier JSON
    const cheminBasePdf = './pdf/';   // Chemin vers le dossier PDF

    /**
     * Nettoie un nom de fichier pour l'affichage (enlève underscores, etc.)
     * @param {string} nomFichier - Le nom de base du fichier.
     * @returns {string} - Le nom formaté pour l'affichage.
     */
    function formaterNomSujet(nomFichier) {
        return nomFichier.replace(/_/g, ' ').replace(/\bECE\b/i, 'ECE -');
    }

    /**
     * Charge la liste des sujets sur la page index.html
     */
    function chargerListeSujets() {
        const listeElement = document.getElementById('liste-sujets');
        if (!listeElement) return; // S'assurer qu'on est sur la bonne page

        if (nomsDesSujets.length === 0) {
            listeElement.innerHTML = '<p>Aucun sujet configuré dans script.js.</p>';
            return;
        }

        listeElement.innerHTML = ''; // Vider le message "Chargement..."

        nomsDesSujets.forEach(nomDeBase => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `ece_template.html?sujet=${encodeURIComponent(nomDeBase)}`;
            link.textContent = formaterNomSujet(nomDeBase);
            listItem.appendChild(link);
            listeElement.appendChild(listItem);
        });
    }

    /**
     * Charge les détails d'un ECE spécifique sur la page ece_template.html
     */
    async function chargerDetailsECE() {
        const params = new URLSearchParams(window.location.search);
        const nomSujetBase = params.get('sujet');

        if (!nomSujetBase) {
            const contenuDiv = document.getElementById('contenu-ece');
            if (contenuDiv) {
                 contenuDiv.innerHTML = '<p>Aucun sujet spécifié. Veuillez retourner à la liste et en choisir un.</p>';
            }
            // Mettre à jour le titre de la page même en cas d'erreur
            const titrePageElement = document.querySelector('title');
            const titreH1Element = document.getElementById('titre-ece');
            if (titrePageElement) titrePageElement.textContent = "Erreur - Sujet non trouvé";
            if (titreH1Element) titreH1Element.textContent = "Erreur - Sujet non trouvé";
            return;
        }

        // Mise à jour des titres
        const nomAffiche = formaterNomSujet(nomSujetBase);
        document.title = `ECE - ${nomAffiche}`;
        const titreH1Element = document.getElementById('titre-ece');
        if (titreH1Element) titreH1Element.textContent = nomAffiche;

        // Construction des chemins de fichiers
        const cheminJson = `${cheminBaseJson}${nomSujetBase}.json`;
        const cheminPdf = `${cheminBasePdf}${nomSujetBase}.pdf`;

        // Liens PDF
        const pdfDownloadLink = document.getElementById('pdf-download-link');
        const pdfIframe = document.getElementById('pdf-iframe');
        if (pdfDownloadLink) pdfDownloadLink.href = cheminPdf;
        if (pdfIframe) pdfIframe.src = cheminPdf;


        // Éléments pour les données
        const valeursDiv = document.getElementById('valeurs-experimentales');
        const correctionPre = document.getElementById('correction-exercice');

        if (!valeursDiv || !correctionPre) {
            console.error("Éléments DOM manquants pour afficher les détails de l'ECE.");
            return;
        }

        try {
            const reponse = await fetch(cheminJson);
            if (!reponse.ok) {
                throw new Error(`Erreur HTTP ${reponse.status} lors du chargement de ${cheminJson}`);
            }
            const data = await reponse.json();

            // Affichage des valeurs expérimentales
            if (data.valeurs && Object.keys(data.valeurs).length > 0) {
                const table = document.createElement('table');
                table.className = 'valeurs-table';
                const tbody = document.createElement('tbody');
                for (const [cle, valeur] of Object.entries(data.valeurs)) {
                    const row = tbody.insertRow();
                    const cellKey = row.insertCell();
                    const cellValue = row.insertCell();
                    cellKey.textContent = `${cle} :`;
                    cellValue.textContent = valeur;
                }
                table.appendChild(tbody);
                valeursDiv.innerHTML = ''; // Vider le "Chargement..."
                valeursDiv.appendChild(table);
            } else {
                valeursDiv.innerHTML = '<p>Aucune valeur expérimentale fournie.</p>';
            }

            // Affichage de la correction
            if (data.correction) {
                correctionPre.textContent = data.correction;
            } else {
                correctionPre.textContent = 'Aucune correction fournie.';
            }

        } catch (erreur) {
            console.error("Erreur lors du chargement ou du parsing du JSON:", erreur);
            if (valeursDiv) valeursDiv.innerHTML = `<p>Erreur lors du chargement des valeurs pour "${nomAffiche}". Vérifiez que le fichier ${cheminJson} existe et est un JSON valide.</p>`;
            if (correctionPre) correctionPre.textContent = `Erreur lors du chargement de la correction pour "${nomAffiche}".`;
        }
    }

    // Déterminer quelle fonction exécuter en fonction de la page actuelle
    if (document.getElementById('liste-sujets')) {
        chargerListeSujets();
    } else if (document.getElementById('contenu-ece')) {
        chargerDetailsECE();
    }
});