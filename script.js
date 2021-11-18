document.getElementById('getRandom').addEventListener('click', () => {
    axios.get('http://api.giphy.com/v1/gifs?api_key=dc6zaTOxFJmzC')
