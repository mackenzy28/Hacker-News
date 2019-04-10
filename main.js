console.log('loading main.js');

const newslist = document.querySelector('#news-list');
const baseUrl = "https://hacker-news.firebaseio.com/v0/";
let topStoryUrls = [];
var storyData;

function readJSON() {
    const topStoriesUrl = `${baseUrl}topstories.json?limit=10`;
    console.log(topStoriesUrl);
    fetch(topStoriesUrl).then(function (response){
        return response.json()
    }).then(function(data) {
        selectedData = data.slice(0, 10)
        var html = selectedData.map(function(val, i) {
            let topStoryUrl = `${baseUrl}item/${val}.json`;
            fetch(topStoryUrl).then(function (response){
                return response.json()
            }).then(function(data) {
                newslist.innerHTML += `<details><summary><a href="${data.url}" target="_blank">${data.title}</a></summary>${data.type} by ${data.by}</details>`;
            });
        });
    });
}

readJSON();