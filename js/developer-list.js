
function DeveloperList() {
	this.developers = [];
}



// ADD NEW DEVELOPER
DeveloperList.prototype.addDeveloper = function (developer) {
	this.developers.push(developer);
};

// REMOVE DEVELOPER FROM DEVELOPER LIST
DeveloperList.prototype.removeFromDeveloperList = function (developerId) {

	for (var i = 0; i < this.developers.length; i++) {
		if (this.developers[i].id == developerId) {
			this.developers.splice(i, 1);
			return true;
		}
	}

	return false;
};

// GET DEVELOPER ID
DeveloperList.prototype.getById = function (developerId) {
	for (var i = 0; i < this.developers.length; i++) {
		if (this.developers[i].id == developerId) {
			return this.developers[i];
		}
	}

	return false;
};
