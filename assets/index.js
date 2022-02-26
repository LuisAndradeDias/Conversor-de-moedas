const evento = document.querySelector('.html');
function Converter() {
    let valor1 = Number(document.querySelector('.valor1').value);
    let valor2 = document.querySelector('.valor2');
    if (valor1 != ' ') {

        let dropDown1 = document.querySelector('.moedas1');
        let dropDown1Select = dropDown1.options[dropDown1.selectedIndex].value;

        let dropDown2 = document.querySelector('.moedas2');
        let dropDown2Select = dropDown2.options[dropDown2.selectedIndex].value;


        /* REAL */
        if (dropDown1Select == 'Real Brasileiro' && dropDown2Select == "Dólar Americano") {
            let RealParaDólar = (valor1 / 5.26).toFixed(2);
            valor2.value = RealParaDólar;
        }
        else if (dropDown1Select == 'Real Brasileiro' && dropDown2Select == "Real Brasileiro") {
            valor2.value = valor1;
        }
        else if (dropDown1Select == 'Real Brasileiro' && dropDown2Select == "Euro") {
            let RealParaEuro = (valor1 / 6.19).toFixed(2);
            valor2.value = RealParaEuro;
        }
        else if (dropDown1Select == 'Real Brasileiro' && dropDown2Select == "Libra") {
            let RealParaLibra = (valor1 / 7.23).toFixed(2);
            valor2.value = RealParaLibra;
        }
        else if (dropDown1Select == 'Real Brasileiro' && dropDown2Select == "Iene Japonês") {
            let RealParaIeneJaponês = (valor1 / 0.048).toFixed(2);
            valor2.value = RealParaIeneJaponês;
        }
        else if (dropDown1Select == 'Real Brasileiro' && dropDown2Select == "Peso Argentino") {
            let RealParaPesoArgentino = (valor1 / 0.053).toFixed(2);
            valor2.value = RealParaPesoArgentino;
        }
        else if (dropDown1Select == 'Real Brasileiro' && dropDown2Select == "Franco Suiço") {
            let RealParaFrancoSuiço = (valor1 / 5.68).toFixed(2);
            valor2.value = RealParaFrancoSuiço;
        }
        else if (dropDown1Select == 'Real Brasileiro' && dropDown2Select == "Peso Uruguaio") {
            let RealParaPesoUruguaio = (valor1 / 0.12).toFixed(2);
            valor2.value = RealParaPesoUruguaio;
        }


        /* DÓLAR */
        if (dropDown1Select == 'Dólar Americano' && dropDown2Select == "Real Brasileiro") {
            let DólarParaReal = (valor1 / 0.19).toFixed(2);
            valor2.value = DólarParaReal;
        }
        if (dropDown1Select == 'Dólar Americano' && dropDown2Select == "Dólar Americano") {
            valor2.value = valor1;
        }
        else if (dropDown1Select == 'Dólar Americano' && dropDown2Select == "Euro") {
            let DólarParaEuro = (valor1 / 1.18).toFixed(2);
            valor2.value = DólarParaEuro;
        }
        else if (dropDown1Select == 'Dólar Americano' && dropDown2Select == "Libra") {
            let DólarParaLibra = (valor1 / 1.38).toFixed(2);
            valor2.value = DólarParaLibra;
        }
        else if (dropDown1Select == 'Dólar Americano' && dropDown2Select == "Iene Japonês") {
            let DólarParaIeneJaponês = (valor1 / 0.0091).toFixed(2);
            valor2.value = DólarParaIeneJaponês;
        }
        else if (dropDown1Select == 'Dólar Americano' && dropDown2Select == "Peso Argentino") {
            let DólarParaPesoArgentino = (valor1 / 0.01).toFixed(2);
            valor2.value = DólarParaPesoArgentino;
        }
        else if (dropDown1Select == 'Dólar Americano' && dropDown2Select == "Franco Suiço") {
            let DólarParaFrancoSuiço = (valor1 / 1.08).toFixed(2);
            valor2.value = DólarParaFrancoSuiço;
        }
        else if (dropDown1Select == 'Dólar Americano' && dropDown2Select == "Peso Uruguaio") {
            let DólarParaPesoUruguaio = (valor1 / 0.023).toFixed(2);
            valor2.value = DólarParaPesoUruguaio;
        }

        /* EURO */
        if (dropDown1Select == 'Euro' && dropDown2Select == "Real Brasileiro") {
            let EuroParaReal = (valor1 / 0.16).toFixed(2);
            valor2.value = EuroParaReal;
        }
        else if (dropDown1Select == 'Euro' && dropDown2Select == "Dólar Americano") {
            let EuroParaDólar = (valor1 / 0.85).toFixed(2);
            valor2.value = EuroParaDólar;
        }
        else if (dropDown1Select == 'Euro' && dropDown2Select == "Euro") {
            valor2.value = valor1;
        }
        else if (dropDown1Select == 'Euro' && dropDown2Select == "Libra") {
            let EuroParaLibra = (valor1 / 1.17).toFixed(2);
            valor2.value = EuroParaLibra;
        }
        else if (dropDown1Select == 'Euro' && dropDown2Select == "Iene Japonês") {
            let EuroParaIeneJaponês = (valor1 / 0.0077).toFixed(2);
            valor2.value = EuroParaIeneJaponês;
        }
        else if (dropDown1Select == 'Euro' && dropDown2Select == "Peso Argentino") {
            let EuroParaPesoArgentino = (valor1 / 0.0086).toFixed(2);
            valor2.value = EuroParaPesoArgentino;
        }
        else if (dropDown1Select == 'Euro' && dropDown2Select == "Franco Suiço") {
            let EuroParaFrancoSuiço = (valor1 / 0.92).toFixed(2);
            valor2.value = EuroParaFrancoSuiço;
        }
        else if (dropDown1Select == 'Euro' && dropDown2Select == "Peso Uruguaio") {
            let EuroParaPesoUruguaio = (valor1 / 0.02).toFixed(2);
            valor2.value = EuroParaPesoUruguaio;
        }


        /* LIBRA */
        if (dropDown1Select == 'Libra' && dropDown2Select == "Real Brasileiro") {
            let LibraParaReal = (valor1 / 0.14).toFixed(2);
            valor2.value = LibraParaReal;
        }
        else if (dropDown1Select == 'Libra' && dropDown2Select == "Dólar Americano") {
            let LibraParaDólar = (valor1 / 0.72).toFixed(2);
            valor2.value = LibraParaDólar;
        }
        else if (dropDown1Select == 'Libra' && dropDown2Select == "Euro") {
            let LibraParaEuro = (valor1 / 0.85).toFixed(2);
            valor2.value = LibraParaEuro;
        }
        else if (dropDown1Select == 'Libra' && dropDown2Select == "Libra") {
            valor2.value = valor1;
        }
        else if (dropDown1Select == 'Libra' && dropDown2Select == "Iene Japonês") {
            let LibraParaIeneJaponês = (valor1 / 0.0066).toFixed(2);
            valor2.value = LibraParaIeneJaponês;
        }
        else if (dropDown1Select == 'Libra' && dropDown2Select == "Peso Argentino") {
            let LibraParaPesoArgentino = (valor1 / 0.0074).toFixed(2);
            valor2.value = LibraParaPesoArgentino;
        }
        else if (dropDown1Select == 'Libra' && dropDown2Select == "Franco Suiço") {
            let LibraParaFrancoSuiço = (valor1 / 0.78).toFixed(2);
            valor2.value = LibraParaFrancoSuiço;
        }
        else if (dropDown1Select == 'Libra' && dropDown2Select == "Peso Uruguaio") {
            let LibraParaPesoUruguaio = (valor1 / 0.017).toFixed(2);
            valor2.value = LibraParaPesoUruguaio;
        }


        /* Iene Japonês */
        if (dropDown1Select == 'Iene Japonês' && dropDown2Select == "Real Brasileiro") {
            let IeneJaponêsParaReal = (valor1 / 20.95).toFixed(2);
            valor2.value = IeneJaponêsParaReal;
        }
        else if (dropDown1Select == 'Iene Japonês' && dropDown2Select == "Dólar Americano") {
            let IeneJaponêsParaDólar = (valor1 / 109.45).toFixed(2);
            valor2.value = IeneJaponêsParaDólar;
        }
        else if (dropDown1Select == 'Iene Japonês' && dropDown2Select == "Euro") {
            let IeneJaponêsParaEuro = (valor1 / 129.35).toFixed(2);
            valor2.value = IeneJaponêsParaEuro;
        }
        else if (dropDown1Select == 'Iene Japonês' && dropDown2Select == "Libra") {
            let IeneJaponêsParaLibra = (valor1 / 151.54).toFixed(2);
            valor2.value = IeneJaponêsParaLibra;
        }
        else if (dropDown1Select == 'Iene Japonês' && dropDown2Select == "Iene Japonês") {
            valor2.value = valor1;
        }
        else if (dropDown1Select == 'Iene Japonês' && dropDown2Select == "Peso Argentino") {
            let IeneJaponêsParaPesoArgentino = (valor1 / 1.11).toFixed(2);
            valor2.value = IeneJaponêsParaPesoArgentino;
        }
        else if (dropDown1Select == 'Iene Japonês' && dropDown2Select == "Franco Suiço") {
            let IeneJaponêsParaFrancoSuiço = (valor1 / 118.43).toFixed(2);
            valor2.value = IeneJaponêsParaFrancoSuiço;
        }
        else if (dropDown1Select == 'Iene Japonês' && dropDown2Select == "Peso Uruguaio") {
            let IeneJaponêsParaPesoUruguaio = (valor1 / 2.5457).toFixed(2);
            valor2.value = IeneJaponêsParaPesoUruguaio;
        }


        /* PESO ARGENTINO */
        if (dropDown1Select == 'Peso Argentino' && dropDown2Select == "Real Brasileiro") {
            let PesoArgentinoParaReal = (valor1 / 18.8).toFixed(2);
            valor2.value = PesoArgentinoParaReal;
        }
        else if (dropDown1Select == 'Peso Argentino' && dropDown2Select == "Dólar Americano") {
            let PesoArgentinoParaDólar = (valor1 / 98.19).toFixed(2);
            valor2.value = PesoArgentinoParaDólar;
        }
        else if (dropDown1Select == 'Peso Argentino' && dropDown2Select == "Euro") {
            let PesoArgentinoParaEuro = (valor1 / 116.00).toFixed(2);
            valor2.value = PesoArgentinoParaEuro;
        }
        else if (dropDown1Select == 'Peso Argentino' && dropDown2Select == "Libra") {
            let PesoArgentinoParaLibra = (valor1 / 135.93).toFixed(2);
            valor2.value = PesoArgentinoParaLibra;
        }
        else if (dropDown1Select == 'Peso Argentino' && dropDown2Select == "Iene Japonês") {
            let PesoArgentinoParaIeneJaponês = (valor1 / 0.9).toFixed(2);
            valor2.value = PesoArgentinoParaIeneJaponês;
        }
        else if (dropDown1Select == 'Peso Argentino' && dropDown2Select == "Peso Argentino") {
            valor2.value = valor1;
        }
        else if (dropDown1Select == 'Peso Argentino' && dropDown2Select == "Franco Suiço") {
            let PesoArgentinoParaFrancoSuiço = (valor1 / 106.17).toFixed(2);
            valor2.value = PesoArgentinoParaFrancoSuiço;
        }
        else if (dropDown1Select == 'Peso Argentino' && dropDown2Select == "Peso Uruguaio") {
            valor2.value = valor1;
        }


        /* Franco Suiço */
        if (dropDown1Select == "Franco Suiço" && dropDown2Select == "Real Brasileiro") {
            let FrancoSuiçoParaReal = (valor1 / 0.18).toFixed(2);
            valor2.value = FrancoSuiçoParaReal;
        }
        else if (dropDown1Select == "Franco Suiço" && dropDown2Select == "Dólar Americano") {
            let FrancoSuiçoParaDólar = (valor1 / 0.93).toFixed(2);
            valor2.value = FrancoSuiçoParaDólar;
        }
        else if (dropDown1Select == "Franco Suiço" && dropDown2Select == "Euro") {
            let FrancoSuiçoParaEuro = (valor1 / 1.09).toFixed(2);
            valor2.value = FrancoSuiçoParaEuro;
        }
        else if (dropDown1Select == "Franco Suiço" && dropDown2Select == "Libra") {
            let FrancoSuiçoParaLibra = (valor1 / 1.28).toFixed(2);
            valor2.value = FrancoSuiçoParaLibra;
        }
        else if (dropDown1Select == "Franco Suiço" && dropDown2Select == "Iene Japonês") {
            let FrancoSuiçoParaIeneJaponês = (valor1 / 0.0084).toFixed(2);
            valor2.value = FrancoSuiçoParaIeneJaponês;
        }
        else if (dropDown1Select == "Franco Suiço" && dropDown2Select == "Peso Argentino") {
            let FrancoSuiçoParPesoArgentino = (valor1 / 0.0094).toFixed(2);
            valor2.value = FrancoSuiçoParPesoArgentino;
        }
        else if (dropDown1Select == "Franco Suiço" && dropDown2Select == "Franco Suiço") {
            valor2.value = valor1;
        }
        else if (dropDown1Select == "Franco Suiço" && dropDown2Select == "Peso Uruguaio") {
            let FrancoSuiçoParaPesoUruguaio = (valor1 / 0.022).toFixed(2);
            valor2.value = FrancoSuiçoParaPesoUruguaio;
        }


        /* PESO CUBANO */
        if (dropDown1Select == 'Peso Uruguaio' && dropDown2Select == "Real Brasileiro") {
            let PesoUruguaioParaReal = (valor1 / 8.12).toFixed(2);
            valor2.value = PesoUruguaioParaReal;
        }
        else if (dropDown1Select == "Peso Uruguaio" && dropDown2Select == "Dólar Americano") {
            let PesoUruguaioParaDólar = (valor1 / 42.65).toFixed(2);
            valor2.value = PesoUruguaioParaDólar;
        }
        else if (dropDown1Select == "Peso Uruguaio" && dropDown2Select == "Euro") {
            let PesoUruguaioParaEuro = (valor1 / 50.15).toFixed(2);
            valor2.value = PesoUruguaioParaEuro;
        }
        else if (dropDown1Select == "Peso Uruguaio" && dropDown2Select == "Libra") {
            let PesoUruguaioParaLibra = (valor1 / 58.78).toFixed(2);
            valor2.value = PesoUruguaioParaLibra;
        }
        else if (dropDown1Select == "Peso Uruguaio" && dropDown2Select == "Iene Japonês") {
            let PesoUruguaioParaIeneJaponês = (valor1 / 0.39).toFixed(2);
            valor2.value = PesoUruguaioParaIeneJaponês;
        }
        else if (dropDown1Select == "Peso Uruguaio" && dropDown2Select == "Peso Argentino") {
            let PesoUruguaioParPesoArgentino = (valor1 / 0.43).toFixed(2);
            valor2.value = PesoUruguaioParPesoArgentino;
        }
        else if (dropDown1Select == "Peso Uruguaio" && dropDown2Select == "Franco Suiço") {
            let PesoUruguaioParaFrancoSuiço = (valor1 / 46.09).toFixed(2);
            valor2.value = PesoUruguaioParaFrancoSuiço;
        }
        else if (dropDown1Select == "Peso Uruguaio" && dropDown2Select == "Peso Uruguaio") {
            valor2.value = valor1;
        }
    }
    else if (valor1 = ' ') {
        valor2.value = ' ';
    }
}



let teste1 = document.querySelector('.teste')
let divpais1 = document.querySelector('.svg-pais1');
let divpais2 = document.querySelector('.svg-pais2');
function funçãoEvento() {

    let dropDown1 = document.querySelector('.moedas1');
    let dropDown1Select = dropDown1.options[dropDown1.selectedIndex].value;

    let dropDown2 = document.querySelector('.moedas2');
    let dropDown2Select = dropDown2.options[dropDown2.selectedIndex].value;
    /* DROPDOWN1 */
    if (dropDown1Select == "Real Brasileiro") {
        divpais1.innerHTML = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#00C068"></circle><path fill="#F7DF01" d="M16.111 5L1 15.667l15.111 10.666 15.111-10.666L16.112 5z"></path><path fill="#08E" d="M16 22.222a6.222 6.222 0 1 0 0-12.444 6.222 6.222 0 0 0 0 12.444z"></path></g></svg>`
    }
    else if (dropDown1Select == "Dólar Americano") {
        divpais1.innerHTML = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
        <defs>
            <path id="a" d="M16 0C7.163 0 0 7.163 0 16h16V0z"></path>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <circle cx="16" cy="16" r="16" fill="#FFF"></circle>
            <path fill="#E80000"
                d="M16 7.467h13.537a16.068 16.068 0 0 0-1.94-2.49H16v2.49zM16 0c3.154 0 6.096.913 8.574 2.489H16V0zm0 12.444h15.604a15.877 15.877 0 0 0-.785-2.488H16v2.488zM0 16c0 .48.021.954.062 1.422h31.876a16.207 16.207 0 0 0 .027-2.489H16V16H0zm31.519 3.911c-.216.86-.502 1.691-.85 2.489H1.33a15.879 15.879 0 0 1-.85-2.489h31.04zm-2.213 4.978a16.08 16.08 0 0 1-2.057 2.489H4.751a16.08 16.08 0 0 1-2.057-2.49h26.612zm-5.318 4.978A15.926 15.926 0 0 1 16 32c-2.91 0-5.637-.776-7.988-2.133h15.976z">
            </path>
            <mask id="b" fill="#fff">
                <use xlink:href="#a"></use>
            </mask>
            <use fill="#0039D2" xlink:href="#a"></use>
            <g fill="#FFF" mask="url(#b)">
                <path
                    d="M12.686 4.404l-1.053.574.201-1.215-.852-.86 1.177-.177.527-1.105.527 1.105 1.177.177-.852.86.201 1.215zm.018 4.61l-1.053.573.201-1.214-.852-.86 1.178-.177.526-1.105.527 1.105 1.177.177-.852.86.201 1.214zm0 5l-1.053.573.201-1.214-.852-.86 1.178-.177.526-1.105.527 1.105 1.177.177-.852.86.201 1.214zm-5.928-5l-1.053.573.201-1.214-.852-.86 1.178-.177.526-1.105.527 1.105 1.178.177-.852.86.2 1.214zm-5.612 0L.11 9.587l.201-1.214-.852-.86 1.178-.177.527-1.105.526 1.105 1.178.177-.852.86.2 1.214zm5.594-4.61l-1.053.574.201-1.215-.852-.86 1.178-.177.526-1.105.527 1.105 1.178.177-.853.86.202 1.215zm-5.054-.39l-1.053.573.201-1.214L0 2.513l1.178-.177.526-1.105.527 1.105 1.177.177-.852.86.201 1.214zm5.072 10l-1.053.573.201-1.214-.852-.86 1.178-.177.526-1.105.527 1.105 1.178.177-.852.86.2 1.214zm-5.612 0l-1.054.573.201-1.214-.852-.86 1.178-.177.527-1.105.526 1.105 1.178.177-.852.86.2 1.214z">
                </path>
            </g>
        </g>
    </svg>`;
    }
    else if (dropDown1Select == "Euro") {
        divpais1.innerHTML = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><g fill="none" fill-rule="evenodd"><circle cx="90" cy="90" r="90" fill="#039"></circle><path fill="#F2C500" d="M90 57.145l-4.702 2.626.898-5.563-3.804-3.94 5.257-.812L90 44.395l2.351 5.061 5.257.812-3.804 3.94.898 5.563L90 57.145zm16.428 4.401l-5.386-.076 3.56-4.369-1.325-5.314 4.959 1.925 4.567-3.207-.495 5.559 4.147 3.331-5.264 1.51-2.004 5.267-2.76-4.626zm12.026 12.026l-4.626-2.759 5.267-2.004 1.51-5.264 3.331 4.147 5.56-.495-3.208 4.567 1.925 4.96-5.314-1.326-4.369 3.56-.076-5.386zM122.855 90l-2.626-4.702 5.563.898 3.94-3.804.812 5.257L135.605 90l-5.061 2.351-.812 5.257-3.94-3.804-5.563.898L122.855 90zm-4.401 16.428l.076-5.386 4.369 3.56 5.314-1.325-1.925 4.959 3.207 4.567-5.559-.495-3.331 4.147-1.51-5.264-5.267-2.004 4.626-2.76zm-12.026 12.026l2.759-4.626 2.004 5.267 5.264 1.51-4.147 3.331.495 5.56-4.567-3.208-4.96 1.925 1.326-5.314-3.56-4.369 5.386-.076zM90 122.855l4.702-2.626-.898 5.563 3.804 3.94-5.257.812L90 135.605l-2.351-5.061-5.257-.812 3.804-3.94-.898-5.563L90 122.855zm-16.428-4.401l5.386.076-3.56 4.369 1.325 5.314-4.959-1.925-4.567 3.207.495-5.559-4.147-3.331 5.264-1.51 2.004-5.267 2.76 4.626zm-12.026-12.026l4.626 2.759-5.267 2.004-1.51 5.264-3.331-4.147-5.56.495 3.208-4.567-1.925-4.96 5.314 1.326 4.369-3.56.076 5.386zM57.145 90l2.626 4.702-5.563-.898-3.94 3.804-.812-5.257L44.395 90l5.061-2.351.812-5.257 3.94 3.804 5.563-.898L57.145 90zm4.401-16.428l-.076 5.386-4.369-3.56-5.314 1.325 1.925-4.959-3.207-4.567 5.559.495 3.331-4.147 1.51 5.264 5.267 2.004-4.626 2.76zm12.026-12.026l-2.759 4.626-2.004-5.267-5.264-1.51 4.147-3.331-.495-5.56 4.567 3.208 4.96-1.925-1.326 5.314 3.56 4.369-5.386.076z"></path></g></svg>`
    }
    else if (dropDown1Select == "Libra") {
        divpais1.innerHTML = `<svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><g fill="none" fill-rule="evenodd"><circle cx="90" cy="90" r="90" fill="#0058B4"></circle><path fill="#FFF" d="M37.219 17.094L90 69.875l52.781-52.781a90.518 90.518 0 0 1 20.125 20.125L110.125 90l52.781 52.781a90.518 90.518 0 0 1-20.125 20.125L90 110.125l-52.781 52.781a90.518 90.518 0 0 1-20.125-20.125L69.875 90 17.094 37.219a90.518 90.518 0 0 1 20.125-20.125z"></path><path fill="#FF381C" d="M161.136 145.14L114.921 98H99.3l54.55 55.428a90.51 90.51 0 0 0 7.285-8.288zM34.731 161.035L96 99H80l-53.803 54.476a90.516 90.516 0 0 0 8.534 7.56zM153.745 26.466L102.5 78.125H88l58.065-58.533a90.524 90.524 0 0 1 7.68 6.874zM18.948 34.752L59.042 75h15.73L26.32 26.4a90.514 90.514 0 0 0-7.372 8.352z"></path><path fill="#FFF" d="M70 2.23V70H2.23A90.296 90.296 0 0 0 0 90c0 6.874.77 13.568 2.23 20H70v67.77A90.296 90.296 0 0 0 90 180c6.874 0 13.568-.77 20-2.23V110h67.77A90.296 90.296 0 0 0 180 90c0-6.874-.77-13.568-2.23-20H110V2.23A90.296 90.296 0 0 0 90 0c-6.874 0-13.568.77-20 2.23z"></path><path fill="#FF381C" d="M75 1.244V75H1.244A90.609 90.609 0 0 0 0 90c0 5.11.426 10.122 1.244 15H75v73.756A90.609 90.609 0 0 0 90 180c5.11 0 10.122-.426 15-1.244V105h73.756A90.609 90.609 0 0 0 180 90c0-5.11-.426-10.122-1.244-15H105V1.244A90.609 90.609 0 0 0 90 0c-5.11 0-10.122.426-15 1.244z"></path></g></svg>`
    }
    else if (dropDown1Select == "Iene Japonês") {
        divpais1.innerHTML = `<svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><circle cx="36" cy="36" r="36" fill="#FFF" transform="matrix(1 0 0 -1 0 72)"></circle><circle cx="36" cy="36" r="18" fill="#E94B35"></circle></g></svg>`
    }
    else if (dropDown1Select == "Peso Argentino") {
        divpais1.innerHTML = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" fill="#f0f0f0"></circle><g fill="#338af3"><path d="M256 0C154.506 0 66.81 59.065 25.402 144.696h461.195C445.19 59.065 357.493 0 256 0zM256 512c101.493 0 189.19-59.065 230.598-144.696H25.402C66.81 452.935 154.506 512 256 512z"></path></g><path fill="#ffda44" d="M332.515 256l-31.265 14.707 16.649 30.279-33.95-6.495-4.302 34.296L256 303.563l-23.648 25.224-4.301-34.296-33.95 6.494 16.648-30.279L179.485 256l31.265-14.707-16.649-30.278 33.949 6.494 4.303-34.296L256 208.437l23.648-25.224 4.301 34.296 33.951-6.494-16.649 30.279z"></path></svg>`
    }
    else if (dropDown1Select == "Franco Suiço") {
        divpais1.innerHTML = `<svg width="28" height="28" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg"><title>Flag/switzeland</title><g fill="none" fill-rule="evenodd"><circle fill="#FF381C" cx="90" cy="90" r="90"></circle><path fill="#FFF" d="M75 75V30h30v45h45v30h-45v45H75v-45H30V75z"></path></g></svg>`
    }
    else if (dropDown1Select == "Peso Uruguaio") {
        divpais1.innerHTML = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" fill="#f0f0f0"></circle><path d="M256 189.217h247.181a254.559 254.559 0 0 0-28.755-66.783H256v66.783z" fill="#338af3"></path><g fill="#338af3"><path d="M96.643 456.348h318.713a257.293 257.293 0 0 0 59.069-66.783H37.574a257.346 257.346 0 0 0 59.069 66.783zM256 0v55.652h159.357C371.627 20.824 316.249 0 256 0z"></path></g><path d="M256 189.217h247.181a254.559 254.559 0 0 0-28.755-66.783H256v66.783zM0 256c0 23.107 3.08 45.489 8.819 66.783h494.363C508.92 301.489 512 279.107 512 256H0z" fill="#338af3"></path><path fill="#ffda44" d="M222.609 149.821l-31.266 14.707 16.649 30.28-33.95-6.494-4.302 34.295-23.646-25.224-23.648 25.224-4.301-34.295-33.95 6.492 16.648-30.279-31.264-14.706 31.265-14.705-16.649-30.28 33.949 6.494 4.303-34.295 23.647 25.224 23.647-25.224 4.301 34.295 33.951-6.494-16.649 30.281z"></path></svg>`
    }

    /* DROPDOWN2 */
    if (dropDown2Select == "Real Brasileiro") {
        divpais2.innerHTML = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#00C068"></circle><path fill="#F7DF01" d="M16.111 5L1 15.667l15.111 10.666 15.111-10.666L16.112 5z"></path><path fill="#08E" d="M16 22.222a6.222 6.222 0 1 0 0-12.444 6.222 6.222 0 0 0 0 12.444z"></path></g></svg>`
    }
    else if (dropDown2Select == "Dólar Americano") {
        divpais2.innerHTML = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
        <defs>
            <path id="a" d="M16 0C7.163 0 0 7.163 0 16h16V0z"></path>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <circle cx="16" cy="16" r="16" fill="#FFF"></circle>
            <path fill="#E80000"
                d="M16 7.467h13.537a16.068 16.068 0 0 0-1.94-2.49H16v2.49zM16 0c3.154 0 6.096.913 8.574 2.489H16V0zm0 12.444h15.604a15.877 15.877 0 0 0-.785-2.488H16v2.488zM0 16c0 .48.021.954.062 1.422h31.876a16.207 16.207 0 0 0 .027-2.489H16V16H0zm31.519 3.911c-.216.86-.502 1.691-.85 2.489H1.33a15.879 15.879 0 0 1-.85-2.489h31.04zm-2.213 4.978a16.08 16.08 0 0 1-2.057 2.489H4.751a16.08 16.08 0 0 1-2.057-2.49h26.612zm-5.318 4.978A15.926 15.926 0 0 1 16 32c-2.91 0-5.637-.776-7.988-2.133h15.976z">
            </path>
            <mask id="b" fill="#fff">
                <use xlink:href="#a"></use>
            </mask>
            <use fill="#0039D2" xlink:href="#a"></use>
            <g fill="#FFF" mask="url(#b)">
                <path
                    d="M12.686 4.404l-1.053.574.201-1.215-.852-.86 1.177-.177.527-1.105.527 1.105 1.177.177-.852.86.201 1.215zm.018 4.61l-1.053.573.201-1.214-.852-.86 1.178-.177.526-1.105.527 1.105 1.177.177-.852.86.201 1.214zm0 5l-1.053.573.201-1.214-.852-.86 1.178-.177.526-1.105.527 1.105 1.177.177-.852.86.201 1.214zm-5.928-5l-1.053.573.201-1.214-.852-.86 1.178-.177.526-1.105.527 1.105 1.178.177-.852.86.2 1.214zm-5.612 0L.11 9.587l.201-1.214-.852-.86 1.178-.177.527-1.105.526 1.105 1.178.177-.852.86.2 1.214zm5.594-4.61l-1.053.574.201-1.215-.852-.86 1.178-.177.526-1.105.527 1.105 1.178.177-.853.86.202 1.215zm-5.054-.39l-1.053.573.201-1.214L0 2.513l1.178-.177.526-1.105.527 1.105 1.177.177-.852.86.201 1.214zm5.072 10l-1.053.573.201-1.214-.852-.86 1.178-.177.526-1.105.527 1.105 1.178.177-.852.86.2 1.214zm-5.612 0l-1.054.573.201-1.214-.852-.86 1.178-.177.527-1.105.526 1.105 1.178.177-.852.86.2 1.214z">
                </path>
            </g>
        </g>
    </svg>`;
    }
    else if (dropDown2Select == "Euro") {
        divpais2.innerHTML = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><g fill="none" fill-rule="evenodd"><circle cx="90" cy="90" r="90" fill="#039"></circle><path fill="#F2C500" d="M90 57.145l-4.702 2.626.898-5.563-3.804-3.94 5.257-.812L90 44.395l2.351 5.061 5.257.812-3.804 3.94.898 5.563L90 57.145zm16.428 4.401l-5.386-.076 3.56-4.369-1.325-5.314 4.959 1.925 4.567-3.207-.495 5.559 4.147 3.331-5.264 1.51-2.004 5.267-2.76-4.626zm12.026 12.026l-4.626-2.759 5.267-2.004 1.51-5.264 3.331 4.147 5.56-.495-3.208 4.567 1.925 4.96-5.314-1.326-4.369 3.56-.076-5.386zM122.855 90l-2.626-4.702 5.563.898 3.94-3.804.812 5.257L135.605 90l-5.061 2.351-.812 5.257-3.94-3.804-5.563.898L122.855 90zm-4.401 16.428l.076-5.386 4.369 3.56 5.314-1.325-1.925 4.959 3.207 4.567-5.559-.495-3.331 4.147-1.51-5.264-5.267-2.004 4.626-2.76zm-12.026 12.026l2.759-4.626 2.004 5.267 5.264 1.51-4.147 3.331.495 5.56-4.567-3.208-4.96 1.925 1.326-5.314-3.56-4.369 5.386-.076zM90 122.855l4.702-2.626-.898 5.563 3.804 3.94-5.257.812L90 135.605l-2.351-5.061-5.257-.812 3.804-3.94-.898-5.563L90 122.855zm-16.428-4.401l5.386.076-3.56 4.369 1.325 5.314-4.959-1.925-4.567 3.207.495-5.559-4.147-3.331 5.264-1.51 2.004-5.267 2.76 4.626zm-12.026-12.026l4.626 2.759-5.267 2.004-1.51 5.264-3.331-4.147-5.56.495 3.208-4.567-1.925-4.96 5.314 1.326 4.369-3.56.076 5.386zM57.145 90l2.626 4.702-5.563-.898-3.94 3.804-.812-5.257L44.395 90l5.061-2.351.812-5.257 3.94 3.804 5.563-.898L57.145 90zm4.401-16.428l-.076 5.386-4.369-3.56-5.314 1.325 1.925-4.959-3.207-4.567 5.559.495 3.331-4.147 1.51 5.264 5.267 2.004-4.626 2.76zm12.026-12.026l-2.759 4.626-2.004-5.267-5.264-1.51 4.147-3.331-.495-5.56 4.567 3.208 4.96-1.925-1.326 5.314 3.56 4.369-5.386.076z"></path></g></svg>`;
    }
    else if (dropDown2Select == "Libra") {
        divpais2.innerHTML = `<svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><g fill="none" fill-rule="evenodd"><circle cx="90" cy="90" r="90" fill="#0058B4"></circle><path fill="#FFF" d="M37.219 17.094L90 69.875l52.781-52.781a90.518 90.518 0 0 1 20.125 20.125L110.125 90l52.781 52.781a90.518 90.518 0 0 1-20.125 20.125L90 110.125l-52.781 52.781a90.518 90.518 0 0 1-20.125-20.125L69.875 90 17.094 37.219a90.518 90.518 0 0 1 20.125-20.125z"></path><path fill="#FF381C" d="M161.136 145.14L114.921 98H99.3l54.55 55.428a90.51 90.51 0 0 0 7.285-8.288zM34.731 161.035L96 99H80l-53.803 54.476a90.516 90.516 0 0 0 8.534 7.56zM153.745 26.466L102.5 78.125H88l58.065-58.533a90.524 90.524 0 0 1 7.68 6.874zM18.948 34.752L59.042 75h15.73L26.32 26.4a90.514 90.514 0 0 0-7.372 8.352z"></path><path fill="#FFF" d="M70 2.23V70H2.23A90.296 90.296 0 0 0 0 90c0 6.874.77 13.568 2.23 20H70v67.77A90.296 90.296 0 0 0 90 180c6.874 0 13.568-.77 20-2.23V110h67.77A90.296 90.296 0 0 0 180 90c0-6.874-.77-13.568-2.23-20H110V2.23A90.296 90.296 0 0 0 90 0c-6.874 0-13.568.77-20 2.23z"></path><path fill="#FF381C" d="M75 1.244V75H1.244A90.609 90.609 0 0 0 0 90c0 5.11.426 10.122 1.244 15H75v73.756A90.609 90.609 0 0 0 90 180c5.11 0 10.122-.426 15-1.244V105h73.756A90.609 90.609 0 0 0 180 90c0-5.11-.426-10.122-1.244-15H105V1.244A90.609 90.609 0 0 0 90 0c-5.11 0-10.122.426-15 1.244z"></path></g></svg>`;
    }
    else if (dropDown2Select == "Iene Japonês") {
        divpais2.innerHTML = `<svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><circle cx="36" cy="36" r="36" fill="#FFF" transform="matrix(1 0 0 -1 0 72)"></circle><circle cx="36" cy="36" r="18" fill="#E94B35"></circle></g></svg>`
    }
    else if (dropDown2Select == "Peso Argentino") {
        divpais2.innerHTML = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" fill="#f0f0f0"></circle><g fill="#338af3"><path d="M256 0C154.506 0 66.81 59.065 25.402 144.696h461.195C445.19 59.065 357.493 0 256 0zM256 512c101.493 0 189.19-59.065 230.598-144.696H25.402C66.81 452.935 154.506 512 256 512z"></path></g><path fill="#ffda44" d="M332.515 256l-31.265 14.707 16.649 30.279-33.95-6.495-4.302 34.296L256 303.563l-23.648 25.224-4.301-34.296-33.95 6.494 16.648-30.279L179.485 256l31.265-14.707-16.649-30.278 33.949 6.494 4.303-34.296L256 208.437l23.648-25.224 4.301 34.296 33.951-6.494-16.649 30.279z"></path></svg>`;
    }
    else if (dropDown2Select == "Franco Suiço") {
        divpais2.innerHTML = `<svg width="28" height="28" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg"><title>Flag/switzeland</title><g fill="none" fill-rule="evenodd"><circle fill="#FF381C" cx="90" cy="90" r="90"></circle><path fill="#FFF" d="M75 75V30h30v45h45v30h-45v45H75v-45H30V75z"></path></g></svg>`
    }
    else if (dropDown2Select == "Peso Uruguaio") {
        divpais2.innerHTML = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" fill="#f0f0f0"></circle><path d="M256 189.217h247.181a254.559 254.559 0 0 0-28.755-66.783H256v66.783z" fill="#338af3"></path><g fill="#338af3"><path d="M96.643 456.348h318.713a257.293 257.293 0 0 0 59.069-66.783H37.574a257.346 257.346 0 0 0 59.069 66.783zM256 0v55.652h159.357C371.627 20.824 316.249 0 256 0z"></path></g><path d="M256 189.217h247.181a254.559 254.559 0 0 0-28.755-66.783H256v66.783zM0 256c0 23.107 3.08 45.489 8.819 66.783h494.363C508.92 301.489 512 279.107 512 256H0z" fill="#338af3"></path><path fill="#ffda44" d="M222.609 149.821l-31.266 14.707 16.649 30.28-33.95-6.494-4.302 34.295-23.646-25.224-23.648 25.224-4.301-34.295-33.95 6.492 16.648-30.279-31.264-14.706 31.265-14.705-16.649-30.28 33.949 6.494 4.303-34.295 23.647 25.224 23.647-25.224 4.301 34.295 33.951-6.494-16.649 30.281z"></path></svg>`;
    }
}
evento.addEventListener('mousemove', funçãoEvento);
evento.addEventListener('click', funçãoEvento);
evento.addEventListener('keydown', Converter);
evento.addEventListener('keyup', Converter);