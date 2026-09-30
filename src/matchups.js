const types=['Fire','Water','Grass','Lightning','Ice','Earth','Wind','Light','Dark'];
const colors=['#ff9a78','#77c9ff','#b4dd81','#ffe184','#a4e5ee','#d0ab85','#b8cbff','#fff3b5','#cfadf6'];
const glyphs=['♨','≈','♧','ϟ','❄','⬡','≋','☼','☾'];
const matrix=[ [.625,.625,1.6,1,1.6,.625,1,.625,1], [1.6,.625,.625,1,.625,1.6,1,.625,1], [.625,1.6,.625,1,1,1.6,1,.625,1], [1,1.6,1,.625,.625,.625,1.6,1,1], [.625,1.6,1,1.6,.625,.625,1,1,1], [1.6,.625,.625,1,1.6,.625,1,1,.625], [1,1,1.6,.625,1,1,.625,1,1.6], [1,1,1,.625,1,1,1.6,.625,1.6], [1,.625,1.6,1.6,1,1,.625,1.6,1] ];
const spatialTypes=['Unknown','Ranged','Fly','Pound','Tunnel'];const beats={Ranged:'Fly',Fly:'Pound',Pound:'Tunnel',Tunnel:'Ranged'};
function cls(v){return v>1?'good':v<1?'bad':''}function fmt(v){return Number(v.toFixed(4)).toString()}
