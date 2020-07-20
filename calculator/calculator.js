(function () {
  "use strict";
  // enter-fields
  let units = document.querySelector("#edit-shtuk");
  let meters = document.querySelector("#edit-ploschad");

  // get-fields
  let unit_square = Number(
    document.querySelector(".field-name-field-square .field-item").innerHTML
  );
  let price = parseFloat(
    document
      .querySelector(".field-name-commerce-price .field-item")
      .innerHTML.replace(",", ".")
  );

  // set fields
  let total_sum = document.querySelector("#price-total");
  let total_quantity = document.querySelector("#edit-quantity");

  // initialization
  setTotals();

  units.addEventListener("keyup", calcUnitsMeters);
  if (meters) {
    meters.addEventListener("keyup", calcMetersUnits);
    meters.addEventListener("blur", calcMetersUnitsMeters);
  }

  function calcUnitsMeters() {
    if (unit_square > 0 && meters) {
      meters.value = (units.value * unit_square).toFixed(2);
    }
    setTotals();
  }

  function calcMetersUnits() {
    units.value = Math.ceil(meters.value / unit_square);
    setTotals();
  }

  function calcMetersUnitsMeters() {
    meters.value = (units.value * unit_square).toFixed(2);
    setTotals();
  }

  function setTotals() {
    if (unit_square > 0 && meters) {
      total_sum.innerHTML =
        (meters.value * price).toFixed(2).replace(".", ",") + " р";
      total_quantity.value = meters.value;
    } else {
      total_sum.innerHTML =
        (units.value * price).toFixed(2).replace(".", ",") + " р";
      total_quantity.value = units.value;
    }
  }
})();
