import Tabela from "./tabela"
function Cachaca() {
    let nome = '1 – Vale Verde 12 anos'
    let origem = 'Betim (MG)'
    return (
        <div>
            <h2>lista de Cachaças</h2>
            <li>1 – Vale Verde 12 anos</li>
            <li>2 – Magnífica Reserva Soleira</li>
            <li>3 – Companheira Extra Premium</li>
            <li>4 – Sebastiana Carvalho</li>
            <li>5 – Weber Haus Extra Premium Lt. 48 </li>
            <li>6 – Weber Haus Amburana   </li>
            <li>7 – Casa Bucco Envelhecida</li>
            <li>8 – Leandro Batista</li>
            <li>9 – Middas Reserva</li>
            <li>10 – Canarinha</li>
            <div>
                <Tabela nome = {nome}  origem = {origem} />
            </div>
        </div>
    )
}
export default Cachaca