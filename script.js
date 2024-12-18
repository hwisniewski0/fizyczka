document.addEventListener("DOMContentLoaded", () => {
    const formatFileName = (fileName) => {
        // Zmiana podkreśleń na spacje
        fileName = fileName.replace(/_/g, " ");
        
        // Usunięcie polskich znaków
        fileName = fileName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // Usuwanie rozszerzenia .pdf
        if (fileName.endsWith(".pdf")) {
            fileName = fileName.slice(0, -4); // Usunięcie 4 ostatnich znaków (".pdf")
        }
        
        return fileName;
    };

    const createTree = (data) => {
        const ul = document.createElement("ul");

        for (const [key, value] of Object.entries(data)) {
            const li = document.createElement("li");

            if (typeof value === "object") {
                li.className = "folder";
                const span = document.createElement("span");
                span.textContent = formatFileName(key);

                // Dodanie efektu rozwijania i zwijania folderu po kliknięciu
                span.addEventListener("click", () => {
                    li.classList.toggle("active");
                    li.classList.toggle("open");
                });

                li.appendChild(span);
                li.appendChild(createTree(value));
            } else {
                li.className = "file";
                const a = document.createElement("a");
                a.href = value;
                a.target = "_blank";
                a.textContent = formatFileName(key);

                li.appendChild(a);
            }

            ul.appendChild(li);
        }

        return ul;
    };

    const fileStructure = {
        "Prad_staly": {
            "1_Źródla_energii_elektrycznej": {
                "Źródla_energii_elektrycznej.pdf": "Prad_staly/1_Źródla_energii_elektrycznej/Źródla_energii_elektrycznej.pdf"
            }
        },



        "Elektrostatyka": {
            "1_Sposoby_elektryzowania_cial": {
                "Elektryzowanie_cial_przez_tarcie_i_dotyk.pdf": "Elektrostatyka/1_Sposoby_elektryzowania_cial/Elektryzowanie_cial_przez_tarcie_i_dotyk.pdf",
                "Elektryzowanie_przez_indukcję,_zasada_zachowania_ladunku.pdf": "Elektrostatyka/1_Sposoby_elektryzowania_cial/Elektryzowanie_przez_indukcję,_zasada_zachowania_ladunku.pdf"
            },
            "2_Prawo_Coulomba": {},
            "Energia_potencjalna_pola_elektrostatycznego,_praca": {
                "Praca_w_polu_elektrostatycznym,_energia_potencjalna_pola_elektrost._2024.pdf": "Elektrostatyka/Energia_potencjalna_pola_elektrostatycznego,_praca/Praca_w_polu_elektrostatycznym,_energia_potencjalna_pola_elektrost._2024.pdf",
                "Zadania_-_Praca_w_polu_elektrostatycznym.pdf": "Elektrostatyka/Energia_potencjalna_pola_elektrostatycznego,_praca/Zadania_-_Praca_w_polu_elektrostatycznym.pdf"
            },
            "Kondensator": {
                "Energia_naladowanego_kondensatora.pdf": "Elektrostatyka/Kondensator/Energia_naladowanego_kondensatora.pdf",
                "Przewodnik_w_polu_elektrycznym,_kondensator.pdf": "Elektrostatyka/Kondensator/Przewodnik_w_polu_elektrycznym,_kondensator.pdf"
            },
            "Kondensator,_przewodnik_w_polu_elektrostatycznym": {
                "Przewodnik_w_polu_elektrycznym,_kondensator.pdf": "Elektrostatyka/Kondensator,_przewodnik_w_polu_elektrostatycznym/Przewodnik_w_polu_elektrycznym,_kondensator.pdf"
            },
            "Natężenie_pola_elektrostatycznego": {},
            "Potencjal_pola_elektrostatycznego": {
                "Potencjal_pola_elektrostatycznego_2024.pdf": "Elektrostatyka/Potencjal_pola_elektrostatycznego/Potencjal_pola_elektrostatycznego_2024.pdf",
                "Zadania_-_Potencjal_pola_elektrostatycznego_2024.pdf": "Elektrostatyka/Potencjal_pola_elektrostatycznego/Zadania_-_Potencjal_pola_elektrostatycznego_2024.pdf"
            },
            "Rozklad_ladunku_na_powierzchni_przewodnika": {
                "Rozklad_ladunku_na_powierzchni_przewodnika.pdf": "Elektrostatyka/Rozklad_ladunku_na_powierzchni_przewodnika/Rozklad_ladunku_na_powierzchni_przewodnika.pdf"
            },
            "Zadania_-_Powtórzenie_elektrostatyka.pdf": "Elektrostatyka/Zadania_-_Powtórzenie_elektrostatyka.pdf"
        },


        "Grawitacja": {}
    };

    const fileTreeContainer = document.getElementById("file-tree");
    fileTreeContainer.appendChild(createTree(fileStructure));
});