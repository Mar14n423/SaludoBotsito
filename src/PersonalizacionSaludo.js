function saludar(nombre) {
    return nombre;
}

function edadPersona(edad, genero, idioma) {
    if (idioma === "ES") {
        if (edad > 30) {
            return genero === "F" ? "SRA" : "SR";
        } else {
            return genero === "F" ? "jovencita" : "joven";
        }
    } else if (idioma === "EN") {
        if (edad > 30) {
            return genero === "F" ? "Miss" : "Mister";
        } else {
            return genero === "F" ? "girl" : "boy";
        }
    } else if (idioma === "FR") { 
        if (edad > 30) {
            return genero === "F" ? "Madame" : "Monsieur";
        } else {
            return genero === "F" ? "jeune fille" : "jeune homme"; 
        }
    }
}
