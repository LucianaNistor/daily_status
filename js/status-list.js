
function StatusList() {
	this.statuses = [];
}


// ADD NEW STATUS
StatusList.prototype.addStatus = function (status) {
	this.statuses.push(status);
};

// MODIFY STATUS
StatusList.prototype.modifyStatus = function (statusId, newData) {

	for (var i = 0; i < this.statuses.length; i++) {
		if (this.statuses[i].id == statusId) {

			var modifiable = this.statuses[i];

			for (var prop in newData) {

				if (modifiable.hasOwnProperty(prop)) {

					modifiable[prop] = newData[prop];
				}
			}

			return true;
		}
	}

	return false;
};


// REMOVE STATUS FROM STATUS LIST
StatusList.prototype.removeFromStatusList = function (statusId) {

	for (var i = 0; i < this.statuses.length; i++) {
		if (this.statuses[i].id == statusId) {
			this.statuses.splice(i, 1);
			return true;
		}
	}

	return false;
};


//GENERATE DAILY STATUS SUMMARY
StatusList.prototype.dayStatusSummary = function (devList, projectsList, dateString) {

	var dateTimeStamp = null,
			milliSecondsInADay = 86400000;    // 24 * 66 * 60 * 10000

	if (dateString == null) {
		dateTimeStamp = new Date().setHours(0, 0, 0, 0);
	} else {
		dateTimeStamp = Date.parse(dateString).setHours(0, 0, 0, 0);
	}

	for (var i = 0; i < this.statuses.length; i++) {
		if (Math.abs(this.statuses[i].date - dateTimeStamp) <= milliSecondsInADay) {

			var dev = devList.getById(this.statuses[i].developer);
			var proj = projectsList.getById(this.statuses[i].project);

			 console.log('Developer ' + dev.name + ', working on ' + proj.name + ', has the status update: "' + this.statuses[i].status + '"');
		}
	}
};


// GENERATE STATUSESS FOR A CERTAIN PROJECT FOR A CERTAIN PERIOD
StatusList.prototype.projectStatusInPeriod = function (devList, projectsList, projectId, periodStart, periodEnd) {

	var periodStartTimestamp = Date.parse(periodStart);
	var periodEndTimestamp = Date.parse(periodEnd);

	if (isNaN(periodStartTimestamp)) {
		console.log('Could not parse period start date');
		return;
	}

	if (isNaN(periodEndTimestamp)) {
		console.log('Could not parse period end date');
		return;
	}

	 var proj = projectsList.getById(projectId);
	 var foundStatus = false;

	if (projectId === false) {

		return false;
	}


	for (var i = 0; i < this.statuses.length; i++) {

			var proj = projectsList.getById(this.statuses[i].project);

		if (
			this.statuses[i].project == projectId
			&&
			(this.statuses[i].date >= periodStartTimestamp && this.statuses[i].date <= periodEndTimestamp)
		) {

			var dev = devList.getById(this.statuses[i].developer);

			foundStatus = true;

			console.log('Update from developer ' + dev.name + ': "' + this.statuses[i].status + '"');
		}
	}

	if (!foundStatus) {
		console.log('no status updates from period');
	}
};

// GENERATE STATUSES OF A TEAM MEMBER ON ALL PROJECTS
StatusList.prototype.developerStatus = function (devList, projectsList, devId) {

	var startingFrom = new Date().setHours(0, 0, 0, 0);
	var dev = devList.getById(devId);

	// console.log('Latest developer status for ' + dev.name);

	for (var i = 0; i < this.statuses.length; i++) {

		if (this.statuses[i].date >= startingFrom && this.statuses[i].developer === devId) {
	
			var proj = projectsList.getById(this.statuses[i].project);

			console.log('Project ' + proj.name);
			console.log('"' + this.statuses[i].status + '"');
		}
	}
};
