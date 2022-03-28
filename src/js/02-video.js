    import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    
    const onPlay = function(data) {
        const time = data.seconds
        localStorage.setItem("videoplayer-current-time", JSON.stringify(time));
        
    };
    player.on('timeupdate', throttle(onPlay, 1000));

    const timeStopPlayer = localStorage.getItem("videoplayer-current-time");
    const timeStop =JSON.parse(timeStopPlayer)

    player.setCurrentTime(Number.timeStop = 0).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {  
            case 'RangeError':
                break;
    
            default:
                break;
        }
    });
    