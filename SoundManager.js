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
          preload: false
        })
      }

      this.howls = howls
    },
    howls: {},
    play: function (id) {
      console.log('playing: ', id)
      this.current = this.howls[id];
      let state = this.current.state();

      if (state === 'loaded') {
        this.current.play();
      } else {
        // this.current.autoplay = true;
        this.current.load();
      }
    },
    startMusic: function (id) {
        this.stop();
        this.play(id);

        // if (this.current != null && this.current != this.howls[id]) {
        //   this.stop();
        // }
        // if (this.current != null && this.current != this.howls[id]) {
        //     this.stop();
        //     this.current = null;
        //     this.current = this.howls[id];
        //     this.playHowl(id);
        // } else if (this.current == null) {
        //     this.current = null;
        //     this.current = this.howls[id];
        //     this.playHowl(id);
        // } else if (this.current == this.howls[id] && this.current.playing() == false) {
        //     this.current.play();
        // }
    },
    pause: function () {
        if (this.current) {
          this.current.pause();
        }
        // if (this.current == null) {
        //     this.current = null;
        //     title = null;
        // } else {
        //     this.current.pause();
        // }
    },
    stop: function () {
        if (this.current) {
          this.current.stop();
          this.current = null;
        }

        title = null
        document.getElementById("songTitle").innerHTML = "Click on characters in the mural!";

        // if (this.current == null) {
        //     this.current = null;
        //     title = null;
        //     document.getElementById("songTitle").innerHTML = "Click on characters in the mural!";
        // } else {
        //     this.current.stop();
        //     this.current = null;
        //     title = null;
        //     document.getElementById("songTitle").innerHTML = "Click on characters in the mural!";
        // }
    }
};
