"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', (evt) => {
        $(`#fortune-text`).html(evt);

    });
}

$('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    // TODO: request weather with that URL and show the forecast in #weather-info
    
    $.get('/weather.json', formData, (res) => {
        console.log(res)
        $(`#weather-info`).html(res['forecast']);
    });
}

$("#weather-form").on('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    const formInputs = {"qty": $("#qty-field").val(),
                "melon_type": $("#melon-type-field").val()};

    console.log(formInputs);
    $.post('/order-melons.json', formInputs, (res) => {
        if (res.code === 'OK'){
            $(`#order-status`).html(res.msg);
        } else {
            $(`#order-status`).addClass('order-error');
            $(`#order-status`).html( res.msg);
        }
    });   
  }


$("#order-form").on('submit', orderMelons);


