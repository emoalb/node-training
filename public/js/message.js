$(() => (
    setTimeout(function () {
        $('#message').fadeOut(()=>this.remove());
    }, 3000)

));

