 type ValidationErrors = {
	message?: string;
	email?: string;
	contactNumber?: string;
	complaintID?: string;
    name?: string;
};
export function validateForm(values: Partial<ValidationErrors>): ValidationErrors {
	const errors: ValidationErrors = {};

	if ('message' in values && values.message) {
		if (values.message.trim().length < 15 || values.message.trim().length > 5000) {
			errors.message = 'Message must be between 15 and 5000 characters.';
		}
	}

	if ('email' in values && values.email) {
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
			errors.email = 'Invalid email format.';
		}
	}

	if ('contactNumber' in values && values.contactNumber) {
		if (!/^[+\d\s\-()]{7,15}$/.test(values.contactNumber)) {
			errors.contactNumber = 'Invalid contact number.';
		}
	}

	if ('complaintID' in values && values.complaintID) {
		if (!values.complaintID.trim()) {
			errors.complaintID = 'Complaint ID is required.';
		} 
		
		if (!/^\d+$/.test(values.complaintID)) {
			errors.complaintID = 'Complaint ID must be a number.';
		}
	}
	if ('name' in values && values.name) {
		if (/\d/.test(values.name)) {
			errors.name = 'Name cannot contain numbers.';
		}
	
		if (values.name.trim().length < 2 || values.name.trim().length > 100) {
			errors.name = 'Name must be between 2 and 100 characters.';
		}
	}
	
	return errors;
}
