// Howler.mobileAutoEnable = false;
document.addEventListener("DOMContentLoaded", function (event) {
    let title = null;
    let events = function (e) {
        let info = document.getElementById("info");
        let information = document.getElementById("infoPage");
        let infoText = document.getElementById("infoText");
        let infoText2 = document.getElementById("infoText2");
        let warning = document.getElementById("warning");
        let label = document.getElementById("label");
        let labelText = document.getElementById("labelText");
        let iconBar = document.getElementById("iconBar");
        let fb = document.getElementById("fb");
        let insta = document.getElementById("insta");
        let pp = document.getElementById("pp");
        let email = document.getElementById("email");
        let banjo = document.getElementById("banjo");
        let banjoPic = document.getElementById("banjoPic");
        let picContainer = document.getElementById("picContainer");
        let iArrow = document.getElementById("iArrow");
        let remote = document.getElementById("remote");
        let pause = document.getElementById("pause");
        let stop = document.getElementById("stop");
        if (information != null && e.target != information && e.target != infoText && e.target != iconBar && e.target != fb && e.target != insta && e.target != pp && e.target != infoText2 && e.target != email && e.target != banjo && e.target != info) {
            information.style.visibility = "hidden";
            banjoPic.style.visibility = "hidden";
            picContainer.style.visibility = "visible";
        };
        if (title == null) {
            songTitle.innerHTML = "Click on characters in the mural!"
        } else if (e.target == pause) {
            songTitle.innerHTML = "Paused: Click on the character to resume!";
        } else {
            songTitle.innerHTML = title;
        };
        if (e.target.dataset.audio != undefined) {
            removeAnimate();
            SoundManager.startMusic(e.target.dataset.audio);
            animate(e.target);
            title = e.target.dataset.title;
            songTitle.innerHTML = title;
        };
        if (e.target === info || e.target === iArrow) {
            picContainer.style.visibility = "hidden";
            information.style.visibility = "visible";
            remote.style.visibility = "visible";
            songTitle.innerHTML = "Click outside the info box to go back!";
        }
        if (e.target === warning || e.target === label || e.target === labelText) {
            toggleWarning(warning);
        }
        if (e.target === banjo) {
            picContainer.style.visibility = "hidden";
            banjoPic.style.visibility = "visible";
            remote.style.visibility = "visible";
            songTitle.innerHTML = "Click anywhere to go back!";
        }
        if (e.target == pause) {
            SoundManager.pause();
            removeAnimate();
        } else if (e.target == stop) {
            SoundManager.stop();
            removeAnimate();
        }
    };

    let toggleWarning = function (element) {
        element.style.visibility = "hidden";
        pos();
    };

    let animate = function (e) {
        let element = e;
        element.classList.add("playingSong");
    };

    let removeAnimate = function () {
        let element = document.getElementsByClassName("playingSong");
        for (let i = 0; i < element.length; i++) {
            element[i].classList.remove("playingSong");
        }
    };

    let toggle = true;
    document.addEventListener('click', function (e) {
        e = e || windows.event;
        if (toggle === true) {
            events(e);
        } else {
            toggle = true;
        }
    });
    document.addEventListener('touchend', function (e) {
        e = e || windows.event;
        events(e);
        toggle = false;
    });
    SoundManager.initHowls();
});
