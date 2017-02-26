
function ProjectList() {
	this.projects = [];
}


// ADD NEW PROJECT
ProjectList.prototype.addProject = function (project) {
	this.projects.push(project);
};

// REMOVE PROJECT FROM PROJECT LIST
ProjectList.prototype.removeFromProjectList = function (projectId) {

	for (var i = 0; i < this.projects.length; i++) {
		if (this.projects[i].id == projectId) {
			this.projects.splice(i, 1);
			return true;
		}
	}

	return false;
};

//GET PROJECT BY ID
ProjectList.prototype.getById = function (projectId) {
	for (var i = 0; i < this.projects.length; i++) {
		if (this.projects[i].id == projectId) {

			return this.projects[i];
		}
	}

	return false;
};
