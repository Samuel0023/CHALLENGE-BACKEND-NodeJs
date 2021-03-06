const bcryptjs = require('bcryptjs');
const { generateJWT } = require('./auth.token.js');
class Login {
    user;

    constructor(mail, password) {
        this.mail = mail;
        this.password = password;
    }

    setUser(user) {
        this.user = user;
    }

    async validateUser(res) {
        if (!this.user) {
            return res.status(400).json({
                msg: 'user not found'
            });
        }
        if (!this.validatePassword()) {
            return res.status(400).json({
                msg: 'incorrect password'
            });

        }
        const token = await generateJWT(this.user.getDataValue('id_user'));
        let user = this.user;

        return res.json({
            user,
            token
        });
    }
    validatePassword() {
        return bcryptjs.compareSync(this.password, this.user.password);
    }
}

module.exports = Login;