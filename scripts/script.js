const animation = bodymovin.loadAnimation({
    container: document.getElementById('logo-anim'),
    render: 'svg',
    loop: false,
    autoplay: true,
    path: 'index.json'
});