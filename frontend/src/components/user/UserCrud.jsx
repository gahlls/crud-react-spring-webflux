import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'
import UserForm from './UserForm'
import UserTable from './UserTable'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários'
}

const baseUrl = 'http://localhost:8080/user'

const initialState = {
    user: { 
        id: '',
        name: '', 
        lastName: '',
        dateBorn: '',
        genre: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
    },
    errors: {
        name: '',
        lastName: '',
        dateBorn: '',
        genre: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
    },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user =  this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }

    updateField(event) {
    
        const user = { ...this.state.user }
        let errors = { ...this.state.errors }
        user[event.target.name] = event.target.value

        switch (event.target.name) {
            case 'name':
                errors.name = event.target.value.length >= 3 ? '' : 'Precisa ter mais de 2 caracteres' 
                break;
            case 'lastName':
                errors.lastName = event.target.value.length >= 3 ? '' : 'Precisa ter mais de 2 caracteres' 
                break;
            case 'dateBorn':
                errors.dateBorn = event.target.value.length === 10 ?  '' : 'Data de nascimento é inválido'
                break;
            case 'genre': 
                errors.genre = event.target.value === '' ? 'Selecione um sexo' : ''
                break;
            case 'email': 
                errors.email = event.target.value.includes('@') ? '' : 'O email é inválido'
                errors.confirmEmail = user.email === user.confirmEmail ? '' : 'O email está diferente'
                break;
            case 'confirmEmail':
                errors.confirmEmail = user.email === user.confirmEmail ? '' : 'O email está diferente'
                break;
            case 'password':
                errors.password = event.target.value >= 6 ? '' : 'A senha precisa ter 6 caracteres ou mais'
                errors.confirmPassword = user.password === user.confirmPassword ? '' : 'A senha está diferente'
                break;
            case 'confirmPassword': 
                errors.confirmPassword = user.password === user.confirmPassword ? '' : 'A senha está diferente'
            default:
                break;
        }

        this.setState({ user, errors })
    }

    load(user) {
        this.setState({ user, errors: {} })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.dateBorn}</td>
                    <td>
                        <button className="btn btn-warning" 
                            onClick={() => this.load({...user})}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {

        const validations = []
        validations.push(this.state.user.name && this.state.user.name.length >= 3)
        validations.push(this.state.user.lastName && this.state.user.lastName.length >= 3)
        validations.push(this.state.user.dateBorn && this.state.user.dateBorn.length === 10)
        validations.push(this.state.user.genre !== '')
        validations.push(this.state.user.email && this.state.user.email.includes('@'))
        validations.push(this.state.user.confirmEmail)
        validations.push(this.state.user.email === this.state.user.confirmEmail)
        validations.push(this.state.user.confirmPassword)
        validations.push(this.state.user.password === this.state.user.confirmPassword)
        validations.push(this.state.user.password && this.state.user.password.length >= 6)

        const validForm = validations.reduce((all, v) => all && v)
        
        return (
            <Main {...headerProps}>
                <UserForm 
                    validForm={validForm}
                    { ...this.state }
                    updateField={(e) => this.updateField(e)}
                    save={() => this.save()}
                    clear={() => this.clear()} 
                />
                <UserTable 
                    renderRows={this.renderRows()}
                />
            </Main>
        )
    }
}