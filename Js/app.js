let VariedadSeleccionable = prompt(
  "Elegi el tipo de producto para mas opciones o indica si solo queres navegar por el sitio. Tenes disponible Setas, Propagacion y alcoholaturas"
).toLowerCase();

/* const salir = ("salir", "terminar compra", "volver"); */

while (VariedadSeleccionable != "navegar") {
  if (VariedadSeleccionable == "setas") {
    alert("Seleccionaste la opcion de Setas");
    let SetasSeleccion = prompt(
      "Podes Elegir entre Ganoderma Lucidum (Reishi), Hericium Erinaceus (Melena de Leon) y Cordiceps Militaris o cancelar/salir"
    ).toLowerCase();
    if (SetasSeleccion == "cancelar" || SetasSeleccion == "salir") {
      break;
    } else {
      while (
        SetasSeleccion != "ganoderma lucidum" ||
        SetasSeleccion != "reishi" ||
        SetasSeleccion != "hericium erinaceus" ||
        SetasSeleccion != "melena de leon" ||
        SetasSeleccion != "cordiceps militaris"
      ) {
        switch (SetasSeleccion) {
          case "ganoderma lucidum":
          case "reishi":
            alert("Felicitaciones: Compraste 1 unidad de Ganoderma Lucidum");
            break;
          case "hericium erinaceum":
          case "melena de leon":
            alert("Felicitaciones: Compraste 1 unidad de Hericium Erinaceus");
            break;
          case "cordiceps militaris":
          case "cordiceps":
            alert("Felicitaciones: Compraste 1 unidad de Cordiceps Militaris");
            break;
          default:
            alert("Ingresa una variedad que tengamos en stock");
            break;
        }

        SetasSeleccion = prompt(
          "Segui eligiendo entre Ganoderma Lucidum (Reishi), Hericium Erinaceus (Melena de Leon) y Cordiceps Militaris o cancelar/salir"
        ).toLowerCase();

        if (
          SetasSeleccion == "salir" ||
          SetasSeleccion == "terminar compra" ||
          SetasSeleccion == "cancelar"
        ) {
          break;
        }
      }
    }
  } else if (VariedadSeleccionable == "propagacion") {
    alert("Seleccionaste la opcion de Propagacion");
    let PropagacionSeleccion = prompt(
      "Podes Elegir entre Placas Petri (PP), Liquid Culture (LC), Grain Spawn (GS) o cancelar/salir"
    ).toLowerCase();
    if (PropagacionSeleccion == "salir" || PropagacionSeleccion == "cancelar") {
      break;
    } else {
      while (
        PropagacionSeleccion != "liquid Culture" ||
        PropagacionSeleccion != "lc" ||
        PropagacionSeleccion != "grain spawn" ||
        PropagacionSeleccion != "gs" ||
        PropagacionSeleccion != "placas petri" ||
        PropagacionSeleccion != "pp"
      ) {
        switch (PropagacionSeleccion) {
          case "liquid culture":
          case "lc":
            alert(
              "Felicitaciones: Compraste 1 Unidad de 10 ml de Liquid Culture"
            );
            break;
          case "placas petri":
          case "pp":
          case "petri plate":
            alert("Felicitaciones: Compraste 1 Unidad Placa Petri");
            break;
          case "grain spawn":
          case "gs":
            alert(
              "Felicitaciones: Compraste 1 Unidad de Bolsa de 1 Kg. de Grain Spawn"
            );
            break;
          default:
            alert("Elegi un producto que este en stock");
            break;
        }
        PropagacionSeleccion = prompt(
          "Segui elegiendo entre Placas Petri (PP), Liquid Culture (LC), Grain Spawn (GS) o cancelar/salir/terminar compra"
        ).toLowerCase();
        if (
          PropagacionSeleccion == "salir" ||
          PropagacionSeleccion == "cancelar" ||
          PropagacionSeleccion == "terminar compra"
        ) {
          break;
        }
      }
    }
  } else if (VariedadSeleccionable == "alcoholaturas") {
    alert("Seleccionaste la opcion de Alcoholaturas");
    let AlcoholaturaSeleccion = prompt(
      "Podes elegir Alcoholaturas de Ganoderma Lucidum de 50ml, Hericium Erinaceus de 50ml y Cordiceps Militaris de 50ml o cancelar/salir"
    ).toLowerCase();
    if (
      AlcoholaturaSeleccion == "cancelar" ||
      AlcoholaturaSeleccion == "salir"
    ) {
      break;
    } else {
      while (
        AlcoholaturaSeleccion != "ganoderma lucidum" ||
        AlcoholaturaSeleccion != "reishi" ||
        AlcoholaturaSeleccion != "hericium erinaceus" ||
        AlcoholaturaSeleccion != "melena de leon" ||
        AlcoholaturaSeleccion != "cordiceps militaris"
      ) {
        switch (AlcoholaturaSeleccion) {
          case "ganoderma lucidum":
          case "reishi":
            alert(
              "Felicitaciones: Compraste 1 unidad de tintura de Ganoderma Lucidum de 50ml"
            );
            break;
          case "hericium erinaceus":
          case "melena de leon":
            alert(
              "Felicitaciones: Compraste 1 unidad de tintura de Hericium Erinaceus de 50ml"
            );
            break;
          case "cordiceps militaris":
          case "cordiceps":
            alert(
              "Felicitaciones: Compraste 1 unidad de tintura de Cordiceps Militaris de 50ml"
            );
            break;
          default:
            alert("Elegi un producto que este en stock");
            break;
        }
        AlcoholaturaSeleccion = prompt(
          "Segui eligiendo entre Alcoholaturas de Ganoderma Lucidum (Reishi), Hericium Erinaceus (Melena de Leon) y Cordiceps Militaris o cancelar/salir"
        ).toLowerCase();
        if (
          AlcoholaturaSeleccion == "salir" ||
          AlcoholaturaSeleccion == "cancelar" ||
          AlcoholaturaSeleccion == "terminar compra"
        ) {
          break;
        }
      }
    }
  } else {
    alert("Ingresa un tipo de producto valido");
  }
  break;
}
