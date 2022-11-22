let news = [

    {
      "title" : "Indonesia quake kills scores and injures hundreds",
      "siteurl" : "https://www.bbc.com/news/world-asia-63700629",
   
      "image" : {
        "imageurl" : "https://ichef.bbci.co.uk/news/240/cpsprodpb/35CE/production/_122647731_chinesepolicemenwearmasks.jpg", 
        "alt" : "Chinese policemen wearing masks",
        "datasrc" : "https://ichef.bbci.co.uk/news/{width}/cpsprodpb/35CE/production/_122647731_chinesepolicemenwearmasks.jpg",
        "href" : "https://www.bbc.com/news/59882774",
        "headingtitle" :  "How Covid is rising again in China",
      }    
    },
    {
      "title" : "Tech layoffs threaten American dream of India workers",
      "siteurl": "https://www.bbc.com/news/world-asia-india-63658535",
      "image" : {
        "imageurl" : "https://ichef.bbci.co.uk/news/240/cpsprodpb/E765/production/_127673295_gettyimages-954301944.jpg", 
        "alt" : "New Canadian citizens",
        "datasrc" : "https://ichef.bbci.co.uk/news/{width}/cpsprodpb/E765/production/_127673295_gettyimages-954301944.jpg",
        "href" : "https://www.bbc.com/news/world-us-canada-63643912",
        "headingtitle" :  "Why Canada aims to bring in 1.5m immigrants by 2025",
      }
    },
  {
      "title" : "Shamima Begum trafficked as child, tribunal hears",
      "siteurl" : "https://www.bbc.com/news/uk-63699503",
      "image" : {
        "imageurl" : "https://ichef.bbci.co.uk/news/240/cpsprodpb/35CE/production/_122647731_chinesepolicemenwearmasks.jpg", 
        "alt" : "Photojournalist John Cantlie in Syria. He is sat on a bench wearing a camouflage flak jacket and looking up at the camera.",
        "datasrc" : "https://ichef.bbci.co.uk/news/{width}/cpsprodpb/AB84/production/_114580934_1659cb35-8621-41e7-b94d-91eabb97a53e.jpg",
        "href" : "https://www.bbc.com/news/uk-63711446",
        "headingtitle" :  "en years since IS kidnap of British journalist",
      }
    },
    {
      "title" : "Why Canada aims to bring in 1.5m immigrants by 2025",
      "siteurl" : "https://www.bbc.com/news/world-us-canada-63643912",
	
      "image" : {
        "imageurl" : "https://ichef.bbci.co.uk/news/240/cpsprodpb/4B03/production/_127730291_shesaid1.png", 
        "alt" : "Carey Mulligan and Zoe Kazan in the New York Times newsroom",
        "datasrc" : "https://ichef.bbci.co.uk/news/{width}/cpsprodpb/4B03/production/_127730291_shesaid1.png",
        "href" : "https://www.bbc.com/news/entertainment-arts-63707321",
        "headingtitle" :  "She Said stars praise women who accused Weinstein",
      }
    },
    {
      "title" : "Beijing faces 'most severe Covid test' amid deaths",
      "siteurl" : "https://www.bbc.com/news/world-asia-63700291",
      "image" : {
        "imageurl" : "https://ichef.bbci.co.uk/news/240/cpsprodpb/13FF9/production/_127731918_gettyimages-871721880.jpg", 
        "alt" : "Robert Mugabe calls on Zanu-PF supporters in 2017 to back Grace Mugabe's bid to become the party's next vice-president.",
        "datasrc" : "https://ichef.bbci.co.uk/news/{width}/cpsprodpb/13FF9/production/_127731918_gettyimages-871721880.jpg",
        "href" : "https://www.bbc.com/news/world-africa-63703145",
        "headingtitle" :  "Is Zimbabwe any better off without Mugabe?",
      }
    },
    {
      "title" : "Chris Hemsworth pauses career over Alzheimer's risk",
      "siteurl" : "https://www.bbc.com/news/entertainment-arts-63668310",
      "image" : {
        "imageurl" : "https://ichef.bbci.co.uk/news/240/cpsprodpb/17497/production/_127638359_4f51f6e2-02fa-4853-9279-08d4a161bb9c.jpg", 
        "alt" : "Recharging an e-Golf",
        "datasrc" : "https://ichef.bbci.co.uk/news/{width}/cpsprodpb/17497/production/_127638359_4f51f6e2-02fa-4853-9279-08d4a161bb9c.jpg",
        "href" : "https://www.bbc.com/news/business-63622624",
        "headingtitle" :  "Rwanda's electric vehicle push has a faltering start",
      }
	
    },
    {
      "title" : "Police hail 'heroes' who tackled gunman at US club",
      "siteurl" : "https://www.bbc.com/news/world-us-canada-63698165",
      "image" : {
        "imageurl" : "", 
        "alt" : "",
        "datasrc" : "",
        "href" : "",
        "headingtitle" :  "",
      }
	
    },
    {
      "title" : "Plan to beam solar energy wirelessly from space",
      "siteurl" : "https://www.bbc.com/news/science-environment-62982113",
      "image" : {
        "imageurl" : "", 
        "alt" : "",
        "datasrc" : "",
        "href" : "",
        "headingtitle" :  "",
      }

    },
    {
      "title" : "Jay Leno shares image after being burned in a fire",
      "siteurl" : "https://www.bbc.com/news/world-us-canada-63705868",
      "image" : {
        "imageurl" : "", 
        "alt" : "",
        "datasrc" : "",
        "href" : "",
        "headingtitle" :  "",
      }
	
    },
    {
      "title" : "Iran players decline to sing national anthem",
      "siteurl" : "https://www.bbc.com/news/world-us-canada-63705868",
      "image" : {
        "imageurl" : "", 
        "alt" : "",
        "datasrc" : "",
        "href" : "",
        "headingtitle" :  "",
      }
    },
  ];
  let sixGridDisplayer = `<div class="gel-layout gel-layout--no-flex qa-seven-slice"> `;
  let newsDisplayer = `<div class="nw-c-most-read__items gel-layout gel-layout--no-flex">
  <ol class="gel-layout__item gs-u-float-left@l gs-u-display-block@m gs-u-display-none@xs">`;
for (let i = 0; i < news.length; i++) {
    console.log(news[i]);
    let count =  i + 1;
    console.log("count" + count);

    newsDisplayer += `
   <li data-entityid="most-popular-read-${count}" class="gel-layout__item gs-o-faux-block-link gs-u-mb+ gel-1/2@m gs-u-float-left@m gs-u-clear-left@m gs-u-float-none@xxl">
      <span class="gs-o-media">
         <span class="nw-c-most-read__rank gs-o-media__img gel-canon gel-1/12@xs gel-1/8@m gel-2/12@l gel-1/10@xxl gs-u-align-center">
            ${count}
        </span>
         <div class="gs-o-media__body">
            <a class="gs-c-promo-heading nw-o-link gs-o-bullet__text gs-o-faux-block-link__overlay-link gel-pica-bold gs-u-pl-@xs" href="${news[i].siteurl}">
                <span class="gs-c-promo-heading__title gel-pica-bold">${news[i].title}</span></a>
        </div>
      </span>
   </li>
   `
   sixGridDisplayer +=`<div class="gel-layout__item gel-1/3@m gel-1/4@l gel-1/5@xxl gs-u-pb+@m nw-o-keyline nw-o-no-keyline@m">
       <div class="gs-c-promo nw-c-promo gs-o-faux-block-link gs-u-pb gs-u-pb+@m nw-p-default gs-c-promo--inline gs-c-promo--stacked@m gs-u-display-flex gs-u-display-block@m" data-entityid="full-story#${i+2}">
           <div class="gs-c-promo-image gs-u-display-none gs-u-display-block@xs gel-1/2@xs gel-1/1@m">
               <div class="gs-o-media-island">
                  <div class="gs-o-responsive-image gs-o-responsive-image--16by9">
                    <img src="${news[i].image.imageurl}" class="lazyloaded" alt="${news[i].image.alt}" data-src="${news[i].image.datasrc}" width="240">
                  </div>
                </div>
         </div>
         <div class="gs-c-promo-body gel-1/2@xs gel-1/1@m gs-u-mt@m">
            <div>
               <a class="gs-c-promo-heading gs-o-faux-block-link__overlay-link gel-pica-bold nw-o-link-split__anchor" href="${news[i].image.href}">
                  <h3 class="gs-c-promo-heading__title gel-pica-bold nw-o-link-split__text">${news[i].image.headingtitle}</h3>
               </a>
            </div>
           </div>
        </div>
   </div>`
   
} 
newsDisplayer += ` </ol> </div>`;
document.getElementById("content_Displayer").innerHTML = newsDisplayer;
sixGridDisplayer += `</div>`;
document.getElementById("nw-c-most-read__items gel-layout gel-layout--no-flex").innerHTML = sixGridDisplayer;
