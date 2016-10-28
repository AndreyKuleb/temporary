(function() {
	'use strict';

	const Button = window.Button;
	const View = window.View;
	const Form = window.Form;

	class loginView extends View {
		constructor(options = {}) {
			super(options);
			this._el = document.querySelector('.js-login');
			this.createElements();
			this.addElements();
			this.addListeners();
			this.hide();
		}

		createElements() {
			this.loginForm = new Form({
				el: document.createElement('div'),
				data: {
					title: 'AGRage',
					fields: [{
						name: 'login',
						type: 'text',
						placeholder: "Enter your login",
						maxlength: "25",
						minlength: "5",
						required: "required"
					}, {
						name: 'password',
						type: 'password',
						placeholder: "Enter your password",
						maxlength: "25",
						minlength: "5",
						required: "required"
					}],
					controls: [{
						text: 'Войти',
						attrs: {
							type: 'submit'
						}
					}]
				}
			});
		}

		addElements() {
			this._el.appendChild(this.loginForm._get());
		}

		addListeners() {
			this.loginForm._get().addEventListener('submit', event => {
				console.log('click login');
				this.router.go('/play_menu');
			});
			/*this.buttonRegister.el.addEventListener('click', (event) => {
				console.log('click register');
				this.router.go('/register');
			});
			document.querySelector('.menu_scoreboard').addEventListener('click', (event) => {
				console.log('click scoreboard');
				this.router.go('/scoreboard');
			});
			document.querySelector('.menu_play').addEventListener('click', (event) => {
				console.log('click play');
			});*/
		}
/*
		addListeners() {
			document.querySelector('.close_icon_login').addEventListener('click', (event) => {
				this.router.go('/');
			});
			this.formLogin.el.addEventListener('reset', (event) => {
				this.hideMess();
				this.resetFields();
			});
			this.formLogin.el.addEventListener('submit', (event) => { event.preventDefault(); this.submitLogin(); });
		}

		submitLogin() {
			this.hideMess();
			const empty = this.formLogin.tryEmptyField();
			if (empty.length !== 0) {
				const mess = this.createMess('error', 'Заполни пустые поля!', '');
				this.formLogin.el.appendChild(mess.el);
			} else {
				console.log('send request');
				// _sendRequest('/auth', formLogin.getFormData(), formLogin, 'login');
			}
		}

		createMess(status, header, text) {
			const newMess = new Message({
				el: document.createElement('div'),
				classAttrs: ['ui', status, 'message'],
			});
			const head = new Message({
				el: document.createElement('div'),
				classAttrs: ['header'],
				text: header,
			});
			const content = new Message({
				el: document.createElement('p'),
				text,
			});
			newMess.el.appendChild(head.el);
			newMess.el.appendChild(content.el);
			return newMess;
		}

		pause() {
			this.formLogin.el.close();
		}

		resume() {
			this.formLogin.el.showModal();
		}

		hideMess() {
			const messError = document.querySelector('div.error.message');
			const messSuccess = document.querySelector('div.success.message');
			if (messError != null) {
				messError.remove();
			}
			if (messSuccess != null) {
				messSuccess.remove();
			}
			return this;
		}

		resetFields() {
			const fieldsError = document.querySelectorAll('.field.error');
			if (fieldsError) {
				fieldsError.forEach((field) => { field.classList.remove('error'); });
			}
			return this;
		}*/
	}

	window.loginView = loginView;
}());
