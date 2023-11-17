import Cachaca from "./bebidas/cachacas"
export default function Principal() {

   return (

      <div>

         <h1>Nova Página</h1>

         <MariaPrea />
         <Cachaca />
         <div>
            <a href="../"><button>voltar</button></a>
         </div>
      </div>

   )

}
export function MariaPrea() {

   return (

      <h2>Morreu Maria Preá...</h2>

   )

}