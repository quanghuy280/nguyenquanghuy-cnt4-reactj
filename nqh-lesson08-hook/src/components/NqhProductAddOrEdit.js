import React,{useState} from 'react'

export default function NqhProductAddOrEdit(NqhOnSubmit) {
    const [nqh_productId, setnqh_productId] = useState('')
    const [nqh_productName, setnqh_productName] = useState('')
    const [nqh_quantity, setnqh_quantity] = useState('')
    const [nqh_price, setnqh_price] = useState('')

    const NqhHandleSummit = (nqhEvent )=>{
        nqhEvent.preventDefault();
        let nqhProduct = {
            nqh_productId:nqh_productId,
            nqh_productName:nqh_productName,
            nqh_quantity:nqh_quantity,
            nqh_price:nqh_price,

        }
         NqhOnSubmit(nqhProduct)
    }
    return (
        <div className='col-md-6'>
        <h2>Thêm mới sản phẩm / Sửa đổi</h2>
        <hr/>
        <form>
            <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Mã sản phẩm</span>
                <input type="text" className="form-control" placeholder="Mã sản phẩm"
                name= 'nqh_productId' value= {nqh_productId}
                onChange={(ev) => setnqh_productId(ev.target.value)}
                aria-describedby="basic-addon1" />
        </div>
            <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Tên sản phẩm</span>
                <input type="text" className="form-control" placeholder="Tên sản phẩm"
                name= 'nqh_productName' value= {nqh_productName}
                onChange={(ev) => setnqh_productName(ev.target.value)}
                    aria-describedby="basic-addon2" />
        </div>
            <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Số lượng sản phẩm </span> 
                <input type="number" className="form-control" placeholder="Số lượng sản phẩm"
                name= 'nqh_quantity' value= {nqh_quantity}
                onChange={(ev) => setnqh_quantity(ev.target.value)}
                aria-describedby="basic-addon3" />
        </div>
            <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon4">Số lượng sản phẩm </span> 
                <input type="number" className="form-control" placeholder="Đơn giá "
                name= 'nqh_price' value= {nqh_price}
                onChange={(ev) => setnqh_price(ev.target.value)}
                aria-describedby="basic-addon4" />
        </div>
        <button className ='btn btn-primary'name='nqhBtnAction'
        onClick={NqhHandleSummit}
        > 
            Thêm mới
        </button>
        </form>
        </div>
  )
}