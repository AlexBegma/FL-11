let emailName = prompt('Enter your e-mail:', 'email@gmail.com');

let emailNameLength = 6;
let newPasswordLength = 5;

if (emailName === null || emailName.length === 0) {
	alert('Canceled.');
} else if (emailName.length < emailNameLength) {
	alert('I don\'t know any emails having name length less than 6 symbols');
} else if (emailName !== 'user@gmail.com' && emailName !== 'admin@gmail.com') {
	alert('I don’t know you');
} else {
	let password = prompt('Enter password');
	if (password === null || password.length === 0) {
		alert('Canceled.');
	} else if (emailName === 'user@gmail.com' && password !== 'UserPass') {
		alert('Wrong password');
	} else if (emailName === 'admin@gmail.com' && password !== 'AdminPass') {
		alert('Wrong password');
	} else {
		let wantToChange = confirm('Do you want to change your password?');
		if (wantToChange === false) {
			alert('You have failed the change.');
		} else {
			let oldPassword = prompt('Write the old password');
			if (oldPassword === null || oldPassword.length === 0) {
				alert('Canceled.');
			} else if (oldPassword !== password) {
				alert('Wrong password');
			} else {
				let newPassword = prompt('Enter a new password');
				if (newPassword === null || newPassword.length === 0) {
					alert('Canceled.');
				} else if (newPassword.length < newPasswordLength) {
					alert('It’s too short password. Sorry.');
				} else {
					let confirmPass = prompt('Confirm the password');
					if (confirmPass === null || confirmPass.length === 0) {
						alert('Canceled.')
					} else if (confirmPass !== newPassword) {
						alert('You wrote the wrong password.');
					} else {
						alert('You have successfully changed your password.');
					}
				}
			}
		}
	}
}