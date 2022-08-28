
import { Link } from "react-router-dom";
import React, { useEffect } from 'react'
import { useState } from 'react'
import "./ModuleData.css"
import axios from "axios"


const CarPage = () => {
    const [brand,setBrand]=useState("")
    const [year,setYear]=useState("")
    const [description,setDescription]=useState("")
    const [price,setPrice]=useState("")
    const [img,setImage]=useState("")
    const [state,setState]=useState("")

    const bike={
        "brand":brand,
        "year":year,
        "description":description,
        "price":price,
        "img":img,
        "state":state
    }
    // useEffect(()=>{
 
    // },[])

    const funSubmit=()=>{
        axios.post("http://localhost:8080/cars",bike)
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
         
        alert("your advertisement is published")
    }
  return (
    <div>
            <form >
      <h1 className='mobile_div1_title'>Post Your Ad</h1>
      <div className='mobile_div1'>
          <p className='mobile_div1_innerTitle'>SELECTED 
          CATEGORY</p>
          <div style={{display:"flex",padding:"2%"}}>
          <p className='mobile_div1_innerTitle2'> Mobile /     Mobile phones</p>
          <Link className="mobile_div1_link1 "  to="/adddata">Change</Link>
          </div>
          <hr />
       
          <p className='mobile_div_body_title'>INCLUDE SOME DETAILS</p>
          <p className='mobile_div_body_label'>Brand *</p>
          <br />
          <select className='mobile_div_select_tag' >
            <option value=""></option>
            <option value="">Maruti Suzuki</option>
            <option value="">Hyundai</option>
            <option value="">Tata</option>
            <option value="">Honda</option>
            <option value="">Audi</option>
            <option value="">BMW</option>
            <option value="">Kia</option>
            <option value="">Toyoto</option>
            <option value="">Mahindra</option>
            <option value="">Nexa</option>
            <option value="">Renault</option>
            <option value="">Ashok LeyLand</option>
            <option value="">Astin Martin</option>
            <option value="">Bentlay</option>
            <option value="">Bajaj</option>
          </select>
         
         <br />
         <br />
           
          <p className='mobile_div_body_ad_Title'>Year *</p>
          <input type="text" maxLength={"70"} required className='mobile_div_input_tag' />
          <br />
   
          <br/>

          <p className='mobile_div_body_description'>Description *</p>
          <br />
          {/* <input type="area" required maxLength="4000" className='mobile_div_input_tag_description' /> */}
          <textarea maxLength="2000" className='mobile_div_input_tag_description' rows="4" cols="50">

          </textarea>
          <br />
          <br />
          <hr />
          <p className='mobile_div1_innerTitle_set_A_price'>SET A PRICE</p>
          <p className='mobile_div_body_price'>price *</p>
          <input type="number" placeholder="" className='mobile_div_input_price' />
     
          <br />
          <br />
          <hr />

          <p className='mobile_div1_innerTitle_set_A_price'>UPLOAD UP TO 12 PHOTOS</p>
          <div>
          <input className='mobile_div_image_pistioning' type="file" accept="image/*" multiple />
          
            <img className='mobile_div_relative_img'  src="data:image/jpg;base64,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NI+5pH4o/JxbwlwiStG4Na+a/da4ClAmaQB307ngEj7mI+3Fip3TSA0HEctANHh4kRn/AKlB0HQGTloMB5OiECBhbimNGGkmh/Im+SeQXvLSSCTE1/tppIxEcFjf7isb/cVjf7isb/cVjf7isb/cU4kF8e5YncSsTuJWJ3ErE7iVidxKa50jM1UkNEH1KxO4lYncSsTuJWJ3ErE7iUCSamhRJAbB9FidxKxO4lYncSsTuJWJ3EqSQ6T6eaFHW/esNc6glERkdbqv/ltN8Qut0XO02vQo0bbaFHW80KOt+9QqLo5z+Mw6IC0hycDEgjW6r/5agJMINCIjU3xC63Rc6gJWEIiNTa9CjRttQErCERGoUdbzQo6371/dPtErGMJbhGZ1uq/+WptQgKT6IzE6m+IXW6LnU2vRc+ARBgTqbXoUaNtqbQo+p4pwM56hR1vNCjrftEEiAY5oECSBH4kDsQpbIiga4dzkiZER6ZXkqRPLP/s6nVf/AC2m+IXW6LnabXoUaNttCjreaFHW/e26r/5bTfELrdFztNr0KNG22hR1vNN9REyFA9jlA9jlA9jlA9jlA9jlA9jlMl34nMyo+DlHwco+DlHwco+DkBBnAUMx4SVHwco+DlHwco+DlHwcojdKqB+JUfByj4OUfByj4OUfByiAfxPmhR1tt29fabUXW6LnabXoUaNttCjreaFHW23b19pviF1ui52m16FGjbbQo63mhR1tcC6IFRrdvX1ASYQAyylERQ6m+IXW6LnUBJUDgiIjU2vQo0bbUBKgcERB1CjreaFHW15epCOYJnW7evqbULLLMZI0BnU3xC63Rc6m1WVZEo0GeptehRo22oeqMZmRJTq11CjreaFHW23b19pviF1ui52m16FGjbbQo63mhR1tt29fab4hdboudptehRo220KOt5pvqug7roO66Duug7roO66Dus85Aqug7roO66Duug7roO6FRDW90KUC6Duug7roO66Duug7qwHdZwJAXQd10HddB3XQd10HdGhyHmhR1tt29fab4hdboudptehRo220KOt5oUdbbdvX2m+IXW6LnabXoUaNttCjreaFHW1wB39U4DM63b19QEkBCMv2iBUam+IXW6LnUACVkiAIjU2vQo0bbUADMoxnREQdQo63mhR1tctWRBM63b19QMEFSB6oxFdTfELrdFzqFVIj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" 
            alt="" />
          </div>
          <br />
     
          <hr />

          <p className='mobile_div1_innerTitle_set_A_price'>CONFIRM YOUR LOCATION</p>

       
          <div style={{display:"flex"}}>
          <button className='mobile_div_button'>List</button>
          <button className='mobile_div_button2'>Current Location</button>
          </div>
          <br />
          <br />

   


          <p className='mobile_div_body_price'>State *</p>
          <select name="state"  className='mobile_div_select_tag'>
            <option value=""></option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
          </select>

          <br />
          <br />
          <hr />
         
          <p className='mobile_div1_innerTitle_set_A_price'>REVIEW YOUR DETAILS</p>
        <Link to={"/"}><button  className='mobile_div_button_post'  >Post Now</button></Link>
          <br />
          <br />
          
       
          
      </div>
  </form>
    </div>
  )
}

export default CarPage
