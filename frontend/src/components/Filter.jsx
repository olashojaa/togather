import React , { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faMap} from '@fortawesome/free-solid-svg-icons';

function Filter() {
    const [activeItem, setActiveItem] = useState('residences');
    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
      };

  return (
<div>
    <div className='row'>
        <div className="col-3"></div>
<div className=' filter-link col-md-6 col-sm-12'>
<a  className={activeItem === 'residences' ? 'active' : ''} onClick={() => handleItemClick('residences')} href="#" >الإقامات</a>
<a  className={activeItem === 'experiences' ? 'active' : ''} onClick={() => handleItemClick('experiences')} href="#">تجارب مثيرة</a>
</div>
</div>
<div className="row">
<div className="col-3"></div>
<div className=" col-md-6 col-sm-12"> 
<div className=" filter-row">
    <div className="filter-col">
    <span className='bold'>المكان</span><br></br>
    <span className='gray-text'>البحث عن وجهات</span>
</div>
<div className="vertical-line"></div>
<div className="filter-col">
    
    <span className='bold'>النوع</span><br></br>
    <span className='gray-text'>اختر من التصنيفات</span>
</div>
<div className="vertical-line"></div>

<div className='filter-col'>
    <span className='bold'>تسجيل الوصول</span><br></br>
    <span className='gray-text'>اضافة تاريخ</span>
</div>
<div className="vertical-line"></div>

<div className="filter-col">
    <span className='bold'>تسجيل المغادرة</span><br></br>
    <span className='gray-text'>اضافة تاريخ</span>
</div>
<div className="vertical-line"></div>

<div className="filter-col">
    <span className='bold'>من</span><br></br>
    <span className='gray-text'>إضافة الضيوف</span>
</div>

<div className='search-btn'>
<FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "white",}} />
</div>
</div>
</div>
<div className="col-md-3 col-sm-6 map-btn"> 
<button className='btn bg-purple clr-white'>
    <span className='pl-10'>
    عرض الخريطة</span>
    <FontAwesomeIcon icon={faMap} style={{color: "white",}} />
    </button></div>
</div>
</div>
  );
}

export default Filter;