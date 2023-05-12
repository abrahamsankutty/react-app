
import { useState } from 'react';



export default function Forms() {
  const [formData, setFormData] = useState({
    firstName:"", 
    lastName:"", 
    comment:"",
    isFriendly: true,
    employment: "",
    favColor:""
  });
 
  function handleChange(event: any){ 
    const {name, value, type, checked} = event.target;
    setFormData(prevFormData => {
      console.log(checked);
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked: value
      }
      
      
    });

  }

  function handleSubmit(event: any){
    event.preventDefault();
    console.log(formData);
  }



  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='First Name' onChange={handleChange} name='firstName' value={formData.firstName} />
        <br />
        <input type="text" placeholder='Last Name' onChange={handleChange} name='lastName' value={formData.lastName}/>
        <br />
        <textarea placeholder='Comment' onChange={handleChange} name='comment' value={formData.comment} />
        <br />
        <input type='checkbox' id='isFriendly' onChange={handleChange} checked={formData.isFriendly} name="isFriendly" />
        <label htmlFor='isFriendly'>Are you friendly?</label>
        <br />
        <fieldset>
          <legend>  Current employment status</legend>
          <input type="radio" onChange={handleChange} name="employment" id="unemployed" value="unemployed" checked={formData.employment === "unemployed"} />
          <label htmlFor="unemployed">Unemployed</label>
          <input type="radio" onChange={handleChange} name="employment" id="part-time" value="part-time" checked={formData.employment === "part-time"} />
          <label htmlFor="part-time">Part-time</label>
          <input type="radio" onChange={handleChange} name="employment" id="full-time" value="full-time" checked={formData.employment === "full-time"} />
          <label htmlFor="full-time">Full-time</label>
        </fieldset>
        <br />
        <label htmlFor="favColor">Whats your favorite color ?</label>
        <select name="favColor" id="favColor" value={formData.favColor} onChange={handleChange}>
          <option value="">Choose</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
        </select>
        <br />
        <button>Submit</button>
      </form>

      <pre>
        
      {
      JSON.stringify(formData)
      }
      </pre>
    </div>
  );
}


