(function () {
    // import
    const Button = window.Button;
    const View = window.View;
	const loginView = window.loginView;
    //const AboutTeamView = window.AboutTeamView;
//lalala
    class mainView extends View {
        constructor(options = {}){
            super(options);
            this._el = document.querySelector('.main_container_view');
            this.createElements();
            this.addElements();
            this.addListeners();
            this.hide();
        }

        createElements() {
            this.buttonLogin = new Button({
                el: document.createElement('button'),
                //classAttrs: ['ui', 'button', 'login', 'pink'],
				classAttrs: ['pink'],
                text: 'Логин',
            });

            this.buttonRegister = new Button({
                el: document.createElement('button'),
                //classAttrs: ['ui', 'button', 'register', 'pink'],
				classAttrs: ['pink'],
                text: 'Регистрация',
            });
        }

        addElements() {

			//console.log(this.buttons._get());
            //this._el.appendChild(this.buttons._get());
			//this.buttons._el.appendChild(this.buttonLogin._get());
            //this.buttons._el.appendChild(this.buttonRegister._get());
			this._el.appendChild(this.buttonLogin._get());
			this._el.appendChild(this.buttonRegister._get());
        }

        addListeners() {
            this.buttonLogin._get().addEventListener('click', (event) => {
                console.log('click login');
                this.router.go('/login', loginView);
            });
            this.buttonRegister._get().addEventListener('click', (event) => {
                console.log('click register');
                this.router.go('/register');
            });
        }
    }

    window.mainView = mainView;
}());
