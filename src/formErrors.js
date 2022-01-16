import React from 'react';

export const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        let name = fieldName
        if (name === 'utcOffset') { name = 'UTC Offset'; }
        
        return (
          <p key={i}>{name.charAt(0).toUpperCase() + name.slice(1)} {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>
  