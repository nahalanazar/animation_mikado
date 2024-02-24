
        var controller = new ScrollMagic.Controller();

        var imageTiles = document.querySelectorAll('.image-tile');
        var offset = 50; 
        var movementDistance = 150; 

        imageTiles.forEach(function (tile, index) {
            var movement = index % 2 === 0 ? "+" + movementDistance + "px" : "-" + movementDistance + "px";

            var tween = gsap.to(tile, {
                y: movement,
                ease: "none"
            });

            var scene = new ScrollMagic.Scene({
                triggerElement: ".overlay",
                duration: "300%", 
                triggerHook: 0,
                offset: offset * index 
            })
                .setTween(tween)
                .addTo(controller);
        });

        var reverseImageTiles = document.querySelectorAll('.image-tile');
        var reverseOffset = 50; 

        reverseImageTiles.forEach(function (tile, index) {
            var movement = index % 2 === 0 ? "-" + movementDistance + "px" : "+" + movementDistance + "px";

            var reverseTween = gsap.to(tile, {
                y: movement,
                ease: "none"
            });

            var reverseScene = new ScrollMagic.Scene({
                triggerElement: ".overlay",
                duration: "300%",
                triggerHook: 1,
                offset: reverseOffset * index 
            })
                .setTween(reverseTween)
                .addTo(controller);
        });
    