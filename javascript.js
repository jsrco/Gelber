Howler.mobileAutoEnable = false;
document.addEventListener("DOMContentLoaded", function (event) {
    let title = null;
    let events = function (e) {
        let info = document.getElementById("info");
        let information = document.getElementById("infoPage");
        let infoText = document.getElementById("infoText");
        let infoText2 = document.getElementById("infoText2");
        let iconBar = document.getElementById("iconBar");
        let fb = document.getElementById("fb");
        let insta = document.getElementById("insta");
        let pp = document.getElementById("pp");
        let email = document.getElementById("email");
        let banjo = document.getElementById("banjo");
        let banjoPic = document.getElementById("banjoPic");
        let picContainer = document.getElementById("picContainer");
        let pause = document.getElementById("pause");
        let stop = document.getElementById("stop");
        let songTitle = document.getElementById("songTitle");
        let iArrow = document.getElementById("iArrow");
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
            SoundManager.startMusic(e.target.dataset.audio);
            title = e.target.dataset.title;
            songTitle.innerHTML = title;
        };
        if (e.target === info || e.target === iArrow) {
            picContainer.style.visibility = "hidden";
            information.style.visibility = "visible";
            pause.style.visibility = "visible";
            stop.style.visibility = "visible";
            songTitle.style.visibility = "visible";
            songTitle.innerHTML = "Click outside the info box to go back!";
        }
        if (e.target === banjo) {
            picContainer.style.visibility = "hidden";
            banjoPic.style.visibility = "visible";
            pause.style.visibility = "visible";
            stop.style.visibility = "visible";
            songTitle.style.visibility = "visible";
            songTitle.innerHTML = "Click anywhere to go back!";
        }
        if (e.target == pause) {
            SoundManager.pause();
        } else if (e.target == stop) {
            SoundManager.stop();
        }
    };


    let SoundManager = {
        current: null,
        howls: {
            s02: new Howl({
                src: ['music/mp3/s02.mp3', 'music/webm/s02.webm'],
                autoplay: false,
                html5: true
            }),

            s03: new Howl({
                src: ['music/mp3/s03.mp3', 'music/webm/s03.webm'],
                autoplay: false,
                html5: true
            }),

            s04: new Howl({
                src: ['music/mp3/s04.mp3', 'music/webm/s04.webm'],
                autoplay: false,
                html5: true
            }),

            s05: new Howl({
                src: ['music/mp3/s05.mp3', 'music/webm/s05.webm'],
                autoplay: false,
                html5: true
            }),
            s06: new Howl({
                src: ['music/mp3/s06.mp3', 'music/webm/s06.webm'],
                autoplay: false,
                html5: true
            }),
            s07: new Howl({
                src: ['music/mp3/s07.mp3', 'music/webm/s07.webm'],
                autoplay: false,
                html5: true
            }),

            s09: new Howl({
                src: ['music/mp3/s09.mp3', 'music/webm/s09.webm'],
                autoplay: false,
                html5: true
            }),

            s10: new Howl({
                src: ['music/mp3/s10.mp3', 'music/webm/s10.webm'],
                autoplay: false,
                html5: true
            }),

            s11: new Howl({
                src: ['music/mp3/s11.mp3', 'music/webm/s11.webm'],
                autoplay: false,
                html5: true
            }),

            s12: new Howl({
                src: ['music/mp3/s12.mp3', 'music/webm/s12.webm'],
                autoplay: false,
                html5: true
            }),

            s15: new Howl({
                src: ['music/mp3/s15.mp3', 'music/webm/s15.webm'],
                autoplay: false,
                html5: true
            }),
            s16: new Howl({
                src: ['music/mp3/s16.mp3', 'music/webm/s16.webm'],
                autoplay: false,
                html5: true
            }),
            s17: new Howl({
                src: ['music/mp3/s17.mp3', 'music/webm/s17.webm'],
                autoplay: false,
                html5: true
            }),

            s18: new Howl({
                src: ['music/mp3/s18.mp3', 'music/webm/s18.webm'],
                autoplay: false,
                html5: true
            })

        },
        startMusic: function (id) {
            if (this.current != null && this.current != this.howls[id]) {
                this.stop();
                this.current = null;
                this.current = this.howls[id];
                this.current.autoplay = true;
                this.current.play();
            } else if (this.current == null) {
                this.current = null;
                this.current = this.howls[id];
                this.current.autoplay = true;
                this.current.play();
            } else if (this.current == this.howls[id] && this.current.playing() == false) {
                this.current.play();
            }
        },
        pause: function () {
            if (this.current == null) {
                this.current = null;
                title = null;
            } else {
                this.current.pause();
            }
        },
        stop: function () {
            if (this.current == null) {
                this.current = null;
                title = null;
                document.getElementById("songTitle").innerHTML = "Click on characters in the mural!";
            } else {
                this.current.stop();
                this.current = null;
                title = null;
                document.getElementById("songTitle").innerHTML = "Click on characters in the mural!";
            }
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
});
