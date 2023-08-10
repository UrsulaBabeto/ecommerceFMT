import './TotalCart.css'

const TotalCart = ({ total }) => {

  return (
    <div className="card m-4 marginTotal" style={{maxHeight: '300px', minWidth: '300px'}}>
      <div className="card-body">
        <h5 className="card-title">Resumo da Compra</h5>
        <p className="card-text mb-5">Total: R$ {total.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        <button className="btn btn-primary w-80 mb-3" style={{width: '85%'}}>Continuar Comprando</button>
        <button className="btn btn-primary w-80" style={{width: '85%'}}>Finalizar Compra</button>
      </div>
    </div>
  )
}

export default TotalCart;