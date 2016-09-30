const fs = require('fs');
const handlebars = require('handlebars');

var source = fs.readFileSync('projects.handlebars', 'utf8');

var filePath = './projects';
var files = fs.readdirSync(filePath);
var arr = [];
var obj = {
    projects: arr
};

function getProject(path){
    files.forEach(function(file){
        var nextPath = path + '/' + file;
        var stat = fs.statSync(nextPath);
        if(!stat.isDirectory() && file == 'index.html'){
            var object = {};
            object['path'] = path.split('/')[2];
            object['link'] = path.split('/')[2];
            arr.push(object);
        }
        else if(stat.isDirectory() && nextPath.indexOf('.git') == -1){
            files = fs.readdirSync(nextPath);
            getProject(nextPath);
        }
    });
}

getProject(filePath);

var template = handlebars.compile(source);

var page = template(obj);

module.exports.Page = page;
