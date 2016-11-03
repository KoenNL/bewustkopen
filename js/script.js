/**
 * Hide the given element.
 * @param {string} id Id of the element to hide.
 * @returns {Boolean} true on success.
 */
function hide(id) {
    var element = document.getElementById(id);
    element.style.display = 'none';
    return true;
}

/**
 * Show the given element.
 * @param {string} id Id of the element to show.
 * @returns {Boolean} true on success.
 */
function show(id) {
    var element = document.getElementById(id);
    element.style.display = 'block';
    return true;
}

/**
 * Hide or show the given element, depending on it's current visibility.
 * @param {string} id Id of the element to toggle.
 * @returns {Boolean} true on success.
 */
function toggle(id) {
    var style = window.getComputedStyle(document.getElementById(id));
    if (style.display === 'none') {
        return show(id);
    }
    return hide(id);
}

function checkCookieSetting() {
    var cookies = document.cookie.split(';');
    if (!cookies || cookies === null || cookies.length === 0) {
        show('cookie-notice');
        return false;
    }
    cookies.forEach(function (index, value) {
        if (value !== '' && value !== 0 && value.indexOf('accept_cookies=') && value.indexOf('=1')) {
            hide('cookie-notice');
            return true;
        }
    });
    show('cookie-notice');
    return false;
}

function setCookieSetting(setting) {
    document.cookie = 'accept_cookies=' + setting;
}

/**
 * Create a photocarousel
 * @param {HTMLElement} id Id of the photocarousel wrapper
 * @returns {Carousel}
 */
var Carousel = function (id) {
    this.id = id;
    this.carousel = document.getElementById(id);
    this.carousel_items = this.carousel.getElementsByClassName('carousel-item');
    this.count = this.carousel_items.length;
    this.window_width = window.innerWidth;
};

/**
 * Get the current position of an item.
 * @param {HTMLElement} item Element to check.
 * @returns {int}
 */
Carousel.prototype.getCurrentPosition = function (item) {
    var position = parseInt(window.getComputedStyle(item).left);
    if (isNaN(position)) {
        position = 0;
    }
    return position;
};

/**
 * Move item gently left or right
 * @param {HTMLElement} item Element to move.
 * @param {int} destination Destination in pixels.
 * @param {int} interval Interval in miliseconds.
 * @returns {void}
 */
Carousel.prototype.animate = function (item, destination, speed) {
    var position = initial_position = this.getCurrentPosition(item);
    var end = false;
    var interval = setInterval(function () {
        if (!end && position < 150) {
            speed = speed / 2;
            end = true;
        }
        if (initial_position > destination) {
            position -= speed;
        } else {
            position += speed;
        }

        if ((destination < initial_position && position <= destination) || (destination > initial_position && position >= destination)) {
            clearInterval(interval);
        }
        item.style.left = position + 'px';
    }, 10);
};

/**
 * Rotate through the images with a given interval.
 * @param {int} interval Rotating interval in seconds
 * @returns {void}
 */
Carousel.prototype.rotate = function (interval) {
    var Carousel = this;
    // Start at turn 1 so that the first image will stay put.
    var turn = 1;
    setInterval(function () {
        // Start at index 1 so that the first image will stay put.
        if (turn >= Carousel.count) {
            for (var index = 1; index < Carousel.count; index++) {
                Carousel.animate(Carousel.carousel_items[index], Carousel.window_width, 30);
            }
            turn = 1;
        } else {
            Carousel.animate(Carousel.carousel_items[turn], 0, 15);
            turn++;
        }
    }, interval);
};

/**
 * Get params from the URI
 * @returns {Array}
 */
function getParamsFromURI() {

    var uri = window.location.search.substring(1);
    var values = uri.split("&");
    var params = [];

    for (i = 0; i < values.length; i++) {
        value = values[i].split("=");
        params[value[0]] = value[1];
    }

    return params;
}

/**
 * Get the values from the URI and set the value of the element with the given id
 * @param {string} id Id of element to set the id to
 * @returns {Boolean} True on success, false on failure.
 */
function setValueFromURI(id) {
    var params = getParamsFromURI();

    if (!params) {
        return false;
    }

    var element = document.getElementById(id);
    var name = element.getAttribute('name');

    if (!params[name]) {
        return false;
    }

    element.value = params[name];
    return true;
}