function Tabela(props){
    return(
        <div>
            <h2>Tabela de Cachaças</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>nome</th>
                    <th>origem</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.nome}</td>
                    <td>{props.origem}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
export default Tabela