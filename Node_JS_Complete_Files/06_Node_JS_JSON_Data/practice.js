/*
    1) Creating JSON files
    2) Reading , Write JSON files
 */

const fs = require('fs');
const path = require('path');

let persons = [{"id":1,"first_name":"Mirelle","last_name":"Overy","email":"movery0@mayoclinic.com","state":"Alabama","country":"United States"},
    {"id":2,"first_name":"Lebbie","last_name":"Dowles","email":"ldowles1@fema.gov","state":"Minnesota","country":"United States"},
    {"id":3,"first_name":"Sharon","last_name":"Ayerst","email":"sayerst2@businesswire.com","state":"Massachusetts","country":"United States"},
    {"id":4,"first_name":"Amye","last_name":"Buye","email":"abuye3@mysql.com","state":"New York","country":"United States"},
    {"id":5,"first_name":"Laurena","last_name":"Beddin","email":"lbeddin4@people.com.cn","state":"Texas","country":"United States"},
    {"id":6,"first_name":"Moishe","last_name":"Ledeker","email":"mledeker5@wordpress.com","state":"Florida","country":"United States"},
    {"id":7,"first_name":"Uri","last_name":"Gosland","email":"ugosland6@ucsd.edu","state":"Texas","country":"United States"},
    {"id":8,"first_name":"Anders","last_name":"Naper","email":"anaper7@baidu.com","state":"Indiana","country":"United States"},
    {"id":9,"first_name":"Luise","last_name":"Freeland","email":"lfreeland8@time.com","state":"Wisconsin","country":"United States"},
    {"id":10,"first_name":"Kary","last_name":"Sergeant","email":"ksergeant9@youku.com","state":"Texas","country":"United States"},
    {"id":11,"first_name":"Carrie","last_name":"Gilfether","email":"cgilfethera@sina.com.cn","state":"North Carolina","country":"United States"},
    {"id":12,"first_name":"Craig","last_name":"Drei","email":"cdreib@buzzfeed.com","state":"Georgia","country":"United States"},
    {"id":13,"first_name":"Edd","last_name":"Selman","email":"eselmanc@posterous.com","state":"Virginia","country":"United States"},
    {"id":14,"first_name":"Atalanta","last_name":"Bedson","email":"abedsond@constantcontact.com","state":"Nebraska","country":"United States"},
    {"id":15,"first_name":"Darin","last_name":"Raubenheimer","email":"draubenheimere@mysql.com","state":"Georgia","country":"United States"},
    {"id":16,"first_name":"Letti","last_name":"Moen","email":"lmoenf@ihg.com","state":"Iowa","country":"United States"},
    {"id":17,"first_name":"Germaine","last_name":"Haacker","email":"ghaackerg@mashable.com","state":"Tennessee","country":"United States"},
    {"id":18,"first_name":"Libbie","last_name":"Jost","email":"ljosth@ameblo.jp","state":"California","country":"United States"},
    {"id":19,"first_name":"Dian","last_name":"Antognozzii","email":"dantognozziii@arstechnica.com","state":"Texas","country":"United States"},
    {"id":20,"first_name":"Carlo","last_name":"McNirlin","email":"cmcnirlinj@youku.com","state":"Georgia","country":"United States"},
    {"id":21,"first_name":"Donal","last_name":"Pimme","email":"dpimmek@yellowpages.com","state":"Florida","country":"United States"},
    {"id":22,"first_name":"Maxie","last_name":"Yvens","email":"myvensl@freewebs.com","state":"New Jersey","country":"United States"},
    {"id":23,"first_name":"Cyndia","last_name":"Ripon","email":"criponm@cnet.com","state":"Texas","country":"United States"},
    {"id":24,"first_name":"Kelwin","last_name":"Seegar","email":"kseegarn@quantcast.com","state":"New York","country":"United States"},
    {"id":25,"first_name":"Kacy","last_name":"Rickardsson","email":"krickardssono@unblog.fr","state":"Mississippi","country":"United States"},
    {"id":26,"first_name":"Arlena","last_name":"Kingman","email":"akingmanp@google.com.hk","state":"California","country":"United States"},
    {"id":27,"first_name":"Hy","last_name":"Brader","email":"hbraderq@yellowbook.com","state":"California","country":"United States"},
    {"id":28,"first_name":"Edin","last_name":"Brunini","email":"ebruninir@linkedin.com","state":"New York","country":"United States"},
    {"id":29,"first_name":"Estell","last_name":"Writtle","email":"ewrittles@purevolume.com","state":"New York","country":"United States"},
    {"id":30,"first_name":"Loraine","last_name":"Iglesia","email":"liglesiat@qq.com","state":"New York","country":"United States"},
    {"id":31,"first_name":"Neely","last_name":"Gabler","email":"ngableru@newyorker.com","state":"Wyoming","country":"United States"},
    {"id":32,"first_name":"Mair","last_name":"Kyles","email":"mkylesv@studiopress.com","state":"Arizona","country":"United States"},
    {"id":33,"first_name":"Franny","last_name":"Jiranek","email":"fjiranekw@spiegel.de","state":"New York","country":"United States"},
    {"id":34,"first_name":"Lexy","last_name":"Boc","email":"lbocx@1688.com","state":"Georgia","country":"United States"},
    {"id":35,"first_name":"Bella","last_name":"Jochens","email":"bjochensy@homestead.com","state":"Washington","country":"United States"},
    {"id":36,"first_name":"Christian","last_name":"Tuffrey","email":"ctuffreyz@japanpost.jp","state":"Pennsylvania","country":"United States"},
    {"id":37,"first_name":"Veronica","last_name":"Edgett","email":"vedgett10@freewebs.com","state":"California","country":"United States"},
    {"id":38,"first_name":"Kikelia","last_name":"Wisdom","email":"kwisdom11@usa.gov","state":"Texas","country":"United States"},
    {"id":39,"first_name":"Cullan","last_name":"Christophle","email":"cchristophle12@washington.edu","state":"Mississippi","country":"United States"},
    {"id":40,"first_name":"Hally","last_name":"MacKonochie","email":"hmackonochie13@wikia.com","state":"Florida","country":"United States"},
    {"id":41,"first_name":"Teodor","last_name":"Crosson","email":"tcrosson14@engadget.com","state":"North Carolina","country":"United States"},
    {"id":42,"first_name":"Erie","last_name":"Leyninye","email":"eleyninye15@twitter.com","state":"Oklahoma","country":"United States"},
    {"id":43,"first_name":"Alvina","last_name":"Haggar","email":"ahaggar16@home.pl","state":"Texas","country":"United States"},
    {"id":44,"first_name":"Claudian","last_name":"Drysdale","email":"cdrysdale17@youtube.com","state":"Nevada","country":"United States"},
    {"id":45,"first_name":"Keir","last_name":"Wimlet","email":"kwimlet18@ocn.ne.jp","state":"Texas","country":"United States"},
    {"id":46,"first_name":"Fey","last_name":"Crocket","email":"fcrocket19@soundcloud.com","state":"Texas","country":"United States"},
    {"id":47,"first_name":"Filippa","last_name":"Lamont","email":"flamont1a@seesaa.net","state":"Minnesota","country":"United States"},
    {"id":48,"first_name":"Oates","last_name":"Rochelle","email":"orochelle1b@shareasale.com","state":"North Carolina","country":"United States"},
    {"id":49,"first_name":"Hyacintha","last_name":"Jayme","email":"hjayme1c@ox.ac.uk","state":"California","country":"United States"},
    {"id":50,"first_name":"Cordula","last_name":"Pauletti","email":"cpauletti1d@facebook.com","state":"Pennsylvania","country":"United States"},
    {"id":51,"first_name":"Clayson","last_name":"Medina","email":"cmedina1e@ucoz.ru","state":"Kentucky","country":"United States"},
    {"id":52,"first_name":"Tracey","last_name":"Allchorn","email":"tallchorn1f@weibo.com","state":"Texas","country":"United States"},
    {"id":53,"first_name":"Lurleen","last_name":"McDowall","email":"lmcdowall1g@who.int","state":"Kansas","country":"United States"},
    {"id":54,"first_name":"Terrijo","last_name":"Grevatt","email":"tgrevatt1h@utexas.edu","state":"Texas","country":"United States"},
    {"id":55,"first_name":"Jessamine","last_name":"Millbank","email":"jmillbank1i@icq.com","state":"Florida","country":"United States"},
    {"id":56,"first_name":"Chauncey","last_name":"Morratt","email":"cmorratt1j@webs.com","state":"Colorado","country":"United States"},
    {"id":57,"first_name":"Elton","last_name":"Shurey","email":"eshurey1k@stumbleupon.com","state":"Kentucky","country":"United States"},
    {"id":58,"first_name":"Matias","last_name":"Paylor","email":"mpaylor1l@infoseek.co.jp","state":"Pennsylvania","country":"United States"},
    {"id":59,"first_name":"Brunhilde","last_name":"Dorro","email":"bdorro1m@weebly.com","state":"Pennsylvania","country":"United States"},
    {"id":60,"first_name":"Kari","last_name":"Schlagtmans","email":"kschlagtmans1n@ocn.ne.jp","state":"Washington","country":"United States"},
    {"id":61,"first_name":"Nicol","last_name":"Kryszka","email":"nkryszka1o@pbs.org","state":"California","country":"United States"},
    {"id":62,"first_name":"Noami","last_name":"Verick","email":"nverick1p@addtoany.com","state":"Georgia","country":"United States"},
    {"id":63,"first_name":"Cecilia","last_name":"Berg","email":"cberg1q@nature.com","state":"Nevada","country":"United States"},
    {"id":64,"first_name":"Lew","last_name":"Bassett","email":"lbassett1r@flavors.me","state":"Oregon","country":"United States"},
    {"id":65,"first_name":"Bjorn","last_name":"Mallon","email":"bmallon1s@google.com.au","state":"New York","country":"United States"},
    {"id":66,"first_name":"Susan","last_name":"Tarry","email":"starry1t@marriott.com","state":"Virginia","country":"United States"},
    {"id":67,"first_name":"Corbie","last_name":"Pitcher","email":"cpitcher1u@house.gov","state":"North Carolina","country":"United States"},
    {"id":68,"first_name":"Adelle","last_name":"Stubbley","email":"astubbley1v@examiner.com","state":"Kentucky","country":"United States"},
    {"id":69,"first_name":"Stoddard","last_name":"Le Gassick","email":"slegassick1w@mediafire.com","state":"California","country":"United States"},
    {"id":70,"first_name":"Godard","last_name":"Orae","email":"gorae1x@reference.com","state":"Texas","country":"United States"},
    {"id":71,"first_name":"Dewitt","last_name":"Campes","email":"dcampes1y@sciencedaily.com","state":"Georgia","country":"United States"},
    {"id":72,"first_name":"Joice","last_name":"Jordin","email":"jjordin1z@china.com.cn","state":"Illinois","country":"United States"},
    {"id":73,"first_name":"Raina","last_name":"Aberdalgy","email":"raberdalgy20@comsenz.com","state":"California","country":"United States"},
    {"id":74,"first_name":"Wolfie","last_name":"Titherington","email":"wtitherington21@alexa.com","state":"Massachusetts","country":"United States"},
    {"id":75,"first_name":"Issiah","last_name":"Durrell","email":"idurrell22@eepurl.com","state":"Louisiana","country":"United States"},
    {"id":76,"first_name":"Christyna","last_name":"McTear","email":"cmctear23@amazon.co.uk","state":"Texas","country":"United States"},
    {"id":77,"first_name":"Dorris","last_name":"Bannister","email":"dbannister24@sbwire.com","state":"North Carolina","country":"United States"},
    {"id":78,"first_name":"Harry","last_name":"Skill","email":"hskill25@tmall.com","state":"California","country":"United States"},
    {"id":79,"first_name":"Colas","last_name":"Birtles","email":"cbirtles26@gmpg.org","state":"Florida","country":"United States"},
    {"id":80,"first_name":"Keary","last_name":"Fransoni","email":"kfransoni27@skyrock.com","state":"Florida","country":"United States"},
    {"id":81,"first_name":"Von","last_name":"Cathrall","email":"vcathrall28@tripod.com","state":"Virginia","country":"United States"},
    {"id":82,"first_name":"Rhodie","last_name":"Robbert","email":"rrobbert29@telegraph.co.uk","state":"Georgia","country":"United States"},
    {"id":83,"first_name":"Yettie","last_name":"Sumpter","email":"ysumpter2a@yandex.ru","state":"New York","country":"United States"},
    {"id":84,"first_name":"Valene","last_name":"Benzie","email":"vbenzie2b@phpbb.com","state":"Texas","country":"United States"},
    {"id":85,"first_name":"Ardeen","last_name":"Dimmne","email":"adimmne2c@go.com","state":"Massachusetts","country":"United States"},
    {"id":86,"first_name":"Mandy","last_name":"Cheine","email":"mcheine2d@oaic.gov.au","state":"Nevada","country":"United States"},
    {"id":87,"first_name":"Ilyssa","last_name":"Clowser","email":"iclowser2e@springer.com","state":"Missouri","country":"United States"},
    {"id":88,"first_name":"Devlin","last_name":"Masdin","email":"dmasdin2f@earthlink.net","state":"Florida","country":"United States"},
    {"id":89,"first_name":"Gillian","last_name":"Bayfield","email":"gbayfield2g@wix.com","state":"Missouri","country":"United States"},
    {"id":90,"first_name":"Bebe","last_name":"Rourke","email":"brourke2h@google.it","state":"Alabama","country":"United States"},
    {"id":91,"first_name":"Hector","last_name":"Alyonov","email":"halyonov2i@paypal.com","state":"Georgia","country":"United States"},
    {"id":92,"first_name":"Eldridge","last_name":"Boncore","email":"eboncore2j@forbes.com","state":"Texas","country":"United States"},
    {"id":93,"first_name":"Darell","last_name":"Samuels","email":"dsamuels2k@whitehouse.gov","state":"California","country":"United States"},
    {"id":94,"first_name":"Maren","last_name":"Sneesby","email":"msneesby2l@ameblo.jp","state":"New York","country":"United States"},
    {"id":95,"first_name":"Arny","last_name":"Ipsgrave","email":"aipsgrave2m@unicef.org","state":"New York","country":"United States"},
    {"id":96,"first_name":"Chen","last_name":"Dunford","email":"cdunford2n@salon.com","state":"New York","country":"United States"},
    {"id":97,"first_name":"Abie","last_name":"Sandever","email":"asandever2o@desdev.cn","state":"Washington","country":"United States"},
    {"id":98,"first_name":"Bliss","last_name":"Bruhnke","email":"bbruhnke2p@exblog.jp","state":"Virginia","country":"United States"},
    {"id":99,"first_name":"Allison","last_name":"Saint","email":"asaint2q@scientificamerican.com","state":"Pennsylvania","country":"United States"},
    {"id":100,"first_name":"Imelda","last_name":"Thoma","email":"ithoma2r@infoseek.co.jp","state":"Texas","country":"United States"}];

//create file
fs.writeFile(path.join(__dirname,'employee.json'),JSON.stringify(persons),'utf8',(err)=>{
    if(err) throw  err;
    console.log('data is saved');
})
//read a json file
fs.readFile(path.join(__dirname,'employee.json'),'utf8',(err,data)=>{
    if(err) throw err;
    let persons = JSON.parse(data);
    let selected = persons.find((person)=>{
        return person.id===95;
    });
    console.log(selected)
});