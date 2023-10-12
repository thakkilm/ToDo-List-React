const person={
    names:"Mahesh",
    address:{
        line1:"One",
        line2:'Two'
    },
    profiles:["LinkedIN","Java","Spring"],
    printProfile:()=>{
        person.profiles.map(profile=>console.log(profile))
    }
}

export default function LearningJavaScript(){
    return(
        <>
            <div>{person.names}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>


        </>
    );
}