import React , {useState}from 'react'
import { createRoot } from 'react-dom/client';
import CheckBox from './src/component/CheckBox/CheckBox';
import { AppDiv } from './src/component/CheckBox/style';
function App() {
    const listofLable = [
    {value : "Jammu" , alreadyChecked : true , checked : false}, 
    {value : 'Kashmir' ,alreadyChecked : false , checked : false },
    {value : "Delhi",alreadyChecked : false , checked : false},
    {value : "Jaipur",alreadyChecked : false, checked : false},
    {value : "Udaipur",alreadyChecked : false , checked : false},
    {value : "Bangalore",alreadyChecked : false, checked : false},
    {value : "Goa",alreadyChecked : false,checked : false}

  ];  
   const [checkBoxState , setCheckedBoxState] = useState([
    {value : "Jammu" , alreadyChecked : true , checked : false}, 
    {value : 'Kashmir' ,alreadyChecked : false , checked : false },
    {value : "Delhi",alreadyChecked : false , checked : false},
    {value : "Jaipur",alreadyChecked : false, checked : false},
    {value : "Udaipur",alreadyChecked : false , checked : false},
    {value : "Bangalore",alreadyChecked : false, checked : false},
    {value : "Goa",alreadyChecked : false,checked : false}

  ]);
   const onChangeHandler = (e)=>{
     console.log(e,e.target.value);
     setCheckedBoxState(props => [...props , {value : e.target.name ,alreadyChecked : false , checked : e.target.checked}]);
   }
   console.log("updated list",listofLable);
  return (
    <AppDiv
    
    >

    {
        listofLable?.map((item)=>{
              return(
                <CheckBox
                  label = {item.value}
                  checked ={item.checked}
                  disabled={false}
                  alreadyChecked={item.alreadyChecked}
                  name={item.value}
                  onChangeHandler={onChangeHandler}
                />
              )
         })
    }  
    </AppDiv>   

  )
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App/>)