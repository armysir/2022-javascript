const quotes = [
    {
        qoute:" 삶이 있는 한 희망은 있다  -키케로"
        
    },
    {
        qoute:"산다는것 그것은 치열한 전투이다.  -로망로랑"
        
    },
    {
        qoute:" 하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. -사무엘존슨"
        
    },
    {
        qoute:" 언제나 현재에 집중할수 있다면 행복할것이다. -파울로 코엘료"
        
    },
    {
        qoute:"진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해 -찰리 채플린"
        
    },
    {
        qoute:"직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다 -엘버트 허버드"
        
    },
    {
        qoute:"신은 용기있는자를 결코 버리지 않는다 -켄러"
        
    },
   
   
]
const qouted = document.querySelector(".quote span");
qouted.innerText =(quotes[Math.floor(Math.random()*quotes.length)].qoute);