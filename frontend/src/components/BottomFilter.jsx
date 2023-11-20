import React , { useState } from 'react';


function BottomFilter() {

  const Data = [
    
    {
      id:1,
      image:"https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
      text:'غرف',      
    },
    {
      id:2,
      image:"https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
      text:"الأكثر رواجا"
    },
    {
      id:3,
      image:"https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
      text:"مسابح رائعة"
    },
    {
      id:4,
      image:"https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
      text:"في الريف"
    },
    {
      id:5,
      image:"https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      text:"بيوت ترابية"
    },
    {
      id:6,
      image:"https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
      text:"إطلالات خلابة"
    },
    {
      id:7,
      image:"https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
      text:"مدن شهيرة"
    },
    {
      id:8,
      image: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
      text: 'أكواخ',
     
    },
    {
      id:9,
      image:"https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg",
      text:"بيوت صغيرة",
    },
    {
      id:10,
      image:"https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
      text:"قرب الشاطئ"
    },
    {
      id:11,
      image:"https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
      text:"قصور"
    },
    {
      id:12,
      image:"https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg",
      text:"مزارع"
    },
    {
      id:13,
      image:"https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
      text:"منتزهات وطنية"
    }
    
   

  ];
  return (
<div>
<div >
{Data.map((item) => (
  <label key={item.id} aria-hidden="false" className="item">
  <div className="ml-20">
  <span >
  <img className="item-img " src={item.image} alt="" width="24" height="24"/>
  <div >
  <span className="item-text ">{item.text}</span>
  </div>
  </span>
  </div>
  </label>
       
        ))}

</div>
</div>
  );
}

export default BottomFilter;