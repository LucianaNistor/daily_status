
function Status() {
	this.id = null;
	this.developer = null;
	this.project = null;
	this.status = null;
	this.date = null;
}

//CREATE STATUS
Status.prototype.createStatus = function(developerId, projectId, content) {
	this.id = generateId();
	this.developer = developerId;
	this.project = projectId;
	this.status = content;
	this.date = Date.now();
};
