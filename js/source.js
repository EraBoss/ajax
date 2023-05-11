let sliders = [
    `<p class="item">
        1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, voluptas!
    </p>`,
    `<p class="item" id="it">
        2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, voluptas!
        Lorem ipsum dolor sit amet.
    </p>`,
    `<p class="item">
        3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odio incidunt beatae ducimus necessitatibus saepe, eos blanditiis dolore, quasi ex sed voluptatum dicta neque. Adipisci molestias laudantium vero consectetur atque.
    </p>`,
    `<p class="item">
        4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem neque dignissimos itaque! Suscipit ad minus aliquam delectus cupiditate vero veniam fugiat magni nam. Voluptas quibusdam qui natus ratione eos?
    </p>`,
    `<p class="item">
        5 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam optio ullam nesciunt, consequuntur porro corrupti itaque mollitia voluptates ipsam quasi!
    </p>`
];

window.onerror = function(message, url, lineNumber) {
    console.log('Error: ' + message + ' at ' + url + ':' + lineNumber);
  }

localStorage.setItem('slidersArray', JSON.stringify(sliders));