let SoundManager = {
    current: null,
    initHowls: function () {
      let audios = document.querySelectorAll('[data-audio]')
      let howls = {}
      let self = this
      
      for (let i = 0; i < audios.length; ++i) {
        let id = audios[i].getAttribute('data-audio')
        howls[id] = new Howl({
          src: ['music/mp3/' + id + '.mp3', 'music/webm/' + id + '.webm'],
          autoplay: true,
          html5: true,
          id: id,
          preload: false
        })
      }

      this.howls = howls
    },
    howls: {},
    play: function (id) {
      this.current = this.howls[id];
      let state = this.current.state();

      if (state === 'loaded') {
        this.current.play();
      } else {
        this.current.load();
      }
    },
    startMusic: function (id) {
        if (this.current && id !== this.current.id) {
          this.stop();
        }

        this.play(id);
    },
    pause: function () {
        if (this.current) {
          this.current.pause();
        }
    },
    stop: function () {
        if (this.current) {
          this.current.stop();
          this.current = null;
        }

        title = null
        document.getElementById("songTitle").innerHTML = "Click on characters in the mural!";
    }
};
