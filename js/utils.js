
//var counter = 0;
function generateId() {
	//counter++;
  //  this.name = counter;
	return String(Date.now())+Math.floor(Math.random()*10000);
	//return String(Date.now())+String(counter);
}
