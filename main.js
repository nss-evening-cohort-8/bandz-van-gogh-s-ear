console.log("I am linked");

const printToDom = (divId, stringToPrint) => {
    let divhook = document.getElementById(divId);
    if (divhook !==null) {
        divhook.innerHTML = stringToPrint;
    }
};

// printToDom('band-name', 'Print to Dom function works');

// Begin Band Bios
const bandMembers = [{
	name:"Dylan", "Colin", "Charles", "Marshall",
	instrument:"Harmonica", "Drums", "Bass", "Saxaphone",
	bio:"<p>bio0</p>", "<p>bio1</p>", "<p>bio2</p>", "<p>bio3</p>",
	img:"image0", "image1", "image2", "image3"
}];
const bandMemberStringBuilder = () => {
	let newString = '';
	for(let i=0; i<bandMembers.length; i++) { 
    console.log ("hello");
    newString += `<div class = "band-members">`;
	newString +=	`<img>${bandMembers[i].img}</img>`;
	newString +=	`<h3>${bandMembers[i].name}</h3>`;
	newString +=	`<p>${bandMembers[i].bio}</p>`;
    newString += `</div>`;
    
}	
	printToDom(newString, "band-members");
};
bandMemberStringBuilder();

// End Band Bios