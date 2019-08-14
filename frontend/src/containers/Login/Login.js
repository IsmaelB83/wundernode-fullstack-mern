/* Import node modules */
import React from 'react';
import { connect } from 'react-redux';
/* Import own modules */
import { actions } from '../../store/Store';
/* Import css */
import './Styles.css';


class LoginAux extends React.Component {
    
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div class="alert alert-info small text-center" role="alert">
                    This site uses cookies for manage user session. By continuing to browse this site, you agree to this use.
                </div>
                <img class='logo' src={`${process.env.PUBLIC_URL}/img/wl_icon.png`} alt='icon'></img>
                <div className="login-wrapper">
                    <form class='login' action="/users/login" method='POST'>
                        <div class="form-group">
                            <input type="email" name="email" class="form-control" id="email" placeholder="Correo electrónico"></input>
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" class="form-control" id="password" placeholder="Contraseña"></input>
                        </div>
                        <button type="submit" class="btn btn-block btn-primary">Iniciar Sesión</button>
                        <div class="mt-2">
                            <a href="/reset" class=''>¿Has olvidado tu contraseña?</a>
                        </div>
                    </form>
                </div>
                <div class="mt-2 text-center">
                    ¿No tienes cuenta? <a href="/new" class=''>Crear cuenta</a>
                </div>
            </div>
        );
    }
}

// React-Redux
const mapState = (state) => { 
    return { 
        lists: state.lists,
    };
};
const mapActions = {
    init: actions.init,
    loadList: actions.loadList
}

const Login = connect(mapState, mapActions)(LoginAux);
export default Login;