Howler.mobileAutoEnable = false;
document.addEventListener("DOMContentLoaded", function (event) {
    let title = null;
    let events = function (e) {
        let warning = document.getElementById("warning");
        let label = document.getElementById("label");
        let labelText = document.getElementById("labelText");
        let picContainer = document.getElementById("picContainer");
        let pause = document.getElementById("pause");
        let stop = document.getElementById("stop");
        let songTitle = document.getElementById("songTitle");
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
        if (e.target === warning || e.target === label || e.target === labelText) {
            toggleWarning(warning);
        }
        if (e.target == pause) {
            SoundManager.pause();
        } else if (e.target == stop) {
            SoundManager.stop();
        }
    };

    let toggleWarning = function (element) {
        element.style.visibility = "hidden";
    };

    let SoundManager = {
        current: null,
        howls: {
            s01: new Howl({
                src: ['music/mp3/s01.mp3', 'music/webm/s01.webm'],
                autoplay: false,
                html5: true
            }),

            s08: new Howl({
                src: ['music/mp3/s08.mp3', 'music/webm/s08.webm'],
                autoplay: false,
                html5: true
            }),

            s13: new Howl({
                src: ['music/mp3/s13.mp3', 'music/webm/s13.webm'],
                autoplay: false,
                html5: true
            }),

            s14: new Howl({
                src: ['music/mp3/s14.mp3', 'music/webm/s14.webm'],
                autoplay: false,
                html5: true
            }),
            
            s19: new Howl({
                src: ['music/mp3/s19.mp3', 'music/webm/s19.webm'],
                autoplay: false,
                html5: true
            }),

            s20: new Howl({
                src: ['music/mp3/s20.mp3', 'music/webm/s20.webm'],
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
