import './styles.css'

const Product = () => {
  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img
            src="data:image/jpeg;base64,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"
            alt="Produtos"
            className="img-fluid"
          />
        </div>

        <div className="col-6">
          <h6>
            <label className="badge badge-primary">R$ 30,00</label>
          </h6>

          <small>
            <b>Ração Seca Pedigree para Cães Adultos Raças Pequenas</b>
          </small>
        </div>

        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  )
}

export default Product