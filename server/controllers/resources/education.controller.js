const ClientModel = require("../../models/users/client.user");
const logger = require("../../middlewares/utils/logger");
const config = require("../../middlewares/helpers/enums/config.enum");
const {databaseError} = require("../../middlewares/helpers/responses/database.response");


const EducationController = {
	updateUserEducation: (id, newEducation) => {
		ClientModel.findOneAndUpdate({_id: id}, {$push: {educations: newEducation}}, {new: true}, async (err, data) => {
			if (err) {
				const response = databaseError(err);
				logger.error(response);
			} else {
				const response = updateUserSuccess(data, config.CLIENT);
				logger.info(response);
			}
		});
	},
}
module.exports = EducationController;