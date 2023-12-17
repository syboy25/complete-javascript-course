const day = 'monday';

switch(day){
    case 'monday': //day === monday
        console.log('I plan to train'); //Execute Code if it is true
        console.log('Go train!')
        break; // //stops code once it is TRUE

    case 'tuesday': //Else Execute this code
        console.log('Train harder')
        break; //stops code once it is TRUE

    case 'wednesday': //Else Execute this code
    case 'thursday': //Else Execute this code
        console.log('You better not slack off');
        break;

    case 'friday':
        console.log('You having a breakthrough!');
        break

    case 'saturday':
    case 'sunday':
        console.log('You can rest and prepare for next week');
        break;

    default: //If nothing works then execute default 
        console.log('Not good training week');
}

