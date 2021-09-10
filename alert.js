console.log('I am here');


//alert('Ma is coming!!');
const maComing = () => {
    alert('Ammu is coming. Open the book');
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('Amake fee ta bkash kore de');
    }
    else {
        console.log('DMG!! dure giya mor!!');
    }
}

const askName=()=>{
   const name= prompt('what is your name?');
   if(name){
    console.log(name);
   }
  
}