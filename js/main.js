(() => {
    // this selects the button under the first SVG
    let iconButton = document.querySelector("button");

    // this selects the inline SVG - I added an ID to it (see above)
    let anotherIcon = document.querySelector('#mic');

    // this function runs when you click on the button
    function logIcon() {
      console.log(this.previousElementSibling.id);
    }

    // this function runs when you click on the inline SVG
    function logMe() {
      console.log(this.id);
    }

    // event handling for the button
    iconButton.addEventListener ("click", logIcon);

    // event handling for the inline SVG
    mic.addEventListener ("click", logMe);
})();