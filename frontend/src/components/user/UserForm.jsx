import './UserForm.css'
import React from 'react'

export default props => (
    <div className="form">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Nome*</label>
                    <span className="erro"> {props.errors.name}</span>
                    <input type="text" className="form-control"
                        name="name"
                        value={props.user.name}
                        onChange={props.updateField}
                        placeholder="Digite o nome..." />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Sobrenome*</label>
                    <span className="erro"> {props.errors.lastName}</span>
                    <input type="text" className="form-control"
                        name="lastName"
                        value={props.user.lastName}
                        onChange={props.updateField}
                        placeholder="Digite o sobrenome..." />
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Data de nascimento*</label>
                    <br />
                    <span className="erro"> {props.errors.dateBorn}</span>
                    <input type="text" className="form-control"
                        name="dateBorn"
                        value={props.user.dateBorn}
                        onChange={props.updateField}
                        placeholder="dd/mm/aaaa" />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Sexo*</label>
                    <span className="erro"> {props.errors.genre}</span>
                    <select class="form-control" name="genre" onChange={props.updateField} value={props.user.genre}>
                        <option value="">Selecione o sexo</option>
                        <option value="MASCULINO">Masculino</option>
                        <option value="FEMININO">Feminino</option>
                        <option value="NENHUM">Nenhum</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Email*</label>
                    <span className="erro"> {props.errors.email}</span>
                    <input type="text" className="form-control"
                        name="email"
                        value={props.user.email}
                        onChange={props.updateField}
                        placeholder="Digite o email..." />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Confirmar email*</label>
                    <span className="erro"> {props.errors.confirmEmail}</span>
                    <input type="text" className="form-control"
                        name="confirmEmail"
                        value={props.user.confirmEmail}
                        onChange={props.updateField}
                        placeholder="Confirma o email..." />
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Senha*</label>
                    <span className="erro"> {props.errors.password}</span>
                    <input type="password" className="form-control"
                        name="password"
                        value={props.user.password}
                        onChange={props.updateField}
                        placeholder="Digite a senha..." />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Confirmar senha*</label>
                    <span className="erro"> {props.errors.confirmPassword}</span>
                    <input type="password" className="form-control"
                        name="confirmPassword"
                        value={props.user.confirmPassword}
                        onChange={props.updateField}
                        placeholder="Confirma a senha..." />
                </div>
            </div>
        </div>

        <hr />
        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-primary" disabled={!props.validForm}
                    onClick={props.save}>
                    Salvar
                </button>

                <button className="btn btn-secondary ml-2"
                    onClick={props.clear}>
                    Cancelar
                </button>
            </div>
        </div>
    </div>
) 

