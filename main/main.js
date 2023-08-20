let body = document.getElementById("contenMain");
let main = document.getElementById("contenDiv");
let div = document.getElementById("divFlag");
let testConten = document.getElementById("contenModal");
let counter = 0;

function reload() {
  location.reload();
}

//Asignar atributos
function setAttributes(elemento, atrib) {
  for (const key in atrib) {
    elemento.setAttribute(key, atrib[key]);
  }
  return;
}
//Funcion Inicial - Api
const callApi = async () => {
  let call = await fetch("https://restcountries.com/v3.1/all");
  let resCall = await call.json();
  let sortCall = resCall.sort((a, b) => {
    const nameA = a.name.common.toLowerCase();
    const nameB = b.name.common.toLowerCase();
    if (nameA < nameB) {
      //se ubicara un lugar despues que nameB
      return -1;
    }
    if (nameA > nameB) {
      //se ubicara un lugar antes que nameB
      return 1;
    }
    return 0;
  });
  const noContenModal = async (param2) => {
    param2.style = `display:none`;

  };
  //Funcion para crear cada bandera
  const createFlag = async () => {
    sortCall.forEach((i) => {
      
      let contenFlag = document.createElement("div"); //contenedor de div1 y div2 (flag)
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let Hpais = document.createElement("h3");
      let Hpopulation = document.createElement("h4");
      let Hregion = document.createElement("h4");
      let Hcapital = document.createElement("h4");
   
      div.appendChild(contenFlag);
      contenFlag.appendChild(div1);
      contenFlag.appendChild(div2);
      div2.appendChild(Hpais);
      div2.appendChild(Hpopulation);
      div2.appendChild(Hregion);
      div2.appendChild(Hcapital);
      
      Hpais.innerText = `${i.name.common}`;
      Hpopulation.innerText = `Population: ${i.population}`;
      Hregion.innerText = `Region: ${i.region}`;
      Hcapital.innerText = `Capital: ${i.capital}`;

      div1.style = `width:100%;height:120px;background-image: url(${i.flags.svg});background-repeat:no-repeat;background-size:cover;background-position:center;cursor:pointer`;
      div2.style = `width:100%;height:140px;display:flex;flex-direction:column;justify-content:center;align-items:start;gap:5px`;
      contenFlag.classList.add("flag");
      div1.id = i.cca3;

      //Funcion Mostrar bandera - Detalle
      const deployFlag = async (param) => {
       
        let contenModal = document.createElement("div"); //ContentPrincipal
        let divClose = document.createElement("div"); //contentClose
        let imgSvg = document.createElement("div"); //close
        let modal = document.createElement("div"); //flex - column - center
        let div1 = document.createElement("div"); //Divname // flex - center
        let pais = document.createElement("h3"); //pais
        let div2 = document.createElement("div"); //BG-img bandera
        let div3 = document.createElement("div"); //info * 7 + DivBorder
        let div3_1 = document.createElement("div");
        let div3_2 = document.createElement("div");
        let deployHnameNative = document.createElement("h2");
        let deployHpoblacion = document.createElement("h4");
        let deployHregion = document.createElement("h4");
        let deployHsubregion = document.createElement("h4");
        let deployHcapital = document.createElement("h4");
        let deployHmoneda = document.createElement("h4");
        let deployHidioma = document.createElement("h4");
        let border = document.createElement("div"); //border o limites creados con un for
        let urlDeploy = ''
        param.forEach(urlSvg => {
          urlDeploy = urlSvg.flags.svg
          return urlDeploy
        });
        div2.style = `width:70%;height:250px;background-image: url(${urlDeploy});background-repeat:no-repeat;background-size:90%;background-position:center;cursor:pointer`;
        div1.style = `display:flex; flex-direction:row;justify-content:center`;
        div3.style = `display:flex;flex-direction:row`;
        divClose.style = `width:50%;display:flex;flex-direction:row;justify-content:end`;
        imgSvg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-rounded-x-filled" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm-1.489 7.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" fill="currentColor" stroke-width="0" />
  </svg>`;

        let nameOficial = "",
          nameNative = "",
          poblacion = "",
          region = "",
          subregion = "",
          capital = "",
          moneda = "",
          idioma = "",
          bill = "",
          lengua = [];

        param.forEach((a) => {
          const arrayBill = a.currencies;
          const arrayLeng = a.languages;

          for (const k1 in arrayBill) {
            bill = arrayBill[k1].name;
          }
          for (const k2 in arrayLeng) {
            lengua.push(` ${arrayLeng[k2]}`); //1 Espacio para aprovechar separacion de , en push.
          }
          nameOficial = a.name.official;
          nameNative = a.name.common;
          poblacion = a.population;
          region = a.region;
          subregion = a.subregion;
          capital = a.capital;
          moneda = bill;
          return a
        });//END forEach
        pais.innerText = `${nameOficial}`;
        body.appendChild(contenModal);
        contenModal.appendChild(divClose);
        divClose.appendChild(imgSvg);
        contenModal.appendChild(modal);
        modal.appendChild(div1);
        div1.appendChild(pais);
        modal.appendChild(div2);

        modal.appendChild(div3); //display flex - row
        div3.appendChild(div3_1);
        div3.appendChild(div3_2);
        div3_1.appendChild(deployHnameNative);
        deployHnameNative.innerText = `Native Name: ${nameNative}`;
        deployHpoblacion.innerText = `Population: ${poblacion}`;
        deployHregion.innerText = `Region: ${region}`;
        deployHsubregion.innerText = `Subregion: ${subregion}`;
        deployHcapital.innerText = `Capital: ${capital}`;
        deployHmoneda.innerText = `Currencies: ${moneda}`;
        deployHidioma.innerText = `Language: ${lengua}.`;

        div3_1.appendChild(deployHpoblacion);
        div3_1.appendChild(deployHregion);
        div3_1.appendChild(deployHsubregion);
        div3_1.appendChild(deployHcapital);
        div3_1.appendChild(deployHmoneda);
        div3_1.appendChild(deployHidioma);
        div3_2.appendChild(border);
        setAttributes(div2, { class: "deployFlag_Div2" });
        setAttributes(div3_1, { class: "div3_1" });
        setAttributes(border, { class: "div3_2_Border" });
        setAttributes(contenModal, { id: "contenModal" });
        setAttributes(modal, { class: "modal" });
        setAttributes(imgSvg, { id: "imgSvgClose", title: "Close" });
        setAttributes(pais, { class: "divPaisNameOfi" });
        setAttributes(deployHnameNative, { class: "divLetterModallose" });
        setAttributes(deployHpoblacion, { class: "divLetterModal" });
        setAttributes(deployHregion, { class: "divLetterModal" });
        setAttributes(deployHsubregion, { class: "divLetterModal" });
        setAttributes(deployHcapital, { class: "divLetterModal" });
        setAttributes(deployHmoneda, { class: "divLetterModal" });
        setAttributes(deployHidioma, { class: "divLetterModal" });

        const borderDiv3_2 = async (param1) => {
          for (const element of param1) {
            //obteniendo Borders [x1,x2,x3]
            let limite = element.borders;
            limite.forEach((i1) => {
              //iterando elemente -> border [x1] -> [x2] -> [x2]
              let DivBorder = document.createElement("div");
              DivBorder.innerText = `${i1}`;
              setAttributes(DivBorder, { class: "divBorder", id: `${i1}` });
              border.appendChild(DivBorder);
              DivBorder.addEventListener("click", (event) => {
                let idEventBorder = event.target.id;
                let selectBorder = sortCall.filter(
                  (i) => i.cca3 === idEventBorder
                );
                
                noContenModal(contenModal);
                deployFlag(selectBorder);
              });
            });
          }

        }; //END borderDiv3_2  ------------------------xX
        borderDiv3_2(param);

        imgSvg.addEventListener("click", () => {
          //reload()
          
          noContenModal(contenModal);
          //contenModal.style=`display:none`
        });
        return  //contenModal;

      }; //END deployFlag     ------------------------xX

      div1.addEventListener("click", (event) => {
        let idEvent = event.target.id;
        let result = sortCall.filter((i) => i.cca3 === idEvent);
        deployFlag(result);
      });
    }); //END forEach sortCall ------------------------xX
  }; //END createFlag   ------------------------xX
  createFlag();
}; //END callApi ------------------------xX

callApi();

//https://restcountries.com/v3.1/all
