let SoundManager = {
    current: null,
    initHowls: function () {
      let audios = document.querySelectorAll('[data-audio]')
      let howls = {}
      
      for (let i = 0; i < audios.length; ++i) {
        let id = audios[i].getAttribute('data-audio')
        howls[id] = new Howl({
          src: ['music/mp3/' + id + '.mp3', 'music/webm/' + id + '.webm'],
          autoplay: false,
          preload: false
        })
      }

      this.howls = howls
    },
    howls: {},
    startMusic: function (id) {
        if (this.current != null && this.current != this.howls[id]) {
            this.stop();
            this.current = null;
            this.current = this.howls[id];
            this.current.load();
            this.current.autoplay = true;
            this.current.play();
        } else if (this.current == null) {
            this.current = null;
            this.current = this.howls[id];
            this.current.load();
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
