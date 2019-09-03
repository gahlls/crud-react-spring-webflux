import React from 'react'

export default props => (
    <table className="table mt-4">
        <thead>
            <tr>
                <th>Nme</th>
                <th>Sobrenome</th>
                <th>Email</th>
                <th>Data de nascimento</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {props.renderRows}
        </tbody>
    </table>
)