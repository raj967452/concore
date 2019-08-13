import React from 'react';

class Footer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email : ""
       }
    }
    
    onSubmit(e) {
        const input = this.state;
        fetch("https://flowcore.concore.io/rh/test/react1", {
            method: 'POST',  
            body: JSON.stringify(input),  
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
        e.preventDefault(); 
    };
    
    checkRequiredString(value) {
        return value != null && value.toString().trim().length > 0;
    }
      

  render() {
    const validated = 
    this.checkRequiredString(this.state.name) &&
    this.checkRequiredString(this.state.email);

    return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-3 text-center">
                    <img src="https://i.ibb.co/TwmbBYF/logo-footer.png" alt="Logo Concore" />
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/concore.io/" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.ibb.co/jr84Tb7/facebook.png" alt="Facebook Concore" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/concore.io/" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.ibb.co/FbXYT8S/linkedin.png" alt="Linkedin Concore" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/concore.oficial/" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.ibb.co/hdV4yHx/instagram.png" alt="Instagram Concore" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 offset-md-1">
                    <h5>Assine nossa newsletter</h5>

                    <form className="form-style">
                        <div className="form-group">
                            <input required type="text" placeholder="Nome:" className="form-control" 
                              onChange={e =>
                                this.setState({ name: e.target.value })
                              }/>
                        </div>
                        <div className="form-group">
                            <input required type="text" placeholder="E-mail:" className="form-control" 
                            onChange={e =>
                                this.setState({ email: e.target.value })
                              }/>/>
                        </div>
                        <div className="button-area">
                            <button type="submit" 
                            disabled={validated !== true}
                             onClick={e => this.onSubmit(e)} >Enviar</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-4 text-center-mobile">
                    <h5>Contatos</h5>
                    <p><a href="mailto:">contato@concore.io</a></p>
                    <p>Alameda Franca, 243 Bela Vista SP</p>
                </div>
            </div>
        </div>
        <hr />
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <p className="creditos">Copyright © 2019 Concore. Todos os direitos reservados. </p>
                </div>
            </div>
        </div>
        </footer>
    )}
};
export default Footer;