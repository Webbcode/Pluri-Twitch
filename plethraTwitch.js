var streamers = getQueryVariable('streamers');
var exampleStreamers = ['Th3BetaCat', 'DivineMorality', 'StaticP']
if(streamers != false){
  streamers = eval("[\'" + streamers.replace(/\\/gi, '\',\'').replace(/,/gi, '\',\'') + "\']");
}else{
 streamers = []; 
}
var dM = getQueryVariable('theme');
if(dM.toLowerCase === false){
  dM = confirm('Dark Mode? (press ok to chose dark mode press cancel for light mode)');
}

function setup() {
  
  
  if(dM === true || dM.toLowerCase() === 'dark'){
    dM = 'dark'
  }else{
    dM = 'light'
  }
  
  if(streamers.length === 0){
    var streamNum = int(prompt('how many streamers to watch?', '3'))
    if(streamNum != null){
      for (var i = 0; i < streamNum;i++){
        var toPush = prompt('which will be streamer number ' + (i + 1) + '?', 'ex: ' + exampleStreamers[i % exampleStreamers.length]);
        if(toPush != null){
          if(toPush === 'ex: ' + exampleStreamers[i % exampleStreamers.length]){
            toPush = exampleStreamers[i % exampleStreamers.length];
          }
          streamers.push(toPush);
        }
      }
      
      for (var i = 0; i < streamers.length;i++){
        var div = createDiv('').id('twitch-embed' + i);
        div.style('width', 100 / streamers.length + '%');
        new Twitch.Embed('twitch-embed' + i, {
          width:'100%',
          height: '100%',
          channel: streamers[i],
          theme: dM
        });
      }
    }
  }else{
    for (var i = 0; i < streamers.length;i++){
        var div = createDiv('').id('twitch-embed' + i);
        div.style('width', 100 / streamers.length + '%');
        new Twitch.Embed('twitch-embed' + i, {
          width:'100%',
          height: '100%',
          channel: streamers[i],
          theme: dM
        });
      }
  }
  resizeCanvas(0, 0);
  
  if(dM === 'dark'){
    document.body.style = 'background: rgb(0, 0, 0);'
  }
}

function draw() {
  
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}