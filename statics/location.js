    const locations = [
        ["Москва", 55.755826, 37.6173],
        ["Ставрополь", 45.045476, 41.968343],
        ["Краснодар", 45.039267, 38.987221],
        ["Саратов", 51.592365, 45.960803],
        ["Тверь", 56.858721, 35.917596],
        ["Калининград", 54.710426, 20.452214],
        ["Воронеж", 51.675497, 39.208882],
        ["Петрозаводск", 61.778162, 34.364039],
        ["Иркутск", 52.286974, 104.305018],
        ["Ярославль", 57.626074, 39.884471],
        ["Владимир", 56.144596, 40.417869],
        ["Ростов-на-Дону", 47.235714, 39.701505],
        ["Хабаровск", 48.515784, 135.101171],
        ["Новосибирск", 55.008353, 82.935733],
        ["Ижевск", 56.86186, 53.232428],
        ["Нижний Новгород", 56.296504, 43.936059],
        ["Пермь", 58.029681, 56.266792],
        ["Уфа", 54.738762, 55.972055],
        ["Самара", 53.241504, 50.221246],
        ["Калуга", 54.551858, 36.285097],
        ["Волгоград", 48.708048, 44.513304],
        ["Казань", 55.830431, 49.066081],
        ["Омск", 54.98848, 73.324236],
        ["Кемерово", 55.345023, 86.062304],
        ["Барнаул", 53.354779, 83.769783],
        ["Пенза", 53.22729, 45],
        ["Новокузнецк", 53.759594, 87.12157],
        ["Киров", 58.603532, 49.666798],
        ["Екатеринбург", 56.838926, 60.605703],
        ["Санкт-Петербург", 59.93428, 30.335099],
        ["Рязань", 54.609542, 39.712586],
        ["Оренбург", 51.766648, 55.100454],
        ["Архангельск", 64.547251, 40.560155],
        ["Красноярск", 56.015283, 92.893248],
        ["Сочи", 43.602808, 39.734154],
        ["Владивосток", 43.119809, 131.886924],
    ];


    function initMap() {
        const uluru = { lat: 55.363, lng: 70.044 };
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        for (let i = 0; i < locations.length; i++) {
            let loc = locations[i];
            let marker = new google.maps.Marker({
                position: { lat: loc[1], lng: loc[2] },
                map: map
            });
        }
    }
    initMap()
