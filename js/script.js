function hide(id) {
    var element = document.getElementById(id);
    element.style.display = 'none';
    return true;
}

function show(id) {
    var element = document.getElementById(id);
    element.style.display = 'block';
    return true;
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

function addClass(element, name) {
    element.className += ' ' + name;
    return true;
}

function removeClass(element, name) {
    element.className = element.className.replace('name', '');
    return true;
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